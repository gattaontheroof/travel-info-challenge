import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue != null) return JSON.parse(jsonValue)
      return initialValue
    })
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
  
    return [value, setValue]
  }

  
  // creating a custom local storage hook as per Web Dev Simplified, source: https://www.youtube.com/watch?v=6ThXsUwLWvc 