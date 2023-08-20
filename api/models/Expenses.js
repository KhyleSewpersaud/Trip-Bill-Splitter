const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const expensesSchema = new Schema({
  price: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

const expenseModel = model('Expenses', expensesSchema);

module.exports = expenseModel;
