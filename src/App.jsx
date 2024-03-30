import { useState } from "react";
import Key from "./Key";
import './style.css'

function App() {
  /*
    Define as teclas que o piano vai possuir de acordo com suas
    notas musicais (apenas notas fundamentais, sustenidos, que são as teclas pretas,
    são gerados automaticamente a partir da fundamental, se ela possuir)

    Cifras usadas na música:
    C: nota Dó
    D: nota Ré
    E: nota Mi
    F: nota Fá
    G: nota Sol
    A: nota Lá
    B: nota Si

    E o número a frente simboliza a mesma nota, porém uma "oitava" ou um 
    "harmônico" acima, ou seja, mesma nota musical porém, mais aguda
  */
  const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3']

  return (
    <div class="container">
      <h1>JavaScript Piano</h1>

      <div class="piano" draggable="false" style={{"width": NOTES.length * 50}}>
        {
          NOTES.map((note) => {
            return (
              <div class="key">{/* Cada classe "key" corresponde a uma tecla branca e, se tiver, uma preta*/}
                {/* Tecla branca */}
                <Key note={note} imgPath="./src/assets/white_key.png" colorClass="ky kWhite"/>
                {
                  !(note.includes('E') || note.includes('B')) ? // As notas B e E, não possuem sustenios, ou teclas pretas
                    // Tecla preta
                    <Key note={note+'Sus'} imgPath="./src/assets/black_key.png" colorClass="ky kBlack"/>
                  :
                      null 
                }

              </div>
            )
          })
        }
      </div>

      <audio id="sound"></audio>

    </div>
  )
}

export default App
