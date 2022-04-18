let finish = false;
const playerHands = document.querySelectorAll(".player-hand");
// function utama
const match = playerHands.forEach((i) => {
  i.addEventListener("click", function () {
    if (!finish) {
      const player = i.id;
      selectedHandBorder(player);
      const comp = randomCompHands();
      const result = rules(player, comp);
      info(result);
      finish = true;
      return;
    } else {
      return;
    }
  });
});

// function random
const randomCompHands = () => {
  const compHands = document.querySelectorAll(".comp-hand");
  const comp = compHands[Math.floor(Math.random() * compHands.length)].id;
  selectedHandBorder(comp);
  return comp.substring(5);
};
// Aturan Main
const rules = (player, comp) => {
  if (player == comp) return "Draw";
  if (player == "rock") return comp == "scissor" ? "Win!" : "Lose";
  if (player == "scissor") return comp == "paper" ? "Win!" : "Lose";
  if (player == "paper") return comp == "rock" ? "Win!" : "Lose";
};
// Function add border
const selectedHandBorder = (selected) => {
  let selectedHand = document.getElementById(selected);
  selectedHand.classList.add("border");
};
// Function message Result
const info = (result) => {
  let message = document.getElementById("msg");
  message.innerHTML = result;
  result == "Draw"
    ? message.classList.add("msg", "msg-draw")
    : message.classList.add("msg", "msg-win");
};

// function Refresh
document.querySelector(".refresh").addEventListener("click", function () {
  finish = false;
  document.querySelectorAll(".hands").forEach((i) => {
    i.classList.remove("border");
  });
  let message = document.getElementById("msg");
  message.innerHTML = "VS";
  message.classList.remove("msg", "msg-draw", "msg-win");
});
