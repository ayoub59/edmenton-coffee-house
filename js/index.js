// nav animation
$(document).ready(function () {
    var menuOpen = [
        {
            elements: $(".nav-menu"),
            properties: {
                height: ["100%", 0],
                width: ["100%", 0],
                minHeight: "40rem"
            },
            options: {
                duration: 200
            }
        },
        {
            elements: $("nav").find("h1, p, small"),
            properties: {
                opacity: 1
            },
            options: {
                duration: 200,
                delay: 100,
                sequenceQueue: false
            }
        },
        {
            elements: $(".right-inner"),
            properties: {
                width: "100%"
            },
            options: {
                duration: 250,
                complete: function () {
                    $(".right-inner")
                        .find("li")
                        .each(function (i) {
                            $(this).velocity({ opacity: 1 }, { delay: i * 50 });
                        });

                    $(".social")
                        .find("i")
                        .each(function (i) {
                            $(this).velocity("transition.bounceUpIn", { delay: i * 75 });
                        });
                }
            }
        }
    ];

    $(".hamb").on("click", function () {
        if ($(this).hasClass("open")) {
            $(this)
                .removeClass("open")
                .find("i")
                .addClass("fa-bars")
                .removeClass("fa-times");

            $("nav").velocity(
                {
                    height: 0,
                    width: 0,
                    minHeight: 0
                },
                {
                    duration: 250,
                    begin: function () {
                        $("nav").find("h1, p, small").css({
                            opacity: 0
                        });
                        $(".right-inner").find("li, .social i").css({
                            opacity: 0
                        });
                    },
                    complete: function () {
                        $(".right-inner").css({
                            width: 0
                        });
                    }
                }
            );
        } else {
            $(this)
                .addClass("open")
                .find("i")
                .addClass("fa-times")
                .removeClass("fa-bars");

            $.Velocity.RunSequence(menuOpen);
        }
    });

});

// cursor animation
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
// })
// Listen for mouseout and mouseover events on the document
document.addEventListener('mouseout', (event) => {
    // Check if the mouse is outside the document
    if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        cursor.style.display = 'none';
    }
});


// menu text animation
const item1 = document.querySelector(".item1"),
    item2 = document.querySelector(".item2"),
    item1Img = document.querySelector(".item1-img"),
    item2Img = document.querySelector(".item2-img"),
    Cappuccino = document.querySelector(".Cappuccino"),
    CappuccinoIMG = document.querySelector(".CappuccinoIMG"),
    avocat = document.querySelector(".avocat"),
    avocatIMG = document.querySelector(".avocatIMG"),
    Continental = document.querySelector(".Continental"),
    ContinentalIMG = document.querySelector(".ContinentalIMG"),
    Jasper = document.querySelector(".Jasper"),
    JasperIMG = document.querySelector(".JasperIMG"),
    Dutch = document.querySelector(".Dutch"),
    DutchIMG = document.querySelector(".DutchIMG"),
    Fassi = document.querySelector(".Fassi"),
    FassiIMG = document.querySelector(".FassiIMG");


document.addEventListener("mousemove", (e) => {
    let x = e.offsetX,
        y = e.offsetY;

    if (e.target.classList.contains("item1")) {
        item1Img.style.left = `${x}px`;
        item1Img.style.top = `${y}px`;
    }
    if (e.target.classList.contains("item2")) {
        item2Img.style.left = `${x}px`;
        item2Img.style.top = `${y}px`;
    }
    // make sure that you make give it a display block
    if (e.target.classList.contains("Cappuccino")) {
        CappuccinoIMG.style.left = `${x}px`;
        CappuccinoIMG.style.top = `${y}px`;
    }
    if (e.target.classList.contains("avocat")) {
        avocatIMG.style.left = `${x}px`;
        avocatIMG.style.top = `${y}px`;
    }
    if (e.target.classList.contains("Continental")) {
        ContinentalIMG.style.left = `${x}px`;
        ContinentalIMG.style.top = `${y}px`;
    }
    if (e.target.classList.contains("Jasper")) {
        JasperIMG.style.left = `${x}px`;
        JasperIMG.style.top = `${y}px`;
    }
    if (e.target.classList.contains("Dutch")) {
        DutchIMG.style.left = `${x}px`;
        DutchIMG.style.top = `${y}px`;
    }
    if (e.target.classList.contains("Fassi")) {
        FassiIMG.style.left = `${x}px`;
        FassiIMG.style.top = `${y}px`;
    }

});

item1.addEventListener("mouseover", () => {
    item1Img.style.display = "block";
});

item1.addEventListener("mouseleave", () => {
    item1Img.style.display = "";
});

item2.addEventListener("mouseover", () => {
    item2Img.style.display = "block";
});

item2.addEventListener("mouseleave", () => {
    item2Img.style.display = "";
});
Cappuccino.addEventListener("mouseover", () => {
    CappuccinoIMG.style.display = "block";
});

Cappuccino.addEventListener("mouseleave", () => {
    CappuccinoIMG.style.display = "";
});

avocat.addEventListener("mouseover", () => {
    avocatIMG.style.display = "block";
});

avocat.addEventListener("mouseleave", () => {
    avocatIMG.style.display = "";
});

Continental.addEventListener("mouseover", () => {
    ContinentalIMG.style.display = "block";
});

Continental.addEventListener("mouseleave", () => {
    ContinentalIMG.style.display = "";
});

Jasper.addEventListener("mouseover", () => {
    JasperIMG.style.display = "block";
});

Jasper.addEventListener("mouseleave", () => {
    JasperIMG.style.display = "";
});

Dutch.addEventListener("mouseover", () => {
    DutchIMG.style.display = "block";
});
Dutch.addEventListener("mouseleave", () => {
    DutchIMG.style.display = "";
});

Fassi.addEventListener("mouseover", () => {
    FassiIMG.style.display = "block";
});
Fassi.addEventListener("mouseleave", () => {
    FassiIMG.style.display = "";
});




// faq section
const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
    button.addEventListener("click", () =>
        button.parentElement.classList.toggle("selected")
    );
});

// Get all the question items
const questionItems = document.querySelectorAll('.question-item');

// Add a click event listener to each question item
questionItems.forEach(item => {
    const question = item.querySelector('.faq-questions');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // Toggle the visibility of the answer
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        answer.classList.toggle("show");
    });
});

const options = document.querySelectorAll('.options div');
const menuItems = document.querySelectorAll('.menu-items-container .item');
const menuText = document.querySelectorAll("menu-options")

// Add a click event listener to each option
function toggleMenu(menuClass, option) {
    // get all options
    const options = document.querySelectorAll('.options div');
    // loop through all options
    options.forEach(opt => {
        // remove active class from all options
        opt.classList.remove('active');
    });
    // add active class to the selected option
    option.classList.add('active');

    // get all menu items
    const menuItems = document.querySelectorAll('.item');

    // loop through all menu items
    menuItems.forEach(item => {
        // if menu item has the menuClass, show it, otherwise hide it
        if (item.classList.contains(menuClass)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
// image chnage position on mouse hover
const images = document.querySelectorAll('.image-event');

document.addEventListener('mousemove', function (event) {
    images.forEach(function (image) {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        image.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
});
