const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');
const TokenSchema = new mongoose.Schema({
    token: String,
    UserId: INTEGER,
  });
 

module.exports = Token; 