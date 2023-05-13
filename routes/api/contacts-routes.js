const express = require('express')

const contactsService = require("../../models/contacts-models")
const { HttpError } = require("../../helpers");

const router = express.Router()


router.get('/', async (req, res, next) => {
  try {
    const result = await contactsService.listContacts();
    res.json(result);
  }
  catch (error) {
    next(error);
   }

})


router.get('/:id', async (req, res, next) => {
  try { 
    const { id } = req.params;
    const result = await contactsService.getContactById(id);
    if (!result) {
        throw  HttpError(404)
      }
    res.json(result);
  } catch (error) { 
    next(error);
  }
  
})

router.post('/', async (req, res, next) => {
  res.json({ message: '123' })
})

router.delete('/:id', async (req, res, next) => {
  res.json({ message: 'template message rev' })
})

router.put('/:id', async (req, res, next) => {
  res.json({ message: 'template message put' })
})

module.exports = router
