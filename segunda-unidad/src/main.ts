import "./style.css";
import {
  tryMe,
  getJsonData,
  getJsonDataByCategorie,
  getJsonDataByKeyWord,
} from "../lib/getJSONData";
import { SmaeResponse } from "../interfaces/SMAEResponse.ts";
import { SimpleSMAEResponse } from "../interfaces/SimpleSMAEResponse.ts";

// import "../lib/getJSONData.ts";

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Repaso ts</h1>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let isEnabled = true;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="card-element-wrapper">
      <div class="card-element-header">
        <h2>Consultador de Información</h2>
      </div>
      <div class="card-element-content" id="cardContent">
        <p class="card-description">
          Información del Sistema Mexicano de Alimentos Equivalentes traído
          desde Firebase.
        </p>
        <fieldset>
          <legend>Buscar por:</legend>
          <div>
            <input type="radio" id="todos" name="drone" value="todos" checked />
            <label for="todos">Todos</label>
          </div>
          <div>
            <input type="radio" id="categoria" name="drone" value="categoria" />
            <label for="categoria">Categoria</label>
            <select id="categories">
              <option value="A.O.A Alto en grasa">A.O.A Alto en grasa</option>
              <option value="A.O.A Bajo en grasa">A.O.A Bajo en grasa</option>
              <option value="A.O.A Moderado en grasa">A.O.A Moderado en grasa</option>
              <option value="A.O.A Muy bajo en grasa">A.O.A Muy bajo en grasa</option>
              <option value="Alimentos libres en energía">Alimentos libres en energía</option>
              <option value="Azúcares con grasa">Azúcares con grasa</option>
              <option value="Azúcares sin grasa">Azúcares sin grasa</option>
              <option value="Bebidas alcoholicas">Bebidas alcoholicas</option>
              <option value="Cereales con grasa">Cereales con grasa</option>
              <option value="Cereales Sin Grasa">Cereales Sin Grasa</option>
              <option value="Frutas">Frutas</option>
              <option value="Grasas con proteína">Grasas con proteína</option>
              <option value="Grasas sin proteína">Grasas sin proteína</option>
              <option value="Leche con azúcar">Leche con azúcar</option>
              <option value="Leche descremada">Leche descremada</option>
              <option value="Leche entera">Leche entera</option>
              <option value="Leche semi">Leche semi</option>
              <option value="Leguminosas">Leguminosas</option>
              <option value="Verduras">Verduras</option>
            </select>
          </div>
          <div>
            <input type="radio" id="nombre" name="drone" value="nombre" />
            <label for="nombre">Palabra Clave</label>
          </div>
        </fieldset>
        <div class="inputs-container" id="inputsContainer">
          <input class="search-input" type="text" placeholder="Buscar" ${
            isEnabled ? "" : "disabled"
          } id="search" />
          <button id="consult">Consultar</button>
        </div>
        <div class="results-container" id="results-container">
          <table id="results-table"></table>
        </div>
      </div>
    </div>
`;

const toogleSearchBar = () => {
  console.log("Prender barra de busqueda");
  isEnabled = false;
  // isEnabled = !isEnabled;
};

document.getElementById("nombre")?.addEventListener("change", () => {
  toogleSearchBar();
});

document.getElementById("consult")!.addEventListener("click", () => {
  if ((document.getElementById("todos") as HTMLInputElement).checked) {
    console.clear();
    // (document.getElementById("search") as HTMLInputElement).disabled = true;
    // document.querySelector<HTMLInputElement>("#search")!.disabled = true;

    console.log("Todos");
    getJsonData()
      .then((alimentos: SimpleSMAEResponse[]) => {
        let newContent = "<th>Alimentos</th>";

        alimentos.forEach((alimento: SimpleSMAEResponse) => {
          newContent += `<tr><td>${alimento.Alimento}</td></tr>`;
        });
        document.querySelector<HTMLDivElement>(
          "#results-table"
        )!.innerHTML = `${newContent}`;
      })
      .then(() => {
        console.log("Contenido agregado");
      })
      .catch((err) => console.log(err));
  }
  if ((document.getElementById("categoria") as HTMLInputElement).checked) {
    console.clear();
    const inputValue: string = (
      document.getElementById("categories") as HTMLSelectElement
    ).value;

    console.log(`El elemento seleccionado es: ${inputValue}`);

    getJsonDataByCategorie(inputValue)
      .then((alimentos: SmaeResponse[]) => {
        let newContent =
          "<tr><th>Nombre</th><th>Categoria</th><th>Calcio(mG)</th><th>Cantidad</th></tr>";

        alimentos.forEach((alimento: SmaeResponse) => {
          newContent += `<tr>
          <td>${alimento.Alimento}</td>
          <td>${alimento.Categoría}</td>
          <td>${alimento.Calciomg}</td>
          <td>${alimento.Cantidad}</td>
          </tr>`;
        });
        document.querySelector<HTMLDivElement>(
          "#results-table"
        )!.innerHTML = `${newContent}`;
      })
      .then(() => {
        console.log("Contenido agregado");
      })
      .catch((err) => console.log(err));
  }
  if ((document.getElementById("nombre") as HTMLInputElement).checked) {
    console.clear();
    console.log("Nombre esta seleccionado");
    const inputValue = (document.getElementById("search") as HTMLInputElement)
      .value;
    getJsonDataByKeyWord(inputValue)
      .then((alimentos: SmaeResponse[]) => {
        let newContent =
          "<tr><th>Nombre</th><th>Categoria</th><th>Calcio(mG)</th><th>Cantidad</th></tr>";

        alimentos.forEach((alimento: SmaeResponse) => {
          newContent += `<tr>
          <td>${alimento.Alimento}</td>
          <td>${alimento.Categoría}</td>
          <td>${alimento.Calciomg}</td>
          <td>${alimento.Cantidad}</td>
          </tr>`;
        });
        document.querySelector<HTMLDivElement>(
          "#results-table"
        )!.innerHTML = `${newContent}`;
      })
      .then(() => {
        console.log("Contenido agregado");
      })
      .catch((err) => console.log(err));
  }
  (document.getElementById("search") as HTMLInputElement).value = "";
});
