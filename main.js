import {firstDist,secondDist,thirdDist,fourthDist} from './DataBaseLike.js';
import {crew1,crew2,crew3,crew4} from './DataBaseLike.js';
import {tech_1,tech_2,tech_3} from './DataBaseLike.js';

const humburger=document.querySelector("#icon-hamburger");
const close_icon=document.querySelector("#icon-close");
const nav_bar=document.querySelector("ul");
const background_images=document.querySelectorAll(".background img");

var test_crew=0,test_tech=0,test_dest=0,test_home=1;

humburger.addEventListener("click",()=>{
    close_icon.style.display="block";
    nav_bar.style.display="flex";
    humburger.style.display="none";
})
close_icon.addEventListener("click",()=>{
    close_icon.style.display="none";
    nav_bar.style.display="none";
    humburger.style.display="block";
})

// ! Background

window.addEventListener('resize', handleWindowSize);

function handleWindowSize() {
    var windowWidth = window.innerWidth;
    for(let i=0;i<background_images.length;i++)background_images[i].style.display="none";
    var back_mobile = [background_images[2],background_images[5],background_images[8],background_images[11]];
    var back_desktop = [background_images[0],background_images[3],background_images[6],background_images[9]];
    var back_tablet = [background_images[1],background_images[4],background_images[7],background_images[10]];
    if (windowWidth < 600) {
        humburger.style.display="block";
        nav_bar.style.display="none";
        back_mobile.forEach(element => element.style.display="none");
        if(test_home) back_mobile[0].style.display="block";
        else if(test_dest) back_mobile[1].style.display="block";
        else if(test_crew) back_mobile[2].style.display="block";
        else if(test_tech) back_mobile[3].style.display="block";

    } else if (windowWidth >= 600 && windowWidth < 1024) {
        humburger.style.display="none";
        close_icon.style.display="none";
        nav_bar.style.display="flex";
        back_tablet.forEach(element => element.style.display="none");
        if(test_home) back_tablet[0].style.display="block";
        else if(test_dest) back_tablet[1].style.display="block";
        else if(test_crew) back_tablet[2].style.display="block";
        else if(test_tech) back_tablet[3].style.display="block";
    } else {
        humburger.style.display="none";
        close_icon.style.display="none";
        nav_bar.style.display="flex";
        back_desktop.forEach(element => element.style.display="none");

        if(test_home) back_desktop[0].style.display="block";
        else if(test_dest) back_desktop[1].style.display="block";
        else if(test_crew) back_desktop[2].style.display="block";
        else if(test_tech) back_desktop[3].style.display="block";
    }
}

const home=document.querySelector(".home");
const destination=document.querySelector(".destination");
const crew=document.querySelector(".crew");
const technology=document.querySelector(".technology");
const a_elements=document.querySelectorAll("header a");

a_elements[0].style.borderBottom="3px solid white";

var all_pages=[home,destination,crew,technology];
var all_test=[test_crew,test_tech,test_dest,test_home]

a_elements.forEach((el,index) =>{
    el.addEventListener("click",()=>{
        for(let i =0;i<a_elements.length;i++)a_elements[i].style.border="none";
        el.style.borderBottom="3px solid white";
        handleWindowSize();
        close_icon.style.display="none";
        for(let i=0;i<all_pages.length;i++)all_pages[i].style.display="none";
        for(let i=0;i<all_test.length;i++)all_test[i]=0;
        all_pages[index].style.display="grid";
        all_test[index]=1;
    })
})


//!  ****************** DESTINATION *************************


const dest_buttons=document.querySelectorAll(".select-dest button");

dest_buttons[0].style.borderBottom="3px solid white";
dest_buttons.forEach((el,index) =>{
    var tab_planet =[firstDist,secondDist,thirdDist,fourthDist];
    el.addEventListener("click",()=>{
        for(let i =0;i<dest_buttons.length;i++)dest_buttons[i].style.border="none";
        el.style.borderBottom="3px solid white";
        document.querySelector("#destination-name").textContent=tab_planet[index].name;
        document.querySelector("#description").textContent=tab_planet[index].description;
        document.querySelector("#distance").textContent=tab_planet[index].distance;
        document.querySelector("#time").textContent=tab_planet[index].time;
        document.querySelector("#planet-img").src=tab_planet[index].img;

    })
})

//!  ****************** CREW *************************

const cercle = document.querySelectorAll(".switch-cercle div");

cercle.forEach((element,index) => {
    var tab_crew =[crew1,crew2,crew3,crew4];
    element.addEventListener("click",()=>{
        for(let i =0;i<cercle.length;i++)cercle[i].style.opacity=".5";
        element.style.opacity="1";
        document.querySelector("#crew-desc").textContent=tab_crew[index].description;
        document.querySelector("#crew-name").textContent=tab_crew[index].name;
        document.querySelector("#crew-post").textContent=tab_crew[index].post;
        document.querySelector("#crew-img").src=tab_crew[index].img;
    })
    
});

//!  ****************** TECHNOLOGY *************************

const tech_btn=document.querySelectorAll(".tech-btn button");
const all_tech_btn=document.querySelector(".tech-btn");
const tech_name=document.querySelector("#tech-name");
const tech_desc=document.querySelector("#tech-desc");
const tech_img=document.querySelector("#tech-img");

var tab_tech =[tech_1,tech_2,tech_3];

tech_btn.forEach((el,index) =>{
    el.addEventListener("click",()=>{
        for(let i =0;i<tech_btn.length;i++){tech_btn[i].style.backgroundColor="transparent";tech_btn[i].style.color="white"}
        el.style.backgroundColor="white";
        el.style.color="black";
        tech_name.textContent=tab_tech[index].name;
        tech_desc.textContent=tab_tech[index].description;
        tech_img.src=tab_tech[index].img;
    })

})


// & *********** Animation *****************

function init (...arr){arr.flat().forEach(el =>{el.classList.add("hidden");el.classList.remove("active")});}

const h2_home=document.querySelector(".home-content h2");
const h1_home=document.querySelector(".home-content h1");
const p_home=document.querySelector(".home-content p");
const button_home=document.querySelector(".home button");
var home_arr=[h2_home,h1_home,p_home,button_home]

const name_dest=document.querySelector("#destination-name");
const desc_dest=document.querySelector("#description");
const distance_dest=document.querySelector(".distance-time");
const select_dest=document.querySelector(".select-dest");
const dest_title=document.querySelector(".destination #title");


const crew_desc=document.querySelector("#crew-desc")
const crew_name=document.querySelector("#crew-name")
const crew_post=document.querySelector("#crew-post")
const crew_img=document.querySelector("#crew-img")

var home_arr=[h2_home,h1_home,p_home,button_home]
var dist_arr=[name_dest,desc_dest,distance_dest,select_dest,dest_title];
var crew_arr=[crew_desc,crew_name,crew_post,crew_img];
var tech_arr=[tech_name,tech_desc,tech_img,all_tech_btn];




init(dist_arr,home_arr,crew_arr,tech_arr)

window.addEventListener("load",()=>home_arr.forEach(el => {el.classList.remove("hidden");el.classList.add("active");}))

a_elements[0].addEventListener("click",()=>{
    init(dist_arr,crew_arr,tech_arr);
    clearTimeout(animationTimeout); 
    var animationTimeout = setTimeout(() => {
        home_arr.forEach(el => {el.classList.remove("hidden");el.classList.add("active");})
    }, 100);
})

document.addEventListener("mousemove",(e)=>{
    var move = document.querySelector("#explore")
    var val1=e.clientX/50,val2=e.clientY/50;
    move.style.transform="translate("+val1+"px" +","+val2+"px)"
})

a_elements[1].addEventListener("click",()=>{
    init(home_arr,crew_arr,tech_arr);
    clearTimeout(animationTimeout); 
    var animationTimeout = setTimeout(() => {
        dist_arr.forEach(el => {el.classList.remove("hidden");el.classList.add("active");})
    }, 100);
    
})
a_elements[2].addEventListener("click",()=>{
    init(home_arr,dist_arr,tech_arr);
    clearTimeout(animationTimeout); 
    var animationTimeout = setTimeout(() => {
        crew_arr.forEach(el => {el.classList.remove("hidden");el.classList.add("active");})
    }, 100);

})

a_elements[3].addEventListener("click",()=>{
    init(home_arr,dist_arr,crew_arr);
    clearTimeout(animationTimeout); 
    var animationTimeout = setTimeout(() => {
        tech_arr.forEach(el => {el.classList.remove("hidden");el.classList.add("active");})
    }, 100);

})






  