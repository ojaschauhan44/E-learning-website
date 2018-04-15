var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	owner: {type: Schema.Types.ObjectId, ref: 'Detail'},
	answer: {type: String, default: 0},

});

//module.exports = mongoose.model('Answer', AnswerSchema);


Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;
