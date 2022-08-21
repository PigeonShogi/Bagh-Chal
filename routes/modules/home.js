const express = require('express')
const router = express.Router()
const pieces = require('../../models/pieces')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/new', (req, res) => {
  res.render('index', ({ pieces }))
})

module.exports = router