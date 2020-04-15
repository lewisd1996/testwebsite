var Controller = (function() {
    setInterval(UIController.changeTitle, 4000);
    UIController.showNav();
    UIController.updateNav();
});
//-----------------------------------------------------------
var UIController = (function() {

    text =["你好！", "こんにちは！", "Привет!", "Hello!"],
    counter = 0,
    elem = document.getElementById("changeText")

    return {
        changeTitle: (function() {
            elem.classList.add('hide');
            setTimeout(function () {
                elem.innerHTML = text[counter];
                elem.classList.remove('hide');
                counter++;
                if (counter >= text.length) {
                    counter = 0;
                }
            }, 500);
            }),
        showNav: (function(){
                window.onscroll = function() {
                    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                        document.getElementById("nav-bar").style.opacity = "100";
                        document.getElementById("nav-bar").style.pointerEvents = "all";
                      } else {
                        document.getElementById("nav-bar").style.opacity = "0";
                        document.getElementById("nav-bar").style.pointerEvents = "none";
                      }
                }
        }),
        updateNav: (function(){
          var waypoint1 = new Waypoint({
            element: document.getElementById('aboutSection'),
            handler: function(direction) {
              if (direction === 'down') {
                document.getElementById("about-link").classList.add("nav-bar__ul__nav-link__active");
              } else {
                offset: '100%'
                document.getElementById("portfolio-link").classList.remove("nav-bar__ul__nav-link__active");
                document.getElementById("about-link").classList.add("nav-bar__ul__nav-link__active");
             }
            }})
            var waypoint2 = new Waypoint({
              element: document.getElementById('portfolioSection'),
              handler: function(direction) {
                if (direction === 'down') {
                  document.getElementById("about-link").classList.remove("nav-bar__ul__nav-link__active");
                  document.getElementById("portfolio-link").classList.add("nav-bar__ul__nav-link__active");
                } else {
                  offset: '100%'
                  document.getElementById("personal-link").classList.remove("nav-bar__ul__nav-link__active");
                  document.getElementById("portfolio-link").classList.add("nav-bar__ul__nav-link__active");
               }
              }})
              var waypoint3 = new Waypoint({
                element: document.getElementById('personalSection'),
                handler: function(direction) {
                  if (direction === 'down') {
                    document.getElementById("portfolio-link").classList.remove("nav-bar__ul__nav-link__active");
                    document.getElementById("personal-link").classList.add("nav-bar__ul__nav-link__active");
                  } else {
                    offset: '100%'
                    document.getElementById("contact-link").classList.remove("nav-bar__ul__nav-link__active");
                    document.getElementById("personal-link").classList.add("nav-bar__ul__nav-link__active");
                 }
                }})
                var waypoint4 = new Waypoint({
                  element: document.getElementById('contactSection'),
                  handler: function(direction) {
                    if (direction === 'down') {
                      document.getElementById("personal-link").classList.remove("nav-bar__ul__nav-link__active");
                      document.getElementById("contact-link").classList.add("nav-bar__ul__nav-link__active");
                    } else {
                      offset: '100%'
                      document.getElementById("contact-link").classList.add("nav-bar__ul__nav-link__active");
                   }
                  }})







            }
        )
        }

})();

Controller();