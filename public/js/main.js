const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

let city_name = document.getElementById("city_name");
let temp_status = document.getElementById("temp_status");
let temp = document.getElementById("tempNew");

const dataHide = document.querySelector(".middle_layer");

const getSubmit = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = `pls enter city name`;
    dataHide.classList.add("data-hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2f06a84dbab195cdd4e14cd34bc55f90`;
      let data = await fetch(url);
      let objData = await data.json();
      const arrData = [objData];
      city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerHTML = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;

      console.log(date);

      //condition to check sunny or cloudy
      if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
      }
      dataHide.classList.remove("data-hide");
    } catch (error) {
      console.log(error);
      city_name.innerHTML = `pls enter city name properly`;
      dataHide.classList.add("data-hide");
    }
  }
};

submitBtn.addEventListener("click", getSubmit);
