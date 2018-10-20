var Blockchain = require('../model/blockchain');

module.exports.read = function (req, res) {
    let blockchain = new Blockchain();
    blockchain
        .getBlock(req.params.height)
        .then((block) =>
            {
                res.status(200).json(block);
            }
        )
        .catch((err) => {
            if (err.notFound) {
                res.status(404).json(err.message);
            } else {
                res.status(500).json(err.message);
            }
        });
    blockchain.chain.close();
};

module.exports.create = function (req, res) {
    res.status(201).json('This will POST a block');
};