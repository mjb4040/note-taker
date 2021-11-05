const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

require("./routes/apiRoutes")(app);

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});