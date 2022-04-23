import githubImg from '../assets/github.png';

function footer(){
    const content = document.querySelector('#content');
    const foot = document.createElement("footer");
    foot.innerHTML = `<p>Copyright © 2022 zsoltizbekk</p>
    <a href="https://github.com/zsoltizbekk" target="_blank"><img class="footer-img" src="${githubImg}" alt="github" width="20px" height="20px"></a>`
    // foot.innerHTML = "Copyright © 2022 zsoltizbekk";
    // foot.className = "footer";
    content.appendChild(foot);
    // const footImg = document.createElement("img");
    
    // footImg.src = githubImg;
    // foot.appendChild(footImg);
    // footImg.addEventListener("click", function(){
    //     window.open(`https://github.com/zsoltizbekk`, '_blank');
    // });
    
    
}

export default footer;