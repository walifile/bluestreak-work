// counter timer start
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}








// num 
const pretest = {
  questionsArray : null, 
  counter : 0,
  question:null
};

async function callJSONPlaceholder() {
  const response = await fetch("/problems.json");
  const res = await response.json();
  return res;
}

  callJSONPlaceholder()
  .then(res => {

    const updateArray = res.map(q => {

      const obj = q;
      obj.anslen = q.answer.length
      return obj;

    });

    pretest.questionsArray = updateArray;

    pretest.question = pretest.questionsArray[pretest.counter]

    display();

  });


  const display = () => {

    const {numeric_1,operator,numeric_2} = pretest.question;
    document.getElementById("num-1").textContent = numeric_1;
    document.getElementById("num-2").textContent = numeric_2;
    document.getElementById("operator").textContent = operator;
    document.getElementById('ans').value = ""
  }

 var images =  document.querySelectorAll('.tag')

 images.forEach(demo => {
   demo.addEventListener('click' , (e) => {
    document.getElementById('ans').value += (e.target.id)

    if(document.getElementById('ans').value.length === pretest.question.anslen){
      pretest.counter += 1;
      pretest.question = pretest.questionsArray[pretest.counter];
      display();
    }
    
   })
 });





