// getComputedStyle, vai pegar os estilos computados do body do site

const paragraphs = document.querySelector('#paragraphs')
const ps = paragraphs.querySelectorAll('p')

let styleBody = getComputedStyle(document.body)
let bgColor = styleBody.backgroundColor

for(let p of ps) {
    p.style.backgroundColor = bgColor
    p.style.color = 'white'
}
