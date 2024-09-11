const caneta = require("../models/caneta_model.js");

const store = (req, res) => {
    caneta.create(req.body);
    res.json();
};

const index = (req, res) => {
    const content = caneta.find().exec();
    res.json(content);
};

const show = (req, res) => {
    const content = caneta.findById(req.params.id).exec();
    res.json(content);
};

const update = (req, res) => {
    caneta.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json;
};

const destroy = (req, res) => {
    caneta.findByIdAndDelete(req.params.id).exec();
    res.json();
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};
