const express = require('express')
const router = express.Router()

//NB: I would use this package called Joi to validate data on ALL middleware functions. https://www.npmjs.com/package/joi

router.get('/:id', async (req, res) => {
  try {
    const artistId = req.params.id
    if (!artistId) return res.status(400).send(`Please provide us with a valid artistID`)

    //assuming that Artist is a model that exists and returns an artist object from the database.
    const artist = await Artist.findOne({ where: { id: artistId } })

    if (!artist) return res.status(404).send(`the artist with the ID ${artistId} was not found.!`)

    return res.json({
      success: true,
      data: artist
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    })
  }
})

module.exports = router
