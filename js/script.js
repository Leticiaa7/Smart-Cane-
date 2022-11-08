var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
    /*
    breakpoints(){
      0: {
        slidesPerview: 3,
      },
      520: {
        slidesPerview: 2,
      },
      950: {
        slidesPerview: 1,
      },
    },
     */
  });

  // MENU RESPONSIVO

  let show = true;

  const menuSection = document.querySelector(".menu-section")
  const menuToggle = menuSection.querySelector(".menu-toggle")

  menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    

    menuSection.classList.toggle("on", show)
    show = !show;
  })
  