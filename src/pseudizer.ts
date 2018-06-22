const alphabet: any = {
  a: "á",
  b: "β",
  c: "ç",
  d: "δ",
  e: "è",
  f: "ƒ",
  g: "ϱ",
  h: "λ",
  i: "ï",
  j: "J",
  k: "ƙ",
  l: "ℓ",
  m: "₥",
  n: "ñ",
  o: "ô",
  p: "ƥ",
  q: "9",
  r: "ř",
  s: "ƨ",
  t: "ƭ",
  u: "ú",
  v: "Ʋ",
  w: "ω",
  x: "ж",
  y: "¥",
  z: "ƺ",
  A: "Â",
  B: "ß",
  C: "Ç",
  D: "Ð",
  E: "É",
  F: "F",
  G: "G",
  H: "H",
  I: "Ì",
  J: "J",
  K: "K",
  L: "£",
  M: "M",
  N: "N",
  O: "Ó",
  P: "Þ",
  Q: "Q",
  R: "R",
  S: "§",
  T: "T",
  U: "Û",
  V: "V",
  W: "W",
  X: "X",
  Y: "Ý",
  Z: "Z"
};

export default function tranformStringToPseudo(
  before: string,
  extended: boolean = false
): string {
  const transformedText = before
    .split("")
    .map(char => transformCharToPseudo(char))
    .join("");

  //   return extended ? extend(transformedText, 30) : transformedText;
  return extend(transformedText, 30);
}

function transformCharToPseudo(char: string): string {
  return Object.keys(alphabet).includes(char) ? alphabet[char] : char;
}

function extend(text: string, length: number): string {
  const alphabetValues = (<any>Object).values(alphabet);
  let extendedText = text;

  let i = 0;
  while (i < Math.ceil(text.length*(length/100))) {
    const randomPseudoChar =
      alphabetValues[Math.round(Math.random() * alphabetValues.length)];

    extendedText = `${extendedText}${randomPseudoChar}`;
    i++;
  }
  return extendedText;
}
