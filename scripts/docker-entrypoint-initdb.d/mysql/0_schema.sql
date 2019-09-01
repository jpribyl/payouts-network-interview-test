# Add your initial schema here....
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema employees
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema employees
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `employees` DEFAULT CHARACTER SET utf8 ;
USE `employees` ;

-- -----------------------------------------------------
-- Table `employees`.`states`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `employees`.`states` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `abbreviation` CHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT into `employees`.`states` (`abbreviation`, `name`) values ('AL', 'Alabama'),
('AK', 'Alaska'),
('AZ', 'Arizona'),
('AR', 'Arkansas'),
('CA', 'California'),
('CO', 'Colorado'),
('CT', 'Connecticut'),
('DE', 'Delaware'),
('DC', 'District of Columbia'),
('FL', 'Florida'),
('GA', 'Georgia'),
('HI', 'Hawaii'),
('ID', 'Idaho'),
('IL', 'Illinois'),
('IN', 'Indiana'),
('IA', 'Iowa'),
('KS', 'Kansas'),
('KY', 'Kentucky'),
('LA', 'Louisiana'),
('ME', 'Maine'),
('MD', 'Maryland'),
('MA', 'Massachusetts'),
('MI', 'Michigan'),
('MN', 'Minnesota'),
('MS', 'Mississippi'),
('MO', 'Missouri'),
('MT', 'Montana'),
('NE', 'Nebraska'),
('NV', 'Nevada'),
('NH', 'New Hampshire'),
('NJ', 'New Jersey'),
('NM', 'New Mexico'),
('NY', 'New York'),
('NC', 'North Carolina'),
('ND', 'North Dakota'),
('OH', 'Ohio'),
('OK', 'Oklahoma'),
('OR', 'Oregon'),
('PA', 'Pennsylvania'),
('PR', 'Puerto Rico'),
('RI', 'Rhode Island'),
('SC', 'South Carolina'),
('SD', 'South Dakota'),
('TN', 'Tennessee'),
('TX', 'Texas'),
('UT', 'Utah'),
('VT', 'Vermont'),
('VA', 'Virginia'),
('WA', 'Washington'),
('WV', 'West Virginia'),
('WI', 'Wisconsin'),
('WY', 'Wyoming');


-- -----------------------------------------------------
-- Table `employees`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `employees`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `state_id` INT NOT NULL,
  `street_address` VARCHAR(50) NOT NULL,
  `city` VARCHAR(25) NOT NULL,
  `zip_code` VARCHAR(10) NOT NULL,
  `status` VARCHAR(20) NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  INDEX `fk_employees_1_idx` (`state_id` ASC),
  CONSTRAINT `fk_employees_1`
    FOREIGN KEY (`state_id`)
    REFERENCES `employees`.`states` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT into `employees`.`employees` (`first_name`, `last_name`, `email`, `phone`, `state_id`, `street_address`, `city`, `zip_code`, `status`) values ('Admin', 'McAdmin', 'admin@mcadmin.co', '406-555-5555', 2, '123 e Main', 'Bozeman', '59715', 'active');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
