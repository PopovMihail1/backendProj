var express = require('express');
const jsf = require('json-schema-faker');
const chance = require('chance');
const faker = require('faker');
var router = express.Router();
const util = require('util')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var schema = {
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "faker": "random.word"
    },
    "body": {
      "type": "string",
      "faker": "random.words"
    },
    "date": {
      "type": "string",
      "faker": "date.recent"
    }
  }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;
