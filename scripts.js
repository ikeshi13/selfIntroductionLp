// スクロールして要素が見えたときにクラスを追加
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");
  const slideInElements = document.querySelectorAll(".slide-in");

  function checkVisibility() {
    fadeInElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 100) {
        element.classList.add("visible");
      }
    });

    slideInElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // 初回読み込み時の表示チェック
});
