const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor rellena tu nombre"],
    },
    email:{
        type:String,
        match: [/.+\@.+\..+/, "Este correo no es válido"],
        required: [true, 'Rellena el mail'],
    }, 
    password:{
        type:String,
        required: [true, 'Rellena la clave'],
    }, 

    age:{
        type:Number,
        required: [true, 'Rellena tu edad'],
    }, 

    tokens: [],
    commentIds: [{type:ObjectId, ref:'Comment'}],
    wishList: [{type: ObjectId, ref:'Post'}],
}, { timestamps: true });
UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;