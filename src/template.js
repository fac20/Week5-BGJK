const model = require("./model");

// function createarticle(something) {
//     return `template ${something } literal`
// }

function compileSkeleton(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spill.....</title>
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
        <link href="public/styles.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1 class="heading-logo">SRV|VRS</h1>
        <main>
            <form 
            method ='POST' action ='/submit'>
                <label for="name">Name :</label>
                <input type="text" id="name" name="name" required>
                <label for="location">Location :</label>
                <input type="text" id="location" name="location" required>
                <label for="post">Post :</label>
                <input type="text" id="post" name="post" required>
                <button type='submit'>SUBMIT</button>
            </form> 
           ${content}

        </main>
        <script src="public/main.js"></script>
        <script src="https://kit.fontawesome.com/8edb3d78c9.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

function compileUsers() {
  // let usersHtml = users
  //   .map(user => {
  //     `
  //           <article class="post">
  //               <p>Written by ${user.id}</p>
  //               <p>${user.location}</p>
  //           </article>
  //   `;
  //   })
  //   .join("");
  return `<h1>TESTTESTTEST</h1>`;
}

function compileHome() {
  return compileSkeleton(compileUsers());
}

module.exports = compileHome;
