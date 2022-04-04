const currentLocation = location.href;
        const menuItem = document.querySelectorAll('a');
        const menuLength = menuItem.length
        for(let i = 0; i<menuLength; i++){
        if(menuItem[i].href===currentLocation){
            menuItem[i].className = "active"
            }
        }
const nav = document.querySelector(".navContainer");
const hero = document.querySelector(".details-container");

const sectionOneOptions = {
    rootMargin: "-650px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
entries,
sectionOneObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('appear');
        }
        else{
            nav.classList.remove('appear');
        }
    });
},sectionOneOptions);

sectionOneObserver.observe(hero); 

mapboxgl.accessToken = 'pk.eyJ1Ijoia2ltLXJheW1vbmQyNyIsImEiOiJjbDB4YmxxejYxcHplM2RvcG1rdWVlNGNjIn0.A__7dJZ0-0ShWeTJoA7riw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/kim-raymond27/cl0xcvpx5004k14lphas9mh4e',
center:[123.849860,8.319160],//[lng,lat]
zoom:12
});
var marker = new mapboxgl.Marker()
.setLngLat([123.849860,8.319160])
.addTo(map);