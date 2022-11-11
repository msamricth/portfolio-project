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

