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

UPDATE characters
  SET darkside = true, name = 'Darth Vader'
  WHERE name = 'Anakin Skywalker';


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

-- SELECT lightsabers.colour FROM lightsabers;

SELECT characters.*, lightsabers.* FROM characters
  INNER JOIN lightsabers ON characters.id = lightsabers.owner;

-- -- All characters, irrespective of whether they have lightsabers
-- SELECT characters.*, lightsabers.* FROM characters
--   LEFT JOIN lightsabers ON characters.id = lightsabers.owner;
--
-- -- All lightsabers, irrespective of whether they have characters
-- SELECT characters.*, lightsabers.* FROM characters
--   RIGHT JOIN lightsabers ON characters.id = lightsabers.owner;
