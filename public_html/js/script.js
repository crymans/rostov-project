document.addEventListener('contextmenu', event => event.preventDefault());
    
$(function(){
    Check_browse()
})

const stylesheet = document.styleSheets[0];
var nAgt = navigator.userAgent;
let div = document.querySelectorAll('background_im')

function Check_browse(){
    if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
        console.log('opr')
       }
       
       else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
           console.log('edge')
       }
       
       else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
           console.log('MSIE')
       }
       
       else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
           console.log('CHROME')
       }
       
       else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
           console.log('SAFARI')
       }
       
       else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
           console.log('FIreFox')
       }
       
       else{
           document.getElementById('parallax').style.backgroundSize = '100%'
           console.log('niger')
       
           div.forEach((element) => {
               element.style.backgroundSize = '100%'
           });
       }


}




    

    
    
    
    
    let act = document.getElementById('act')
    let act_div = document.getElementById('act_2')
    
    let body = document.getElementById('body')
    

    let paralax = document.getElementById('parallax')
    let paralax2 = document.getElementById('parallax2')

    
    let art = document.getElementById('art')

    let nav = document.getElementById('glav_nav')

    const navs = document.getElementsByClassName('nav_block')

    window.addEventListener('scroll', function(){
        
        paralax.style.opacity = - window.pageYOffset / 1000 * 2 + 1
        paralax2.style.opacity = - window.pageYOffset / 1000 * 4 + 1
        art.style.opacity = window.pageYOffset / 1000 * 2
        paralax.style.scale = 1 + window.pageYOffset / 2500
    })



