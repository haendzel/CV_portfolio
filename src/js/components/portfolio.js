const portfolioData  = [
{
    title: "Insidelab",
    desc: "Development in Owls Department company. Insidelab specializing in designs, realizations and modernizations of commercial, office, shop and restaurant spaces.",
    tech: "HTML5, Sass, CSS3, Wordpress, Javascript, jQuery, PHP, AJAX, JSON, Gulp",
    photo: "images/pasha.png",
    thumb:"images/thumb1.png"
},
{
    title: "Report 2018 for Polsat Group.",
    desc: "Development in Owls Department company. I developed tables and diagrams for this public report.",
    tech: "HTML5, Sass, CSS3, Wordpress, Javascript, jQuery, PHP, AJAX, JSON, Gulp",
    photo: "images/pasha.png",
    thumb: "images/thumb2.png"
},
{
    title: "Alek Jozefczyk",
    desc: "Portfolio for polish artist and director.",
    tech: "HTML5, CSS3, Javascript, jQuery, Bootstrap",
    photo: "images/alek.png",
    thumb: "images/thumb3.png"
},
{
    title: "Front-end portfolio",
    desc: "My simple website portfolio.",
    tech: "HTML5, Sass, CSS3, Javascript, jQuery, JSON, Gulp",
    photo: "images/pasha.png",
    thumb: "images/thumb4.png"
},
{
    title: "First developed website in my life",
    desc: "Retro design website for Front-end Family small company.",
    tech: "HTML5, CSS3, Javascript",
    photo: "images/pasha.png",
    thumb: "images/thumb5.png"
},
{
    title: "Academy of Fine Arts in Krakow",
    desc: "Designed by me and Krzysztof Walencik. Webdesign and UX/UI was accepted and paid by university.",
    tech: "Axure wireframes, inVision, Pocket Adobe, Researches and manual tests.",
    photo: "images/pasha.png",
    thumb: "images/thumb6.png"
},
{
    title: "Softlight logo",
    desc: "Designed by me. Logo for IT company.",
    techn: "Pocket Adobe, sketch drawings",
    photo: "images/pasha.png",
    thumb: "images/thumb7.png"
},
{
    title: "Typografia",
    desc: "Part of typography magazine 'Typografia' for school project.",
    techn: "Pocket Adobe",
    photo: "images/pasha.png",
    thumb: "images/thumb8.png"
}
]

function portfolioTemplate(portfolio) {
    return `
    <div class="project">
        <a class="btn" href="#open-modal"><img class="project-thumb" src="${portfolio.thumb}"></a>
    </div>`;
  }

function portfolioModal(portfolio) {
    return `
    <div id="open-modal" class="modal-window">
          <div>
            <a href="#projects" title="Close" class="modal-close">Close</a>
            <h1 class="project-title">${portfolio.title}</h1>
            <div class="project-desc">${portfolio.desc}</div>
            <img class="project-photo" src="${portfolio.photo}">
        </div>
    </div>`;
}

document.getElementById("portfolio").innerHTML = `
${portfolioData.map(portfolioTemplate).join("")}
  `;
  
document.getElementById("content-modal").innerHTML = `
${portfolioData.map(portfolioModal).join("")}
`;