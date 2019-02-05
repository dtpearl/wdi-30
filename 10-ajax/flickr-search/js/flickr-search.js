'use strict';

var state = {
  currentPage: 1,
  lastPageReached: false
};

var showImages = function showImages(results) {
  // Nested AKA helper function returns a thumbnail URL for a given photo object.
  var generateURL = function generateURL(p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change 'q' to something else from the docs for different sizes
    ].join('');
  };

  console.log('Results', results);

  results.photos.photo.forEach(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img />', { src: thumbnailURL }); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
};

var searchFlickr = function searchFlickr(term) {

  console.log('Searching Flickr for: ' + term);

  if (state.lastPageReached) return;

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    // Via Flickr docs:
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json',
    page: state.currentPage++
  }).done(showImages).done(function (results) {
    if (results.photos.page >= results.photos.pages) {
      state.lastPageReached = true;
    }
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    $('#images').empty();
    state.currentPage = 1;
    state.lastPageReached = false;

    var query = $('#query').val();
    searchFlickr(query);
  });

  // EXTREMELY TWITCHY
  var debouncedSearchFlickr = _.debounce(searchFlickr, 6000, { trailing: false });
  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    // You may need to tweak the value below
    if (scrollBottom <= 500) {
      var query = $('#query').val(); // There are better ways to do this.
      debouncedSearchFlickr(query);
    }
  });
});