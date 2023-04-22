\c destinationchange

INSERT INTO users (id, username, email, password, region_id, about, created_at, updated_at, image)
VALUES
(1, 'johndoe', 'johndoe@example.com', 'password123', 1, 'About John Doe', NOW(), NOW(), 'https://example.com/johndoe.jpg'),
(2, 'janedoe', 'janedoe@example.com', 'password456', 2, 'About Jane Doe', NOW(), NOW(), 'https://example.com/janedoe.jpg');
-- INSERT INTO likes (id, user_id, post_id) VALUES
-- (1, 1, 1),
-- (2, 1, 2),
-- (3, 2, 3),
-- (4, 2, 4);

INSERT INTO region (id, name) VALUES
(1, 'North America'),
(2, 'South America'),
(3, 'Europe'),
(4, 'Asia'),
(5, 'Africa'),
(6, 'Australia');

INSERT INTO users (id, username, email, password, region_id, about) VALUES
(1, 'john_doe', 'john_doe@example.com', 'password123', 1, 'Hello, I am John Doe.'),
(2, 'jane_doe', 'jane_doe@example.com', 'password456', 3, 'Hello, I am Jane Doe.');

INSERT INTO likes (id, user_id, post_id) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 2, 4);

INSERT INTO about (id, user_id, content) VALUES
(1, 1, 'I am excited to connect and work on a way to create sustainability in clothing industries to decrease fast fashion gas emissions'),
(2, 2, 'I am passionate about climate change and global warming I want to find a way to save the ocean by decreasing plastics from getting in the ocean');