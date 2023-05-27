const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers/handleMongooseError");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: null,
    },

}, { versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);


const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
    subscription: Joi.string(),
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

// const updateSubscriptionSchema = Joi.object({
//   subscription: Joi.string(),
// })


const schemas = {
    registerSchema,
    loginSchema,
    // updateSubscriptionSchema,
}




const User = model("user", userSchema);


module.exports = {
    User,
    schemas,
}