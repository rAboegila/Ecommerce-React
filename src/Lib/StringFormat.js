export function reverseFormattedColor(formattedString) {
  return formattedString
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join("_");
}

export function formatColor(formattedString) {
  return formattedString
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatSize(sizeString) {
  const sizeMap = {
    S: "Small",
    M: "Medium",
    L: "Large",
    XL: "X Large",
    XXL: "XX Large",
  };
  return sizeMap[sizeString];
}

export function reverseFormattedSize(sizeName) {
  const sizeMap = {
    Small: "S",
    Medium: "M",
    Large: "L",
    "X Large": "XL",
    "XX Large": "XXL",
  };
  return sizeMap[sizeName];
}
