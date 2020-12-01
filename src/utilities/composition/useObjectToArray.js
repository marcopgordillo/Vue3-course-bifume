export default function useObjectToArray(object) {
  return Object.entries(object)
    .map(
      ([key, value]) => ({ id: key, message: value.message })
    )
}
