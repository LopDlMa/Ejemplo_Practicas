-- MySQL Script generated by MySQL Workbench
-- dom 27 mar 2022 18:16:00
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema default_schema
-- -----------------------------------------------------


-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `default_schema`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `carnet` INT NOT NULL,
  `usuario` VARCHAR(25) NOT NULL,
  `password` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`carnet`),
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC) VISIBLE)
ENGINE = InnoDB;

USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`catedratico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`catedratico` (
  `idCatedratico` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(100) NOT NULL,
  `tipo` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`idCatedratico`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`curso` (
  `codigo` INT NOT NULL,
  `nombre` VARCHAR(200) NOT NULL,
  `creditos` INT NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`calificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`calificacion` (
  `idcalificacion` INT NOT NULL AUTO_INCREMENT,
  `comentario` VARCHAR(250) NULL DEFAULT NULL,
  `calificacion` INT NOT NULL,
  `catedratico_idCatedratico` INT NOT NULL,
  `curso_codigo` INT NOT NULL,
  `Usuario_carnet` INT NOT NULL,
  PRIMARY KEY (`idcalificacion`),
  INDEX `fk_calificacion_catedratico_idx` (`catedratico_idCatedratico` ASC) VISIBLE,
  INDEX `fk_calificacion_curso1_idx` (`curso_codigo` ASC) VISIBLE,
  INDEX `fk_calificacion_Usuario1_idx` (`Usuario_carnet` ASC) VISIBLE,
  CONSTRAINT `fk_calificacion_catedratico`
    FOREIGN KEY (`catedratico_idCatedratico`)
    REFERENCES `mydb`.`catedratico` (`idCatedratico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_calificacion_curso1`
    FOREIGN KEY (`curso_codigo`)
    REFERENCES `mydb`.`curso` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_calificacion_Usuario1`
    FOREIGN KEY (`Usuario_carnet`)
    REFERENCES `default_schema`.`Usuario` (`carnet`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
