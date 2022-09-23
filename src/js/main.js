export function main() {
    var labels = new Vue({
        el: '#home',
        data () {
        return {
            siteTitle: null,
            siteTag:null,
            loading: true,
            errored: false,
            featuredProjects: [],
            additionalProjects: [],
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
            console.log(this.TagLin);

            axios
            .get("https://api.airtable.com/v0/appfvaCmvdk54pD1l/Work?view=featured&api_key=keyMMHoSzh3H08K5v")
            .then(response => {
            this.featuredProjects = response.data.records
            axios
            .get("https://api.airtable.com/v0/appfvaCmvdk54pD1l/Work?view=not-featured&api_key=keyMMHoSzh3H08K5v")
            .then(response => {
                this.additionalProjects = response.data.records
        
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
    var workSection = $('#featured-work');
    var workContainer = $('section#work');
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
            $('.workbtn-container').fadeOut();
        } else {
            workContainer.removeClass('active');
        }
    });
    const additional_projects = document.getElementById('additional_projects');
    additional_projects.addEventListener('hidden.bs.collapse', event => {
        $('#work .btn-collapse').removeClass('active');
    });
    additional_projects.addEventListener('shown.bs.collapse', event => {
        $('#work .btn-collapse').addClass('active');
    });
}