import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultThemeId,
  themeList,
  themeToCssVars,
  themes,
  type Theme,
  type ThemeId,
} from "@/themes/theme";

const STORAGE_KEY = "beautyai.theme";

interface ThemeContextValue {
  theme: Theme;
  themeId: ThemeId;
  themes: Theme[];
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(defaultThemeId);

  // 读取本地偏好（仅客户端，避免 SSR 水合不一致）
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    if (stored && stored in themes) setThemeIdState(stored);
  }, []);

  useEffect(() => {
    const vars = themeToCssVars(themes[themeId]);
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => root.style.setProperty(key, value));
  }, [themeId]);

  const setThemeId = useCallback((id: ThemeId) => {
    setThemeIdState(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme: themes[themeId], themeId, themes: themeList, setThemeId }),
    [themeId, setThemeId],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme 必须在 ThemeProvider 内使用");
  return ctx;
}
