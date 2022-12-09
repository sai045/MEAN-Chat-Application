const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://klaus:klaus123@hr-portal.kx5ek.mongodb.net/MEAN-Chat?retryWrites=true&w=majority');


const Schema = mongoose.Schema;

const MessageSchema =  new Schema({
    to: String,
    from: String,
    isForwarded:Boolean,
    message:String,
    image:String,
    date:{type:Date , default:Date.now},
    room:String
    
});


var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;