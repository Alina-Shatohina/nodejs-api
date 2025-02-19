const { isValidObjectId } = require("mongoose");

const HttpError = require("../helpers/HttpError")

const isValidStatus = (req, res, next) => {
    if (Object.entries(req.body).length === 0) {
      res.status(400);
      res.json({
        message: "missing field favorite",
      }) 
  }

    const { id } = req.params;
    if (!isValidObjectId(id)) {
        next (HttpError(400,`${id} is not a valid id`))
    }
    next();
}

module.exports = isValidStatus;
