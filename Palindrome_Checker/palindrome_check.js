function validatePalin() {
  string = document.getElementById("text").value;

  const len = string.length;

  let string1 = string.replace(/ /g, "");

  let len1 = string1.length;

  let string2 = "";

  for (let j = 0; j < len1; j++) {
    if (
      (string1[j] >= "a" && string1[j] <= "z") ||
      (string1[j] >= "A" && string1[j] <= "Z") ||
      (string1[j] >= "0" && string1[j] <= "9")
    ) {
      string2 = string2.concat(string1[j]);
    }
  }

  let len2 = string2.length;

  if (string2 == "") {
    document.getElementById("result").innerHTML =
      "Please enter a valid string!";
  } else {
    string2 = string2.toLowerCase();

    let flag = 1;

    for (let i = 0; i < len2 / 2; i++) {
      if (string2[i] !== string2[len2 - 1 - i]) {
        flag = 0;
      }
    }

    if (flag == 0) {
      document.getElementById("result").innerHTML = "It is not a palindrome.";
    } else if (flag == 1) {
      document.getElementById("result").innerHTML = "It is a palindrome.";
    }
  }
}

function clearScreen() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("text").value = "";
}
