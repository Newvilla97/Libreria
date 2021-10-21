import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const CrearAutor = ({ setAutores }) => {
  const axios = require("axios");
  const Swal = require("sweetalert2");
  let history = useHistory();
  const [autor, setAutor] = useState({
    nombre: "",
    alta: false,
  });

  const handleChange = (e) => {
    setAutor({
      ...autor,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¿Deseas Crear el Autor?",
      showCancelButton: true,
      confirmButtonText: "Crear",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:8080/autores/crear/", autor)
          .then((res) => {
            if (res.status == 201) {
              Swal.fire("Autor creado con exito!", "", "success");
              setAutor({ nombre: "", alta: false });
              history.push("/listaAutores");
            }
          });
      } else if (result.isDenied) {
      }
    });
  };

  const { nombre, alta } = autor;
  return (
    <Fragment>
      <div className="container form-crear">
        <h1>Crear Autor</h1>
        <form onSubmit={onSubmit}>
          <div class="mb-3">
            <label for="nombre" class="form-label">
              Nombre del Autor
            </label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={nombre}
            />
          </div>

          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="alta"
              name="alta"
              onChange={handleChange}
              value={alta}
            />
            <label class="form-check-label" for="alta">
              Alta
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Crear
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default CrearAutor;
