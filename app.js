const diceBtn = document.querySelector(".dice-container");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
};

const updateAdvice = async () => {
  document.querySelector(".dice-container").classList.add("dice-loading");
  const {
    slip: { id, advice },
  } = await getAdvice();
  document.querySelector(".number").textContent = id;
  document.querySelector(".advice").textContent = `"${advice}"`;
  document.querySelector(".dice-container").classList.remove("dice-loading");
};

diceBtn.addEventListener("click", (e) => {
  updateAdvice();
});
