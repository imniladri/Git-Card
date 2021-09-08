// Loader Event

$(window).on("load", () => {
    $("#preloader").css({
        opacity: "0",
        visibility: "hidden",
    });
    $(".loader").css({
        opacity: "0",
    });
});

// Kebab Menu

$("span#kebab_menu").click(() => {
    $("header nav").toggleClass("active");
});
