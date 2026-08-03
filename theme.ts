/**
 * BeautyAI 主题系统
 *
 * 所有颜色统一在此定义，组件禁止硬编码颜色。
 * 运行时由 ThemeProvider 写入 CSS 变量，组件通过语义化 Tailwind class 使用。
 */

export type ThemeId =
  | "taro"
  | "apricot"
  | "glacier"
  | "moss"
  | "lavender"
  | "linen";

export interface ThemeTokens {
  /** 页面背景 */
  backgroundColor: string;
  /** 主色（按钮/高亮） */
  primaryColor: string;
  /** 主色上的文字 */
  primaryForeground: string;
  /** 卡片表面 */
  cardColor: string;
  /** 强调色（次要点缀） */
  accentColor: string;
  /** 正文文字 */
  textColor: string;
  /** 弱化文字 */
  mutedTextColor: string;
  /** 描边 */
  borderColor: string;
  /** AI 光效色（渐变/光晕） */
  aiEffectColor: string;
}

export interface Theme {
  id: ThemeId;
  name: string;
  subtitle: string;
  keywords: string[];
  /** 一句话主题描述 */
  description: string;
  tokens: ThemeTokens;
}

export const themes: Record<ThemeId, Theme> = {
  taro: {
    id: "taro",
    name: "香芋紫谧境",
    subtitle: "柔光修护",
    keywords: ["温柔", "修护", "疗愈"],
    description: "温柔陪伴，让肌肤慢慢恢复稳定。",
    tokens: {
      backgroundColor: "oklch(0.972 0.014 310)",
      primaryColor: "oklch(0.55 0.09 305)",
      primaryForeground: "oklch(0.99 0.005 310)",
      cardColor: "oklch(0.995 0.004 310)",
      accentColor: "oklch(0.9 0.045 320)",
      textColor: "oklch(0.28 0.035 305)",
      mutedTextColor: "oklch(0.56 0.025 305)",
      borderColor: "oklch(0.91 0.018 310)",
      aiEffectColor: "oklch(0.72 0.12 300)",
    },
  },
  apricot: {
    id: "apricot",
    name: "奶杏暖光",
    subtitle: "原生温润",
    keywords: ["温暖", "自然", "陪伴"],
    description: "像清晨阳光一样温柔呵护肌肤。",
    tokens: {
      backgroundColor: "oklch(0.975 0.018 78)",
      primaryColor: "oklch(0.62 0.1 55)",
      primaryForeground: "oklch(0.99 0.005 80)",
      cardColor: "oklch(0.995 0.006 80)",
      accentColor: "oklch(0.9 0.05 70)",
      textColor: "oklch(0.3 0.03 60)",
      mutedTextColor: "oklch(0.58 0.025 62)",
      borderColor: "oklch(0.91 0.02 75)",
      aiEffectColor: "oklch(0.78 0.11 62)",
    },
  },
  glacier: {
    id: "glacier",
    name: "冰川清蓝",
    subtitle: "清透舒缓",
    keywords: ["科学", "安全", "敏感肌"],
    description: "用科学分析守护每一次选择。",
    tokens: {
      backgroundColor: "oklch(0.975 0.012 225)",
      primaryColor: "oklch(0.56 0.09 235)",
      primaryForeground: "oklch(0.99 0.004 230)",
      cardColor: "oklch(0.997 0.003 230)",
      accentColor: "oklch(0.9 0.04 220)",
      textColor: "oklch(0.28 0.03 240)",
      mutedTextColor: "oklch(0.56 0.025 238)",
      borderColor: "oklch(0.91 0.016 225)",
      aiEffectColor: "oklch(0.74 0.11 220)",
    },
  },
  moss: {
    id: "moss",
    name: "青雾苔野",
    subtitle: "植萃愈肤",
    keywords: ["自然", "植物", "修护"],
    description: "回归自然，感受肌肤修复力量。",
    tokens: {
      backgroundColor: "oklch(0.972 0.014 150)",
      primaryColor: "oklch(0.53 0.075 155)",
      primaryForeground: "oklch(0.99 0.004 150)",
      cardColor: "oklch(0.995 0.004 150)",
      accentColor: "oklch(0.89 0.045 150)",
      textColor: "oklch(0.28 0.03 155)",
      mutedTextColor: "oklch(0.55 0.025 155)",
      borderColor: "oklch(0.9 0.018 150)",
      aiEffectColor: "oklch(0.72 0.1 160)",
    },
  },
  lavender: {
    id: "lavender",
    name: "薄薰浅汐",
    subtitle: "智护肌肤",
    keywords: ["AI", "未来", "智能"],
    description: "你的 AI 护肤伙伴，持续理解你的肌肤。",
    tokens: {
      backgroundColor: "oklch(0.972 0.012 275)",
      primaryColor: "oklch(0.55 0.1 278)",
      primaryForeground: "oklch(0.99 0.004 275)",
      cardColor: "oklch(0.996 0.003 275)",
      accentColor: "oklch(0.89 0.05 255)",
      textColor: "oklch(0.27 0.032 278)",
      mutedTextColor: "oklch(0.55 0.026 278)",
      borderColor: "oklch(0.9 0.018 275)",
      aiEffectColor: "oklch(0.73 0.13 268)",
    },
  },
  linen: {
    id: "linen",
    name: "素白禾序",
    subtitle: "简净护肤",
    keywords: ["极简", "高级", "长期主义"],
    description: "简单而高级，长期陪伴肌肤成长。",
    tokens: {
      backgroundColor: "oklch(0.976 0.008 84)",
      primaryColor: "oklch(0.53 0.045 68)",
      primaryForeground: "oklch(0.99 0.004 84)",
      cardColor: "oklch(1 0.001 84)",
      accentColor: "oklch(0.93 0.018 82)",
      textColor: "oklch(0.3 0.018 62)",
      mutedTextColor: "oklch(0.56 0.014 66)",
      borderColor: "oklch(0.91 0.01 84)",
      aiEffectColor: "oklch(0.78 0.05 78)",
    },
  },
};

export const themeList: Theme[] = Object.values(themes);

export const defaultThemeId: ThemeId = "linen";

/** token -> CSS 变量名映射 */
export const cssVarMap: Record<keyof ThemeTokens, string> = {
  backgroundColor: "--background",
  primaryColor: "--primary",
  primaryForeground: "--primary-foreground",
  cardColor: "--card",
  accentColor: "--accent",
  textColor: "--foreground",
  mutedTextColor: "--muted-foreground",
  borderColor: "--border",
  aiEffectColor: "--ai-effect",
};

export function themeToCssVars(theme: Theme): Record<string, string> {
  const vars: Record<string, string> = {};
  (Object.keys(cssVarMap) as (keyof ThemeTokens)[]).forEach((key) => {
    vars[cssVarMap[key]] = theme.tokens[key];
  });
  // 派生 token
  vars["--card-foreground"] = theme.tokens.textColor;
  vars["--accent-foreground"] = theme.tokens.textColor;
  vars["--muted"] = theme.tokens.accentColor;
  vars["--popover"] = theme.tokens.cardColor;
  vars["--popover-foreground"] = theme.tokens.textColor;
  vars["--secondary"] = theme.tokens.accentColor;
  vars["--secondary-foreground"] = theme.tokens.textColor;
  vars["--input"] = theme.tokens.borderColor;
  vars["--ring"] = theme.tokens.primaryColor;
  return vars;
}
