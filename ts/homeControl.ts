class homeControl {
  private static view: homeViews
  public static show(): void {
    this.view = new homeViews()
    this.view.homeShow('我是控制器')

    let hh1: homeViews = new homeViews()
    hh1.homeShow('我是控制器1')

    let hh2: homeViews = new homeViews()
    hh2.homeShow('我是控制器2')

    let hh3: homeViews = new homeViews()
    hh3.homeShow('我是控制器3')

    let pp1 = new Plugins.Utils()
    pp1.onReady()
  }
}
