const express = require('express');
const router = express.Router();

const Game = require('../models/GameModel');

const addGame = async ({poster, title, subtitle, price, isFree }) => {
    poster = poster.trim();
    title = title.trim();
    subtitle = subtitle.trim();
    price = price?.trim();

    if (poster === "" || title === "" || subtitle === "") {
        return {message: "Empty field provided", success: false};
    }

    const game = await Game.find({title});
    if (game.length) {
        return {message: "Existing game found", success: false};
    } else {
        const newGame = new Game({
            poster,
            title,
            subtitle,
            price,
            isFree
        })

        const success = newGame.save();
        if (success) {
            return {message: "Game created successfully.", success: true, game: newGame};
        } else {
            return {message: "Failed to save game", success: false};
        }
    }
}

router.post('/addGames', (req, res) => {
    let { games } = req.body;
    let createdGames = [];
    let failed = false;
    for (let i = 0; i < games.length; ++i)
    {
        let { poster, title, subtitle, price, isFree } = games[i];
        addGame({poster, title, subtitle, price, isFree})
            .then((result) => {
                if (failed) {
                    return;
                }

                if (result.success) {
                    Game.find({title})
                        .then(game => {
                            createdGames.push(game);
                        })
                        .catch(() => {
                            failed = true;
                            res.json({
                                status: "FAILED",
                                message: "Failed to retrieve game"
                            });
                        })
                } else {
                    failed = true;
                    res.json({
                        status: "FAILED",
                        message: result.message
                    });
                }
            })
            .catch(() => {
                failed = true;
                res.json({
                    status: "FAILED",
                    message: "Failed to retrieve game"
                })
            })

        if (failed) {
            break;
        }
    }

    if (failed === false) {
        res.json({
            status: "SUCCESS",
            message: "Created games successfully",
            data: createdGames
        })
    }
})

router.post('/addGame',  (req, res) => {
    let {poster, title, subtitle, price, isFree} = req.body;
    addGame({poster, title, subtitle, price, isFree})
        .then((result) => {
            console.log(result);
            if (result.success) {
                res.json({
                    status: "SUCCESS",
                    message: "Game created successfully",
                    game: result.game
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: result.message
                })
            }
        })
        .catch(() => {
            res.json({
                status: "FAILED",
                message: "Failed to create game"
            })
        })
});

router.get('/getGames', (req, res) => {
    let { isFree } = req.query;
    Game.find({isFree})
        .then(games => {
            res.json({
                status: "SUCCESS",
                message: "Games retrieved successfully",
                games: games
            })
        })
        .catch(() => {
            res.json({
                status: "FAILED",
                message: "Failed to retrieve games"
            })
        })
});

router.post('/updateGame', (req, res) => {
    let { poster, title, subtitle, isFree, price } = req.body;
    poster = poster?.trim();
    title = title.trim();
    subtitle = subtitle?.trim();
    price = price?.trim();

    if (poster === "" && title === "" && subtitle === "" && price === "")
    {
        res.json({
            status: "FAILED",
            message: "Empty property supplied."
        })
    }

    Game.findOneAndUpdate({title}, {poster: poster, subtitle: subtitle, price: price, isFree: isFree}, {new: true})
        .then((game) => {
            if (!game) {
                res.json({
                    status: "FAILED",
                    message: "No game entry found"
                })
            } else {
                res.json({
                    status: "SUCCESS",
                    message: "Updated game entry successfully"
                })
            }
        })
        .catch(() => {
            res.json({
                status: "FAILED",
                message: "Error occurred while updating game"
            })
        })
})

module.exports = router;