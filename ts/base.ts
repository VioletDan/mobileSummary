module App {
  export class BaseView {
    constructor() {}
    /**
     *
     * @param data  传入任何类型
     */
    public onClose(data: any) {
      console.log('我关闭了' + data)
    }
    /**
     *
     * @param data  传入任何类型
     */
    public onShow(data: any) {
      console.log('我显示了' + data)
    }
  }
}
