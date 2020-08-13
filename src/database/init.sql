BEGIN;

    CREATE TABLE users
    (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        location VARCHAR(255)
    );

    CREATE TABLE posts
    (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        text_content TEXT NOT NULL
    );




    COMMIT;