INSERT INTO region (id, name) VALUES
(1, 'North America'),
(2, 'South America'),
(3, 'Europe'),
(4, 'Asia'),
(5, 'Africa'),
(6, 'Australia');

INSERT INTO users (id, username, email, password, region_id, about, created_at, updated_at, image) VALUES
(1, 'user1', 'user1@example.com', 'password1', 1, 'About user1', NOW(), NOW(), 'https://example.com/user1.jpg'),
(2, 'user2', 'user2@example.com', 'password2', 2, 'About user2', NOW(), NOW(), 'https://example.com/user2.jpg'),
(3, 'user3', 'user3@example.com', 'password3', 3, 'About user3', NOW(), NOW(), 'https://example.com/user3.jpg');

-- INSERT INTO likes (id, user_id, post_id) VALUES
-- (1, 1, 1),
-- (2, 1, 2),
-- (3, 2, 3),
-- (4, 2, 4);
INSERT INTO projectdescription (id, user_id, content, created_at)
VALUES
(1, 1, 'Project description 1', NOW()),
(2, 2, 'Project description 2', NOW());