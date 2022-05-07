import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "91ff3b709f7b25",
      pass: "f2ed63ba89805a"
    }
  });
  
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Tiago de oliveira Gomes <tyagoogomes@gmail.com>',
            subject,
            html: body
        })
    }
}