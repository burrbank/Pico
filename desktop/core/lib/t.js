'use strict'

const Fn = require('../fn')

function FnT (pico, x, y, passive) {
  Fn.call(this, pico, x, y, 't', passive)

  this.name = 'track'
  this.info = 'Outputs character at eastward position with offset.'

  this.ports.input.val = { x: 1, y: 0 }
  this.ports.haste.len = { x: -1, y: 0 }
  this.ports.haste.key = { x: -2, y: 0 }
  this.ports.output = { x: 0, y: 1 }

  this.haste = function () {
    this.len = clamp(this.listen(this.ports.haste.len, true), 1, 16)
    this.key = this.listen(this.ports.haste.key, true)
    for (let x = 1; x <= this.len; x++) {
      pico.lock(this.x + x, this.y)
    }
    this.ports.input.val = { x: (this.key % this.len) + 1, y: 0 }
  }

  this.run = function () {
    const res = this.listen(this.ports.input.val)
    this.output(`${res}`)
  }

  function clamp (v, min, max) { return v < min ? min : v > max ? max : v }
}

module.exports = FnT
