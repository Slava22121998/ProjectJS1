function quad(a, b, c) {
  if (a == 0) {
    alert("Ошибка, a=0 -> недоупстимое значение");
    return 0;
  }
  var D = b * b - 4 * a * c;
  var x1, x2;
  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return (
      "Коэффициенты: а=" +
      a +
      ", b=" +
      b +
      ", c=" +
      c +
      "\nКорни уравнения: X1=" +
      x1 +
      ", X2=" +
      x2 +
      "\nДискриминант(D)=" +
      D
    );
  } else if (D == 0) {
    x1 = -b / (2 * a);
    return (
      "Коэффициенты: а=" +
      a +
      ", b=" +
      b +
      ", c=" +
      c +
      "\nКорни уравнения: X=" +
      x1 +
      "\nДискриминант(D)=" +
      D
    );
  } else if (D < 0) {
    x1 = -b / (2 * a);
    return (
      "Коэффициенты: а=" +
      a +
      ", b=" +
      b +
      ", c=" +
      c +
      "\nКорней нет!\nДискриминант(D)=" +
      D
    );
  }
}
function prog() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var resultFunc = quad(a, b, c);
  document.getElementById("result").textContent = resultFunc;
  document.getElementById("return").style.display = "block";
}
