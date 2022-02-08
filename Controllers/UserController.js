const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwt_secret} = require('../config/keys');
const Post = require("../models/Post");

const UserController = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).send({ message: "Usuario registrado con exito", user });
           
          } catch (error) {
            console.error(error);
            res.status(500).send({message:"error de registro",});
          }
        },
      

    async login(req,res) {
    
        try {
            const user = await User.findOne({
            email: req.body.email,
            })
            token = jwt.sign({ _id: user._id }, jwt_secret);;
                if (user.tokens.length > 4) user.tokens.shift();
                user.tokens.push(token);
                await user.save();
                res.send({ message: 'Bienvenid@ ' + user.name, token });
            } catch (error) {
                console.error(error);
                res.status(500).send({message:"error de login",});
            }
        },
        
    
    async getAll(req, res) {
        try {
           const user = await User.find()
           res.send(users)
        } catch (error) {
            console.error(error);
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findById(req.params._id)
            res.send(user)
        } catch (error) {
            console.error(error);
        }
    },
    async getUserByName(req, res) {
        try {
            const user = await User.aggregate([{
                    $match: {
                        name:req.params.name
                    }
                }, ])
                res.send(user)
        } catch (error) {
            console.log(error)
        }
    },
    async delete(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params._id)
            res.send({ user, message: 'Usuario borrado' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: ' problema con el borrado' })
        }
    },
    async update(req, res) {
        try {
          const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true })
          res.send({ message: "usuario modificado", user });
        } catch (error) {
          console.error(error);
        }
    },
    async logout(req, res) {
        try {
          await User.findByIdAndUpdate(req.user._id, {
            $pull: { tokens: req.headers.authorization },
          });
          res.send({ message: "Desconectado con éxito" });
        } catch (error) {
          console.error(error);
          res.status(500).send({
            message: "Hubo un problema al intentar conectar al usuario",
          });
        }
    },    
    async getInfo(req, res) {
        try {
          const user = await User.findById(req.user._id)
          .populate("commentIds")
          .populate({
            path: "commentIds",
            populate: {
              path: "postIds._id",
            },
          });
  
          res.send(user);
        } catch (error) {
          console.error(error);
        }
      },
      async register(req, res) {
        try {
          let user = await User.findOne({
            email: req.body.email,
          });
          if (user) return res.status(400).send("Este correo ya esta registrado");
          user = await User.create(req.body);
          res.status(201).send({ message: "Usuario registrado con exito", user });
        } catch (error) {
          console.error(error)
          if (error.name == "ValidationError") {
            let errName = await Object.keys(error.errors)[0]
            res.status(400).send(error.errors[errName].message);
          }
          res.status(500).send(error);
        }
      },
      
    
    
}

module.exports = UserController