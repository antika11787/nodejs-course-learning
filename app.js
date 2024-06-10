const path = require("path");

const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express(); // creating an express application

// we need to use app.engine() cz handlebars is not a built-i engine
app.engine("hbs", expressHandlebars()); // expressHandlebars function returns the initialized view engine which can be assigned to engine()
// telling express that we wan to compile dynamic templates with pug engine and where to find these templates
// app.set("view engine", "pug"); // pug is a built-in engine
app.set("view engine", "hbs"); // we need to define it with the name set in app.engine(). also the extension is .hbs
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
