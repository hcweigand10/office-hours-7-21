const veggiesList = document.getElementById("veggies")

const init = async () => {
    const dataRaw = await fetch("/api/veggies")
    console.log(dataRaw)
}

init()