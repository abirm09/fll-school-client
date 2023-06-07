const setTheme = isDark => {
  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  const theme = localStorage.getItem("theme");
  if (isDark) {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
  } else {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", theme);
  }
};

const initTheme = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  if (localStorage.getItem("theme") === "light") {
    setTheme(false);
  } else {
    setTheme(true);
  }
};

export { setTheme, initTheme };
