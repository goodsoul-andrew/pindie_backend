const mimeTypes = require("./mime-types");
const parseBody = require("./parse-body");
const staticFile = require("./static-file");
const doEndpoint = require("./do-endpoint")


module.exports = {mimeTypes, parseBody, staticFile, doEndpoint}