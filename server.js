const app = require("./app");
const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://igor:oj2sGOnjqjxvzdZb@cluster0.q4njwwu.mongodb.net/Contacts_reader?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
