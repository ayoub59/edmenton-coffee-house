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
