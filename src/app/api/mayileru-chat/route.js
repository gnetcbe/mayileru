export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.MAYILERU_SMTP_HOST || "mail.mayileruandco.com",
    port: Number(process.env.MAYILERU_SMTP_PORT) || 465,
    secure: true,
    auth: {
      type: "LOGIN",
      user: process.env.MAYILERU_SMTP_USER,
      pass: process.env.MAYILERU_SMTP_PASS,
    },
    tls: { rejectUnauthorized: false },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "Unknown";

    // ── Feedback email ─────────────────────────────────────────────
    if (body.isFeedback) {
      const { feedback } = body;
      const stars = "⭐".repeat(feedback.stars) + "☆".repeat(5 - feedback.stars);
      await getTransporter().sendMail({
        from: `"RM. MAYILERU Support Bot" <${process.env.MAYILERU_SMTP_USER}>`,
        to: process.env.MAYILERU_LEAD_EMAIL || "mayileruandco@gmail.com",
        subject: `💬 Chat Feedback — ${feedback.stars}/5 Stars | ${feedback.visitor.name} | ${feedback.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e2265, #2e3192); padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="color: white; margin: 0;">💬 Chat Feedback — RM. MAYILERU & Co.</h2>
            </div>
            <div style="background: #f8f9fc; padding: 20px; border: 1px solid #dde0f0;">
              <h3 style="color: #2e3192; margin-top: 0;">Client Details</h3>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:7px;font-weight:bold;width:130px;">Name</td><td style="padding:7px;">${feedback.visitor.name}</td></tr>
                <tr style="background:#fff"><td style="padding:7px;font-weight:bold;">Phone</td><td style="padding:7px;">${feedback.visitor.phone || "Not provided"}</td></tr>
                <tr><td style="padding:7px;font-weight:bold;">Email</td><td style="padding:7px;">${feedback.visitor.email || "Not provided"}</td></tr>
                <tr style="background:#fff"><td style="padding:7px;font-weight:bold;">IP Address</td><td style="padding:7px;">${ip}</td></tr>
                <tr><td style="padding:7px;font-weight:bold;">Service</td><td style="padding:7px;">${feedback.service}</td></tr>
              </table>
              <h3 style="color:#2e3192;margin-top:20px;">⭐ Rating</h3>
              <div style="font-size:26px;margin-bottom:4px;">${stars}</div>
              <div style="font-weight:bold;color:#f59e0b;">${feedback.stars}/5 Stars</div>
              ${feedback.chatText ? `
              <h3 style="color:#2e3192;margin-top:20px;">💬 Chat Transcript</h3>
              <div style="background:#fff;border:1px solid #dde0f0;border-radius:8px;padding:14px;white-space:pre-wrap;font-size:12.5px;line-height:1.6;color:#333;">
${feedback.chatText}
              </div>` : ""}
            </div>
            <div style="background:#2e3192;padding:10px;border-radius:0 0 8px 8px;text-align:center;">
              <p style="color:rgba(255,255,255,0.7);margin:0;font-size:11px;">RM. MAYILERU & Co. · mayileruandco@gmail.com · +91-9345732419</p>
            </div>
          </div>`,
      });
      return NextResponse.json({ success: true });
    }

    // ── Lead email ─────────────────────────────────────────────────
    if (body.isLead) {
      const { lead, service, chatHistory } = body;
      const chatText = Array.isArray(chatHistory)
        ? chatHistory.map((m) =>
            `${m.role === "user" ? "Client" : "Support"}: ${m.text}`).join("\n")
        : "";
      await getTransporter().sendMail({
        from: `"RM. MAYILERU Support Bot" <${process.env.MAYILERU_SMTP_USER}>`,
        to: process.env.MAYILERU_LEAD_EMAIL || "mayileruandco@gmail.com",
        subject: `🔔 New Enquiry — ${lead.name} | ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e2265, #2e3192); padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="color: white; margin: 0;">🔔 New Client Enquiry</h2>
            </div>
            <div style="background: #f8f9fc; padding: 20px; border: 1px solid #dde0f0;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:7px;font-weight:bold;width:130px;">Name</td><td style="padding:7px;">${lead.name}</td></tr>
                <tr style="background:#fff"><td style="padding:7px;font-weight:bold;">Phone</td><td style="padding:7px;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
                <tr><td style="padding:7px;font-weight:bold;">Email</td><td style="padding:7px;">${lead.email || "Not provided"}</td></tr>
                <tr style="background:#fff"><td style="padding:7px;font-weight:bold;">IP Address</td><td style="padding:7px;">${ip}</td></tr>
                <tr><td style="padding:7px;font-weight:bold;">Service</td><td style="padding:7px;">${service}</td></tr>
              </table>
              ${chatText ? `
              <h3 style="color:#2e3192;margin-top:20px;">💬 Chat Transcript</h3>
              <div style="background:#fff;border:1px solid #dde0f0;border-radius:8px;padding:14px;white-space:pre-wrap;font-size:12.5px;line-height:1.6;color:#333;">
${chatText}
              </div>` : ""}
            </div>
            <div style="background:#2e3192;padding:10px;border-radius:0 0 8px 8px;text-align:center;">
              <p style="color:rgba(255,255,255,0.7);margin:0;font-size:11px;">RM. MAYILERU & Co. · mayileruandco@gmail.com · +91-9345732419</p>
            </div>
          </div>`,
      });
      return NextResponse.json({ success: true });
    }

    // ── Gemini chat ────────────────────────────────────────────────
    const { message, systemPrompt, history = [] } = body;
    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Invalid request." }, { status: 400 });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: "Our AI service is temporarily unavailable. Please contact us directly at +91-9345732419 or mayileruandco@gmail.com." });
    }

    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt || "You are a helpful assistant for RM. MAYILERU & Co." }] },
        contents: [...history, { role: "user", parts: [{ text: message }] }],
        generationConfig: { maxOutputTokens: 600, temperature: 0.6 },
      }),
    });

    if (!geminiRes.ok) {
      console.error("Gemini API error:", await geminiRes.text());
      return NextResponse.json({ reply: "We are experiencing technical difficulties. Please contact us at +91-9345732419." });
    }

    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I apologise for the inconvenience. Please contact us directly at +91-9345732419 or mayileruandco@gmail.com.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ reply: "Something went wrong. Please contact us at +91-9345732419." });
  }
}
