import React, { Fragment, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
const EditarAutor = () => {
  const axios = require("axios");
  const Swal = require("sweetalert2");

  const { autorEditar } = useParams();
  const autorDatosEditar = JSON.parse(autorEditar);

  let history = useHistory();
  const [autor, setAutor] = useState({
    nombre: autorDatosEditar.nombre,
    alta: autorDatosEditar.alta,
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
      title: "¿Deseas Editar el Autor?",
      showCancelButton: true,
      confirmButtonText: "Crear",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `http://localhost:8080/autores/editar/${autorDatosEditar.id}`,
            autor
          )
          .then((res) => {
            if (res.status == 200) {
              Swal.fire("Autor Editado con exito!", "", "success");
              setAutor({ nombre: "", alta: false });
              history.push("/listaAutores");
            }
          });
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <Fragment>
      <div className="container form-editar">
        <h1>Editar Autor</h1>
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
              defaultValue={autorDatosEditar.nombre}
            />
          </div>

          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="alta"
              name="alta"
              onChange={handleChange}
              defaultValue={autorDatosEditar.alta}
            />
            <label class="form-check-label" for="alta">
              Alta
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Editar
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default EditarAutor;
