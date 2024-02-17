export const getThemeFromStorage = () => {
  return localStorage.getItem("theme") || "";
};

export const setThemeToStorage = (theme: string) => {
  return localStorage.setItem("theme", theme);
};
