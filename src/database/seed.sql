insert into carts (user_id, created_at, updated_at, status) values 
('d4479040-e96f-45e8-be53-29666afe4995', current_date, current_date, 'OPEN'),
('aeac07bf-4513-4854-810a-e662464e7cf1', current_date, current_date, 'ORDERED'),
('5c134872-79f7-45e5-b9ab-92dd56510b17', current_date, current_date, 'OPEN');

insert into cart_items (cart_id, count) values
('759e04f2-830e-4550-b200-13d8f21ac2eb', 4),
('759e04f2-830e-4550-b200-13d8f21ac2eb', 1),
('759e04f2-830e-4550-b200-13d8f21ac2eb', 2),
('5eeedc1a-274f-463b-a137-1d9851068c70', 4),
('5eeedc1a-274f-463b-a137-1d9851068c70', 1),
('75c240e2-bbe0-4b79-a8ec-d1f242349511', 1);