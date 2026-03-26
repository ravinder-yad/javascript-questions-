const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const keys = document.querySelector(".keys");

let expression = "";
let result = "0";

function render() {
  expressionEl.textContent = expression || "0";
  resultEl.textContent = result;
}

function canAppendDecimal() {
  const parts = expression.split(/[\+\-\*\/%]/);
  const currentPart = parts[parts.length - 1];
  return !currentPart.includes(".");
}

function appendValue(value) {
  if (value === "." && !canAppendDecimal()) {
    return;
  }

  if (/[+\-*/%]/.test(value)) {
    if (!expression) {
      if (value !== "-") return;
    } else if (/[+\-*/%]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }
  }

  expression += value;
}

function clearAll() {
  expression = "";
  result = "0";
}

function deleteLast() {
  expression = expression.slice(0, -1);
}

function evaluateExpression() {
  if (!expression) return;
  if (!/^[0-9+\-*/%.() ]+$/.test(expression)) return;

  try {
    const value = Function(`"use strict"; return (${expression});`)();
    if (!Number.isFinite(value)) {
      result = "Error";
      return;
    }
    result = String(Number(value.toFixed(8)));
    expression = result;
  } catch {
    result = "Error";
  }
}

keys.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const { action, value } = button.dataset;

  if (action === "clear") {
    clearAll();
  } else if (action === "delete") {
    deleteLast();
  } else if (action === "equals") {
    evaluateExpression();
  } else if (value) {
    appendValue(value);
  }

  render();
});

document.addEventListener("keydown", (event) => {
  const { key } = event;

  if (/^[0-9]$/.test(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
    appendValue(key);
    render();
    return;
  }

  if (key === "Enter" || key === "=") {
    evaluateExpression();
    render();
    return;
  }

  if (key === "Backspace") {
    deleteLast();
    render();
    return;
  }

  if (key.toLowerCase() === "c" || key === "Escape") {
    clearAll();
    render();
  }
});

render();
