export function randomPattern() {
  switch (getRandomInt()) {
    case 0:
      return "magicpattern";

    case 1:
      return "magicpattern2";

    case 2:
      return "magicpattern3";

    case 3:
      return "magicpattern4";

    case 4:
      return "magicpattern5";

    case 5:
      return "magicpattern6";

    default:
      return "";
  }
}

function getRandomInt() {
  return Math.floor(Math.random() * 6);
}
