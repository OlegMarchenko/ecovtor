$(document).ready(function () {

    if ($('.toggler').length) {

        $(".toggler").click(function () {
            $(".navbar").slideToggle(function () {
                if ($(this).css('display') === 'none') {
                    $(this).removeAttr('style');
                }
            });
            $(this).toggleClass('open');
        });

    }

    if ($('.localisation').length) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);


        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 14,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(49.965640, 36.363534), // New York 41.260062, -95.850529 49.965640, 36.363534

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [{"weight": "2.00"}]
                }, {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [{"color": "#9c9c9c"}]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [{"visibility": "on"}]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{"color": "#f3f3f3"}]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#f3f3f3"}]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#f3f3f3"}]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{"saturation": -100}, {"lightness": 45}]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#ffffff"}]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#929292"}]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{"color": "#ffffff"}]
                }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{"visibility": "simplified"}]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{"color": "##d1d1d1"}, {"visibility": "on"}]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#d1d1d1"}]
                }, {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#070707"}]
                }, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(49.965640, 36.363534),
                map: map,
                animation: google.maps.Animation.DROP,
                icon: 'images/map_marker.png',
                label: {
                    text: 'ул. Лодзинская 7-А',
                    color: "#000000",
                    fontSize: "14px",
                    fontWeight: "bold"
                }
            });
        }
    }
    if ($('.content_detail__pagination').length) {
        window.onload = function () {
            var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
            $('.cdp_i').on('click', function () {
                var go = $(this).attr('href').replace('#!', '');
                if (go === '+1') {
                    paginationPage++;
                } else if (go === '-1') {
                    paginationPage--;
                } else {
                    paginationPage = parseInt(go, 10);
                }
                $('.cdp').attr('actpage', paginationPage);
            });
        };
    }

    if ($('.modal').length) {
        // Get the modal
        var modal = document.getElementById('myModal');

// Get the button that opens the modal
        var btn2 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
        btn2.onclick = function () {
            modal.style.display = "block";
        };

// When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

        $('#button').click(function () {
            $('#file').click();
        });

        (function ($) {
            $(window).on("load", function () {
                $(".description_project").mCustomScrollbar({
                    theme: "my-theme"
                });
            });
        })(jQuery);
    }
});
