const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "1d74d9d5240c3a17ade90d3df8cfff4d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;