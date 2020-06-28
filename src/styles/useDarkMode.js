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
      setTheme("dark")
      storeTheme("dark")
    } else {
      setTheme("light")
      storeTheme("light")
    }
  }

  return [theme, toggleTheme]
}
