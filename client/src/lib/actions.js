const  out = document.querySelector('#out')
export function render(view,data){
    out.innerHTML = view(data)
}

