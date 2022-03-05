const {UserList} = require("./../FakeData");

const resolvers = {
  Query: {
    users() {
      // This is where you would make a call to the database (if you had one)
      return UserList;
    }
  }
};

module.exports = { resolvers };