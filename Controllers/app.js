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

// Opciones del correo electrónico
const mailOptions = {
  from: "pruebascorreopersonal@outlook.com", // Dirección de correo electrónico del remitente
  to: "diulioz@hotmail.com", // Dirección de correo electrónico del destinatario
  subject: "Prueba de Nodemailer", // Asunto del correo electrónico
  text: "Hola, este es un correo de prueba enviado desde Nodemailer.", // Cuerpo del correo electrónico en texto plano
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Error al enviar el correo: ", error);
  } else {
    console.log("Correo enviado exitosamente: ", info.response);
  } 
});

export {}