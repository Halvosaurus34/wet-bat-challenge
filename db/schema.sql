###Schema

CREATE TABLE quotes
(
	id int not null auto_increment,
	full_name varchar(255) NOT NULL,
    phone_number varchar(30) not null,
    user_address varchar(50) not null,
	departure_airport varchar(40) not null,
    destination varchar(40) not null,
    departure_date date not null,
    return_date date not null,
    optional_transport varchar(40) null,
    price varchar(10) null,
    people int null,
    createdAt varchar(200) null,
    updatedAt varchar(200) null,
	PRIMARY KEY (id)
);	