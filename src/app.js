import express from "express";
import productsRouter from "./Router/Products.router.js";
import cartRouter from "./Router/Cart.router.js";
import viewsRouter from "./Router/views.router.js";




//URI Base de datos
// mongodb+srv://Rhynigath:Narygath,1747@cluster0.izuy1rb.mongodb.net/ecommerce?retryWrites=true&w=majority

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use(express.static(__dirname + "/public")); */



//routes
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/", viewsRouter);

const httpServer = app.listen(8080, () => {
	console.log("Escuchando al puerto 8080");
});


