const change = document.getElementById('change');
const body = document.body

change.addEventListener("change", e => {
    e.preventDefault()
    if(body.classList.contains('Dark-Theme')){
        body.classList.remove('Dark-Theme')
        body.classList.add('Light-Theme')
    }else{
        body.classList.remove('Light-Theme')
        body.classList.add('Dark-Theme')
    }
    
});