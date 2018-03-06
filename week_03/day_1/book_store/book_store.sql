-- Author
-- - name
-- - age
--
-- Book
-- - title
-- - price
-- - author

DROP TABLE book;
DROP TABLE author;

CREATE TABLE author (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INT
);

CREATE TABLE book (
  title VARCHAR(255),
  price FLOAT,
  author INT REFERENCES author(id)
);

INSERT INTO author (name, age)
  VALUES ('Iain Banks', 50);
INSERT INTO author (name, age)
  VALUES ('William Shakespeare', 500);
INSERT INTO author (name, age)
  VALUES ('Charles Dickens', 200);

INSERT INTO book (title, price, author)
  VALUES ('The Crow Road', 7.99, 1);
INSERT INTO book (title, price, author)
  VALUES ('Whit', 6.99, 1);
INSERT INTO book (title, price, author)
  VALUES ('MacBeth', 24.99, 2);
INSERT INTO book (title, price, author)
  VALUES ('Great Expectations', 19.99, 3);

SELECT * FROM author;
SELECT * FROM book;
