const express = require('express')
const Card = require('../models/cardModel.js')


const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const card = await Card.find({})
        res.status(200).json(card)
    } catch (error) {
        res.status(500).json(error)
    }
}
)


router.post("/add", async (req, res) => {

    try {
        const card = new Card(req.body)
        await card.save()
        res.status(200).json(card)
    } catch (error) {
        res.status(500).json(error)
    }
}
)

router.delete("/:id", async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted")
    } catch (error) {
        res.status(500).json(error)

    }
})

router.put("/:id", async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedCard)
    } catch (error) {
        res.status(500).json(error)

    }
})


module.exports = router 