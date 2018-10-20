module.exports.read = function (req, res) {
    res.status(200).json('This will GET block ' + req.params.height);
};

module.exports.create = function (req, res) {
    res.status(201).json('This will POST a block');
};