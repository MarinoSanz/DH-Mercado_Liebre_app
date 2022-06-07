const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./Public");
app.use(express.static(publicPath));

// app.use(express.static("public"))

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("servidor corriendo en puerto 3000")
});

app.get("/", (req, res) => {
    // esta forma es del Chino 
    res.sendFile(__dirname + "/Views/home.html")
});

app.get("/login", (req, res) => {
    //  esta forma está en el material
    res.sendFile(path.resolve(__dirname, "./Views/login.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./Views/register.html"))
});


app.get("*", (req, res) => {
    res.send("¡la pagina busca que busca, no se encuentra!")
});

