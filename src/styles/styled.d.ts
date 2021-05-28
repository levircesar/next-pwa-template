/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      backgroundSecondary: string
      text: string
      textSecondary: string
      primary: string
      secondary: string
      linePrimary: string
      lineSecondary: string
      buttonColor: string
      buttonHover: string
    }
  }
}
