import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.warn("WARNING: RESEND_API_KEY is not set in environment variables");
}

export const resend = new Resend(resendApiKey);

export async function sendEmail({ to, subject, react }) {
  try {
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
