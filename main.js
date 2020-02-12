// study category variables

var studyBox = document.querySelector('#study-cat');
var studyActive = document.querySelector('#study-cat-active');


// meditation category variables

var medBox = document.querySelector('#med-cat');
var medActive = document.querySelector('#med-cat-active');


// exercise category variables

var exBox = document.querySelector('#exercise-cat');
var exActive = document.querySelector('#exercise-cat-active');

// variables, function and event listener for switching to timer card

var startButton = document.querySelector('.start-button');
var mainCard = document.querySelector('.left-side');
var timerCard = document.querySelector('.timer-card');


startButton.addEventListener('click', addTimer)

function addTimer() {
  if (accompInput.value.length > 0 && minuteInput.value.length > 0 && secondInput.value.length > 0) {
    mainCard.classList.add('hidden');
    timerCard.classList.remove('hidden');
    currentActTitle.classList.remove('hidden');
  }
}

// (studyBox.onclick == true || medBox.onclick == true || exBox.onclick == true)

var accompAlert = document.querySelector('#accomp-alert');
var minuteAlert = document.querySelector('#minute-alert');
var secondAlert = document.querySelector('#second-alert');
var currentActTitle = document.querySelector('.current-activity-title');
var catAlert = document.querySelector('#category-alert');
var logActButton = document.querySelector('.log-act-button');

window.onload = function hideTimerOnload() {
  timerCard.classList.add('hidden');
  studyActive.classList.add('hidden');
  medActive.classList.add('hidden');
  exActive.classList.add('hidden');
  accompAlert.classList.add('hidden');
  minuteAlert.classList.add('hidden');
  secondAlert.classList.add('hidden');
  currentActTitle.classList.add('hidden');
  catAlert.classList.add('hidden');
  logActButton.classList.add('hidden');
}

// toggle categories - meditate, study and exercise

studyBox.addEventListener('click', switchToStudyActive);

function switchToStudyActive() {
  studyBox.classList.add('hidden');
  studyActive.classList.remove('hidden');
  medActive.classList.add('hidden');
  medBox.classList.remove('hidden');
  exActive.classList.add('hidden');
  exBox.classList.remove('hidden');
}

medBox.addEventListener('click', switchToMedActive);

function switchToMedActive() {
  studyActive.classList.add('hidden');
  medBox.classList.add('hidden');
  medActive.classList.remove('hidden');
  studyBox.classList.remove('hidden');
  exActive.classList.add('hidden');
  exBox.classList.remove('hidden');
}

exBox.addEventListener('click', switchToExActive);

function switchToExActive() {
  studyActive.classList.add('hidden');
  exBox.classList.add('hidden');
  exActive.classList.remove('hidden');
  studyBox.classList.remove('hidden');
  medBox.classList.remove('hidden');
  medActive.classList.add('hidden');
}

// input validation

var minuteInput = document.querySelector('#minute-input');
var secondInput = document.querySelector('#second-input');


function numbersOnly(minuteInput) {
  var regEx = /[^0-9]/g;
  minuteInput.value = minuteInput.value.replace(regEx, " ");
}
// add activity alert
var accompInput = document.querySelector('.accomp-input');

startButton.addEventListener('click', addAccompAlert);

function addAccompAlert() {
  if (accompInput.value.length === 0) {
    accompAlert.classList.remove('hidden');
  }
}

// add minute alert

startButton.addEventListener('click', addMinuteAlert);

function addMinuteAlert() {
  if (minuteInput.value.length === 0) {
    minuteAlert.classList.remove('hidden');
  }
}

// add second alert

startButton.addEventListener('click', addSecondAlert);

function addSecondAlert() {
  if (secondInput.value.length === 0) {
    secondAlert.classList.remove('hidden');
  }
}

// add category alert

var medClickCount = 0;
var exClickCount = 0;
var studyClickCount = 0;


medBox.onclick = function() {
  var medClickCount = 1;
  return medClickCount;
}

exBox.onclick = function() {
  var exClickCount = 1;
  return exClickCount;
}

studyBox.onclick = function() {
  var studyClickCount = 1;
  return studyBox;
}

startButton.addEventListener('click', addActivityAlert);

function addActivityAlert() {
  if (medClickCount === 0 || exClickCount === 0 || studyClickCount === 0) {
    catAlert.classList.remove('hidden');
}
}



// change timer button

exBox.addEventListener('click', changeTimerEx);
medBox.addEventListener('click', changeTimerMed);
studyBox.addEventListener('click', changeTimerStudy);

function changeTimerEx() {
  timerButton.style.border = "1px solid #FD8078";
}

function changeTimerMed() {
  timerButton.style.border = "1px solid #C278FD";
}

function changeTimerStudy() {
  timerButton.style.border = "1px solid #B3FD78";
}

// change card two text for what you want to accomp

var card2Text = document.querySelector('.card2-text');

startButton.addEventListener('click', changeCard2Text);

function changeCard2Text() {
  card2Text.innerText = accompInput.value
}

// -----timer

var minuteInput = document.querySelector('#minute-input');
var secondInput = document.querySelector('#second-input');
var seconds = document.querySelector('.seconds');
var minutes = document.querySelector('.minutes');

startButton.addEventListener('click', showTime);

function showTime(){
  minutes.innerText = minuteInput.value;
  seconds.innerText = secondInput.value;
}

startButton.addEventListener('click', addTotalSeconds);

function addTotalSeconds() {
  return ((parseInt(minuteInput.value) * 60) + (parseInt(secondInput.value)));
}

var timerButton = document.querySelector('.timer-button');

timerButton.addEventListener('click', timerStart);

function timerStart() {
  var myTimer = setInterval(clock, 1000);
  var totalSeconds = addTotalSeconds();

  function clock() {
    minutes.innerText = Math.floor( (totalSeconds/60) % 60 );
    seconds.innerText = Math.floor( (totalSeconds--) % 60 );

    if (seconds.innerText < 10) {
      seconds.innerText = ('0' + seconds.innerText);
    }

    if (totalSeconds < 0) {
      clearInterval(myTimer);
      timerButton.innerText = "YOU'RE AMAZING!";
      logActButton.classList.remove('hidden');
  }
  }
  }


  //Add past activity cards.

  var allCategoryBoxes = document.querySelectorAll('#category-box-container');
  var cardContainer = document.querySelector('.card-container');
  var logMessage = document.querySelector('.log-message');
  var timer = document.querySelector('.timer');
  // var exText = document.querySelector('.ex-text');
  // var studyText = document.querySelector('.study-text');
  // var medText = document.querySelector('.med-text');
  //
  // allCategoryBoxes.addEventListener('click', function(event) {
  //   if (event.target.className === 'ex-text') {
  //       console.log('exercise')
  //     }
  //   if (event.target.className === 'med-text') {
  //       console.log('med')
  //     }
  //   if (event.target.className === 'study-text') {
  //     console.log('study')
  //     }
  // });


logActButton.addEventListener('click', addPastAct);

  function addPastAct() {
    cardContainer.insertAdjacentHTML('afterbegin', `
    <div>
      <p>'placeholder'</p>
    </div>`);
    logMessage.classList.add('hidden');
    currentActTitle.innerText = ('Completed Activity');
    card2Text.classList.add('hidden');
    timer.classList.add('hidden');
    timerButton.classList.add('hidden');

  }
