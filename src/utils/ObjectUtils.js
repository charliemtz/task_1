export function isNotEmpty(obj) {
  return !(Object.entries(obj).length === 0 && obj.constructor === Object);
}
