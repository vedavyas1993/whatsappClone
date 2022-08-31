import React, { useState, useEffect } from "react";

const PREFIX = "whatsapp-clone-";
function useLocalStorage(key, initialvalue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    // If no prefixedkey is present in local storage, jsonValue becomes null
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
    if (typeof initialvalue === "function") {
      return initialvalue();
    } else {
      return initialvalue ? initialvalue : "";
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
