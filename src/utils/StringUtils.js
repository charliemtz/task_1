export function capitalize(name) {
  if (typeof name === "string") {
    return name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    return "???";
  }
}

export function normalizeId(id) {
  return String(id).padStart(3, "0");
}

export function normalizeCard(number) {
  return (number / 10).toLocaleString("es-AR");
}
