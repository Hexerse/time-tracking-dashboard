let data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]
let i = 0;
let datadaily = data[i].timeframes.daily
const buttons = document.querySelectorAll('.button');

console.log(data[i].timeframes.daily)


const clearActivities = () => {
  const activities = document.querySelectorAll('.workContainer')
  activities.forEach(a => a.remove())
}


const renderCards = (clickedOption) =>{
  clearActivities();
  const activityTracker = document.querySelector('.container');

  const calcTimeframe = (option) =>{
    if(option === 'daily'){
      return 'Yesterday'
    } else if (option === 'weekly'){
      return 'Last Week'
    } else if (option === 'monthly'){
      return 'Last Month'
    }
  }

data.forEach(activity => {
  const name = activity.title;
  const activityClass = name.toLowerCase().replace(' ','-');
  // .day or ['day'] works. Depends if your function generates a string
  const timeframeData = activity.timeframes[clickedOption];
  const previousTimeframe = calcTimeframe(clickedOption);
  const section = document.createElement('section')
  section.classList.add('workContainer', activityClass);
  const stringToInject=`<div class="workContainer">
      <div class="withinContainer">
          <div class="belowheading">
            <p class="heading">${name} <button><img src="./images/icon-ellipsis.svg" alt=""></button></p>
            <div class="divbelowheading">
              <span class="hrs">${timeframeData.current}</span> <!-- daily -->
              <span class="previous">${previousTimeframe} - ${timeframeData.previous}hrs</span> <!-- daily -->
            </div>
          </div>
      </div>
    </div>`;

    section.innerHTML = stringToInject
    activityTracker.append(section)
})}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const clickedOption = button.dataset.option
    renderCards(clickedOption);
  })
})

buttons[1].click();
