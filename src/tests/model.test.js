const test = require("tape");
const build = require("../database/build.js");
const { getUsers, createUser, getPosts, createPost } = require("../model");

test("Can get users", t => {
  build().then(() => {
    getUsers()
      .then(users => {
        const firstUser = users[0];
        t.equal(firstUser.location, "In Hell");
        t.equal(firstUser.username, "Zi_you_in_Hell");
        t.end();
      })
      .catch(error => {
        t.error(error);
        t.end();
      });
  });
});
