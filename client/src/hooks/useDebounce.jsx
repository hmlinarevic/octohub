// react
import { useEffect, useRef } from "react";

/**
 * Creates a debounced function that delays executing the callback until after a specified delay.
 *
 * Each call to the debounced function resets the delay timer. It's useful for optimizing performance
 * in operations like window resizing, text input, etc.
 */
export default function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    // cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
}
