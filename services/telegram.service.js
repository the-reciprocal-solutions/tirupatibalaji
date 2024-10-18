const axios = require('axios').default;
const TELEGRAM_BOT_ID = "6919849566:AAHshwi0z0kQtRuMMvZrKf-K-3N6jWFdMuc"
const TELEGRAM_CHAT_ID = "-4198026216"

function TelegramService(){
    return {
        sendEnquiry:async (_)=>{
            const response = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_ID}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=Enquiry%0AName%3A${_?.name}%0APhone%3A${_?.phone}%0ANo.Of.People%3A${_?.peopleCount}%0APackage%3A${_?.package}%0AVehicle%3A${_?.vehicle}%0ATrip-Date%3A${_?.tripDate}`)
            .catch(err=>{
                console.log(err);
            })
            // console.log(response);
        }
    }
}

module.exports = TelegramService