const toggle = document.getElementsByClassName("toggle-btn");
const arr = [...toggle];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    let targetTheme;
    if (index === 0) {
      targetTheme = "dark";
    } else if (index === 1) {
      targetTheme = "light";
    }
    document.documentElement.setAttribute("data-theme", targetTheme);
  
    arr
      .filter((item) => {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});