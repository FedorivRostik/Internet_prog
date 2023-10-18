const timeObject = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  // Функція для виведення часу на екран.
  displayTime: function () {
    const formattedHours = String(this.hours).padStart(2, "0");
    const formattedMinutes = String(this.minutes).padStart(2, "0");
    const formattedSeconds = String(this.seconds).padStart(2, "0");
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  },

  // Функція для зміни часу на задану кількість секунд.
  changeSeconds: function (seconds) {
    const totalSeconds =
      this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  },

  // Функція для зміни часу на задану кількість хвилин.
  changeMinutes: function (minutes) {
    const totalMinutes = this.hours * 60 + this.minutes + minutes;
    this.hours = Math.floor(totalMinutes / 60) % 24;
    this.minutes = totalMinutes % 60;
  },

  // Функція для зміни часу на задану кількість годин.
  changeHours: function (hours) {
    this.hours = (this.hours + hours) % 24;
  },
};
