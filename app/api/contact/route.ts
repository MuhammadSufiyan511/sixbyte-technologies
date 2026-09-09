import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  name: string
  email: string
  phone: string
  businessType: string
  message: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(payload: Partial<ContactPayload>) {
  if (!payload.name?.trim()) return 'Name is required.'
  if (!payload.email?.trim() || !emailRegex.test(payload.email)) return 'A valid email is required.'
  if (!payload.phone?.trim()) return 'Phone number is required.'
  if (!payload.businessType?.trim()) return 'Business type is required.'
  if (!payload.message?.trim() || payload.message.trim().length < 10) return 'Message must be at least 10 characters.'
  if (payload.message.length > 2000) return 'Message is too long.'
  return null
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<ContactPayload>
    const validationError = validate(payload)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || 'contact@sixbytetechnologies.com'
    let fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || 'SixByte Leads <contact@sixbytetechnologies.com>'

    // Remove wrapping quotes if present from env var
    fromEmail = fromEmail.replace(/^["']|["']$/g, '')

    // Ensure fallback if empty or invalid format
    if (!fromEmail || (!fromEmail.includes('@') && !fromEmail.includes('<'))) {
      fromEmail = 'SixByte Leads <contact@sixbytetechnologies.com>'
    }

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY environment variable is not configured. Please set RESEND_API_KEY in your .env.local file.' },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)
    const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' })

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject: `⚡ New Lead: ${payload.name} (${payload.businessType})`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 24px; }
              .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .header { background: #0E1A2E; color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #0F766E; }
              .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
              .header p { margin: 6px 0 0 0; color: #94a3b8; font-size: 13px; }
              .content { padding: 32px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; margin-bottom: 6px; }
              .value { font-size: 15px; color: #0f172a; font-weight: 500; }
              .message-box { background: #f1f5f9; border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; margin-top: 8px; border: 1px solid #e2e8f0; }
              .footer { background: #f8fafc; padding: 18px 32px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Project Inquiry</h1>
                <p>Submitted via SixByte Technologies Contact Form</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Client Name</div>
                  <div class="value">${payload.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${payload.email}" style="color: #0F766E; text-decoration: none;">${payload.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone Number</div>
                  <div class="value">${payload.phone}</div>
                </div>
                <div class="field">
                  <div class="label">Business Type / Industry</div>
                  <div class="value">${payload.businessType}</div>
                </div>
                <div class="field">
                  <div class="label">Project Details & Message</div>
                  <div class="message-box">${payload.message}</div>
                </div>
              </div>
              <div class="footer">
                Received at ${submittedAt} UTC · SixByte Lead Notification System
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Failed to process request.' }, { status: 500 })
  }
}
