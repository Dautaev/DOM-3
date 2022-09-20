const text1 = () => {
    const h1 = document.createElement('h1')
    h1.textContent = 'Работа с DOM'
    document.body.prepend(h1)
}
text1()


const text2 = () => {
    const div = document.querySelector('#main')
    const a = document.createElement('a')
    a.href = 'https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC'
    a.textContent = 'Статья DOM'
    div.append(a)
}
text2()

const text3 = (color) => {
 document.body.style.backgroundColor = color
}
text3('red')

const text4 = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    const ul = document.querySelector('#list')
    ul.append(li)
}
text4('DOM')

const text5 = () => {
    const div = document.querySelector('#copyright')
    div.remove(div)
}
text5()

console.log(document.body)