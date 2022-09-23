export function main() {
    var labels = new Vue({
        el: '#home',
        data () {
        return {
            siteTitle: null,
            siteTag:null,
            loading: true,
            errored: false,
            
            records: []
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
            .get("https://api.airtable.com/v0/appfvaCmvdk54pD1l/Work?view=Grid&api_key=keyMMHoSzh3H08K5v")
            .then(response => {
            this.records = response.data.records
            console.log(this.records);
      
          })


        })
            .catch(error => {
            console.log(error)
            this.errored = true
        })
            .finally(() => this.loading = false)
        }
    });
 

}