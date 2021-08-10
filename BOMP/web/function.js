/* Code By Simon Cichosz
*/






// Listen for Submit
document.getElementById("body-form").addEventListener("submit", function(e) {
  // Hide Results
  document.getElementById("result").style.display = "none";

  // Show Loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {

  const gender = parseFloat(document.getElementById("gender").value);
  const age = parseFloat(document.getElementById("age").value * 12);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const bmi = weight / ((height/100)*(height/100));
  const wc = parseFloat(document.getElementById("wc").value);
  const ts = parseFloat(document.getElementById("ts").value);

  const resLBM = document.getElementById("lbm");
  const resFM = document.getElementById("fm");

  console.log("gender " + gender);
  console.log("age " + age);
  console.log("height " + height);
  console.log("weight " + weight);
  console.log("bmi " + bmi);
  console.log("wc " + wc);
  console.log("ts " + ts);

  // check input
  if (isFinite(age) && isFinite(height) && isFinite(weight) && isFinite(wc) && isFinite(ts)  ) {

    // calc predicted lean body mass
    const pLBM = 
    10326.8999121388 +
    gender*-10711.6455665325 +
    age*10.6375570898579 +
    weight*1595.08672372114 +
    height*-11.3422384142507 +
    bmi*-559.928576143793 +
    wc*125.688628001356 +
    ts*-569.053461139299+
    gender*age*-5.69138004585964 +
    gender*weight*-243.237231120954 +
    gender*height*62.4132141291558 +
    gender*wc*167.149390685090 +
    age*weight*-0.155284152030408 +
    age*wc*0.129124803039460 +
    age*ts*0.166828593073795 +
    weight*bmi*-4.42574819032192 +
    weight*ts*-3.23235190000865 +
    height*wc*-3.12759122228094 +
    wc*ts*2.19386370776631 +
    age*age*-0.00659388781792503 +
    wc*wc*-0.776302871082223 +
    ts*ts*6.89862901788433;

    // calc predicted fat mass
    const pFM = 
    -5753.19503412443 +
    gender*12766.3140470433+
    age*-34.2451139661845+
    weight*-1558.30233114795+
    height*-30.4577104908219+
    bmi*-686.975864865937+
    wc*-410.916447906236+
    ts*561.182487883685+
    gender*age*6.39076276009624 +
    gender*weight*262.869046781623+
    gender*height*-75.6498637002493+
    gender*wc*-184.349540594135+
    age*height*0.140300319148493+
    age*bmi*0.573987341415722+
    age*wc*-0.179848344058220+
    age*ts*-0.196839630990830+
    weight*wc*-2.69764868287085+
    weight*ts*2.68469139341890+
    height*bmi*23.1817017150246+
    height*wc*5.09799762062414+
    wc*ts*-1.28234082449687+
    age*age*0.00694710399972708+
    weight*weight*2.96577458446006+
    wc*wc*1.88086959031077+
    ts*ts*-7.31547919362124;
   


    // output results
    resLBM.value = (pLBM/1000).toFixed(2);;
    resFM.value = (pFM/1000).toFixed(2);;

    // Show Results
    document.getElementById("result").style.display = "block";

    // Hide Loader
    document.getElementById("loading").style.display = "none";


  } else {
    showError("Please check number inputs");
  }


}

// Show Error
function showError(error) {
  // Hide Results
  document.getElementById("result").style.display = "none";

  // Hide Loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");

  // Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear Error after 3 seconds
  setTimeout(clearError, 3000);

  // Clear Error
  function clearError() {
    document.querySelector(".alert").remove();
  }
}