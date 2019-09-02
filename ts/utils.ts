module Plugins {
  export class Utils extends App.BaseView {
    constructor() {
      super()
    }
    public onReady(): void {
      this.onClose({ txt: '我是utils页面的' })
    }
  }
}
