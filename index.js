const customExpress = require("./customExpress.js")

const app = customExpress()

app.listen(3000, () => console.log("Servidor operante na porta 3000."))

