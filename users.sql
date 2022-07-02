DROP TABLE IF EXISTS "public"."users";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."users" (
    "firstname" varchar(50),
    "lastname" varchar(50),
    "email" varchar(50),
    "phonenumber" varchar(10),
    "coupon" varchar(50)
);

INSERT INTO "public"."users" ("firstname", "lastname", "email", "phonenumber", "coupon") VALUES
('hello', 'hello2', 'email3', '288', 'www');
INSERT INTO "public"."users" ("firstname", "lastname", "email", "phonenumber", "coupon") VALUES
(NULL, NULL, 'kittikornchina2014@gmail.com', NULL, 'waddwadwdw');
INSERT INTO "public"."users" ("firstname", "lastname", "email", "phonenumber", "coupon") VALUES
('jhkhjk', 'hjkhjkhk', 'wattanai.tha@gmail.com', 'jkljlkj', 'xxxxx');