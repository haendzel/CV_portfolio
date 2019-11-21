const portfolioData  = [
{
    title: "Insidelab",
    desc: "Development in Owls Department company. Insidelab specializing in designs, realizations and modernizations of commercial, office, shop and restaurant spaces.<a target='_blank'rel='noopener noreferrer' href='http://insidelab.pl>insidelab.pl</a>",
    tech: "HTML5, Sass, CSS3, Wordpress, Javascript, jQuery, PHP, AJAX, JSON, Gulp",
    photo: "images/pasha.png",
    thumb:"images/thumb2.png"
},
{
    title: "Report 2018 for Polsat Group",
    desc: "Development in Owls Department company. I developed tables and diagrams for this public report.<a target='_blank'rel='noopener noreferrer' href='https://raportniefinansowy2018.grupapolsat.pl>raportniefinansowy2018.grupapolsat.pl</a>",
    tech: "HTML5, Sass, CSS3, Wordpress, Javascript, jQuery, PHP, AJAX, JSON, Gulp",
    photo: "images/pasha.png",
    thumb: "images/thumb2.png"
},
{
    title: "Alek Jozefczyk",
    desc: "Portfolio for polish artist and director <a target='_blank' rel='noopener noreferrer' href='http://alekjozefczyk.pl'>alekjozefczyk.pl</a>",
    tech: "HTML5, CSS3, Javascript, jQuery, Bootstrap",
    photo: "images/alek.png",
    thumb: "images/thumb1.png"
},
{
    title: "Front-end portfolio",
    desc: "My simple website portfolio <a target='_blank' rel='noopener noreferrer' href='http://handzel.net/cv'>handzel.net/cv</a>'",
    tech: "HTML5, Sass, CSS3, Javascript, jQuery, JSON, Gulp",
    photo: "images/pasha.png",
    thumb: "images/thumb2.png"
},
{
    title: "First developed website in my life",
    desc: "Retro design website for Front-end Family small company <a target='_blank'rel='noopener noreferrer' href='http://front-end.family'>front-end.family</a>",
    tech: "HTML5, CSS3, Javascript",
    photo: "images/pasha.png",
    thumb: "images/thumb2.png"
},
{
    title: "Academy of Fine Arts in Krakow",
    desc: "Designed by me and Krzysztof Walencik. Webdesign and UX/UI was accepted and paid by university.",
    tech: "Axure wireframes, inVision, Pocket Adobe, Researches and manual tests.",
    photo: "images/pasha.png",
    thumb: "images/thumb2.png"
},
{
    title: "Softlight logo",
    desc: "Designed by me. Logo for IT company.",
    techn: "Pocket Adobe, sketch drawings",
    photo: "images/pasha.png",
    thumb: "images/thumb2.png"
},
{
    title: "Typografia",
    desc: "Part of typography magazine 'Typografia' for school project.",
    techn: "Pocket Adobe",
    photo: "images/pasha.png",
    thumb: "images/thumb2.png"
}
]

function portfolioTemplate(portfolio) {
    return `
      <div class="project">
      <img class="project-thumb" src="${portfolio.thumb}">
      </div>
    `;
  }
  
  document.getElementById("portfolio").innerHTML = `
    ${portfolioData.map(portfolioTemplate).join("")}
  `;

 // <h2 class="project-title">${portfolio.title}</h2><div class="project-desc">${portfolio.desc}</div> 