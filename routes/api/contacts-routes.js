const express = require('express')

const contactsService = require("../../models/contacts-models")

const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await contactsService.listContacts();
  res.json(result);
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'id' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: '123' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message rev' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message put' })
})

module.exports = router
