/**
 * asset — resolve a public/ asset path against Vite's configured base so
 * URLs work both locally ("/") and under the GitHub Pages subpath
 * ("/gardensofeatin/"). Pass a path relative to public/, e.g.
 * asset("assets/photography/harvest-basket.png").
 */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
