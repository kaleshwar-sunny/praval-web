import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"PRAVAL Tech" <${process.env.EMAIL_USER}>`,
      to: "sales@pravaltech.com",
      subject: "Schedule Call Request",
      html: `
        <h2>New Schedule Call Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p><strong>Question Type:</strong> ${data.question}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <br/>
        <p><strong>Submitted On:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });

  } catch (error) {
    console.error("MAIL ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}