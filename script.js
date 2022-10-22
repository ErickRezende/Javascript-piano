const piano = document.querySelector('.piano')
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2']

function elementFromHtml(piano_note) {
    const template = document.createElement('template')

    var piano_key = `
        <div class="key">
        <img src="img/white_key.png" class="ky kWhite" id="${piano_note}" draggable="false"></img>
    `
    if (piano_note.includes('E') || piano_note.includes('B')){
        piano_key += `</div>`
    } else {
        piano_key += `
        <img src="img/black_key.png" class="ky kBlack" id="${piano_note}Sus" draggable="false"></img>
        </div>
        `
    }

    template.innerHTML = piano_key.trim()

    piano.appendChild(template.content.firstElementChild)
}

for (var cont = 0; cont < notes.length; cont++){
    elementFromHtml(notes[cont])

}

piano.style.width = `${notes.length * 50}px`


const key = document.querySelectorAll('.ky')
const note = document.getElementById('note')


key.forEach((k) => {
    k.addEventListener('click', playNote)
    k.addEventListener('mousedown', pressKey)
    k.addEventListener('mouseup', unpressKey)
    k.addEventListener('mouseleave', unpressKey)

    function playNote(){
        note.src = 'notes/' + k.id + '.mp3'
        note.currentTime = 0
        note.play()
        console.log(k.id)

    }

    function pressKey(){
        if(k.src.match("img/white_key.png")){
            k.src = "img/white_key_pressed.png"
        } else if(k.src.match("img/black_key.png")){
            k.src = "img/black_key_pressed.png"
        }
    }
    function unpressKey(){
        if(k.src.match("img/white_key_pressed.png")){
            k.src = "img/white_key.png"
        } else if(k.src.match("img/black_key_pressed.png")){
            k.src = "img/black_key.png"
        }
    }
})
