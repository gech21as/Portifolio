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

  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing environment variables:");
    console.error("EMAIL_USER:", process.env.EMAIL_USER ? "SET" : "NOT SET");
    console.error("EMAIL_PASS:", process.env.EMAIL_PASS ? "SET" : "NOT SET");
    
    return res.status(500).json({
      success: false,
      message: "Server configuration error. Please contact administrator.",
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
    console.error("Error details:", error.message);
    
    // More specific error messages
    let errorMessage = "Failed to send message";
    if (error.code === "EAUTH") {
      errorMessage = "Authentication failed. Check Gmail credentials.";
    } else if (error.code === "ECONNECTION") {
      errorMessage = "Connection failed. Check internet connection.";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};
