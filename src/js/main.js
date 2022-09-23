export function main() {
    var labels = new Vue({
        el: '#home',
        data () {
        return {
            siteTitle: null,
            tagLine:null,
            loading: true,
            errored: false
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
            this.siteTitle = response.data.records[0].fields.Name;
            this.tagLine = response.data.records[0].fields.TagLine;
            document.getElementById("siteTitle").innerHTML = this.siteTitle;
            $('#siteTitle').removeClass('placeholder');
            console.log(this.siteTitle);
        })
            .catch(error => {
            console.log(error)
            this.errored = true
        })
            .finally(() => this.loading = false)
        }
    });
}