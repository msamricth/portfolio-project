jQuery(function() {
        var recordID = $('main').data('record');
        var labels = new Vue({
            el: '#work',
            data () {
            return {
                siteTitle: null,
                siteTag:null,
                loading: true,
                errored: false,
                featuredProjects: [],
                additionalProjects: [],
                skillsets: [],
                rfields: []
            }
            },
            filters: {
            footerdecimal (value) {
                return value.toFixed(2)
            }
            },
            mounted () {
            var app_id = "appfvaCmvdk54pD1l";
            var app_key = "keyMMHoSzh3H08K5v";
        
            axios
                .get("https://api.airtable.com/v0/appfvaCmvdk54pD1l/Work/"+recordID,{ 
                    headers: { Authorization: "Bearer "+app_key } 
                })
                .then(response => {
                    this.rfields = response.data;
                    $('.app').addClass('loaded');
                    jQuery(function() { $('.owl-carousel').owlCarousel({
                        rewind:true,
                        nav:true,
                        dots:true,
                        margin:50,
                        responsive:{
                            0:{
                                items:1
                            },
                            600:{
                                items:2
                            },
                            1680: {
                                items:3
                            },
                            1920: {
                                items:4
                            }
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
                 });
            
                })
                .catch(error => {
                console.log(error)
                this.errored = true
            })
                .finally(() => this.loading = false)
            }
        });
});