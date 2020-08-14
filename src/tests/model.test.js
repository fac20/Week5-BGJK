const test = require("tape");
const build = require("../database/build.js");
const { getUsers, createUserAndPost, getPosts, getPostInfo } = require("../model");

test("Can get users from database", t => {
  build().then(() => {
    getUsers()
      .then(users => {
        const firstUser = users[0];
        t.equal(firstUser.location, "In Hell");
        t.equal(firstUser.username, "Zi_You_in_Hell");
        t.end();
      })
      .catch(error => {
        t.error(error);
        t.end();
      });
  });
});

// test("Can add user to database", t => {
//   build().then(() => {
//     const data = {
//       username: "Harry6969",
//       location: "Your mom",
//       content: "Blaze it everyday!",
//     };
//     createUserAndPost(data)
//       .then(users => {
//         const latestUser = users[users.length - 1];
//         t.equal(latestUser.location, "Your mom");
//         t.equal(latestUser.username, "Harry6969");
//         t.end();
//       })
//       .catch(error => {
//         t.error(error);
//         t.end();
//       });
//   });
// });

test("Can get posts from database", t => {
  build().then(() => {
    getPosts()
      .then(posts => {
        const firstPost = posts[0];
        t.equal(firstPost.text_content, "Testing; one, two.");
        t.equal(firstPost.user_id, 2);
        t.end();
      })
      .catch(error => {
        t.error(error);
        t.end();
      });
  });
});

test("Can add posts to database", t => {
  const data = {
    username: "Harry6969",
    location: "Your mom",
    content: "Blaze it everyday!",
  };
  build()
    .then(createUserAndPost(data))
    .then(getPostInfo) 
    .then(posts => {
      console.log(posts);
      const latestPost = posts[posts.length - 1];
      t.equal(latestPost.user_id, 5);
      t.equal(latestPost.text_content, "Blaze it everyday!");
      ///console.log(posts)
      //console.log("fish")
      t.end();
    })
    .catch(error => {
      t.error(error);
      t.end();
    });
});
