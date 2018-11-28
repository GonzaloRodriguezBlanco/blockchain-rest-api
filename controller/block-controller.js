const blockchain = require('../model/blockchain');
var Block = require('../model/block');

module.exports.read = function (req, res) {
    blockchain
        .getBlock(req.params.height)
        .then((block) =>
            {
                res.status(200).json(JSON.parse(block.value));
            }
        )
        .catch((err) => {
            if (err.notFound) {
                res.status(404);
            } else {
                res.status(500);
            }
            res.json(err.message)
        });
};

module.exports.create = function (req, res) {
    console.log('POST: '+req.body);
    if (!req.body.data) {
        res.status(400).json("Bad request. You should provide a body.")
    } else {
        console.log(req.body.data);
        let block = new Block(req.body.data);
        blockchain
            .addBlock(block)
            .then(() => {
                blockchain
                    .getBlockHeight()
                    .then((height) => {
                        blockchain
                            .getBlock(height)
                            .then((block) =>
                                {
                                    res.status(201).json(JSON.parse(block.value));
                                }
                            )
                            .catch((err) => {
                                res.status(500).json(err.message);
                            });
                    });
            })
            .catch((err) => {
                res.status(500).json(err.message)
            });
    }
};