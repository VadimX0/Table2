create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    post_date DATE, 
    post_name VARCHAR(255),
    amount INTEGER,
    distance INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);