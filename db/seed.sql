\c destinationchange

INSERT INTO users (username, email, password, region_id, about, created_at, updated_at, image)
VALUES
('johndoe', 'johndoe@example.com', 'password123', 1, 'About John Doe', NOW(), NOW(), 'https://example.com/johndoe.jpg'),
('janedoe', 'janedoe@example.com', 'password456', 2, 'About Jane Doe', NOW(), NOW(), 'https://example.com/janedoe.jpg');

INSERT INTO region (id, name) VALUES
(1, 'North America'),
(2, 'South America'),
(3, 'Europe'),
(4, 'Asia'),
(5, 'Africa'),
(6, 'Australia');

INSERT INTO projectDescription (id, user_id, content) VALUES
(1, 1, 'I am excited to connect and work on a way to create sustainability in clothing industries to decrease fast fashion gas emissions'),
(2, 2, 'I am passionate about climate change and global warming I want to find a way to save the ocean by decreasing plastics from getting in the ocean');