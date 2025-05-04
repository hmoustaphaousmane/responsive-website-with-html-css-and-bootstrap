$(".nav-link").click(() => {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname) {
        // Remove active class from all links
        $(".nav-link").removeClass("active");

        // Add active class to the clicked link
        $(this).addClass("active");

        // Get the target section ID from the link's href attribute
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash + ']');

        if (target.length) {
            // Scroll to the target section
            $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 10);
            return false;
        }

    }
}
);
