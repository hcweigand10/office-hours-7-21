const express = require("express")
const PORT = process.env.PORT || 3002
const veggies = require("./db/veggies.json")

const app = express()

app.get("/hi", (req,res) => {
    return res.json({msg: "hi"})
})

app.get("/api/veggies", (req, res) => {
    return res.json(veggies)
})

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));


app.listen(PORT, () => {
    console.log(`API server is live at http://localhost:${PORT}`)
})