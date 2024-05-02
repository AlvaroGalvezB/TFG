<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240501165530 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE circuitos (id INT AUTO_INCREMENT NOT NULL, imagen VARCHAR(255) NOT NULL, fecha VARCHAR(255) NOT NULL, posicion INT NOT NULL, nombre VARCHAR(255) NOT NULL, bandera VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE teams (id INT AUTO_INCREMENT NOT NULL, logo VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, car VARCHAR(255) NOT NULL, posicion INT NOT NULL, puntos VARCHAR(255) NOT NULL, image_piloto1 VARCHAR(255) NOT NULL, name_piloto1 VARCHAR(255) NOT NULL, image_piloto2 VARCHAR(255) NOT NULL, name_piloto2 VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE circuitos');
        $this->addSql('DROP TABLE teams');
    }
}
