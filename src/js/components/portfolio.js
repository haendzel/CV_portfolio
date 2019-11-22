const portfolioData  = [
    {
        id: 1,
        title: "Insidelab",
        desc: "Development in Owls Department company. Insidelab specializing in designs, realizations and modernizations of commercial, office, shop and restaurant spaces.",
        tech: "HTML5, Sass, CSS3, Wordpress, Javascript, jQuery, PHP, AJAX, JSON, Gulp",
        photo: "images/insidelab.png",
        thumb: "images/thumb9.png"
    },
    {
        id: 2,
        title: "Report 2018 for Polsat Group.",
        desc: "Development in Owls Department company. I developed tables and diagrams for this public report.",
        tech: "HTML5, Sass, CSS3, Wordpress, Javascript, jQuery, PHP, AJAX, JSON, Gulp",
        photo: "images/polsat.png",
        thumb: "images/thumb10.png"
    },
    {
        id: 3,
        title: "Alek Jozefczyk",
        desc: "Portfolio for polish artist and director.",
        tech: "HTML5, CSS3, Javascript, jQuery, Bootstrap",
        photo: "images/alek.png",
        thumb: "images/thumb1.png"
    },
    {
        id: 4,
        title: "Front-end portfolio",
        desc: "My simple website portfolio.",
        tech: "HTML5, Sass, CSS3, Javascript, jQuery, JSON, Gulp",
        photo: "images/filip.png",
        thumb: "images/thumb3.png"
    },
    {
        id: 5,
        title: "First developed website in my life",
        desc: "Retro design website for Front-end Family small company.",
        tech: "HTML5, CSS3, Javascript",
        photo: "images/pasha.png",
        thumb: "images/thumb2.png"
    },
    {
        id: 6,
        title: "Academy of Fine Arts in Krakow",
        desc: "Designed by me and Krzysztof Walencik. Webdesign and UX/UI was accepted and paid by university.",
        tech: "Axure wireframes, inVision, Pocket Adobe, Researches and manual tests.",
        photo: "images/asp.png",
        thumb: "images/thumb4.png"
    },
    {
        id: 7,
        title: "Softlight logo",
        desc: "Designed by me. Logo for IT company.",
        tech: "Pocket Adobe, sketch drawings",
        photo: "images/logo.png",
        thumb: "images/thumb5.png"
    },
    {
        id: 8,
        title: "New media art portfolio",
        desc: "As a programmer I am also an new media artist. This is my portfolio.",
        tech: "HTML5, CSS3, jQuery, Javascript",
        photo: "images/handzel.png",
        thumb: "images/thumb6.png"
    }
    ];

    
      function portfolioThumb(portfolio) {
        return `
        <div class="project">
            <a class="btn" href="#open-modal-${portfolio.id}"><img class="project-thumb" src="${portfolio.thumb}"></a>
        </div>
        <div id="open-modal-${portfolio.id}" class="modal-window">
            <div>
                <a href="#projects" title="Close" class="modal-close">Close</a>
                <h1 class="project-title">${portfolio.title}</h1>
                <div class="project-desc">${portfolio.desc}</div>
                <img class="project-photo" src="${portfolio.photo}">
                <div class="project-desc">${portfolio.tech}</div>
            </div>
        </div>`;
      }

        document.getElementById("portfolio").innerHTML = `
        ${portfolioData.map(portfolioThumb).join("")}`;
      