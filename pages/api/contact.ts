import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAILUSER,
      pass: process.env.NEXT_PUBLIC_GMAILPASS,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  //管理人が受け取るメール
  const toHostMailData = {
    from: req.body.email,
    to: "ec-shopify@restarts.co.jp",
    subject: `ECサイトLPにお問い合わせがありました`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
        <p>[名前]</p>
        <p>${req.body.name}</p>
        <p>[メールアドレス]</p>
        <p>${req.body.email}</p>
        <p>[電話番号]</p>
        <p>${req.body.tel}</p>
        <p>[現在の状況]</p>
        <p>${req.body.radio}</p>
        <p>[メッセージ内容]</p>
        <p>${req.body.message}</p>
        `,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(toHostMailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({
    status: "ok",
  });
}
