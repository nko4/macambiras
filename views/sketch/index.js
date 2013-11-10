'use strict';

// opens a existing sketch to edit or create a new one and edit
exports.read = function (req, res, next) {
  res.render('sketch/index', { sketch: { id: req.params.id}});
};


exports.save = function (req, res) {
  console.log(JSON.stringify(req));
};
