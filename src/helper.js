export function toShortCount(number) {
  let firstDigits = number.toString().slice(0, 3);

  if (number < 1000) return firstDigits;

  if (number >= 1000) {
    let startExponent = 3;
    let numberAsExponent = number.toExponential();
    let regexp = /([0-9]\.?[0-9]?[0-9]?).*?(e\+)([0-9]*)/g;
    let match = regexp.exec(numberAsExponent);
    let exponent = parseInt(match[3]);
    let digits = parseFloat(match[1]);
    let dotOffset = exponent % startExponent;
    let countChar = exponent >= 6 ? "M" : exponent >= 9 ? "B" : "K";
    let toFixed = dotOffset === 2 ? 0 : 1;
    let resultedDigits = (digits * Math.pow(10, dotOffset))
      .toFixed(toFixed)
      .replace(".0", "");
    let result = resultedDigits + countChar;

    return result;
  }
}
