export function normalizeId(id) {
  return String(id).padStart(3, "0");
}

export function normalizeCard(number) {
  return (number / 10).toLocaleString("es-AR");
}

export function legibilize(text) {
  const capitalizableTexts = ["hp"];
  const legibleWords = [];
  text.split("-").forEach((word) => {
    if (capitalizableTexts.includes(word)) {
      legibleWords.push(word.toUpperCase());
    } else {
      legibleWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  });
  return legibleWords.join(" ");
}
