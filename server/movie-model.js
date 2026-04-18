/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
  "tt0084787": {
    "imdbID": "tt0084787",
    "Title": "The Thing",
    "Released": "1982-06-25",
    "Runtime": 109,
    "Genres": ["Horror", "Mystery", "Sci-Fi"],
    "Directors": ["John Carpenter"],
    "Writers": ["Bill Lancaster", "John W. Campbell Jr."],
    "Actors": ["Kurt Russell", "Wilford Brimley", "Keith David"],
    "Plot": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Metascore": 57,
    "imdbRating": 8.2
  },
  "tt0133093": {
    "imdbID": "tt0133093",
    "Title": "The Matrix",
    "Released": "1999-03-31",
    "Runtime": 136,
    "Genres": ["Action", "Sci-Fi"],
    "Directors": ["Lana Wachowski", "Lilly Wachowski"],
    "Writers": ["Lana Wachowski", "Lilly Wachowski"],
    "Actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Metascore": 73,
    "imdbRating": 8.7
  },
  "tt0137523": {
    "imdbID": "tt0137523",
    "Title": "Inception",
    "Released": "2010-07-16",
    "Runtime": 148,
    "Genres": ["Action", "Adventure", "Sci-Fi"],
    "Directors": ["Christopher Nolan"],
    "Writers": ["Christopher Nolan"],
    "Actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": 74,
    "imdbRating": 8.8
  }
};

module.exports = movies;