import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';
import peliculasJson from './peliculas.json';



function App() {

  const [ paginaActual, setPaginaActual ] = useState(1);
  //const [ peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 5;

  //Renderiza Toda la Pagina
  // useEffect(()=> {
  //   buscarPeliculas();
  // }, []);

  // const buscarPeliculas = async () => {

  //   let url = ("https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json");

  //   let respuesta = await fetch(url, {
  //     "method" : 'GET',
  //     "mode" : 'cors',
  //     "headers" : {
  //       "Accept" : 'application/json',
  //       "Content-type" : 'application/json'
  //     }
  //   });
  //   let json = await respuesta.json();
  //   setPeliculas(json);
  // }

  let peliculas = peliculasJson;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA);
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)}
      }
      />
    </PageWrapper>
  );
}

export default App;
