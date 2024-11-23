
$(document).ready(function() { 
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.eq(index).css('left', '0').siblings().css('left', '100%');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // 첫 슬라이드 표시
    showSlide(currentIndex);

    // 3초마다 슬라이드 전환
    setInterval(nextSlide, 3000);
});
$(document).ready(function () {
$(".main-menu").hover(
    function () {
        $(this).children(".sub-menu").stop().slideDown(200); // 서브메뉴 펼침
    },
    function () {
        $(this).children(".sub-menu").stop().slideUp(200); // 서브메뉴 숨김
    }
);
});

// 서브메뉴 1-1 요소 선택
const submenu1_1 = document.querySelector("#submenu-1-1");

// 서브메뉴 1-1 클릭 이벤트
submenu1_1.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 막기

    // 팝업 콘텐츠 표시
    const popup = document.getElementById("popup-content");
    popup.style.display = "block";

    // 확인 버튼 클릭 이벤트
    document.getElementById("confirm").addEventListener("click", function () {
        // 구글 지도 새 창 열기
        window.open("https://www.google.com/maps/place/Seoul/@37.5665,126.9780,13z", "_blank");
        popup.style.display = "none"; // 팝업 숨기기
    });

    // 취소 버튼 클릭 이벤트
    document.getElementById("cancel").addEventListener("click", function () {
        popup.style.display = "none"; // 팝업 숨기기
    });
});