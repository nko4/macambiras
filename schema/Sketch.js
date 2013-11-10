'use strict';

exports = module.exports = function(app, mongoose) {
  var sketchSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, default: 'New Sketch'},
    code: { type: String, default: '' },
    userCreated: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: String, default: '' },
      time: { type: Date, default: Date.now }
    }
  });
  app.db.model('Sketch', sketchSchema);
};
