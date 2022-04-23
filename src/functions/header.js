function header() {
    const content = document.querySelector('#content');
    const header = document.createElement("div");
    content.appendChild(header);
    header.className = "header";
    
    const homeBtn = document.createElement("button");
    homeBtn.innerText = "Home";
    homeBtn.id = "homeBtn";
    header.appendChild(homeBtn);
    
    const menuBtn = document.createElement("button");
    menuBtn.innerText = "Menu";
    menuBtn.id = "menuBtn";
    header.appendChild(menuBtn);
    
    const aboutBtn = document.createElement("button");
    aboutBtn.innerText = "About";
    aboutBtn.id = "aboutBtn";
    header.appendChild(aboutBtn);

}

export default header;