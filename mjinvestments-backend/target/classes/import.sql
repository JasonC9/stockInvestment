-- default users declarations
INSERT INTO mj_users (id, first_name, is_admin, username, pass_word) VALUES (DEFAULT,'admin', 1, 'admin', 'admin');
INSERT INTO mj_users (id, first_name, is_admin, username, pass_word) VALUES (DEFAULT,'max', 0, 'max', 'max');
INSERT INTO mj_users (id, first_name, is_admin, username, pass_word) VALUES (DEFAULT,'jason', 0, 'jasonuser', 'password');
-- default stock information
INSERT INTO mj_stock (stock_Id,description,img,market_cap,stock_name,total_invested, price) VALUES (DEFAULT,'Fox and Duck software provides an innovative new way to feed your ducks directly to your ducks. You can now completely circumvent needing to manually pick up your ducks, put them in a row, then finally throwing them at your foxes from a safe distance!','https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_64398681-e1492449982668.jpg?auto=format&q=60&fit=max&w=930',23010010,'Fox and Duck Software',40312, 3);
INSERT INTO mj_stock (stock_Id,description,img,market_cap,stock_name,total_invested, price) VALUES (DEFAULT,'Find a pet, sell a pet, heck, you could even become a pet on this new platform for all things pets! This application is a one-stop-shop for pets, pet supplies, and pet-related activities.','https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_75253137-e1492451947299.png?auto=format&q=60&fit=max&w=930',4302982,'Petopia',349012, 2);
INSERT INTO mj_stock (stock_Id,description,img,market_cap,stock_name,total_invested, price) VALUES (DEFAULT,'We start you at one place, and then suddenly, you find yourself at another. How did you get there? It is now old fashioned to get from one place to another in a straight line. We give you a GPS route that takes you the parabolic way there while enriching your travel experience with cool snack stops or hip selfie backdrops.','https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_63424222-e1492477153624.png?auto=format&q=60&fit=max&w=930',2309810,'Parabola',32342, 2.50);
-- default credit card information
INSERT INTO mj_credit_card (id, credit_card_number, cvc, expire_month, expire_year, street_address, state, city, zipcode, user_id) VALUES(DEFAULT, '123456789', '987', '10', '2022', '1234 Hague Road', 'Indiana', 'Indianapolis', '46660', 2);
INSERT INTO mj_credit_card (id, credit_card_number, cvc, expire_month, expire_year, street_address, state, city, zipcode, user_id) VALUES(DEFAULT, '98765421', '789', '02', '2023', '236 Johnson Ave', 'Illinois', 'Chicago', '65230', 3);
-- default assigned holdings
INSERT INTO mj_holdings (id, amount_held, stock_id, user_id) VALUES (DEFAULT, 435, 2, 2);
INSERT INTO mj_holdings (id, amount_held, stock_id, user_id) VALUES (DEFAULT, 233, 3, 2);
INSERT INTO mj_holdings (id, amount_held, stock_id, user_id) VALUES (DEFAULT, 623, 1, 3);