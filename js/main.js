$('.slider-main').slick({
	dots: true,
	arrows: false,
	autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                dots: false,
            }
        },
        {
            breakpoint: 700,
            settings: "unslick"
        }
    ]
});


$('.slider-news').slick({
	dots: true,
	arrows: false,
	autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1500,
    responsive: [
        {
            breakpoint: 960,
            settings: "unslick"
        }
    ]

});
