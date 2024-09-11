const refri = require("../models/refri_model.js");

const store = (req, res) => {
    refri.create(req.body);
    res.json();
};

const index = (req, res) => {
    const content = refri.find().exec();
    res.json(content);
};

const show = (req, res) => {
    const content = refri.findById(req.params.id).exec();
    res.json(content);
};

const update = (req, res) => {
    refri.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json;
};

const destroy = (req, res) => {
    refri.findByIdAndDelete(req.params.id).exec();
    res.json();
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};
