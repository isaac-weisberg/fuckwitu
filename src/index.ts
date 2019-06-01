import ColorViewPresenter from "./presenter/ColorViewPresenter";
import ColoredView from "./views/ColoredView";

const presenters: ColorViewPresenter[] = [
    {
        text: "RED",
        bgcolor: "#FF0022"
    },
    {
        text: "GWEEN",
        bgcolor: "#BBBAAA"
    }
]

const views = presenters.map(presenter => {
    const view = new ColoredView()
    view.applyPresenter(presenter)
    return view
})

views.forEach(view => {
    document.appendChild(view.element)
})