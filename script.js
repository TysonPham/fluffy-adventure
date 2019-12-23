const keys = document.querySelectorAll("div.white-key, div.black-key")

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classlist.remove('active')
    })
}
