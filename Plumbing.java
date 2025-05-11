package klu;

import jakarta.persistence.*;

@Entity
public class Plumbing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private double price;

    // Getters and Setters
}

