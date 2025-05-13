const initBurgerMenu = () => {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".nav__menu");
  const navLinks = document.querySelectorAll(".nav__link");

  const toggleMenu = () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active")
      ? "hidden"
      : "";
  };

  const closeMenu = () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", toggleMenu);
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
};

const initHeroSwiper = () => {
  new Swiper(".hero__swiper", {
    navigation: {
      nextEl: ".custom__arrow-next",
      prevEl: ".custom__arrow-prev",
    },
    loop: true,
  });
};

const initYandexMap = () => {
  ymaps.ready(() => {
    const map = new ymaps.Map("yandex-map", {
      center: [55.034994, 82.920409],
      zoom: 16,
      controls: ["zoomControl"],
    });

    const placemark = new ymaps.Placemark(
      [55.034994, 82.920409],
      { balloonContent: "Депутатская улица, 46" },
      { preset: "islands#redIcon", iconColor: "#ff4d4f" }
    );

    map.geoObjects.add(placemark);
  });
};

const initModal = () => {
  const modal = document.getElementById("callback-modal");
  const openBtn = document.querySelector(".modal-open-btn");
  const closeBtn = modal.querySelector(".modal__close");
  const overlay = modal.querySelector(".modal__overlay");

  const toggleModal = () => modal.classList.toggle("active");

  openBtn.addEventListener("click", () => modal.classList.add("active"));
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  overlay.addEventListener("click", () => modal.classList.remove("active"));
};

document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initHeroSwiper();
  initYandexMap();
  initModal();
});
