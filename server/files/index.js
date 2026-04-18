window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
        const article = document.createElement("article");
        article.id = movie.imdbID;

        const h1 = document.createElement("h1");
        h1.textContent = movie.Title;
        article.appendChild(h1);

        const img = document.createElement("img");
        img.src = movie.Poster;
        img.width = 150;
        article.appendChild(img);

        const plot = document.createElement("p");
        plot.textContent = movie.Plot;
        article.appendChild(plot);

        // Edit Button (Aufgabe 2.2)
        const editBtn = document.createElement("button");
        editBtn.textContent = "Bearbeiten";
        editBtn.onclick = function() {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };
        article.appendChild(editBtn);

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
