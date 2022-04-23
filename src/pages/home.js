function makeHomePage(){
    const body = document.querySelector(".body");
    body.innerHTML = "";
    const message = document.createElement("div");
    message.className = "msg";

    const messageTitle = document.createElement("div");
    messageTitle.innerHTML = `This is the best restaurant ever! 
    </br>WELCOME!`;
    messageTitle.className = "messageTitle";
    message.appendChild(messageTitle);

    const messageText = document.createElement("div");
    messageText.className = "messageText";
    messageText.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
    message.appendChild(messageText);
    body.appendChild(message);

}
export default makeHomePage;