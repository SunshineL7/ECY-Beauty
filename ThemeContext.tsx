/**
 * 主题上下文入口。
 * 实际实现位于 @/hooks/useTheme，此文件按工程结构约定统一导出，
 * 页面/组件可从 @/contexts/ThemeContext 引用。
 */
export { ThemeProvider, useTheme } from "@/hooks/useTheme";
export type { Theme, ThemeId, ThemeTokens } from "@/themes/theme";
export { themes, themeList, defaultThemeId } from "@/themes/theme";
