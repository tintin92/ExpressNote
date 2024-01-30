// Dependencies
const express = require('express');
const app = express()

var PORT = process.env.PORT || 8080;

//Set up Express app to hande data parsing,static, and route middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//pass instances through express
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`App listening on: PORT: http://localhost:${PORT}`));

