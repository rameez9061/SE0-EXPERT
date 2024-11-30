let btn =document.querySelectorAll("#preview");
btn = Array.from(btn);
console.log(btn);
let cont = document.querySelectorAll("#cont");
cont=Array.from(cont);
console.log(cont);
let para =document.querySelectorAll("#para");
para =Array.from(para);

btn.forEach((btns, index) => {
    btns.addEventListener("click", () => {
      let element = cont[index];
      let par = para[index]; // Get corresponding container
      if (element.style.height === "18vw") {
          par.style.display = "block"
        element.style.height = "40vw";
      } else {
          par.style.display = "none";
        element.style.height = "18vw";
      }
    });
  });
