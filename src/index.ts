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

const root = document.getElementById("woot") as HTMLDivElement

views.forEach(view => {
    root.appendChild(view.element)
})