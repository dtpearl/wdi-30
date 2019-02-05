const fetchFact = function () {
  const xhr = new XMLHttpRequest(); // Create a lil Javascript browser
  xhr.open('GET', 'http://numbersapi.com/random/trivia?json'); // Configure the "browser"

  // This callback function will fire at every stage of the AJAX request process:
  xhr.onreadystatechange = function () {
    // 4 is the only readyState we care about.
    if (xhr.readyState !== 4) {
      return; // Request is still in progress so don't do anything yet.
    }

    const data = JSON.parse(xhr.responseText); // Translate the string response into a real JS object.

    // Vanilla DOM manipulation to show a new paragraph with a random fact.
    const p = document.createElement('p');
    p.innerHTML = data.text;
    document.body.appendChild(p);
  }

  xhr.send(); // Asynchronous! This runs "in the background".
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // Get a first fact immediately.
