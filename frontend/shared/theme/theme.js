'use strict'

import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import logoWhite from '../components/Logo/logo-white.svg'
import logoGrey from '../components/Logo/logo-grey.svg'

import bgLight from './main-bg.jpg'
import bgDark from './main-bg-dark.jpg'

export const primaryColor = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
  contrastDefaultColor: 'dark'
}

export const accentColor = {
  50: '#FCEAE6',
  100: '#F8CCC4',
  200: '#F3AD9F',
  300: '#EF8C79',
  400: '#EB745D',
  500: '#E85C41',
  600: '#D3533B',
  700: '#BC4A34',
  800: '#A4412E',
  900: '#793022',
  A100: '#F8CCC4',
  A200: '#E85C41',
  A400: '#EB745D',
  A700: '#BC4A34',
  contrastDefaultColor: 'light'
}

export default function createTheme (type = 'light') {
  return createMuiTheme({
    palette: createPalette({
      primary: primaryColor,
      accent: accentColor,
      type: type
    }),
    status: {
      logo: type === 'light' ? logoGrey : logoWhite,
      background: `url(${type === 'light' ? bgLight : bgDark}) no-repeat center center fixed`,
      badgeTextColor: primaryColor[50],
      badgeBackgroundColor: type === 'light' ? primaryColor[800] : primaryColor[700]
    },
    overrides: {
      MuiAppBar: {
        colorDefault: {
          backgroundColor: type === 'light' ? 'white' : primaryColor[800]
        }
      },
      MuiTabs: {
        root: {
          borderBottom: '1px solid ' + primaryColor[400]
        }
      },
      MuiSwitch: {
        checked: {
          color: accentColor[500]
        },
      },
      MuiMenu: {
        root: {
          maxHeight: 'none'
        }
      }
    }
  })
}
