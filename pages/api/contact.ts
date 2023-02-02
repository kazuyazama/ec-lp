import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default function sendMail(req: NextApiRequest,res: NextApiResponse) {
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user: process.env.NEXT_PUBLIC_GMAILUSER,
            pass: process.env.NEXT_PUBLIC_GMAILPASS,
        }
    })

    //管理人が受け取るメール
    const toHostMailData = {
        from:req.body.email,
        to:"ec-shopify@restarts.co.jp",
        subject:`ECサイトLPにお問い合わせがありました`,
        text:`${req.body.message} Send from ${req.body.email}`,
        html:`
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
        `
    }

    transporter.sendMail(toHostMailData,function(err,info) {
        if(err) console.log(err) 
        else console.log(info)
    })
    res.send("success")
  }
  