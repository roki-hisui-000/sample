// default controller
"use strict"
const defaultUtils = require('../utils/defaultUtils')

const controller = {

    // for test（Meaningless）
    info: (req, res) => {
        res.send('---access "/info" path')
    },

    // トップページ
    index: (req, res) => {
        res.render('index')
    },

    // メッセージ表示
    showMsg: (req, res) => {
        const msg = `receive message:${req.query.msg} from:${defaultUtils.getIp(req)}`
        console.log(msg)
        res.send(msg)
    }
}

module.exports = controller

