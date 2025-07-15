$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Aman Ahmad";
        $("#favicon").attr("href", "/assets/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "/assets/images/favhand.png");
    }
});

// 👇 Embedded project data here directly
const projectData = [
  {
    "name": "Automated Poll Generator",
    "desc": "Video transcriptor and summarizer app using MERN stack. Utilizes Gemini AI to automatically generate polls from transcripts every 5 minutes.",
    "image": "autopoll.jpg",
    "category": "mern",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Portfolio Website",
    "desc": "Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!",
    "image": "port.png",
    "category": "basicweb",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Bhopal Metro Project",
    "desc": " Designedametrorouteplanner using Dijkstra’s algorithm to calculate stations between stops, optimizing accuracy and travel efficiency.",
    "image": "bhopalmetro.png",
    "category": "lamp",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "MultiLex",
    "desc": "Developed a web-based platform for finding alternatives to given words using PHP for server-side logic. Made with HTML, CSS, JavaScript and backend with PHP.",
    "image": "multilex.png",
    "category": "basicweb",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Engify.in",
    "desc": "Developed an online shopping website with virtual try-on feature using JavaScript, HTML and CSS.",
    "image": "engify.png",
    "category": "basicweb",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "EngineerSoch.com",
    "desc": "Nurturing the next generation of engineers through mentorship, career guidance, and immersive learning experiences.",
    "image": "engineersoch.png",
    "category": "basicweb",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Video Summarizer",
    "desc": "Developed a full-stack web application to transcribe and summarize videos using OpenAI’s Whisper for speech-to text conversion.",
    "image": "videosum.png",
    "category": "mern",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "LAN-based Chat Application",
    "desc": "Utilized Java Socket programming for network communication and Spring Boot for managing backend services.",
    "image": "chat.png",
    "category": "lamp",
    "links": { "view": "#", "code": "#" }
  },
  {
    "name": "Speech Completion Meter",
    "desc": " Developed a system to estimate the progress of a speech using cumulative named entity recognition and logarithmic curve fitting.",
    "image": "speech.png",
    "category": "mern",
    "links": { "view": "#", "code": "#" }
  }
];

// 👇 Render projects using data above
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/images/projects/${project.image}" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // isotope filter
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

showProjects(projectData); // 👈 call directly

// Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6874b5d0b3b458190b257793/1j03uceku';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// Disable dev tools
document.onkeydown = function (e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && ['I','C','J'].includes(String.fromCharCode(e.keyCode))) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
}
