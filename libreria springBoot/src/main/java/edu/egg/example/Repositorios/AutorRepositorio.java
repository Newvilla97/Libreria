/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.egg.example.Repositorios;

import edu.egg.example.Entidades.Autor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author G Y L GROUP
 */
@Repository
public interface AutorRepositorio extends JpaRepository<Autor,Integer> {
    
}
