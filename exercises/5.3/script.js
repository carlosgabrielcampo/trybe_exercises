
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  

function createDaysOfTheMonth(){
let daysList = document.querySelector('#days')
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


for (let index = 0; index < dezDaysList.length; index += 1){
    let monthDays = dezDaysList[index];
    let monthDaysItem = document.createElement('li');
    monthDaysItem.innerText = monthDays;
    monthDaysItem.className = "days"

    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      monthDaysItem.className += " holiday"
    }

    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
        monthDaysItem.className += " friday"
      }

    daysList.appendChild(monthDaysItem)
 };
};

createDaysOfTheMonth()


function holiday(){
    let holidayButton = document.querySelector('.buttons-container')
    let buttonCreator = document.createElement('button')

    buttonCreator.id = "btn-holiday"

    holidayButton.appendChild(buttonCreator)


}

holiday()