const elements = [
    {tag: 'p',text: 'Texto criado com uma tag P'},
    {tag: 'div',text: 'Texto criado com uma tag DIV'},
    {tag: 'footer',text: 'Texto criado com uma tag FOOTER'},
    {tag: 'section',text: 'Texto criado com uma tag SECTTION'},
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i < elements.length; i++){
    let = {tag, text} = elements[i]
    let createTag =  document.createElement(tag)
    
    createTag.innerHTML = text
    div.appendChild(createTag)
}

container.appendChild(div)
