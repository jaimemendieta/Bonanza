import nodemailer from 'nodemailer';

export async function POST(req: Request, res: Response) {

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    });

    // Manually parse the JSON body from the request
    const body = await req.body;
    const data = await new Response(body).json();
    const { name, email, subject, message } = data;

    // Server validation
    if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({ error: 'All fields are required.' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    try {
        const emailResponse = await transporter.sendMail({
            from: 'bonanzacs.13@gmail.com',
            replyTo: `"${name}" <${email}>`,
            to: 'bonanzacs.13@gmail.com',
            subject: subject,
            text: fullMessage,
        });

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error sending email', details: error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}