(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.B11Engine = api;
})(typeof window !== "undefined" ? window : globalThis, () => {
  "use strict";


  // Exact input parsing: punctuation never disappears without a validated meaning.
  function rational(numerator, denominator = 1n) {
    if (denominator === 0n) return null;
    if (denominator < 0n) { numerator = -numerator; denominator = -denominator; }
    let a = numerator < 0n ? -numerator : numerator, b = denominator;
    while (b) [a, b] = [b, a % b];
    return { numerator: numerator / a, denominator: denominator / a };
  }

  function parseRational(value) {
    const text = String(value ?? "").trim().replace(/−/g, "-");
    if (!text || text.length > 80) return null;
    function decimal(part) {
      const match = /^([+-]?)([^.,]+)(?:[.,](\d{1,12}))?$/.exec(part.trim());
      if (!match) return null;
      let whole = match[2];
      if (!/^\d+$/.test(whole)) {
        // Grouping is allowed only with consistent spaces or apostrophes.
        if (!/^\d{1,3}([ '\u00a0\u202f’])\d{3}(?:\1\d{3})*$/.test(whole)) return null;
        whole = whole.replace(/[ '\u00a0\u202f’]/g, "");
      }
      const fraction = match[3] || "";
      const n = BigInt(whole + fraction) * (match[1] === "-" ? -1n : 1n);
      const d = 10n ** BigInt(fraction.length);
      if (n > 9007199254740991n * d || n < -9007199254740991n * d) return null;
      return rational(n, d);
    }
    const parts = text.split("/");
    if (parts.length > 2) return null;
    const a = decimal(parts[0]);
    if (!a) return null;
    if (parts.length === 1) return a;
    const b = decimal(parts[1]);
    return b && b.numerator !== 0n ? rational(a.numerator * b.denominator, a.denominator * b.numerator) : null;
  }

  function integerValue(value) {
    const parsed = parseRational(value);
    return parsed && parsed.denominator === 1n && parsed.numerator <= 9007199254740991n && parsed.numerator >= -9007199254740991n ? Number(parsed.numerator) : null;
  }

  function exactOperator(a, op, b) {
    if (!a || !b) return null;
    const an = a.numerator, ad = a.denominator, bn = b.numerator, bd = b.denominator;
    if (op === "+") return rational(an * bd + bn * ad, ad * bd);
    if (op === "-") return rational(an * bd - bn * ad, ad * bd);
    if (op === "*") return rational(an * bn, ad * bd);
    if (op === "/") return rational(an * bd, ad * bn);
    return null;
  }

  function evaluateExactRoute(values, operators, grouping = "normal") {
    const n = values.map(parseRational);
    if (n.some(value => !value) || ![2, 3].includes(n.length)) return null;
    if (n.length === 2) return exactOperator(n[0], operators[0], n[1]);
    const [a, b, c] = n, [first, second] = operators;
    if (grouping === "right" || (grouping === "normal" && ["*", "/"].includes(second) && ["+", "-"].includes(first))) {
      return exactOperator(a, first, exactOperator(b, second, c));
    }
    return exactOperator(exactOperator(a, first, b), second, c);
  }

  function routeEquals(values, operators, grouping, expected) {
    const value = evaluateExactRoute(values, operators, grouping);
    return value !== null && value.numerator === BigInt(expected) * value.denominator;
  }

  const symbols = { "+": "+", "-": "−", "*": "×", "/": "÷" };

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function choice(values) {
    return values[randomInt(0, values.length - 1)];
  }

  function applyOperator(left, operator, right) {
    if (!Number.isFinite(left) || !Number.isFinite(right)) return null;
    if (operator === "+") return left + right;
    if (operator === "-") return left - right;
    if (operator === "*") return left * right;
    if (operator === "/") return right === 0 ? null : left / right;
    return null;
  }

  function evaluateRoute(numbers, operators, grouping = "normal") {
    if (numbers.length < 2) return null;
    if (numbers.length === 2) return applyOperator(numbers[0], operators[0], numbers[1]);
    const [a, b, c] = numbers;
    const [first, second] = operators;
    if (grouping === "right") {
      const inner = applyOperator(b, second, c);
      return inner === null ? null : applyOperator(a, first, inner);
    }
    if (grouping === "left") {
      const inner = applyOperator(a, first, b);
      return inner === null ? null : applyOperator(inner, second, c);
    }
    if ((second === "*" || second === "/") && (first === "+" || first === "-")) {
      const inner = applyOperator(b, second, c);
      return inner === null ? null : applyOperator(a, first, inner);
    }
    const inner = applyOperator(a, first, b);
    return inner === null ? null : applyOperator(inner, second, c);
  }

  function formatNumber(value) {
    if (!Number.isFinite(value)) return "—";
    if (Math.abs(value - Math.round(value)) < 1e-10) return String(Math.round(value));
    return String(Number(value.toFixed(6)));
  }

  function routeToString(route, includeResult = false) {
    const n = route.numbers.map(number => typeof number === "string" ? (number.includes("/") || number.startsWith("-") || number.startsWith("−") ? `(${number})` : number) : formatNumber(number));
    let expression;
    if (n.length === 2) expression = `${n[0]} ${symbols[route.operators[0]]} ${n[1]}`;
    else if (route.grouping === "left") expression = `(${n[0]} ${symbols[route.operators[0]]} ${n[1]}) ${symbols[route.operators[1]]} ${n[2]}`;
    else if (route.grouping === "right") expression = `${n[0]} ${symbols[route.operators[0]]} (${n[1]} ${symbols[route.operators[1]]} ${n[2]})`;
    else expression = `${n[0]} ${symbols[route.operators[0]]} ${n[1]} ${symbols[route.operators[1]]} ${n[2]}`;
    return includeResult ? `${expression} = ${formatNumber(route.result)}` : expression;
  }

  function limits(level) {
    if (level === 1) return { min: 10, max: 99, scale: 10, deltaMax: 8 };
    if (level === 2) return { min: 100, max: 999, scale: 100, deltaMax: 24 };
    return { min: 1000, max: 9999, scale: 1000, deltaMax: 72 };
  }

  function makeRoute(numbers, operators, grouping, result) {
    return { numbers, operators, grouping: grouping || "normal", result };
  }

  function additionTask(level) {
    const range = limits(level);
    let a, b, anchor, delta, direction;
    do {
      anchor = randomInt(2, 8) * range.scale;
      delta = randomInt(1, range.deltaMax);
      direction = choice([-1, 1]);
      b = anchor + direction * delta;
      a = randomInt(range.min, range.max);
    } while (b < range.min || b > range.max || a + b > range.max * 2);
    const result = a + b;
    const sign = direction > 0 ? "+" : "-";
    const shift = anchor - b;
    const balancedA = a - shift;
    const alternatives = [
      makeRoute([a, anchor, delta], ["+", sign], "normal", result),
      makeRoute([balancedA, anchor], ["+"], "normal", result)
    ];
    return { type: "add", a, b, result, alternatives };
  }

  function subtractionTask(level) {
    const range = limits(level);
    let a, b, anchor, delta, direction;
    do {
      anchor = randomInt(2, 8) * range.scale;
      delta = randomInt(1, range.deltaMax);
      direction = choice([-1, 1]);
      b = anchor + direction * delta;
      a = randomInt(Math.max(b + 1, range.min), range.max);
    } while (b < range.min || b >= range.max || a <= b);
    const result = a - b;
    const correctionOperator = direction > 0 ? "-" : "+";
    const shift = anchor - b;
    const shiftedA = a + shift;
    const alternatives = [
      makeRoute([a, anchor, delta], ["-", correctionOperator], "normal", result),
      makeRoute([shiftedA, anchor], ["-"], "normal", result)
    ];
    return { type: "sub", a, b, result, alternatives };
  }

  function multiplicationTask(level) {
    const range = limits(level);
    let n, anchor, delta, direction;
    do {
      anchor = randomInt(2, 8) * range.scale;
      delta = randomInt(1, range.deltaMax);
      direction = choice([-1, 1]);
      n = anchor + direction * delta;
    } while (n < range.min || n > range.max);
    const factor = randomInt(2, 9);
    const result = factor * n;
    const sign = direction > 0 ? "+" : "-";
    const alternatives = [makeRoute([anchor, factor, factor * delta], ["*", sign], "normal", result)];
    if (factor === 9) alternatives.push(makeRoute([n, 10, n], ["*", "-"], "normal", result));
    else if (factor === 5) alternatives.push(makeRoute([n, 10, 2], ["*", "/"], "normal", result));
    else if (factor === 4) alternatives.push(makeRoute([n, 2, 2], ["*", "*"], "normal", result));
    else if (factor === 8) alternatives.push(makeRoute([n, 2, 4], ["*", "*"], "normal", result));
    return { type: "mul", a: factor, b: n, result, alternatives };
  }

  function smallFactor(number) {
    for (let candidate = 2; candidate <= Math.min(12, Math.sqrt(number)); candidate += 1) {
      if (number % candidate === 0) return [candidate, number / candidate];
    }
    return null;
  }

  function divisionTask(level) {
    let divisor, quotient, quotientAnchor, difference, direction, dividend;
    for (let attempts = 0; attempts < 500; attempts += 1) {
      if (level === 1) {
        divisor = randomInt(2, 9);
        quotientAnchor = choice([10, 20, 30, 40]);
        difference = randomInt(1, 3);
      } else if (level === 2) {
        divisor = Math.random() < .5 ? randomInt(2, 9) : randomInt(10, 25);
        quotientAnchor = choice([20, 30, 40, 50, 100]);
        difference = randomInt(1, 6);
      } else {
        divisor = Math.random() < .5 ? randomInt(11, 99) : randomInt(100, 249);
        quotientAnchor = choice([20, 30, 40, 50, 100]);
        difference = randomInt(1, 8);
      }
      direction = choice([-1, 1]);
      quotient = quotientAnchor + direction * difference;
      dividend = divisor * quotient;
      const range = limits(level);
      if (dividend >= range.min && dividend <= range.max && quotient > 1) break;
    }
    const result = quotient;
    const friendlyDividend = divisor * quotientAnchor;
    const sign = direction > 0 ? "+" : "-";
    const alternatives = [makeRoute([friendlyDividend, divisor, difference], ["/", sign], "normal", result)];
    const factors = smallFactor(divisor);
    if (factors) alternatives.push(makeRoute([dividend, factors[0], factors[1]], ["/", "/"], "left", result));
    return { type: "div", a: dividend, b: divisor, result, alternatives };
  }

  function rfdTask(level, operation) {
    const selected = operation === "mixed" ? choice(["add", "sub", "mul", "div"]) : operation;
    if (selected === "add") return additionTask(level);
    if (selected === "sub") return subtractionTask(level);
    if (selected === "mul") return multiplicationTask(level);
    return divisionTask(level);
  }

  function b11Digit(value) {
    return value === 10 ? "X" : String(value);
  }

  function makeCode(number, length) {
    if (length === 2) {
      const first = Math.floor(number / 11);
      const second = number - first * 11;
      return { digits: [first, second], first, second, anchor: first * 11, remainder: second, text: `${b11Digit(first)}${b11Digit(second)}` };
    }
    const first = Math.floor(number / 121);
    const remainder = number - first * 121;
    const second = Math.floor(remainder / 11);
    const third = remainder - second * 11;
    return { digits: [first, second, third], first, second, third, anchor: first * 121, remainder, text: `${b11Digit(first)}${b11Digit(second)}${b11Digit(third)}` };
  }

  function parseCode(value, length) {
    const normalized = String(value ?? "").trim().toUpperCase();
    const pattern = length === 2 ? /^[0-9X]{2}$/ : /^[0-9X]{3}$/;
    if (!pattern.test(normalized)) return null;
    const digits = [...normalized].map(character => character === "X" ? 10 : Number(character));
    return { text: normalized, digits, first: digits[0], second: digits[1], third: digits[2] };
  }

  function softTask(level) {
    let base, target, left, right;
    if (level === 1) {
      left = randomInt(10, 99);
      right = randomInt(10, 99);
      while (right === left) right = randomInt(10, 99);
      target = Math.min(left, right);
      base = Math.max(left, right);
    } else {
      target = randomInt(10, 99);
      base = level === 2 ? randomInt(100, 999) : randomInt(1000, 9999);
      if (Math.random() < .5) { left = target; right = base; } else { left = base; right = target; }
    }
    return { left, right, target, base, code: makeCode(target, 2), result: left * right };
  }

  function fullTask() {
    let left = randomInt(100, 999);
    let right = randomInt(100, 999);
    while (right === left) right = randomInt(100, 999);
    const target = Math.min(left, right);
    const base = Math.max(left, right);
    return { left, right, target, base, code: makeCode(target, 3), result: left * right };
  }

  // Decimal neighbour sums for multiplication by eleven. Carry resolution is
  // deliberately separate so the UI can teach both stages without giving away answers.
  function killerTrace(value) {
    if (!Number.isSafeInteger(value) || value < 0 || value > Math.floor(Number.MAX_SAFE_INTEGER / 11)) {
      throw new RangeError("Killer Move requires a non-negative integer with a safe product.");
    }
    const digits = String(value).split("").map(Number);
    const raw = [digits[0], ...digits.slice(1).map((digit, i) => digits[i] + digit), digits[digits.length - 1]];
    const columns = Array(raw.length);
    let carry = 0;
    for (let i = raw.length - 1; i >= 0; i--) {
      const total = raw[i] + carry;
      columns[i] = { index: i, raw: raw[i], incoming: carry, total, digit: total % 10, outgoing: Math.floor(total / 10) };
      carry = columns[i].outgoing;
    }
    const result = ((carry ? String(carry) : "") + columns.map(column => column.digit).join("")).replace(/^0+(?=\d)/, "");
    return { value, digits, raw, columns, leading: carry, result };
  }

  return {
    killerTrace,
    parseRational,
    integerValue,
    evaluateExactRoute,
    routeEquals,
    symbols,
    randomInt,
    choice,
    applyOperator,
    evaluateRoute,
    formatNumber,
    routeToString,
    rfdTask,
    b11Digit,
    makeCode,
    parseCode,
    softTask,
    fullTask
  };
});
