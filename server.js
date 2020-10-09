// Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//Set up Express app to hande data parsing,static, and route middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

//seperations of concern

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


app.listen(PORT, () => {
    console.log("App listening on: PORT: " + PORT);
});
