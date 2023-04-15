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
