'use strict'

export default class BaseError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}
