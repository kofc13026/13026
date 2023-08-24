// Set up constants
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');
const section6 = document.getElementById('section6');
const section7 = document.getElementById('section7');
const section8 = document.getElementById('section8');
const hamburger = document.querySelector(".hamburger");
const homeId = document.getElementById("home");
const membershipId = document.getElementById("membership");
const officersId = document.getElementById("officers");
const directorsId = document.getElementById("directors");
const activitiesId = document.getElementById("activities");
const insuranceId = document.getElementById("insurance");
const reportsId = document.getElementById("reports");
const linksId = document.getElementById("ourlinks");

// Initialize section to home
window.addEventListener('load', function() {
  showSection(section1);
});

function showSection(section) {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'none';
  section4.style.display = 'none';
  section5.style.display = 'none';
  section6.style.display = 'none';
  section7.style.display = 'none';
  section8.style.display = 'none';
  section.style.display = 'block';
};


// Listener to toggle sidebar and container section
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
});
// Listener for Home Selection
homeId.addEventListener("click", function(){
    showSection(section1);
});
// Listener for Membership Selection
membershipId.addEventListener("click", function(){
    showSection(section2);
});
// Listener for Officers Selection
officersId.addEventListener("click", function(){
    showSection(section3);
});
// Listener for Directors Selection
directorsId.addEventListener("click", function(){
    showSection(section4);
});
// Listener for Activities Selection
activitiesId.addEventListener("click", function(){
    showSection(section5);
});   
// Listener for Insurance Selection
insuranceId.addEventListener("click", function(){
     showSection(section6);
});
// Listener for Reports Selection
reportsId.addEventListener("click", function(){
     showSection(section7);
});
// Listener for Links Selection
linksId.addEventListener("click", function(){
    showSection(section8);
});