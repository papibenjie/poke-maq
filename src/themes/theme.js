import { theme } from "./defaultTheme"

import { createTheming } from '@callstack/react-theme-provider';

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

export { ThemeProvider, withTheme, useTheme }