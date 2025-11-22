/**
 * Design tokens extracted from Figma mockups
 * Source: /tmp/figma-auth/src/index.css (lines 1671-1689)
 */

export const tokens = {
  colors: {
    primary: {
      DEFAULT: '#3b82f6',
      50: '#eff6ff',
      100: '#dbeafe',
      700: '#1d4ed8',
      900: '#1e3a8a',
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      900: '#111827',
    },
  },
  spacing: {
    // 4px base grid (already handled by Tailwind)
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  animation: {
    fast: '150ms',
    standard: '300ms',
    slow: '500ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  focus: {
    ring: '0 0 0 2px rgba(59, 130, 246, 0.5)',
    ringOffset: '2px',
  },
  typography: {
    h1: {
      fontSize: '36px',
      fontWeight: 500,
      lineHeight: '40px',
    },
    h2: {
      fontSize: '30px',
      fontWeight: 500,
      lineHeight: '36px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '32px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '28px',
    },
    body: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    small: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
  },
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
} as const;
