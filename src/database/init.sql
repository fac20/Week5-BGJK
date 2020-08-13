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

INSERT INTO users VALUES
    (1, "Zi_You_in_Hell", "In Hell"),
    (2, "jhart5", "A dark basement"),
    (3, "Ephivecent", "Nowhere"),
    (4, "Khadija", "The Matrix")
;


INSERT INTO posts VALUES
    (1, 2, "Testing; one, two.")
    (2, 4, "I love marmalade so much. It is the best.")
    (3, 2, "Bill Gates is responsible for coronavirus.")
    (4, 1, "Nailed it!!!")
;

COMMIT;