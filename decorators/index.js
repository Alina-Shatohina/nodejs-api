const ctrlWrapper = require("./ctrlWrapper");
const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const isValidStatus = require("./isValidStatus");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
    ctrlWrapper,
    validateBody,
    isValidId,
    isValidStatus,
    authenticate,
    upload,
};