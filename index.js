/*SVG Map Game
  Practicing using SVG by making a map game. Works best on desktop
*/

document.addEventListener("DOMContentLoaded", function(){ 
 
  const cities = [['Austria', 'Vienna'], ['Albania', 'Tirana'], ['Belgium', 'Brussels'], ['Bulgaria', 'Sofia'], ['Bosnia and Herzegovina','Sarajevo'], ['Belarus', 'Minsk'], ['Switzerland', 'Bern'], ['Czech Republic', 'Prague'], ['Germany', 'Berlin'], ['Denmark', 'Copenhagen'], ['Estonia', 'Tallinn'], ['Finland', 'Helsinki'], ['France', 'Paris'], ['Greece', 'Athens'],  ['Croatia', 'Zagreb'], ['Hungary', 'Budapest'], ['Ireland', 'Dublin'], ['Iceland', 'Reykjavik'], ['Italy', 'Rome'],  ['Kosovo', 'Pristina'], ['Lithuania', 'Vilnius'],  ['Luxembourg', 'Luxembourg'], ['Latvia', 'Riga'], ['Moldova', 'Chisinau'], ['Macedonia', 'Skopje'], ['Montenegro', 'Podgorica'], ['Netherlands', 'Amsterdam'], ['Norway', 'Oslo'], ['Poland', 'Warsaw'], ['Portugal', 'Lisbon'], ['Romania', 'Bucharest'], ['Serbia', 'Belgrade'], ['Slovakia', 'Bratislava'], ['Slovenia', 'Ljubljana'], ['Sweden', 'Stockholm'], ['Ukraine', 'Kyiv'], ['Spain', 'Madrid'], ['United Kingdom', 'London']];
  
  let count = 0;
  let correct = 0;
  let option = 0;
  const countries = Array.from(document.querySelectorAll('.country'));
  const start = document.querySelector('.start');
  const capital = document.querySelector('.capital');
  const options = document.querySelector('.options');
  const capitalButton = document.querySelector('#capital-button');  
  const countryButton = document.querySelector('#country-button');
  
  function gameInit(){
    reset();
    countries.forEach((country)=>{
      country.addEventListener('click', selectCountry);
    });  
  }  
  
  function selectCountry(e){  
    console.log(this.getAttribute('data-capital'));
    if(this.getAttribute('data-capital') === cities[count][1]){
      e.target.classList.add('correct');
      count++;
      correct++;
    }
    else{
      document.getElementById(cities[count][0]).classList.add('wrong');
      count++;
    }  
    if(count === cities.length){
      return capital.innerHTML = "You scored " + correct + "/" + count;
    }
    capital.innerHTML = cities[count][option];
  }
  
  function reset(){
    count = 0;
    correct = 0;
    start.style.display = "block";
    options.style.display = "none";
    shuffle(cities);     
    capital.innerHTML = cities[count][option];
    countries.forEach((country)=>{
      country.classList.remove('wrong', 'correct');
      country.removeEventListener('click', selectCountry);
    })
  }  
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  function gameOption(e){
    e.target.id === "country-button" ? option = 0 : option = 1;
    gameInit();
  }
  
  function restart(){
    console.log(option)
    options.style.display = "block";
    start.style.display = "none";
    capital.innerHTML = "";
  }
  
  start.addEventListener('click', restart);
  countryButton.addEventListener('click', gameOption);
  capitalButton.addEventListener('click', gameOption);
  
  restart();
});