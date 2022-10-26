// Include the JSON data in JS:
let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

// Grab the buttons:
const buttons = document.querySelectorAll(".btn");

// ActivateClickedButton Function: this makes sure the button stays active once it's clicked on:
const activateClickedButton = (btn) => {
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
};

// This function avoids the cards from being added
const clearActivities = () => {
  const activities = document.querySelectorAll("section.grid-item");
  activities.forEach((a) => a.remove());
};

// RenderCards Function: this will grab in all the data that we need and add the grid content in later on
// Each object in the JSON data fill will be called as an "activity", so "activity" is the Object
const renderCards = (clickedOption) => {
  clearActivities();
  //Let's grab the container
  const activityTracker = document.querySelector(".grid-container");
  // CalcTimeframe Function
  const calcTimeframe = (btn) => {
    if (btn === "daily") {
      return "Yesterday";
    } else if (btn === "weekly") {
      return "Last Week";
    } else if (btn === "monthly") {
      return "Last Month";
    }
  };
  // Looping through all the data
  data.forEach((activity) => {
    const name = activity.title; // This grabs the titles Work, Play, Study etc.
    const activityClass = name.toLocaleLowerCase().replace(" ", "-"); // Replace the space in between "Self Care" with a dash, because it's not possible to grab words with spaces
    const timeframeData = activity.timeframes[clickedOption];
    const previousTimeframe = calcTimeframe(clickedOption);
    const main = document.createElement("main"); // This will create a main in HTML
    main.classList.add(".grid-item", activityClass); // activityClass is for example Work, Play etc.
    //console.log();
    // This will be appended to HTML (USE BACKTICK``):
    const stringToInject = ` 
    <div class="stats-card">
    <div class="category">
      <h2>${name}</h2>
    </div>
    <div class="time-tracker">
      <p>${timeframeData.current}hrs</p>
      <p>${previousTimeframe} - ${timeframeData.previous}hrs</p>
    </div>
  </div>
   `;
    // Add the above into the main in HTML
    main.innerHTML = stringToInject;
    activityTracker.append(main);
  });
};

// Do this for each button:
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // When you click on the button it's going to run 2 functions
    activateClickedButton(btn);
    const clickedOption = btn.dataset.frequency; // It will grab the data of daily, weekly and monthly
    renderCards(clickedOption);
  });
});

buttons[1].click();
