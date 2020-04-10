// リクエストのメッセージを保存する
const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({

    // IPアドレス
    ipAddress : {
        type: String,
        required: true
    }

    // message
    message : {
        type: String,
        required: true
    }

    receiveDate :{
        type: Date,
        required: true
    }
})

module.exports = mongoose.Model('Message', MessageSchema)