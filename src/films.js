// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director).map(movie => movie);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = array.filter(movie => movie.director === director).map(movie => movie.score);
 
  let average = parseFloat(Number(scores.reduce((acc, currValue) => acc + currValue, 0) / scores.length).toFixed(2));

  console.log("EXERCICE 3 ->", average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(movie => movie.title).sort((a, b) => a.localeCompare(b));

  result = result.slice(0, 20);

  console.log("EXERCISE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year
  });

  console.log("EXERCISE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let scores = array.filter(movie => movie.genre.includes(genre)).map(movie => movie.score);

  let average = parseFloat(Number(scores.reduce((acc, currValue) => acc + currValue, 0) / scores.length).toFixed(2));

  console.log("EXERCISE 6 ->", average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array;
  result = result.map(movie => {
    const m = movie.duration.split(" ");

    const h = m[0] ? parseInt(m[0].match(/\d+/))*60 : 0;
    const min = m[1] ? parseInt(m[1].match(/\d+/)) : 0;

    return { ...movie, duration: h+min };
  });

  console.log("EXERCISE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = [array.filter(movie => movie.year === year).sort((a, b) => b.score - a.score)[0]];

  console.log("EXERCISE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
