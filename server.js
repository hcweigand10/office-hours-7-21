const express = require("express")
const PORT = process.env.PORT || 3002
const veggies = require("./veggies.json")

const app = express()

app.get("/hi", (req,res) => {
    return res.json({msg: "hi"})
})

app.get("/api/veggies", (req, res) => {
    return res.json(veggies)
})

app.listen(PORT, () => {
    console.log(`API server is live at http://localhost:${PORT}`)
})