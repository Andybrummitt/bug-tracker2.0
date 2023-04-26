import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "light" ? (
        <button aria-label="Toggle theme to dark">
          <Sun onClick={() => setTheme("dark")} />
        </button>
      ) : (
        <button aria-label="Toggle theme to light">
          <Moon onClick={() => setTheme("light")} />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
