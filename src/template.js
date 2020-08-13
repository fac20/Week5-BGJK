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
        <title>Survive the virus</title>
        <link rel='shortcut icon' href='https://ps.w.org/covid-19/assets/icon.svg?rev=2262770' type='image/x-icon'> 
        <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
        <link href="public/styles.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1 class="heading-logo">SRV|VRS</h1>
        <main>

            <form>

            </form>
            ${content}

        </main>
        <script src="public/main.js"></script>
        <script src="https://kit.fontawesome.com/8edb3d78c9.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

function compilePosts() {
  model.getPosts().then(posts => {
    let postsHtml = posts
      .map(post => {
        `
            <article class="post">
                <p>Written by ${post.userid}</p>       
                <p>${post.text_content}</p>    
            </article>  
           `;
      })
      .join("");
  });
}

// function compileUser(){
//     model.getUsers().then(users => {
//         let usersHtml = users.map( user => {
//            `
//            <p class = "user" >
//             Posted by: ${user.username}
//            </p>
//            `
//         })
//     })
// }

// function compileCards(){
//     usersPosts.map(userpost => {
//         `
//         <section class = "card"
//            <article class = "card__post" >${post}</article>
//            <p class = "user" >Posted by: ${user}</p>
//         </section>
//         `
//     })
// }
