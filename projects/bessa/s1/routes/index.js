const express = require('express');
const router = express.Router();
let { allComponents } = require('../utils/components');
let { allViews } = require('../utils/views');
let { getPackage } = require('../utils');
let allVariables = () => {
  return {
    address : require('../utils/variables')['address'],
    contacts : require('../utils/variables')['contacts'],
    description : require('../utils/variables')['description'],
    navbar : require('../utils/variables')['navbar'],
    regulation : require('../utils/variables')['regulation'],
    service : require('../utils/variables')['service'],
    slideshow : require('../utils/variables')['slideshow'],
  }
};
router.get('/', (req, res, next) => {
  res.render('index', {
    title : 'Bessa Hostel',
    ...allComponents(),
    ...allVariables(),
    ...allViews(),
    ...getPackage(),
  });
});
module.exports = router;