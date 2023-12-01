let dropdownIcon = document.querySelector(".menu");
let dropdownList = document.querySelector("nav .link-list");

function handlerDropdownToggler() {
  let computedStyle = window.getComputedStyle(dropdownList);
  let displayValue = computedStyle.getPropertyValue("display");

  if (displayValue === "block" || displayValue === "flex") {
    dropdownList.style.display = "none";
  } else {
    dropdownList.style.display = "flex";
  }
}

dropdownIcon.addEventListener("click", handlerDropdownToggler);
