window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
var sticky = (header.offsetHeight)-(navbar.offsetHeight);
var menulist = document.getElementById("menu-list");
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.style.backgroundColor = '#333';

        menulist.classList.add("sticky-menu");
        menulist.style.backgroundColor = '#333';
    } else {
        navbar.classList.remove("sticky");
        navbar.style.backgroundColor = 'rgba(0,0,0,0.2)';

        menulist.classList.remove("sticky-menu");
        menulist.style.backgroundColor = 'rgba(0,0,0,0.2)';
    }
}
function openlist(){
    console.log(menulist.style.display)
    if(menulist.style.display === "none" 
        || menulist.style.display === ""){
        menulist.style.display = "block";
        document.getElementById("nav-drawer").style.color = "rgba(0,0,0,0)";
    }
}
function closelist(){
    menulist.style.display = "none";
    document.getElementById("nav-drawer").style.color = "#f2f2f2";
}
var pd = {};
// details initializing
// dont forget to delete any console logs
let id = new URLSearchParams(window.location.search).get('id');
const file = '../data/detail '+id+'.json';
fetch(file)
.then(Response => {
    if(!Response.ok){
        throw new error('Network response are not ok');
    }
    return Response.json();
})
.then(data =>{
    console.log('json data:', data);
    desplayDetails(data);
})
.catch(error =>{
console.error('there has been an error in the fetch opration: ', error);
});
function desplayDetails(data){
    const placeHolder = document.getElementById('place-holder');
    placeHolder.innerHTML = 
    `<section class="project-title" id="project-title">
    <h1 class="heading"> ${data.proTitle}</h1>
    <div class="row">

        <div class="content">
            <h3>${data.proDescTitle}</h3>
            <p>${data.proDesc}</p>
        </div>

        <div class="image">
            <img src="${data.proImg}" alt="">
        </div>

    </div>
</section>


<section class="form-development" id="form-development">
    <h1 class="heading"><span>${data.formTitle}</span></h1>
    <p>${data.formDesc}</p>
    <div class="box-container">`+
    (function(forms){
        let formData = '';
        for(let form of forms){
            formData += `<div class="box">
            <img src="${form.formImg}" alt="">
            <h3>${form.formImgDescTitle}</h3>
            <p>${form.formImgDesc}</p>
        </div>`;
        }
        return formData;
    })(data.forms)

    +`
    </div>

</section>
<section class="concept" id="concept">
    <div class="heading">
        <span>${data.conTitle}</span>
    </div>
    <p>${data.conDesc}</p>
    <div class="concept-container">`+
    (function(concepts){
        let conceptData= '';
        for(let concept of concepts){
            conceptData += `
            <div class="box">
            <div class="box-img">
                <img src="${concept.conImg}" alt="">
            </div>
            <p>${concept.conImgDesc}</p>
        </div>`
        }
        return conceptData;
    })(data.concepts)
        +`
    </div>
</section>

<section class="site-plan" id="site-plan">
    <h2 class="heading"><span>${data.sitePTitle}</span></h2>
    <div class="site-container"> 
        <div class="site-img">
            <img src="${data.sitePImg}" alt="legend photo">
        </div>
        <div class="site-p">
            <p>${data.sitePDesc}</p>
        </div>
    </div>
</section>

<section class="plans" id="plans">
    <div class="heading">
        <span>${data.planTitle}</span>
    </div>
    <div class="plans-container">`+
    (function(plans){
        let planData = '';
        for(let plan of plans){
            planData += `
            <div class="box">
            <div class="plan-title">
                <h3>${plan.planItemTitle}</h3>
            </div>
            <div class="box-img">
                <img src="${plan.planItemImg}" alt="">
            </div>
            <p>${plan.planItemDesc}</p>
        </div>`
        }
        return planData;
    })(data.plans)
        +`
    </div>
</section>

<section class="construction" id="construction">
    <h2 class="heading">${data.constTitle}</h2>
    <div class="construction-container"> 
        <div class="construction-img">
            <img src="${data.constImg}" alt="legend photo">
        </div>
        <div class="construction-p">
            <p>${data.constDesc}</p>
        </div>
    </div>
</section>
<section class="threeD" id="threeD">
    <h1 class="heading"> <span>${data.threeDTitle}</span></h1>

    <div class="cover">

        <div class="cover-image">
            <img src="${data.threeDImg1}" alt="">

        </div>

        <div class="second-image">
            <div class="img-container">
                <img src="${data.threeDImg2}" alt="">
            </div>
            <div class="img-container">
                <img src="${data.threeDImg3}" alt="">
            </div>
        </div>
    </div>
    <p>${data.threeDDesc}</p>
</section>`;
}