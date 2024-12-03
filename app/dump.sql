create table if not exists teste (teste integer);

create table if not exists users (
    id serial not null unique primary key,
    username varchar(50),
    password varchar(255),
    profile_image bytea  
);