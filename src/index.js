const express = require("express")
const aeroporto_router = require("./routes/estudante.js")
const caneta_router = require("./routes/aluguel.js")
const moto_router = require("./routes/livro.js")
const refri_router = require("./routes/aluguel.js")
const app = express()
const port = 3000

app.use(express.json())


app.use("/aeroporto", aeroporto_router)
app.use("/caneta", caneta_router)
app.use("/moto", moto_router)
app.use("/refri", refri_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})