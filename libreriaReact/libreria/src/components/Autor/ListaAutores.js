import React, { Fragment, useState, useEffect } from "react";
import "./Autor.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ListaAutores = () => {
  const [autores, setAutores] = useState([]);

  const axios = require("axios");
  const Swal = require("sweetalert2");

  const obtenerListaAutores = async () => {
    await axios
      .get("http://localhost:8080/autores/autores/")
      .then(function (response) {
        setAutores(response.data);
      });
  };

  const eliminarAutor = (autor) => {
    Swal.fire({
      title: "¿Seguro deseas eliminar este Autor?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/autores/eliminar/${autor.id}`)
          .then(function (response) {});
        Swal.fire("Eliminado!", "Autor eliminado con exito.", "success");
        setAutores([]);
      }
    });
  };

  useEffect(() => {
    obtenerListaAutores();
  });
  return (
    <Fragment>
      <div className="container">
        <div className="header">
          <h1>Lista Autores</h1>
        </div>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group" role="group" aria-label="Third group">
            <Link to="/CrearAutor">
              <button className="btn btn-warning " type="button">
                Crear Autor
              </button>
            </Link>
          </div>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Alta</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {autores.map((autor) => (
              <tr>
                <td>{autor.nombre}</td>
                <td>{autor.alta ? "Alta" : "Baja"}</td>

                <td>
                  <Link to={`/editarAutor/${JSON.stringify(autor)}`}>
                    <button type="button" className="btn btn-success">
                      Editar
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarAutor(autor)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListaAutores;
