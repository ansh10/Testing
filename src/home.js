 export default function createHome() {
    const content = document.getElementById("content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our restaurant";
    const para = document.createElement("para");
    para.textcontent = "Best food in town";
    content.appendChild(heading);
    content.appendChild(para);
 }
