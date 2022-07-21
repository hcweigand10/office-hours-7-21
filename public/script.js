const veggiesList = document.getElementById("veggies")

const init = async () => {
    const dataRaw = await fetch("/api/veggies")
    const data = await dataRaw.json()
    console.log(data)
    renderPage(data)
}

const init2 = () => {
    fetch("/api/veggies")
    .then(data => data.json())
    .then(data => {
        console.log(data)
        renderPage(data)
    })
}

const renderPage = (data) => {
    data.forEach(element => {
        const listItem = document.createElement("li")
        const card = document.createElement("div")
        const title = document.createElement("h4")
        title.textContent = element.name
        const color = document.createElement("p")
        color.textContent = element.color
        const size = document.createElement("p")
        size.textContent = element.size
        card.append(title,color,size)
        listItem.append(card)
        veggiesList.append(listItem)
    });
}

init2()