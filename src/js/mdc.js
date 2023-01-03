export function VibJS() {
  var primColor, primary, primaryCntr, secondary, secondaryCntr, tertiary, tertiaryCntr, r, g, b, hsp;

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
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
  const ColorIMG = document.querySelector('img.header-img').src;
  
    const headerCntr = document.querySelector('.summary');
    const main = document.querySelector('.project-header');
    const nav = document.querySelector('.navbar');
    const navBTN = document.querySelector('nav.navbar .btn');
  colorjs.prominent(ColorIMG, { amount: 3, format: 'hex' }).then(color => {
    var secColor = color[1];
    primColor = color[0];
  
    
    // If the background color is dark, add the light-text class to it
    
    primaryCntr = primColor;
    primary = primColor;
    if(color[5] == '#ffffff') {
      tertiary = color[3];
      tertiaryCntr = newShade(tertiary, 80);
    } else {
      tertiary = color[5];
      tertiaryCntr = newShade(tertiary, 80);
    }
    secondary = color[2];
    secondaryCntr = newShade(secondary, 80);
    
    // If the background color is dark, add the light-text class to it
    if(primColor == "#000000") {

      primaryCntr = newShade(primColor, 80);
      primary = newShade(primColor, 25);
    } else {
      if(primColor == "#ffffff") {
        
        primaryCntr = secondaryCntr;
        primary = secondary;
      } else {
        if(lightOrDark(primColor) == 'dark') {
          primaryCntr = newShade(primColor, 10);
          primary = primColor;
      
        }
        else {
          primaryCntr = tertiaryCntr;
          primary = tertiary;
        }
      }
    }
    
    setTimeout(
      function() {
     main.style.setProperty("background-color", primaryCntr, "important");
         navBTN.style.setProperty("background-color", primColor, "important");
    nav.style.setProperty("background-color", primaryCntr, "important");
          console.log('primary container color is:' + primaryCntr);
    console.log('primary color is:' + primary);
      }, 800);
  
  });
  
  var lastScrollTop; // This Varibale will store the top position
  
  navbar = nav; // Get The NavBar
  
  window.addEventListener('scroll',function(){
   //on every scroll this funtion will be called
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll
    if (scrollTop > 250) {
      navbar.classList.add('nav-scrolled'); 
     
      navbar.style.setProperty("background-color", primary, "important");
    } else {
     navbar.classList.remove('nav-scrolled');
      navbar.style.setProperty("background-color", primaryCntr, "important");
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
  }