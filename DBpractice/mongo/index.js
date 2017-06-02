var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/smmaster'); //{DB이름}에는 사용할 DB이름을 적어주시면됩니다
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  user_name: {type: String},
  passwd: {type: String}
});

Users = mongoose.model("users",UsersSchema);

exports.Users = Users;
exports.db = db;
