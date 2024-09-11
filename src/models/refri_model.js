const db = require("../db.js");
const Schema = db.Schema;

const refriSchema = new Schema({
    porcentagem_suco: {
        type: Number,
        required: true,
    },
    kcal200ml: {
        type: Number,
        required: true,
    },
    sabor: {
        type: String,
        required: true,
    },
    tamanho_ml: {
        type: Number,
        required: true,
    },
});
const refri = db.model("refri", refriSchema);
module.exports = refri;

//porcentagem_suco kcal200ml sabor tamanhoml