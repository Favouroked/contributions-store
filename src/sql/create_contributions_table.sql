CREATE TABLE IF NOT EXISTS contributions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lastName VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    streetAddress VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    postalCode VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    formOfContact VARCHAR(255) NOT NULL,
    formOfPayment VARCHAR(255) NOT NULL,
    frequencyOfDonation VARCHAR(255) NOT NULL,
    donationAmount DECIMAL(10, 2),
    comments TEXT
);
