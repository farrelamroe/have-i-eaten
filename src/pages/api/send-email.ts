import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, phone, message }: FormData = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        // user: process.env.EMAIL_USER,
        // pass: process.env.EMAIL_PASS, // Use App Password if 2-Step Verification is enabled

        user: email,
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: "farrelamroe@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: ", info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default sendEmail;
