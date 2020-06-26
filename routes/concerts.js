var express = require('express');
const jsf = require('json-schema-faker');
const chance = require('chance');
const faker = require('faker');
var router = express.Router();
const util = require('util')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var schema = {
  "type": "array",
  "minItems": 10,
  "maxItems": 20,
  "items": {
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
      },
      "id": {
        "type": "int",
        "faker": "random.number"
      }
    },
    "required": [
      "title",
      "body",
      "date",
      "id"
    ]
  }
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;
