import nodemailer from "nodemailer";

// Configurar el objeto de transporte con las opciones del servidor SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Reemplaza con el host de tu servidor SMTP (por ejemplo, smtp.gmail.com para Gmail)
  port: 587, // Puerto del servidor SMTP (587 para TLS)
  secure: false, // false para TLS; true para SSL (en la mayoría de los casos, es false)
  auth: {
    user: "pruebascorreopersonal@outlook.com", // Reemplaza con tu dirección de correo electrónico
    pass: "aZ11LM#.4", // Reemplaza con la contraseña de tu correo electrónico
  },
  tls: {
    rejectUnauthorized: false, // Ignorar los errores de certificados autofirmados (no recomendado en producción)
  },
});

export { transporter }