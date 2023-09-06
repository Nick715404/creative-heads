
export function scrollBurger (event) {
  const burger = document.querySelector('.MobileNav_burger_btn__NSJGo');
  const burgerBox = document.querySelector('.MobileNav_burger__btn_box__gIV8u');
  const burgerPosition = burger.getBoundingClientRect();
  
  var scrollY = window.scrollY;

  console.log(burgerPosition);
}