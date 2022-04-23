function start (){
    const content = document.querySelector("#content");
    const body = document.createElement("div");
    body.innerHTML = "";
    body.className = "body";
    content.appendChild(body);
    const homeBtn = document.getElementById("homeBtn");
    homeBtn.className = "checked";
}

export default start;