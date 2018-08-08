const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  Name: { type: String, required: true },
  Token: { type: String, required: true },
  LogoURL: { type: String, required: true }
}, { _id: false });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
