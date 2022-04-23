function aboutPage(){
    const content = document.querySelector('#content');
    // const body = document.createElement("div");
    // body.className = "body";
    // content.appendChild(body);
    const body = document.querySelector(".body");
    body.innerHTML = "";
    const about = document.createElement("div");
    about.className = "about";
    const aboutTitle = document.createElement("div");
    aboutTitle.innerHTML = "About us!";
    about.appendChild(aboutTitle);
    const aboutText = document.createElement("div");
    aboutText.className = "aboutText";
    aboutText.innerHTML = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. `;
    about.appendChild(aboutText);
    body.appendChild(about);

}

export default aboutPage;