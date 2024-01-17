const bannerSets = document.getElementsByClassName('banner-sets')[0];
const banners = document.getElementsByClassName('banner');

const imageUrls = ['./assets/Background banner/header_1.jpg','./assets/Background banner/header_2.jpg','./assets/Background banner/header_3.jpg'];

let index = 1;
setInterval(function(){
    // Make the current active banner inactive
    bannerSets.style.setProperty('background-image',`url('${imageUrls[index]}')`);
    bannerSets.getElementsByClassName('active')[0].classList.remove('active');

    // Activate the next banner as per indexing
    banners[index].classList.add('active');

    // Update the indexing
    if(index >= banners.length-1){
        index=0;
    }else{
        index++;
    }
},6000);
const menuIcon = document.querySelector('.menu-icon');
const mainMenu = document.querySelector('.main-menu');

menuIcon.addEventListener("click", function toggleMenu(){
    const showProperty = mainMenu.style.display;

    if (showProperty !== 'block') {
        mainMenu.style.display = 'block';
    } else {
        mainMenu.style.display = 'none';
    }
});


// [MOBILE MENU]
const mainMenuHeadings = document.querySelectorAll('.main-menu .main-menu-heading-items');

mainMenuHeadings.forEach(function(element){
    element.addEventListener("click", (event)=>{

        mainMenuHeadings.forEach((heading)=>{
            if(heading !== element){
                heading.nextElementSibling.style.display = 'none';
            }
        });

        const displayProperty = element.nextElementSibling.style.display;
        if(displayProperty !== 'block'){
            element.nextElementSibling.style.display = 'block';
        }else{
            element.nextElementSibling.style.display = 'none';
        }
    })
});

