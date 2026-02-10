import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
  const { email, message } = req.body;

  // Validation
  if (!email || !message) {
    return res.status(400).json({
      success: false,
      message: "Email and message are required",
    });
  }

  try {
    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "📩 New Portfolio Contact Message Gech",
      text: `
You received a new message from your portfolio:

From: ${email}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};
