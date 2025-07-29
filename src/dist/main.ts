const textInput = document.getElementById("text-input") as HTMLInputElement;
const checkBtn = document.getElementById("check-btn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

const handleClick = (): void => {
  const cleaned: string = textInput.value
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();

  if (textInput.value.trim() === "") {
    alert("Please enter a word...");
    return;
  }

  const reversedWord: string = cleaned.split("").reverse().join("");
  console.log(reversedWord);

  reversedWord === cleaned
    ? (result.innerHTML = `"<strong>${textInput.value}</strong>" is a palindrome.`)
    : (result.innerHTML = `"<strong>${textInput.value}</strong>" is NOT a palindrome.`);
};

checkBtn?.addEventListener("click", handleClick);
