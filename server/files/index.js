window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      bodyElement.innerHTML = "<h1>Meine Filmliste</h1>";

      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */

        const article = document.createElement("article");
        // Task 1.3: set imdbID as id attribute
        article.id = movie.imdbID;
 
        const releaseDate = new Date(movie.Released);
        const formattedDate = releaseDate.toLocaleDateString("de-DE");
 
        const hours = Math.floor(movie.Runtime / 60);
        const minutes = movie.Runtime % 60;
        const runtime = hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
 
        const genreSpans = movie.Genres
          .map(g => `<span class="genre">${g}</span>`)
          .join(" ");
 
        article.innerHTML = `
          <img src="${movie.Poster}" alt="Poster von ${movie.Title}" width="120">
          <div>
            <h2>${movie.Title}</h2>
            <p><strong>Released:</strong> ${formattedDate}</p>
            <p><strong>Runtime:</strong> ${runtime}</p>
            <p><strong>Genres:</strong> ${genreSpans}</p>
            <p><strong>Directors:</strong> ${movie.Directors.join(", ")}</p>
            <p><strong>Writers:</strong> ${movie.Writers.join(", ")}</p>
            <p><strong>Actors:</strong> ${movie.Actors.join(", ")}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p>
              <strong>Metascore:</strong> ${movie.Metascore} |
              <strong>IMDb:</strong> ⭐ ${movie.imdbRating} / 10
            </p>
          </div>
        `;
 
        // Task 2.2: Edit button with navigation
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };
        article.appendChild(editButton);
 
        bodyElement.appendChild(article);
      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
