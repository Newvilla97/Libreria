/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.egg.example.Controlador;

import edu.egg.example.Entidades.Autor;
import edu.egg.example.Servicios.AutorService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author G Y L GROUP
 */
@Controller
@RequestMapping("/autores")
@CrossOrigin("*")
public class AutorController {
    @Autowired
    AutorService as;
    
     @RequestMapping(value = "/autores", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Autor> listaAutores(){
    List<Autor> autores = as.obtenerAutores();
    return autores;
    }
    
   @RequestMapping(value = "/crear", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity < String > crearAutor (@RequestBody Autor autor){
       as.crearAutor(autor);
         return ResponseEntity.status(HttpStatus.CREATED).build();
         
    }
    
    @RequestMapping(value = "/eliminar/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity < String > eliminarAutor (@PathVariable(value="id") Integer autorId){
       as.eliminarAutor(autorId);
         return ResponseEntity.status(HttpStatus.OK).build();
         
    }
    
        @RequestMapping(value = "/editar/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity < String > editarAutor (@RequestBody Autor autorEdit,@PathVariable(value="id") Integer autorId){
       
        Optional<Autor> autor = as.buscarPorId(autorId);
        if(!autor.isPresent()){
             return ResponseEntity.notFound().build();
        }
        as.editarAutor(autor, autorEdit);
         return ResponseEntity.status(HttpStatus.OK).build();
         
    }
}
