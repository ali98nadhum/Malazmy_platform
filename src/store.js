import create from 'zustand'


// ----- State for dark mode

// Function to read the state from localStorage
const getLocalStorage = (key, initialValue) => {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
    console.error(error)
    return initialValue
  }
}

// Function to save the state to localStorage
const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(error)
  }
}

export const useStore = create((set, get) => ({
  isDark: getLocalStorage('isDark', false),

  setIsDark: (isDark) => {
    set({ isDark })
    setLocalStorage('isDark', isDark)
  },
  // ... other states and actions
}))

// ----- End state dark mode -----------------