function moveToNextRow() {
  // 1. Hitta den nuvarande aktiva raden
  const currentRow = document.querySelector(".wordle-row.active");

  // 2. Ta bort 'active' från den
  currentRow.classList.remove("active");

  // 3. Hitta nästa rad (nästa syskon-element)
  const nextRow = currentRow.nextElementSibling;

  // 4. Om det finns en nästa rad, gör den aktiv
  if (nextRow) {
    nextRow.classList.add("active");

    // 5. Återställ currentBox till 0
    currentBox = 0;

    console.log("Flyttade till nästa rad!");
  } else {
    console.log("Inga fler rader - spelet slut!");
  }
}

let currentBox = 0;

document.addEventListener("keydown", function (event) {
  const boxes = document.querySelectorAll(".wordle-row.active .letter-box");

  // Om Backspace (KOLLA DETTA FÖRST!)
  if (event.key === "Backspace") {
    if (currentBox > 0) {
      currentBox--;
      boxes[currentBox].textContent = "";
      console.log("Raderade, nu på ruta:", currentBox);
    }
  } else if (event.key === "Enter") {
    if (currentBox === 5) {
      console.log("Kollar gissning...");

      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.transition = "transform 0.5s"
        boxes[i].style.transform = "rotateX(360deg)"
        boxes[i].style.backgroundColor = "green"
      }

    
      moveToNextRow();
      currentRow++; // Öka radnummer
    } else {
      console.log("Fyll alla 5 rutor först!");
    }
  } else if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
    if (currentBox < 5) {
      boxes[currentBox].textContent = event.key.toUpperCase();
      currentBox++;
      console.log("Lade till:", event.key, "Nu på ruta:", currentBox);
    }
  }
});

const myHead = document.getElementById("felixTitle");
console.log(myHead);
myHead.addEventListener("mouseenter", (event) => {
  if (myHead.style.color === "black") {
    myHead.style.color = "red";
  } else {
    myHead.style.color = "black";
  }
});
