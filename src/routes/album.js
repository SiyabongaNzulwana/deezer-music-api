const express = require('express')
const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const artistID = req.params.id
    if (!artistID)
      return res
        .status(400)
        .send(`Please provide us with a valid artistID.`)

    //assuming that Albums is a model that exists and returns an array of albums of that particular artist based on the artistID.
    const albums = await Albums.find({ where: { artist_id:  artistID } })

    if (!albums) return res.status(404).send(`no albums found for artist with ID ${artistID}`)

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
