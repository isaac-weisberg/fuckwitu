import ColorViewPresenter from '../presenter/ColorViewPresenter'

export default class ColoredView {
    readonly element: HTMLDivElement

    presenter?: ColorViewPresenter

    constructor() {
        this.element = document.createElement("div")
    }

    applyPresenter(presenter: ColorViewPresenter) {
        this.presenter = presenter
        this.element.style.backgroundColor = presenter.bgcolor
        this.element.innerText = presenter.text
    }
}