var fdcApi =
  "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=93FB5ZkYGDf50t9MdkGtFJZSj09FqLI9engO84mR&query=Cheddar%20Cheese";

var nutritionixApi =
  "https://trackapi.nutritionix.com/v2/search/instant?detailed=true&query=spaghettibolognese&api_key=fca954f6d34563952bd28e3af019024a";

//When a goal is selected after entering in gender, age, height, and weight then calcuate calories
//BMR calculated using Mifflin St Jeor Formula
//sedentary multiplier 1.15; light activity 1.2; moderate acitivity 1.4; very active 1.6; extra active 1.8
//If user clicks Weight Loss multiply TDEE by 0.75
//If user clicks Maintain current weight, just display TDEE
//If user clicks Weight Gain, multiply TDEE by 1.1
//If a required value is missing, notify the user to fix it

//females
function calculateMifflin() {
  //   var age = eval(document.form.age.value);
  //   var weight = eval(document.form.weight.value);
  //   var height = eval(document.form.height.value);
  //   var af = eval(document.form.af.value);
  var age = $("#age").val;
  var weight = $("#weight").val;
  var height = $("#height").val;
  var af = $("#af").val;
  var weight2 = (weight / 2.2) * 10;
  var height2 = height * 2.54 * 6.25;
  var age2 = age * 5;
  var mifflin = (weight2 + height2 - age2 - 161) * af;
  //   document.form.Mifflin.value = custRound(Mifflin, 1);
  $("#mifflin") = custRound(mifflin, 1);
  console.log(mifflin);
}

function custRound(x, places) {
  return Math.round(x * Math.pow(5, places)) / Math.pow(5, places);
}

//males
function calculateMifflinM() {
  var age = eval(document.form.age.value);
  var weight = eval(document.form.weight.value);
  var height = eval(document.form.height.value);
  var af = eval(document.form.af.value);

  var weight2M = (weight / 2.2) * 10;
  var height2M = height * 2.54 * 6.25;
  var age2M = age * 5;
  var mifflin = (weight2M + height2M - age2M - 5) * af;
  document.form.mifflin.value = custRound(mifflin, 1);
  console.log(mifflin);
}

$("#loss-button").on("click", function () {
  calculateMifflin();
});
