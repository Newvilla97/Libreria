/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.egg.example.Servicios;

import edu.egg.example.Entidades.Autor;
import edu.egg.example.Repositorios.AutorRepositorio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author G Y L GROUP
 */
@Service
public class AutorService {
    @Autowired
    AutorRepositorio ar;
    
    @Transactional
    public Autor crearAutor(Autor autorSchema){
        Autor autor = new Autor();
        autor.setNombre(autorSchema.getNombre());
        autor.setAlta(autorSchema.isAlta());
        ar.save(autor);
        return autor;
    }
    
    public List<Autor> obtenerAutores(){
     
        List<Autor> autores = ar.findAll();
        return autores; 
    }
    
    public void eliminarAutor(Integer id){
        ar.deleteById(id);
        
    }
    
    public void editarAutor(Optional<Autor> autor, Autor autorEdit){
       // BeanUtils.copyProperties(autorEdit,autor);
        autor.get().setNombre(autorEdit.getNombre());
        autor.get().setAlta(autorEdit.isAlta());
      
         ar.save(autor.get());
    }
    
    public Optional<Autor> buscarPorId(Integer id){
       return ar.findById(id);
    }
    
}
