<script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script>
    $(".button").on("click", function () {
        $("body, html").animate({
            scrollTop: $('#contactForm').offset().top
        })
    })
    $(".button.m1").on("click", function () {
        $(".contact.m1, div.form-wrap").addClass("active");
        $(".contact.m2, .contact.m3").removeClass("active");
    })
    $(".button.m2").on("click", function () {
        $(".contact.m2, div.form-wrap").addClass("active");
        $(".contact.m1, .contact.m3").removeClass("active");
    })
    $(".button.m3").on("click", function () {
        $(".contact.m3, div.form-wrap").addClass("active");
        $(".contact.m1, .contact.m2").removeClass("active");
    })
</script>
