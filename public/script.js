const veggiesList = document.getElementById("veggies")

const init = async () => {
    const dataRaw = fetch("/api/veggies")
    console.log(dataRaw)
}

init()