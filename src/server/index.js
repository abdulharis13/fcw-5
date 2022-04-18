// import
const express = require("express");
const route = require("../routers");
const path = require("path");

// middleware
const errorMiddleware = require("../middleware/error");
const notFoundMiddleware = require("../middleware/notFound");
// inisiasi express
const app = express();

//config port
const { host, port } = require("../../config");

// public static
app.use(express.static(path.join(__dirname, "../public")));

//views ejs
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// read body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// read route
app.use(route);

// read middleware
app.use(errorMiddleware.error);
app.use(notFoundMiddleware.notFound);
//server
app.listen(port, () => console.log(`Server running at http://${host}:${port}`));
