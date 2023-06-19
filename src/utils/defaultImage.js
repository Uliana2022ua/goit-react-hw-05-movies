

const defaultImage = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

//   < img src = {
//     movieData.poster_path ?
//       [<https://image.tmdb.org/t/p/w500/${movieData.poster_path}>](<https://image.tmdb.org/t/p/w500/$%7BmovieData.poster_path%7D>)
//  : defaultImage
// }
// width={250}
// alt="poster"
// />


export function getImagePosterPath(path) {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : defaultImage;
}