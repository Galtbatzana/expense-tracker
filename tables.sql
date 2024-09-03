
CREATE TABLE IF NOT EXISTS playing_with_neon(id SERIAL PRIMARY KEY, name TEXT NOT NULL, value REAL);

CREATE TABLE category (
  id TEXT PRIMARY KEY, 
  name TEXT NOT NULL
)

ALTER TABLE category 
  ADD COLUMN color varchar, 
  ADD COLUMN icon varchar;
 


SELECT id, name FROM category;
SELECT * FROM category;

DROP TABLE transaction;
CREATE TYPE transactionType AS ENUM ('INCOME', 'EXPENSE');
CREATE TABLE transaction (
  id char(36) PRIMARY KEY,
  amount decimal (10,2),
  categoryID char (36),
  type transactionType,
  date DATE,
  payee varchar (36),
  note TEXT,
  FOREIGN KEY (categoryID) REFERENCES category(id)
)

insert into transaction values ('Tsenguune', 1000, '2723a4a2-c73d-4687-88db-55803d44a606', 'INCOME', CURRENT_DATE, 'Batzorig', 'uruu tuluv'); 


SELECT transaction.amount, category.name, category.icon, transaction.type from transaction left join category on transaction.categoryID = category.id  


INSERT INTO playing_with_neon(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;

