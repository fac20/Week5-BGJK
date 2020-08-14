const db = require("./database/connection");

// A query to select all users from the users column
function getUsers() {
  return db.query("SELECT * FROM users").then(result => result.rows);
}

// get posts from posts table
function getPosts() {
  return db.query("SELECT * FROM posts").then(result => result.rows);
}

function getPostInfo() {
    return db.query(
      "SELECT users.username, posts.text_content FROM users INNER JOIN posts ON users.id = posts.user_id"
    )
  .then( result => result.rows)

}

// Insert new user into user array
function createUserAndPost(data) {
  // User information taken from form placed in variable
  const userValues = [data.username, data.location];
  //  Place the new user data into the table with a db.query
  db.query(
      "INSERT INTO users(username, location) VALUES($1, $2) RETURNING id",
      userValues
    )
    .then(result => {
      console.log(result.rows[0].id);
      const postValues = [result.rows[0].id, data.content];
      return db.query(
        "INSERT INTO posts(user_id, text_content) VALUES($1, $2) RETURNING id, user_id, text_content", 
        postValues 
      )
    })
    .then(result => {
      console.log(result.rows)
      return result.rows
    })
}

// Insert new post into posts table
function createPost(data) {
  createUser(data)
  .then( id => {
    const postValues = [id[0].id, data.content];
    //console.log(postValues);
    return db.query(
      "INSERT INTO posts(user_id, text_content) VALUES($1, $2)",
      postValues
    )
  })
//   // Get the primary key of the user and place it in array with the post text content
//   const postValues = [
//     //db.query(`SELECT id FROM users WHERE username = ${data.username}`),
//     createUser(data),
//     data.content,
//   ];
//   // Place the post text into the posts table along side the user_id foreign key
//   return db.query(
//     "INSERT INTO posts(user_id, text_content) VALUES($1, $2)",
//     postValues
//   );
}
module.exports = { getUsers, createUserAndPost, getPosts, getPostInfo };
