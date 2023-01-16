const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Set username of admin'],
    },
    id: {
      type: String,
      required: [true, 'Set id if admin'],
    },
  },
  {
    versionKey: false,
  }
);

const dbAdmins = mongoose.model('admins', schema);
module.exports = {
  dbAdmins,
};
