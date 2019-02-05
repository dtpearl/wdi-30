const searchInput = document.getElementById('book_title');

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Disable the form taking us to another page.
  const title = searchInput.value;
  searchInput.value = '';
  searchInput.focus();

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const info = JSON.parse(xhr.responseText);
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('cover').src = cover;
  }
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + title);
  xhr.send();
});
