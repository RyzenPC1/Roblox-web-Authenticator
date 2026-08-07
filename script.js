const bannedWords = [
  "nigga",
  "nigger",
  "pussy",
  "fuck",
  "bitch"
  "balls"
];

const usernameInput = document.getElementById("user");

usernameInput.addEventListener("input", function () {
  const text = this.value.toLowerCase();

  const found = bannedWords.find(word => text.includes(word));

  if (found) {
    alert("Otillåtet språk är inte tillåtet.");
    this.value = "";
  }
});