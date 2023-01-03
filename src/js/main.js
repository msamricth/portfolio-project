export function main() {
    const portfolioListing = document.querySelector('#featured-work');
    var workSection = $('#featured-work');
    var workContainer = $('section#work');
    var skillzContainer = $('section#skills');
    var header = $('#home section.header');
    header.on('inview', function(event, isInView) {
        if (isInView) {
        
            if(workContainer.hasClass('active')){
                workContainer.removeClass('active');
            }
            
        } 
    });
    workSection.on('inview', function(event, isInView) {
        if (isInView) {
            workContainer.addClass('active');
            $('#work .fadeScroll').addClass("in");
            $('#work .bounce').addClass("in");
        } else {
            removehash();
            workContainer.removeClass('active');
        }
    });
    window.onload = workOnLoad();
    
    function workOnLoad(){
        if(window.location.hash) {
            if(location.hash.substring(1) == 'work'){
                $('#work .fadeScroll').addClass("in");
                $('#work .bounce').addClass("in");
            }
        }
    }
    skillzContainer.on('inview', function(event, isInView) {
        if (isInView) {
            removehash();
            skillzContainer.addClass('active');
            $('#skillsets .card').addClass("in");
        } else {
            skillzContainer.removeClass('active');
        }
    });
    $('.fadeScroll').on('inview', function(event, isInView) {
        var scrollObject = $(this);
        if (isInView) {
            setTimeout(
                function() {
                    scrollObject.addClass('in');
                }, 400);
            
        } else {
        }
    });
    function removehash(){
        if(window.location.hash) {
            setTimeout(function(){
                history.replaceState("", document.title, window.location.pathname);
            }, 1);
        }
    }
    const article = document.querySelectorAll(".skill-col-btn");
    function showSKillz() {
        if (article.className == "open") {
          // read less
          article.className = "";
        } else {
          //read more
          article.className = "open";
        }
     }
    jQuery(function() {
    var featuredCarousel = $('.featured-images');
        if((featuredCarousel).length){
            featuredCarousel.on('inview', function(event, isInView) {
                if (isInView) {
                    featuredCarousel.addClass('active');
                } else {
                    featuredCarousel.removeClass('active');
                }
            });
        }
        var skillbtn = $('#skills button.card');
        var reset = '';

        
        $('.bounce').on('inview', function(event, isInView) {
            var scrollObject = $(this);
            if (isInView) {
                setTimeout(
                    function() {
                        scrollObject.addClass('in');
                    }, 400);
                
            } else {
            }
        });
    })

}