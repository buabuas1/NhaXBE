const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const districtCtrl = require('../controllers/district.controller');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(insert));

router.route('/')
  .get(asyncHandler(getList));


async function insert(req, res) {
  let district = await districtCtrl.insert(req.body);
  res.json(district);
}

async function getList(req, res) {
  let districts = await districtCtrl.getList(req.body);
  res.json(districts);
}
