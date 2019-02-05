const $searchInput = $('#book_title');

$('form').on('submit', function (event) {
  event.preventDefault(); // Disable the form taking us to another page.
  const title = $searchInput.val();
  $searchInput.val('').focus();

  $.ajax('https://www.googleapis.com/books/v1/volumes?q=' + title).done(function (info) {
      const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
      $('#cover').attr('src', cover);
  });
});
