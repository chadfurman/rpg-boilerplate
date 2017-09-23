'use strict'

import createTheme from './theme'
import Rx from 'rx'

function ThemeManager () {
  this.lightTheme = createTheme('light')
  this.darkTheme = createTheme('dark')

  this.themeType = new Rx.BehaviorSubject('light')
  this.theme = new Rx.BehaviorSubject(this.lightTheme)
  this.themeTypeObserver = this.themeType.subscribe(themeType => {
    this.theme.onNext(themeType === 'light' ? this.lightTheme : this.darkTheme)
  })
}

const themeManager = new ThemeManager()

export default themeManager
