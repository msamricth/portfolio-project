export function workPage() {

    const navbar = document.querySelector('.navbar');
    const nav = document.querySelector('.navbar');
    jQuery(function() {
    var recordID = $('main').data('record');
    var labels = new Vue({
        el: '#work',
        data () {
        return {
            siteTitle: null,
            siteTag:null,
            headerIMG: null,
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
                var fields = this.rfields;
                console.log(fields);
               this.headerIMG = response.data.fields.Header[0].thumbnails.full.url;
                $('.app').addClass('loaded');
                
               var img = this.headerIMG;
               console.log(img);
               
               var primColor, primary, primaryCntr, secondary, secondaryCntr, tertiary, tertiaryCntr, r, g, b, hsp;

               [...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
               .forEach(el => new bootstrap.Tooltip(el))
  
  function lightOrDark(color) {
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
  
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  
      r = color[1];
      g = color[2];
      b = color[3];
    } 
    else {
      color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'
      )
               );
  
      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
    }
  
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
  
    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {
  
      return 'light';
    } 
    else {
  
      return 'dark';
    }
  }
  const newShade = (hexColor, magnitude) => {
      hexColor = hexColor.replace(`#`, ``);
      if (hexColor.length === 6) {
          const decimalColor = parseInt(hexColor, 16);
          let r = (decimalColor >> 16) + magnitude;
          r > 255 && (r = 255);
          r < 0 && (r = 0);
          let g = (decimalColor & 0x0000ff) + magnitude;
          g > 255 && (g = 255);
          g < 0 && (g = 0);
          let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
          b > 255 && (b = 255);
          b < 0 && (b = 0);
          return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
      } else {
          return hexColor;
      }
  };
  function addAlpha(color, opacity) {
      // coerce values so ti is between 0 and 1.
      var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
      return color + _opacity.toString(16).toUpperCase();
  }
  const ColorIMG = img;
  function rgbtoHsv(rgb){
    var c= rgb.match(/\d+/g),
    r= c[0]/255, g= c[1]/255, b= c[2]/255,
    max= Math.max(r, g, b), min= Math.min(r, g, b),
    h= 0, s= 0, v= max;
    if(max!= min){
        var d= max-min;
        s= d/max;
        switch(max){
            case r: h= (g-b)/d +(g< b? 6: 0);
            break;
            case g: h= (b-r)/d + 2;
            break;
            case b: h= (r-g)/d + 4;
            break;
        }
    }
    return [Math.round(h*60), Math.round(s*100), Math.round(v*100)];
}
function sortColors(a, b){
    var a1= rgbtoHsv(a), b1= rgbtoHsv(b);
    return  (b1[1]+b1[2])-  (a1[1]+a1[2]);
}


  colorjs.prominent(ColorIMG, { amount: 8, group: 30 }).then(color => {
    console.log(color);
    var colorsToChck = [];
    color.forEach(function (item, index) {
      colorsToChck.push('rgb('+color[index]+')');
    });
    console.log(colorsToChck);
    colorsToChck.sort(sortColors);

    var secColor = colorsToChck[7];
    primColor = colorsToChck[0];
console.log('primary is ' + colorsToChck[0]);
console.log('secondary is ' + colorsToChck[7]);

      primaryCntr = primColor;
      primary = primColor;
    
    setTimeout(
      function() {
        const headerCntr = document.querySelector('.summary');
        const projectHeader =  document.querySelector('.project-header');
        const nav = document.querySelector('.navbar');
        const navBTN = document.querySelector('nav.navbar .btn');
        projectHeader.style.setProperty("background-color", primaryCntr, "important");
        if(navBTN) {navBTN.style.setProperty("background-color", primColor, "important");}
    nav.style.setProperty("background-color", primary, "important");
          console.log('primary container color is:' + primaryCntr);
    console.log('primary color is:' + primary);
      }, 400);
      
  window.addEventListener('scroll',function(){
    //on every scroll this funtion will be called
    const navbar = document.querySelector('.navbar');
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     //This line will get the location on scroll
     if (scrollTop > 50) {
       navbar.classList.add('nav-scrolled'); 
      
       navbar.style.setProperty("background-color", secColor, "important");
     } else {
      navbar.classList.remove('nav-scrolled');
       navbar.style.setProperty("background-color", primary, "important");
     }
     
     if (scrollTop > 400) {
       if(scrollTop > lastScrollTop){ //if it will be greater than the previous
         navbar.style.top='-80px';
         //set the value to the negetive of height of navbar 
       }
   
       else{
         navbar.style.top='0';
         
       }
     }
     lastScrollTop = scrollTop; //New Position Stored
   });
  });
  
  var lastScrollTop; // This Varibale will store the top position
  

                jQuery(function() { 
                    $('.owl-carousel').owlCarousel({
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
                    const markdownNeeded = document.querySelectorAll('.markdown');
                    var elements = document.getElementsByTagName('div');
                    if(markdownNeeded){
                        for (var i = 0; i < markdownNeeded.length; i++) {
                            const markItDown = markdownNeeded[i].innerText;
                            markdownNeeded[i].innerHTML = marked.parse(markItDown);
                        }
                                
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
}