//영화 포스터 이미지
let movieBoard = document.querySelector("#movieBoard");
let apikey = "2a15bdca5b0b55c4922ff72a5c76cc59";

//전역변수
let currentPage = 1; //페이지 번호
let currentList = "now_playing"; //현재 리스트 (상영작/추천 등...어떤 메뉴인지)

//
//
//
//서버에서 원하는 영화 가지고 오기
movie = async (lists, page = 1) => {
  //   console.log("movie");
  //   console.log(lists);

  currentPage = page;
  currentList = lists;
  console.log("current", currentList, currentPage);

  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${currentList}?api_key=${apikey}&language=ko-KR&page=${currentPage}`,
  );
  //   console.log(respose);

  let data = await response.json();
  console.log(data);

  movieList = data.results;
  console.log(movieList);
  render(movieList);
};

// 기본화면에서 현재상영영화 떠있게 하기
movie("now_playing");

//화면에 나타나는 함수
render = (movieList) => {
  //   console.log("화면");

  movieBoard.innerHTML = "";

  movieList.forEach((movie) => {
    // console.log(movie.title);
    // console.log(movie.poster_path);

    card = `
      <div class="card">
        <div class="img_box">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            <p class="overview">${over(movie.overview, 100)}</P>
            <p class="avg"><span>🍿 </span>${Math.round(movie.vote_average)}</P>
        </div>        
        <h2>${movie.title}</h2>
      </div>
    `;
    movieBoard.innerHTML += card;
  });
};

//영화평이 길 때 글자수 제한.
function over(text, limit) {
  // console.log(text.length);
  return text.length > limit ? text.slice(0, limit) + "..." : text; //삼항연산자
}

//===검색===

//searchInput, searchBtn
let input = document.querySelector("#searchInput");
let button = document.querySelector("#searchBtn");
//searchBtn 을 클릭하면~~~~~~~

button.addEventListener("click", async () => {
  // console.log("클릭");
  let keyword = input.value;
  console.log(keyword);

  if (keyword == "") {
    alert("검색어를 입력하세요");
    return;
  }

  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${apikey}&language=ko-KR`,
  );
  //   console.log(respose);

  let data = await response.json();
  //   console.log(data);

  movieList = data.results;
  console.log(movieList);
  render(movieList);

  input.value = "";
});

input.addEventListener("keydown", async (e) => {
  // console.log("엔터");
  if (e.key == "Enter") {
    // console.log("엔터");
    let keyword = input.value;
    console.log(keyword);

    if (keyword == "") {
      alert("검색어를 입력하세요");
      return;
    }

    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${apikey}&language=ko-KR`,
      // api 기본주소?추가&추가&추가&추가&
    );
    //   console.log(respose);

    let data = await response.json();
    //   console.log(data);

    movieList = data.results;
    console.log(movieList);
    render(movieList);

    input.value = "";
  }
});

// 더보기
let more = document.querySelector("#more");

more.addEventListener("click", () => {
  console.log("more");

  currentPage++;
  movie(currentList, currentPage);
});
