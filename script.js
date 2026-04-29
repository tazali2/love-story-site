let current = 0;
const scenes = document.querySelectorAll(".scene");
const btn = document.getElementById("nextBtn");

btn.onclick = () => {
  scenes[current].classList.remove("active");
  current++;

  if (current >= scenes.length) {
    document.getElementById("popup").classList.remove("hidden");
    current = scenes.length - 1;
    return;
  }

  scenes[current].classList.add("active");
};

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
