let expanding = () => {
    let btn = document.querySelectorAll("#preview");
    btn = Array.from(btn);

    let cont = document.querySelectorAll("#cont");
    cont = Array.from(cont);

    let para = document.querySelectorAll("#para");
    para = Array.from(para);

    btn.forEach((btns, index) => {
        btns.addEventListener("click", () => {
            let element = cont[index];
            let par = para[index]; // Get corresponding container

            // Check screen width for mobile adjustments
            if (window.innerWidth <= 600) {
                if (element.style.height === "110vh") {
                    par.style.display = "none";
                    element.style.height = "100vw";
                } else {
                    par.style.display = "block";
                    element.style.height = "110vh";
                }
            } else {
                if (element.style.height === "50vw") {
                    par.style.display = "none";
                    element.style.height = "30vw";
                } else {
                    par.style.display = "block";
                    element.style.height = "50vw";
                }
            }
        });
    });
};

expanding();



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


 let all=document.querySelectorAll("#whatsapp-btn");
 
 
 all.forEach(btn=>{


     btn.addEventListener("click", () => {
         // Your WhatsApp number and message
         const phoneNumber = "923001180040"; // Replace with your number (e.g., 923001234567 for Pakistan)
         const message = encodeURIComponent("Hello! I would like to know more about your services."); // URL-encode your message
         const url = `https://wa.me/${phoneNumber}/?text=${message}`;
    
    console.log("Redirecting to:", url);
    // Redirect to WhatsApp
    window.location.href = url;
});
})



let menu = document.getElementById("menu");
let slider =document.getElementById("slider");


menu.addEventListener("click",()=>{

      if(slider.style.left==="0px"){ 

          slider.style.left= "-200px";
         
      }
      else{

        slider.style.left = "0px";
        
      }
})