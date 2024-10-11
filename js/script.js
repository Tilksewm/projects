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
        // Reading from the text
        fetch('data/projects.json')
        .then(Response => {
            if(!Response.ok){
                throw new Error('error during fetching data');
            }
            return Response.json();
        })
        .then(data =>{
            console.log(data);
            for(let project of data.projects){
                addProject(project);
            }
        })
        .catch(error => {
            console.error('error during proccessing data', error);
        });
        
        var addedContent = '';
        function addProject(project){
            var projectHolder = document.getElementById("projects");
            addedContent = addedContent + ''+
        '<div class="divcontainer">'+
            '<div class="subdiv">'+
                '<div class="sdiv">'+
                    '<div class="simgview">'+
                        '<img class="limg" src="' + project.smallImage +'" alt="">'+
                        '</div>'+
                        '<div class="stext">'+
                            '<h2 class="stitle">'+ project.smallTitle +'</h2>'+
                            '<p class="sdesc">'+ project.smallText +'</p>'+
                        '</div>'+
                '</div>'+
                '<div class="ldiv">'+
                    '<div class="ltext">'+
                        '<h2 class="ltitle">'+ project.largeTitle +'</h2>'+
                        '<p class="ldesc">'+ project.largeText +'</p>'+
                    '</div>'+
                    '<div class="limgview">'+
                        '<img class="limg" src="'+ project.largeImage +'" alt="">'+
                    '</div>'+
                '</div>'+
            '<button class="detailbtn" onclick="goToPage('+ project.id +')">show details</button>'+
            '</div>'+
            '</div>';
            projectHolder.innerHTML = addedContent;
        }
function goToPage(id){
    window.location.href = `pages/project detail.html?id=${id}`;
}