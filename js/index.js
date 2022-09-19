document.addEventListener("DOMContentLoaded", function () {
    getBooks()
    showBookDetails()
});

function getBooks() {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => books.map(book => {
        const booksContainer = document.getElementById('list-panel')
        const li = document.createElement('li')
        li.innerText = book.title
        booksContainer.append(li)

        li.addEventListener('click', (e) => showBookDetails(e, book))
    }))
}

function showBookDetails(e, book) {
    e.preventDefault()
    const showPanel = document.getElementById('show-panel')
    showPanel.innerHTML = ''
    const image = document.createElement('img')
    image.src = book.img_url

    const titleH1 = document.createElement('h1')
    titleH1.innerText = book.title

    const description = document.createElement('p')
    description.innerText = book.description

    const userUL = document.createElement('ul')

    book.users.forEach(user => {
        const userLI = document.createElement('li')
        userLI.innerText = user.username
        userUL.append(userLI)
    })

    showPanel.append(titleH1, image, description, userUL)
}

// likes fxn and event listener - patch request within the function