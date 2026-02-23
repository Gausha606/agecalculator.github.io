let dateForm = document.querySelector(".dateDiv");
let dateInput = document.querySelector(".dateInput");
let dateIcon = document.querySelector(".dateIcon");
let resultPara = document.querySelector(".resultPara");
let submitBtn = document.querySelector(".submitBtn");
dateInput.max = new Date().toISOString().split("T")[0];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resultPara.style.display = "none";
  let Dob = dateInput.value;
  if (!Dob) {
    return alert("please enter a date");
  }

  let startTime = luxon.DateTime.fromISO(Dob);

  //method 1:
  // let currentTime = new Date();
  // let endTime = luxon.DateTime.fromISO(currentTime.toISOString().split("T")[0]);

  //method 2:
  let endTime = luxon.DateTime.now().startOf("day");

  let diff = endTime.diff(startTime, ["years", "months", "days"]).toObject();

  const { years, months, days } = diff;
  resultPara.style.display = "block";
  resultPara.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
});
