--
-- TABLE CREATION
--

-- @block
-- table structure for the 'certifications' table
CREATE TABLE Certifications (
    applicant_id int UNSIGNED NOT NULL,
    issuance_id int UNSIGNED NOT NULL,
    document_id int UNSIGNED NOT NULL,
    -- posible values pending: 0, success: 1, failed: 2
    certification_status tinyint DEFAULT 0,
    invoice_number int UNSIGNED,
    PRIMARY KEY (applicant_id, issuance_id, document_id),
    FOREIGN KEY (applicant_id) REFERENCES Applicants(applicant_id),
    FOREIGN KEY (issuance_id) REFERENCES Issuance(issuance_id),
    FOREIGN KEY (document_id) REFERENCES Documents(document_id),
    FOREIGN KEY (invoice_number) REFERENCES Reciepts(invoice_number)
);

-- @block
-- table structure for the 'applicants' table
CREATE TABLE Applicants (
    applicant_id int UNSIGNED NOT NULL AUTO_INCREMENT,
    name varchar (50) NOT NULL,
    birthdate date NOT NULL,
    address varchar (50),
    contact_number bigint UNIQUE,
    PRIMARY KEY (applicant_id)
);

-- @block
-- table structure for the 'issuance' table
CREATE TABLE Issuance (
    issuance_id int UNSIGNED NOT NULL AUTO_INCREMENT,
    certification_type varchar (50) NOT NULL,
    PRIMARY KEY (issuance_id)
);

-- @block
-- table structure for the 'documents' table
CREATE TABLE Documents (
    document_id int UNSIGNED NOT NULL AUTO_INCREMENT,
    document_type varchar (50) NOT NULL,
    -- possible values pending: 0, valid: 1, invalid: 2
    document_validation tinyint NOT NULL DEFAULT 0,
    PRIMARY KEY (document_id)
);

-- @block
-- table structure for the 'reciepts' table
CREATE TABLE Reciepts (
    invoice_number int UNSIGNED NOT NULL AUTO_INCREMENT,
    amount int UNSIGNED NOT NULL,
    payment_date date NOT NULL,
    PRIMARY KEY (invoice_number)
);

--
-- TRIGGERS
--

-- @block
-- create a trigger to check the age of the applicant
CREATE TRIGGER applicants_bi 
BEFORE INSERT 
ON Applicants
FOR EACH ROW
BEGIN
    IF NEW.birthdate >= CURDATE() - INTERVAL 17 YEAR THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Applicant must be over 17 years old.';
    END IF;
END;

-- @block
-- create a trigger to check if the applicant is a resident of 'saragoza'
CREATE TRIGGER check_address_bi
BEFORE INSERT ON Applicants
FOR EACH ROW
BEGIN
    IF NEW.address NOT LIKE '%saragoza%' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Applicant must be a resident of Saragoza.';
    END IF;
END;

-- TEST

-- @block
-- test table
CREATE TABLE TEST (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (50),
    age int,
    address varchar (50),
    PRIMARY KEY (id)
);

-- @block
INSERT INTO TEST (name)
VALUES
    ('Ameer'),
    ('Winchester'),
    ('Lorence'),
    ('Leopoldo');

-- @block
-- NO1
SELECT 5+10 AS RESULT;

-- @block
-- NO2
SELECT *
FROM test
WHERE id = (SELECT MAX(id) FROM test);

-- @block
-- NO7
SELECT name, COUNT(id) AS 'Number of Workers'
FROM TEST
GROUP BY name
where COUNT(id) < 2;


