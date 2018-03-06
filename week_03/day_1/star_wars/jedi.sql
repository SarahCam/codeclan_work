-- Drop the lightsabers first as this table depends on characters
-- due to pkey issue

DROP TABLE lightsabers;

DROP TABLE characters;

CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INT,
  darkside BOOLEAN
);

INSERT INTO characters (name, age, darkside)
  VALUES ('Obi-Wan Kenobi', 30, false);

INSERT INTO characters (name, age, darkside)
  VALUES ('Anakin Skywalker', 19, false);

INSERT INTO characters (name, darkside)
  VALUES ('Yoda', false);

-- SELECT * FROM characters;
--
-- SELECT name, darkside FROM characters;
--
-- SELECT count(*) FROM characters;

UPDATE characters
  SET darkside = true, name = 'Darth Vader'
  WHERE name = 'Anakin Skywalker';

-- DELETE FROM characters
--   WHERE name = 'Obi-Wan Kenobi';

INSERT INTO characters (name, age, darkside)
  VALUES ('Ewok', 12, false);
INSERT INTO characters (name, age, darkside)
  VALUES ('Ewok', 12, false);
INSERT INTO characters (name, age, darkside)
  VALUES ('Ewok', 12, false);
INSERT INTO characters (name, age, darkside)
  VALUES ('Ewok', 12, false);
INSERT INTO characters (name, age, darkside)
  VALUES ('Ewok', 12, false);


SELECT * FROM characters;

-- SELECT count(age) FROM characters;



CREATE TABLE lightsabers (
  id SERIAL,
  colour VARCHAR(255) NOT NULL,
  hilt_metal VARCHAR(255) NOT NULL,
  owner INT REFERENCES characters(id)
);

INSERT INTO lightsabers (colour, hilt_metal, owner)
  VALUES ('green', 'gold', 3);
INSERT INTO lightsabers (colour, hilt_metal, owner)
  VALUES ('red', 'chrome', 2);
INSERT INTO lightsabers (colour, hilt_metal, owner)
  VALUES ('blue', 'alloy', 1);
INSERT INTO lightsabers (colour, hilt_metal, owner)
  VALUES ('yellow', 'bronze', 1);
-- INSERT INTO lightsabers (colour, hilt_metal, owner)
--   VALUES ('blue', 'alloy', 15);  -- violates fkey constraint, no id exists in characters

  -- INSERT INTO lightsabers (hilt_metal, owner)
  --   VALUES ('silver', 'Yoda');

SELECT * FROM lightsabers;
