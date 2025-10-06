"use server"

import { Resend } from "resend"

const resend = new Resend("re_EPixvPb7_EbnHYfSCArYn3wFY47ntrepZ")

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    if (!data.name || !data.email || !data.service || !data.message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    const result = await resend.emails.send({
      from: "Samoa Creative Co <onboarding@resend.dev>",
      to: "info@samoacreative.co",
      replyTo: data.email,
      subject: `New Contact Form Submission - ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #042944; border-bottom: 3px solid #042944; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p style="margin: 10px 0;"><strong>Service:</strong> ${data.service}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
              ${data.message}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the Samoa Creative Co contact form.</p>
          </div>
        </div>
      `,
    })

    if (result.error) {
      console.error("[v0] Resend error:", result.error)
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
