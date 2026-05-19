// html요소가져오기
let intro = document.querySelector("#intro");
let game = document.querySelector("#game");
let result = document.querySelector("#result");
let chance = document.querySelector("#chance");
let user = document.querySelector("#user");
let playBtn = document.querySelector("#play");
let resetBtn = document.querySelector("#reset");
let imgBox = document.querySelector(".pic1");
let imgBox2 = document.querySelector(".pic2");
let hearts = document.querySelectorAll(".heart li");

//

let computerNum;
let chanceCount = 5;
let history = []; //빈 배열 만들기

// random 수
function randomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log(computerNum);
}
randomNum();

// 사용자가 입력한 수 가지고 오기
function play() {
  //   console.log("클릭");
  let userNum = user.value; // 입력한 수 가져오기
  //   console.log(userNum);

  //
  if (history.includes(userNum)) {
    result.textContent = "이미 입력한 숫자입니다.";
    result.style.color = "#2b2b2b";
    return;
  }
  //입력한 숫자를 history에 넣음
  history.push(userNum);
  console.log(history);

  //   if (userNum < 1 || userNum > 100) {
  //     result.textContent = "1부터 100까지의 숫자를 입력하세요";
  //     return; //함수호출한 곳으로 되돌려 주는 것 (다시 숫자를 입력하는 play로 되돌아 가게 하기 위함.)
  //   }

  if (userNum < 1 || userNum > 100) {
    result.textContent = "1부터 100까지의 숫자를 입력하세요";
    result.style.color = "#2b2b2b";
    return;
  } else if (computerNum > userNum) {
    result.textContent = "공주님은 더 위층에 있어요! (UP)";
    result.style.color = "#d40012";
    imgBox.src = "img/33.jpg";
    imgBox2.src = "img/44.jpg";
  } else if (computerNum < userNum) {
    result.textContent = "너무 높이 올라왔어요! (DOWN)";
    result.style.color = "#001fac";
    imgBox.src = "img/55.jpg";
    imgBox2.src = "img/66.jpg";
  } else if (computerNum == userNum) {
    result.textContent = "공주님을 구했어요!";
    result.style.color = "#ffb700";
    playBtn.disabled = true;
    user.disabled = true;
    imgBox.src = "img/77.jpg";
    imgBox2.src = "img/88.jpg";
  } else {
    result.textContent = "숫자를 입력해주세요";
    result.style.color = "#2b2b2b";
    return;
  }

  chanceCount--;
  hearts.innerHTML = `남은기회 : <ul class="heart"></ul>`;

  console.log("현재 남은 기회:", chanceCount);
  console.log("가져온 하트 개수:", hearts.length);

  if (hearts[chanceCount]) {
    hearts[chanceCount].style.visibility = "hidden";
  }

  if (chanceCount < 1) {
    result.textContent = "GAME OVER!";
    result.style.color = "#4c0080";
    playBtn.disabled = true; // 시작버튼 비활성화
    user.disabled = true; // 입력창 비활성화
    imgBox.src = "img/99.jpg";
    imgBox2.src = "img/100.jpg";
  }

  //
}
playBtn.addEventListener("click", play);

//입력칸 클릭하면 이전에 있던 데이터 삭제
user.addEventListener("focus", () => {
  user.value = "";
});

//리셋버튼 누를 시
resetBtn.addEventListener("click", reset);
function reset() {
  //   console.log("reset");
  chanceCount = 5;
  history = [];
  hearts.innerHTML = `남은기회 : <ul class="heart"></ul>`;
  result.textContent = "용이 오기 전에 공주를 구출하라";
  result.style.color = "#2b2b2b";

  playBtn.disabled = false;
  user.disabled = false;
  user.value = "";

  hearts.forEach((heart) => {
    heart.style.visibility = "visible";
  });

  randomNum();
  imgBox.src = "img/11.jpg";
  imgBox2.src = "img/22.jpg";
}

$(function () {
  $("#intro a").on("click", function () {
    $("#intro").hide();
  });

  $("#game a").on("click", function () {
    $("#intro").show();
    reset();
  });
});
//
