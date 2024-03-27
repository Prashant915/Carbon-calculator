var previousDiv = null;
      
// Function to show/hide div based on dropdown selection
document.getElementById("dropdown").addEventListener("change", function() {
  var selectedDiv = document.getElementById(this.value);
  
  // Hide previous div
  if (previousDiv) {
    previousDiv.classList.add("hidden");
  }
  
  // Show selected div
  if (selectedDiv) {
    selectedDiv.classList.remove("hidden");
    // Update previousDiv
    previousDiv = selectedDiv;
  }
});

var inputA = document.getElementById("elecon");
var inputB = document.getElementById("numchar");
var inputC = document.getElementById("Emission");
var resultDiv = document.getElementById("evans");
var treesnumber=document.getElementById("treesnumber");
var avglife=document.getElementById("avglife");
var susrate=document.getElementById("susrate");
var spetree=document.getElementById("spetree");
var loc=document.getElementById("location");
var affans=document.getElementById("affans");



// Function to calculate result and display it
function calculateResult() {
    var a = parseFloat(inputA.value);
    var b = parseFloat(inputB.value);
    var c = parseFloat(inputC.value);

    // Check if all inputs are filled
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    var result = ((a * b)/1000)*365;
    resultDiv.textContent = "Result: " + result +" Tons of CO Credits that may be sold out";
    resultDiv.style.display = "block";
    }
    else{
      resultDiv.textContent =0
    }
}

// Add event listeners to input fields
inputA.addEventListener("input", calculateResult);
inputB.addEventListener("input", calculateResult);
inputC.addEventListener("input", calculateResult);



function calculateaff(){
  var d = parseFloat(treesnumber.value);
  var e = parseFloat(avglife.value);
  var f = parseFloat(susrate.value);
  var g = parseFloat(spetree.value);
  var h = parseFloat(loc.value);

  if (!isNaN(d) && !isNaN(e) && !isNaN(f) && !isNaN(g) && !isNaN(h)) {
    var affresult =((d*f/100)*50)/1000;
    affans.textContent = "Result: " + affresult +" Tons of CO Credits that may be sold out";
    affans.style.display = "block";
  }
  else{
    affans.textContent =0
  }
}

treesnumber.addEventListener("input",calculateaff);
avglife.addEventListener("input",calculateaff);
susrate.addEventListener("input",calculateaff);
spetree.addEventListener("input",calculateaff);
loc.addEventListener("input",calculateaff);


var avivol=document.getElementById("avivol");
var avians=document.getElementById("avians");

function calculateavi(){
  var i=parseFloat(avivol.value);

  if(!isNaN(i)){
    var aviresult=(i*0.7*3)/1000;
    avians.textContent = "Result: " + aviresult + " Tons of CO Credits that may be sold out";
    avians.style.display = "block";
  }
  else{
    avians.textContent =0
  }
}
avivol.addEventListener("input",calculateavi);

var biocap=document.getElementById("biocap");
var biolif=document.getElementById("biolif");
var biometh=document.getElementById("biometh");
var bioans=document.getElementById("bioresult");

function calculatebio(){
  var j=parseFloat(biocap.value);
  var k=parseFloat(biolif.value);
  var l=parseFloat(biometh.value);

  if (!isNaN(j) && !isNaN(k) && !isNaN(l)){
    var bioresult=(j*31)+j*0.9*25;
    bioans.textContent = "Result: " + bioresult +" Tons of CO Credits that may be sold out";
    bioans.style.display="block";
  }
  else{
    bioans.textContent =0
  }

}
biocap.addEventListener("input",calculatebio);
biolif.addEventListener("input",calculatebio);
biometh.addEventListener("input",calculatebio);

var solcap=document.getElementById("solcap");
var solloc=document.getElementById("solloc");
var sollif=document.getElementById("sollif");
var solans=document.getElementById("solans");

function calculatesolar(){
  var m=parseFloat(solcap.value);
  var n=parseFloat(solloc.value);
  var o=parseFloat(sollif.value);

  if (!isNaN(m) && !isNaN(n) && !isNaN(o)){
    var solresult=m*1000*o;
    solans.textContent="Result: " + solresult + " Tons of CO Credits that may be sold out";
    solans.style.display="block";
  }
  else{
    solans.textContent =0
  }
}
solcap.addEventListener("input",calculatesolar);
solloc.addEventListener("input",calculatesolar);
sollif.addEventListener("input",calculatesolar);