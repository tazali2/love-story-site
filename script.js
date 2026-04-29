let current = 0;
const scenes = document.querySelectorAll(".scene");
const btn = document.getElementById("nextBtn");

btn.onclick = () => {
  scenes[current].classList.remove("active");
  current++;

  if (current >= scenes.length) current = 0;

  scenes[current].classList.add("active");
};
