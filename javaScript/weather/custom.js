//1. html요소 가져오기
let place = document.querySelector("#location");
let input = document.querySelector("input");
let button = document.querySelector("#searchBtn");

let iconEls = document.querySelectorAll("li img");
let timeEls = document.querySelectorAll("li p");
let tempEls = document.querySelectorAll("li .temp");

const ctx = document.getElementById("weatherChart");

console.log(tempEls.length);
console.log(iconEls.length);

//2. APIkey 가져오기
let APIkey = "dbe1af6855a7ed37a15aa530ab5b8040";

//3. 현재 위치 기반 날씨 가져오기
getLocation();

function getLocation() {
  navigator.geolocation.getCurrentPosition(success);
}

// [ lat = 위도 / long = 경도 ]
async function success(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat, lon);

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric&lang=kr`,
  );

  // console.log(response);
  let data = await response.json();
  //   console.log(data);
  render(data);
}

//4. 도시 이름 검색
weather = async (cityname) => {
  console.log(cityname);

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIkey}&units=metric&lang=kr`,
  );

  // console.log(response);
  let data = await response.json();
  //   console.log(data);
  render(data);
};

button.addEventListener("click", () => {
  //   console.log("클릭");
  let city = input.value;
  //   console.log(city);
  weather(city);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  //   console.log("엔터");
  if (e.key == "Enter") {
    // console.log("엔터");
    let city = input.value;
    //   console.log(city);
    weather(city);
    input.value = "";
  }
});

//5. render 함수에서 화면에 나타나게 하기
function render(data) {
  console.log("render", data);

  //   //기온
  //   console.log(data.main.temp);

  //   //위치
  //   console.log(data.name);

  //   //풍속
  //   console.log(data.wind.speed);

  //   //날씨설명
  //   console.log(data.weather[0].description);

  place.textContent = data.city.name; // 위치 이름 띄우기

  //차트만들기 (for문 밖에 먼저 배열 선언)
  let temps = []; //온도
  let labels = []; //시간

  for (let i = 0; i < tempEls.length; i++) {
    //온도
    // console.log(data.list[i].main.temp);
    let temp = Math.round(data.list[i].main.temp); // 반올림
    tempEls[i].textContent = `${temp}℃`;

    //아이콘
    let icon = data.list[i].weather[0].icon;

    let iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    // console.log(iconUrl);
    iconEls[i].src = iconUrl;

    //시간
    let label = data.list[i].dt_txt.slice(11, 16); //시간대 자르기
    // console.log(label);
    timeEls[i].textContent = label;

    //배열 안에 온도, 시간을 추가
    temps.push(temp);
    labels.push(label);
  }
  // console.log(temps, labels);

  drawChart(temps, labels);
}

let chart;

//차트
function drawChart(temps, labels) {
  //   console.log("차트");

  if (chart) {
    chart.destroy(); //기존 차트 삭제
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "시간별 온도",
          data: temps,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 10,
          max: 40,
          ticks: { stepSize: 5 },
          title: {
            display: true,
            text: "온도",
            color: "gray",
            font: { size: 20 },
          },
        },
      },
      layout: {
        padding: {
          left: 30,
        },
      },
    },
  });
}
