<?php

namespace App\Entity;

use App\Repository\TeamsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TeamsRepository::class)]
class Teams
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $logo = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $car = null;

    #[ORM\Column]
    private ?int $posicion = null;

    #[ORM\Column(length: 255)]
    private ?string $puntos = null;

    #[ORM\Column(length: 255)]
    private ?string $image_piloto1 = null;

    #[ORM\Column(length: 255)]
    private ?string $name_piloto1 = null;

    #[ORM\Column(length: 255)]
    private ?string $image_piloto2 = null;

    #[ORM\Column(length: 255)]
    private ?string $name_piloto2 = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): static
    {
        $this->logo = $logo;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getCar(): ?string
    {
        return $this->car;
    }

    public function setCar(string $car): static
    {
        $this->car = $car;

        return $this;
    }

    public function getPosicion(): ?int
    {
        return $this->posicion;
    }

    public function setPosicion(int $posicion): static
    {
        $this->posicion = $posicion;

        return $this;
    }

    public function getPuntos(): ?string
    {
        return $this->puntos;
    }

    public function setPuntos(string $puntos): static
    {
        $this->puntos = $puntos;

        return $this;
    }

    public function getImagePiloto1(): ?string
    {
        return $this->image_piloto1;
    }

    public function setImagePiloto1(string $image_piloto1): static
    {
        $this->image_piloto1 = $image_piloto1;

        return $this;
    }

    public function getNamePiloto1(): ?string
    {
        return $this->name_piloto1;
    }

    public function setNamePiloto1(string $name_piloto1): static
    {
        $this->name_piloto1 = $name_piloto1;

        return $this;
    }

    public function getImagePiloto2(): ?string
    {
        return $this->image_piloto2;
    }

    public function setImagePiloto2(string $image_piloto2): static
    {
        $this->image_piloto2 = $image_piloto2;

        return $this;
    }

    public function getNamePiloto2(): ?string
    {
        return $this->name_piloto2;
    }

    public function setNamePiloto2(string $name_piloto2): static
    {
        $this->name_piloto2 = $name_piloto2;

        return $this;
    }
}
