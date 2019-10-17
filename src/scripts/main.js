

document.querySelector("#create").addEventListener("click", () => {
    if (document.querySelector("textarea").value !== "") {
        insertTemplate(document.querySelector("textarea").value)
    }
})

const insertTemplate = (content) => {
    document.querySelector("#insertPoint").insertAdjacentHTML("afterend", `
    <div id="card--1">
        <div>${content}</div><br>
        <button id="delete--1">Delete</button>
    </div>
    `)
    document.querySelector("#delete--1").addEventListener("click", () => {
        document.querySelector("#card--1").remove()
    })
} 