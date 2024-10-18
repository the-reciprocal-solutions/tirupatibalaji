const sendMail = require("../services/email.service");
const TelegramService = require("../services/telegram.service")

const formData = (req,res)=>{
    const telegramService = TelegramService();
    const data = {
        ...req.body
    }
    console.log("kkk",data);
    try{
        telegramService.sendEnquiry(data);
        sendMail(data)
        console.log("Telegram Sent")
        res.send({ status: 201, msg: "Successfully Added" });
    }catch(error){
        res.status(500).send(error);
    }
    
    
}

module.exports = {formData}