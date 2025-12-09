// Based on Fintual's brand colors:
// https://design.fintual.com/proyectos/rebranding/
// Test publish v2
export const lightTheme = {
  text: {
    primary: "#005AE6",
    secondary: "#64A5FF",
    tertiary: "#003296",
    inverse: "#F5F5FA",
  },
  background: {
    primary: "#F5F5FA",
    secondary: "#E1E1E1",
    tertiary: "#A0CDFF",
    inverse: "#00143C",
  },
  brand: {
    primary: "#005AE6",
    light: "#64A5FF",
    dark: "#003296",
  },
  border: {
    light: "rgba(0, 0, 0, 0.1)",
    medium: "rgba(0, 0, 0, 0.15)",
    dark: "rgba(0, 0, 0, 0.3)",
  },
} as const;

export const darkTheme = {
  text: {
    primary: "#F5F5FA",
    secondary: "#E1E1E1",
    tertiary: "#C4C4C4",
    inverse: "#00143C",
  },
  background: {
    primary: "#00143C",
    secondary: "#22262E",
    tertiary: "#003296",
    inverse: "#F5F5FA",
  },
  brand: {
    primary: "#64A5FF",
    light: "#A0CDFF",
    dark: "#005AE6",
  },
  border: {
    light: "rgba(255, 255, 255, 0.1)",
    medium: "rgba(255, 255, 255, 0.15)",
    dark: "rgba(255, 255, 255, 0.3)",
  },
} as const;

export const colors = {
  primary: {
    50: "#E6F4FE",
    100: "#CCE9FD",
    200: "#99D3FB",
    300: "#66BDF9",
    400: "#33A7F7",
    500: "#1ea7fd",
    600: "#0B86CA",
    700: "#086497",
    800: "#054365",
    900: "#032132",
  },
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  semantic: {
    success: "#10B981",
    successLight: "#D1FAE5",
    error: "#EF4444",
    errorLight: "#FEE2E2",
    warning: "#F59E0B",
    warningLight: "#FEF3C7",
    info: "#3B82F6",
    infoLight: "#DBEAFE",
  },
  text: {
    primary: "#111827",
    secondary: "#6B7280",
    tertiary: "#9CA3AF",
    inverse: "#FFFFFF",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F9FAFB",
    tertiary: "#F3F4F6",
    inverse: "#111827",
  },
  border: {
    light: "rgba(0, 0, 0, 0.1)",
    medium: "rgba(0, 0, 0, 0.15)",
    dark: "rgba(0, 0, 0, 0.3)",
  },
} as const;

export type ColorTokens = typeof colors;

export type TextColor = keyof typeof lightTheme.text;
