const express = require('express');
const router = express.Router();

const GameModel = require('../models/GameModel')

const GameRouter = require('./Game');
express().use('/game', GameRouter);

router.post('/addGame', (req, res) => {
    let {poster, title, subtitle, isFree, price} = req.body;
    title = title.trim();
    subtitle = subtitle.trim();
    price = price.trim();

    if (poster === '' || title === '' || subtitle === '' || price === '') {
        res.json({status: 'FAILED', message: 'Empty input fields!'});
    }

    GameModel.find({title: title})
        .then((result) => {
            if (result) {
                res.json({
                    status: "FAILED",
                    message: "Game already exists!"
                });
            } else {
                const NewGame = new GameModel({
                    poster: poster,
                    title: title,
                    subtitle: subtitle,
                    isFree: isFree,
                    price: price,
                });

                NewGame.save()
                    .then(() => {
                        res.json({
                            status: "SUCCESS",
                            message: "Game added successfully!"
                        });
                    })
                    .catch(() => {
                        res.json({
                            status: "FAILED",
                            message: "Error occurred while trying to add game!"
                        })
                    });
            }
        })
        .catch(() => {
            res.json({
                status: "FAILED",
                message: "Error occurred while trying to check for existing game!"
            })
        });
});


module.exports = router;