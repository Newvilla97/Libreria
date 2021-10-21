import ListaAutores from "./components/Autor/ListaAutores";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CrearAutor from "./components/Autor/CrearAutor";
import EditarAutor from "./components/Autor/EditarAutor";

function App() {
  return (
    <Router>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Libros
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/listaAutores">
                    <a class="nav-link" href="#">
                      Autores
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Editoriales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/editarAutor/:autorEditar">
          <EditarAutor />
        </Route>
        <Route path="/listaAutores" component={ListaAutores} />
        <Route path="/crearAutor">
          <CrearAutor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
