import { useState } from "react"

const readTheme = () => {
  if (typeof window !== "undefined") {
    const mode = localStorage.getItem("theme")
    return mode ? mode : "light"
  } else {
    return "light"
  }
}

const storeTheme = mode => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", mode)
  }
}

export const useDarkMode = () => {
  const [theme, setTheme] = useState(readTheme())

  const toggleTheme = () => {
    if (theme === "light") {
      document.body.classList.remove("theme-light")
      document.body.classList.add("theme-dark")
      setTheme("dark")
      storeTheme("dark")
    } else {
      document.body.classList.remove("theme-dark")
      document.body.classList.add("theme-light")
      setTheme("light")
      storeTheme("light")
    }
  }

  return [theme, toggleTheme]
}
