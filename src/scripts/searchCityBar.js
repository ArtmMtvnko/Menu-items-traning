const form = document.querySelector('.search-form')
const searchBar = document.querySelector('.search-bar')
let inputValue

form.addEventListener('submit', e => {
    e.preventDefault()
    inputValue = searchBar.value.trim()
    searchBar.value = null
    console.log(inputValue, typeof inputValue)
})