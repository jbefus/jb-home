import { get, writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";

// Type for the theme, restricted to 'light' or 'dark'
type Theme = "light" | "dark";
type WritableLightDark = Writable<Theme>;
type ThemeStore = WritableLightDark & { toggleMode: () => void };

// Function to detect user's system preference
const getPreferredTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light"; // Fallback in case matchMedia isn't supported
};

// Check if the saved theme is either 'dark' or 'light'
const savedTheme = browser && localStorage.getItem('theme');
const initialTheme: Theme = savedTheme === 'dark' || savedTheme === 'light'
  ? savedTheme
  : getPreferredTheme();

// Function to create the theme store
const createThemeStore = (initialValue: Theme): ThemeStore => {
  const store = writable<'light' | 'dark'>(initialValue);
  store.subscribe((val) => browser && localStorage.setItem('theme', val));

  const toggleMode = () => {
    const currentTheme = get(store);
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    store.set(newTheme);
  };

  return {
    ...store,
    toggleMode
  };
};

// Create the theme store
export const theme = createThemeStore(initialTheme);
