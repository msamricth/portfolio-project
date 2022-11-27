var labels = new Vue({
    el: '#homeSection',
    data () {
    return {
        siteTitle: null,
        siteTag:null,
        loading: true,
        errored: false,
        featuredProjects: [],
        additionalProjects: [],
        skillsets: [],
        pageSize:3,
        currentPage:1
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
        .get("https://api.airtable.com/v0/appfvaCmvdk54pD1l/Labels?view=Grid&api_key=keyMMHoSzh3H08K5v")
        .then(response => {
            
        this.siteTag = response.data.records[0].fields.TagLine;
        this.siteTitle = response.data.records[0].fields.Name;

        document.getElementById("siteTitle").innerHTML = this.siteTitle;
        $('#siteTitle').removeClass('placeholder');
        document.getElementById("tagline").innerHTML = this.siteTag;
        $('#tagline').removeClass('placeholder');

        axios
        .get("https://api.airtable.com/v0/appfvaCmvdk54pD1l/work?view=Grid&api_key=keyMMHoSzh3H08K5v")
        .then(response => {
        this.featuredProjects = response.data.records;
        jQuery(function() {
            $('.app').addClass('loaded');
            $('.owl-carousel').owlCarousel({
                nav:true,
                dots:true,
                margin:20,
                responsive:{
                    0:{
                        items:1,
                        stagePadding:25,
                        margin:5,
                    },
                    600:{
                        items:2
                    },
                    772:{
                        items:3
                    },
                    992: {
                        items:4
                    },
                    1290: {
                        items:5
                    },
                    1600: {
                        items:6
                    }
                }
            });
        });
        axios
        .get("https://api.airtable.com/v0/appfvaCmvdk54pD1l/skills?view=grid&api_key=keyMMHoSzh3H08K5v")
        .then(response => {
            this.skillsets = response.data.records;
            jQuery(function() { 
                
                const markdownNeeded = document.querySelector('.markdown');
                if(markdownNeeded){
                    
    
                                    const markItDown = markdownNeeded.innerText;
                                    markdownNeeded.innerHTML = marked.parse(markItDown);
                            
                }
                var container = document.querySelector('[data-ref="container"]');
                var inputSearch = document.querySelector('[data-ref="input-search"]');
                var reset = document.querySelector('#Reset');
                var controls = document.querySelectorAll('.subtle-bounce');
                var keyupTimeout;
                reset.addEventListener("click", resetFilter);

                function resetFilter() {
                    for (var i = 0; i < controls.length; i++) {
                        controls[i].classList.remove('active');
                    }
                }
                var mixer = mixitup(container, {
                    animation: {
                        duration: 350
                    },
                    callbacks: {
                        onMixClick: function() {
                            // Reset the search if a filter is clicked
    
                            if (this.matches('[data-filter]')) {
                                inputSearch.value = '';
                            }
                        }
                    }
                });
    
                // Set up a handler to listen for "keyup" events from the search input
    
                inputSearch.addEventListener('keyup', function() {
                    var searchValue;
    
                    if (inputSearch.value.length < 2) {
                        // If the input value is less than 3 characters, don't send
    
                        searchValue = '';
                    } else {
                        searchValue = inputSearch.value;
                    }
                    console.log(searchValue);
                    // Very basic throttling to prevent mixer thrashing. Only search
                    // once 350ms has passed since the last keyup event
    
                    clearTimeout(keyupTimeout);
    
                    keyupTimeout = setTimeout(function() {
                        filterByString(searchValue);
                    }, 350);
                });
    
                /**
                 * Filters the mixer using a provided search string, which is matched against
                 * the contents of each target's "class" attribute. Any custom data-attribute(s)
                 * could also be used.
                 *
                 * @param  {string} searchValue
                 * @return {void}
                 */
    
                function filterByString(searchValue) {
                    if (searchValue) {
                        // Use an attribute wildcard selector to check for matches
    
                        mixer.filter('[class*="' + searchValue + '"]');
                    } else {
                        // If no searchValue, treat as filter('all')
    
                        mixer.filter('all');
                    }
                }
            })
        })
    })
})
        .catch(error => {
        console.log(error)
        this.errored = true
    })
        .finally(() => this.loading = false)
    }
  });
