function Key({ note, imgPath, colorClass }) {
    const playSound = () => {
        const sound = document.getElementById('sound')
    
        sound.src = `./src/notes/${note}.mp3`
        sound.currentTime = 0
        sound.play()
      }

    const setBrig = (value) => {
      const key = document.getElementById(note)
      key.style.filter = `brightness(${value}%)`
    }

    return <img onClick={playSound} onMouseDown={()=>{setBrig(60)}} onMouseUp={()=>{setBrig(85)}} onMouseOver={()=>{setBrig(85)}} onMouseOut={()=>{setBrig(100)}}  src={imgPath} class={colorClass} id={note} draggable="false" />
}

export default Key