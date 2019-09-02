class homeViews extends App.BaseView {
  constructor() {
    super()
  }

  /**
   *
   * @param string
   */
  public homeShow(title: string = '123'): void {
    console.log('我是homeview哈哈哈哈 ' + title)
    this.parseData()
  }

  private parseData(): void {
    homeControl.show()
  }
}
