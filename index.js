// JavaScript code for managing books collection with objects and navigation
document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('bookList');
    const content = document.getElementById('content');
    const books = [];
  
    function addBook(title, author) {
      const book = { title, author };
      books.push(book);
      displayBooks();
    }
  
    function removeBook(index) {
      books.splice(index, 1);
      displayBooks();
    }
  
    function displayBooks() {
      // Clear existing list
      bookList.innerHTML = '';
  
      // Add each book to the list
      books.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} by ${book.author} `;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeBook(index));
  
        listItem.appendChild(removeButton);
        bookList.appendChild(listItem);
      });
    }
  
    // Function to load content based on the selected link
    function loadContent(page) {
      switch (page) {
        case 'home':
          content.innerHTML = '<p>Welcome to Awesome Books! This is the homepage.</p>';
          break;
        case 'books':
          displayBooks();
          break;
        case 'about':
          content.innerHTML = '<p>About Awesome Books: We love books and provide a curated collection.</p>';
          break;
        default:
          content.innerHTML = '<p>Page not found</p>';
      }
    }
  
    // Add event listeners to the navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('href').substring(1);
        loadContent(page);
      });
    });
  
    // Load the home page by default
    loadContent('home');
  });
  