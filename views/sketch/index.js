'use strict';

// opens a existing sketch to edit or create a new one and edit
exports.read = function (req, res, next) {
  req.app.db.models.Sketch.find({id: req.params.id}, function (err, sketches) {
    if (sketches.length == 0) {
      var fieldsToSet = {
        id: req.params.id,
        userCreated: {
          id: req.user._id,
          name: req.user.username,
          time: new Date().toISOString()
        }
      };
      req.app.db.models.Sketch.create(fieldsToSet, function (err, sketch) {
        console.log(err);
      });
      console.log('SKETCH CRIADO', sketches);
    } else {
      console.log('SKETCH JAH EXISTE', sketches);
    }
    console.log('SKETCH', sketches);
    console.log('ERR', err);
  });
  res.render('sketch/index', { sketch: { id: escape(JSON.stringify(req.params.id))}});
};

// maybe we don't need that...
exports.create = function (req, res, next) {

};
