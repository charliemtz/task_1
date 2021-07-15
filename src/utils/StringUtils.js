export function normalizeId(id) {
  return String(id).padStart(3, "0");
}

export function normalizeCard(number) {
  return (number / 10).toLocaleString("es-AR");
}
