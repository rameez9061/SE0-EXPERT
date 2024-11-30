
let expanding=()=>{

    
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
  
} 
expanding()


let head = document.getElementById("title-heading");

let sliding = (head) => {
    let text = "SEO-OPTIMIZATION";
    let index = 0;

    let interval = setInterval(() => {
        if (index < text.length) {
            // Add characters to the text dynamically
            head.innerHTML = `<h1>Websites for ${text.slice(0, index + 1)}</h1>`;
            index++;
        } else {
            index = 0; // Reset the index
            head.innerHTML = "<h1>Websites for </h1>"; // Reset to the initial state
        }
    }, 200); // Adjust delay as needed
};

sliding(head);
