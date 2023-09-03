export const getAsset = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
