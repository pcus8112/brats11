(() => {
  "use strict";

  const E = window.B11Engine;
  const S = window.B11Site;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function integerValue(element) {
    const cleaned = String(element.value || "").trim().replace(/[\s'’.,]/g, "");
    return /^-?\d+$/.test(cleaned) ? Number(cleaned) : null;
  }

  function resetField(element) {
    if (!element) return;
    element.value = "";
    element.classList.remove("correct", "wrong");
    const feedback = document.getElementById(`${element.id}-feedback`);
    if (feedback) feedback.textContent = "";
  }

  function checkField(element, actual, expected, display = expected) {
    const correct = actual === expected;
    element.classList.toggle("correct", correct);
    element.classList.toggle("wrong", !correct);
    const feedback = document.getElementById(`${element.id}-feedback`);
    if (feedback) feedback.textContent = correct ? "" : S.t("common.expected", { value: String(display) });
    return correct;
  }

  function showSimpleResult(element, success, detail) {
    element.className = `result show ${success ? "success" : "failure"}`;
    element.innerHTML = `<h3>${S.t(success ? "common.correct" : "common.incorrect")}</h3><p>${detail}</p>`;
  }

  function bindEnterFlow(form) {
    form.addEventListener("keydown", event => {
      if (event.key !== "Enter" || event.target.matches('input[type="radio"]')) return;
      const controls = $$('input:not([type="radio"]):not([disabled]), select:not([disabled])', form).filter(control => control.offsetParent !== null);
      const index = controls.indexOf(event.target);
      if (index >= 0 && index < controls.length - 1) {
        event.preventDefault();
        controls[index + 1].focus();
      }
    });
  }

  function initRfd() {
    const form = $("#rfd-form");
    if (!form) return;
    const level = $("#rfd-level");
    const operation = $("#rfd-operation");
    const problem = $("#problem");
    const firstNumber = $("#route-a");
    const secondNumber = $("#route-b");
    const thirdNumber = $("#route-c");
    const firstOperator = $("#route-op-1");
    const secondOperator = $("#route-op-2");
    const grouping = $("#route-grouping");
    const resultInput = $("#route-result");
    const preview = $("#route-preview");
    const result = $("#result");
    let task;

    const originalOperator = type => ({ add: "+", sub: "-", mul: "*", div: "/" })[type];

    function refreshPreview() {
      const a = integerValue(firstNumber);
      const b = integerValue(secondNumber);
      const c = integerValue(thirdNumber);
      if (a === null || b === null) {
        preview.textContent = S.t("rfd.preview");
        return;
      }
      const route = { numbers: c === null ? [a, b] : [a, b, c], operators: c === null ? [firstOperator.value] : [firstOperator.value, secondOperator.value], grouping: grouping.value };
      preview.textContent = E.routeToString(route);
    }

    function clear() {
      [firstNumber, secondNumber, thirdNumber, resultInput].forEach(resetField);
      firstOperator.value = originalOperator(task.type);
      secondOperator.value = task.type === "sub" ? "+" : task.type === "div" ? "-" : "+";
      grouping.value = "normal";
      result.className = "result";
      result.innerHTML = "";
      refreshPreview();
    }

    function newTask() {
      task = E.rfdTask(Number(level.value), operation.value);
      problem.innerHTML = `${E.formatNumber(task.a)} <span class="accent">${E.symbols[originalOperator(task.type)]}</span> ${E.formatNumber(task.b)}`;
      clear();
      firstNumber.focus();
    }

    function alternativesMarkup() {
      return `<div class="alternatives">${task.alternatives.map(route => `<div class="alternative">${E.routeToString(route, true)}</div>`).join("")}</div>`;
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      const a = integerValue(firstNumber);
      const b = integerValue(secondNumber);
      const c = integerValue(thirdNumber);
      const enteredResult = integerValue(resultInput);
      const numbers = c === null ? [a, b] : [a, b, c];
      const operators = c === null ? [firstOperator.value] : [firstOperator.value, secondOperator.value];
      const routeValue = a === null || b === null ? null : E.evaluateRoute(numbers, operators, grouping.value);
      const routeCorrect = routeValue !== null && Math.abs(routeValue - task.result) < 1e-10;
      const resultCorrect = enteredResult === task.result;
      [firstNumber, secondNumber, thirdNumber].forEach(field => field.classList.toggle("wrong", !routeCorrect));
      [firstNumber, secondNumber, thirdNumber].forEach(field => field.classList.toggle("correct", routeCorrect));
      resultInput.classList.toggle("correct", resultCorrect);
      resultInput.classList.toggle("wrong", !resultCorrect);
      const direct = c === null && a === task.a && b === task.b && firstOperator.value === originalOperator(task.type);
      const success = routeCorrect && resultCorrect;
      const message = success ? (direct ? S.t("common.routeDirect") : S.t("common.routeValid")) : S.t("common.routeWrong");
      result.className = `result show ${success ? "success" : "failure"}`;
      result.innerHTML = `<h3>${S.t(success ? "common.correct" : "common.incorrect")}</h3><p>${message}</p><h3 style="margin-top:14px">${S.t(success ? "common.otherAlternatives" : "common.alternatives")}</h3>${alternativesMarkup()}`;
    });

    [firstNumber, secondNumber, thirdNumber, firstOperator, secondOperator, grouping].forEach(element => element.addEventListener("input", refreshPreview));
    $("#new-problem").addEventListener("click", newTask);
    level.addEventListener("change", newTask);
    operation.addEventListener("change", newTask);
    window.addEventListener("brats11:languagechange", refreshPreview);
    bindEnterFlow(form);
    newTask();
  }

  function initKiller() {
    const form = $("#killer-form");
    if (!form) return;
    const level = $("#killer-level");
    const problem = $("#problem");
    const tenfold = $("#killer-tenfold");
    const final = $("#killer-final");
    const tenfoldLabel = $("#killer-tenfold-label");
    const finalLabel = $("#killer-final-label");
    const result = $("#result");
    let number;

    function updateLabels() {
      tenfoldLabel.textContent = S.t("killer.tenfold", { n: number });
      finalLabel.textContent = S.t("killer.finalLabel", { n: number });
    }

    function newTask() {
      const selected = Number(level.value);
      const min = selected === 1 ? 10 : selected === 2 ? 100 : 1000;
      const max = selected === 1 ? 99 : selected === 2 ? 999 : 9999;
      number = E.randomInt(min, max);
      problem.innerHTML = `${number} <span class="accent">× 11</span>`;
      [tenfold, final].forEach(resetField);
      result.className = "result";
      result.innerHTML = "";
      updateLabels();
      tenfold.focus();
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      const checks = [
        checkField(tenfold, integerValue(tenfold), number * 10),
        checkField(final, integerValue(final), number * 11)
      ];
      const success = checks.every(Boolean);
      showSimpleResult(result, success, success ? S.t("common.allCorrect") : S.t("common.reviewFields"));
    });
    level.addEventListener("change", newTask);
    $("#new-problem").addEventListener("click", newTask);
    window.addEventListener("brats11:languagechange", updateLabels);
    bindEnterFlow(form);
    newTask();
  }

  function initB11(kind) {
    const form = $("#b11-form");
    if (!form) return;
    const isSoft = kind === "soft";
    const level = $("#b11-level");
    const problem = $("#problem");
    const givenCode = $("#given-code");
    const givenCodeValue = $("#given-code-value");
    const codeSection = $("#code-section");
    const executeSection = $("#execute-section");
    const anchor = $("#anchor");
    const remainder = $("#remainder");
    const code = $("#code");
    const result = $("#result");
    const fields = $$('input[type="text"]', form);
    let task;

    function mode() {
      return $('input[name="mode"]:checked', form).value;
    }

    function executionCode() {
      return mode() === "apply" ? task.code : E.parseCode(code.value, isSoft ? 2 : 3);
    }

    function setProblem() {
      problem.innerHTML = task.left === task.target
        ? `<span class="accent">${task.left}</span> × ${task.right}`
        : `${task.left} × <span class="accent">${task.right}</span>`;
      givenCodeValue.textContent = task.code.text;
    }

    function clear() {
      fields.forEach(resetField);
      result.className = "result";
      result.innerHTML = "";
    }

    function updateLabels() {
      if (!task) return;
      const currentCode = executionCode();
      const digits = currentCode ? currentCode.digits : [];
      const first = digits[0] === undefined ? "a" : E.b11Digit(digits[0]);
      const second = digits[1] === undefined ? "b" : E.b11Digit(digits[1]);
      $("#start-label").textContent = `${S.t("common.start")}: ${task.base} × ${first}`;
      $("#km1-label").textContent = `${isSoft ? S.t("soft.kmLabel") : S.t("full.km1")}: × 11`;
      $("#add1-label").textContent = `${isSoft ? S.t("soft.addLabel") : S.t("full.add1")}: ${task.base} × ${second}`;
      $("#sum1-label").textContent = isSoft ? S.t("soft.sumLabel") : S.t("full.sum1");
      if (!isSoft) {
        const third = digits[2] === undefined ? "c" : E.b11Digit(digits[2]);
        $("#km2-label").textContent = `${S.t("full.km2")}: × 11`;
        $("#add2-label").textContent = `${S.t("full.add2")}: ${task.base} × ${third}`;
        $("#sum2-label").textContent = S.t("full.sum2");
      }
    }

    function applyMode() {
      const selected = mode();
      const showCode = selected === "create" || selected === "full";
      const showExecution = selected === "apply" || selected === "full";
      codeSection.classList.toggle("hidden", !showCode);
      executeSection.classList.toggle("hidden", !showExecution);
      givenCode.classList.toggle("hidden", selected !== "apply");
      updateLabels();
      const firstVisible = $$('input[type="text"]', form).find(field => field.offsetParent !== null);
      if (firstVisible) firstVisible.focus();
    }

    function newTask() {
      task = isSoft ? E.softTask(Number(level.value)) : E.fullTask();
      setProblem();
      clear();
      applyMode();
    }

    function expectedValues() {
      const first = task.base * task.code.first;
      const km1 = first * 11;
      const add1 = task.base * task.code.second;
      const sum1 = km1 + add1;
      if (isSoft) return { start: first, km1, add1, sum1 };
      const km2 = sum1 * 11;
      const add2 = task.base * task.code.third;
      const sum2 = km2 + add2;
      return { start: first, km1, add1, sum1, km2, add2, sum2 };
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      const selected = mode();
      const checks = [];
      if (selected === "create" || selected === "full") {
        checks.push(checkField(anchor, integerValue(anchor), task.code.anchor));
        checks.push(checkField(remainder, integerValue(remainder), task.code.remainder));
        const entered = E.parseCode(code.value, isSoft ? 2 : 3);
        checks.push(checkField(code, entered ? entered.text : null, task.code.text, task.code.text));
      }
      if (selected === "apply" || selected === "full") {
        const expected = expectedValues();
        Object.entries(expected).forEach(([id, value]) => checks.push(checkField(document.getElementById(id), integerValue(document.getElementById(id)), value)));
      }
      const success = checks.every(Boolean);
      showSimpleResult(result, success, success ? S.t("common.allCorrect") : `${S.t("common.reviewFields")} ${S.t("common.expected", { value: task.result })}`);
    });

    $$('input[name="mode"]', form).forEach(input => input.addEventListener("change", () => { clear(); applyMode(); }));
    code.addEventListener("input", () => {
      const length = isSoft ? 2 : 3;
      code.value = code.value.toUpperCase().replace(/[^0-9X]/g, "").slice(0, length);
      updateLabels();
    });
    if (level) level.addEventListener("change", newTask);
    $("#new-problem").addEventListener("click", newTask);
    window.addEventListener("brats11:languagechange", updateLabels);
    bindEnterFlow(form);
    newTask();
  }

  function initialize() {
    const page = document.body.dataset.page;
    if (page === "rfd") initRfd();
    else if (page === "killer") initKiller();
    else if (page === "soft") initB11("soft");
    else if (page === "full") initB11("full");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
