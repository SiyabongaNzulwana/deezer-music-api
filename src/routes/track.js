const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {

    const searchTerm = req.query.searchString
    if(!searchTerm) return res.status(400).send(`Please provide us with a valid string to search for.`)

    //assuming that Tracks is a model that exists and returns an array of tracks based on the search term from the database.
    const tracks = await Track.find({ where: { searchTerm: searchTerm}})

    if (!tracks) return res.status(404).send(`no tracks found with that search term ${searchTerm}`)

    return res.json({
      success: true,
      data: tracks
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    })
  }
})

module.exports = router
