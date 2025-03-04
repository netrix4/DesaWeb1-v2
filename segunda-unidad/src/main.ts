import './style.css'
import typescriptLogo from './typescript.svg'
import {  } from "../lib/getJSONData.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Fetching info from JSON</h1>
    <p class="read-the-docs">
      Proyecto para las practicas de la segunda unidad.
    </p>
  </div>
`
