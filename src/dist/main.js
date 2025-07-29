var textInput = document.getElementById("text-input");
var checkBtn = document.getElementById("check-btn");
var result = document.getElementById("result");
var handleClick = function () {
    var cleaned = textInput.value
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase();
    if (textInput.value.trim() === "") {
        alert("Please enter a word...");
        return;
    }
    var reversedWord = cleaned.split("").reverse().join("");
    console.log(reversedWord);
    reversedWord === cleaned
        ? (result.innerHTML = "\"<strong>".concat(textInput.value, "</strong>\" is a palindrome."))
        : (result.innerHTML = "\"<strong>".concat(textInput.value, "</strong>\" is NOT a palindrome."));
};
checkBtn === null || checkBtn === void 0 ? void 0 : checkBtn.addEventListener("click", handleClick);
