const db = require("../db.js");
const Schema = db.Schema;

const canetaSchema = new Schema({
    cor: {
        type: String,
        required: true,
    },
    ehBic: {
        type: Boolean,
        required: true,
    },
});
const caneta = db.model("caneta", canetaSchema);
module.exports = caneta;