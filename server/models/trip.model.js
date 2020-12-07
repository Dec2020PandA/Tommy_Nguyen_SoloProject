const mongoose = require("mongoose");

const ActivityScehma = new mongoose.Schema({
  activityName: {
    type: String,
    required: [true, "Activity must have a name!"],
  },
  time: {
    type: String,
  },
  location: {
    type: String,
  },
});

const ItinerarySchema = new mongoose.Schema({
  day: {
    type: String,
  },
  activities: [ActivityScehma],
});

const TodoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: [true, "Todo must have a name!"],
  },
  completed: {
    type: Boolean,
    required: [true, "Todo must be completed or not"],
  },
});

const ExpenseSchema = new mongoose.Schema({
  expenseName: {
    type: String,
    required: [true, "Expense must have a name"],
  },
  expensePrice: {
    type: Number,
  },
});

const TripSchema = new mongoose.Schema({
  tripName: {
    type: String,
    required: [true, "The Trip must have a name!"],
  },

  location: {
    type: String,
  },

  itinerary: [ItinerarySchema],
  todo: [TodoSchema],
  expenses: [ExpenseSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports.Trip = mongoose.model("Trip", TripSchema);
