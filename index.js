function setFromLocalStorage() {
    const lastInputJSON = localStorage.getItem("lastInput")
    if (!lastInputJSON) return

    const lastInput = JSON.parse(lastInputJSON)

    setElementsValues(lastInput.distance, lastInput.mass, lastInput.days)
}

function saveToLocalStorage() {
    const { distance, mass, days } = getElementsValues()

    const lastInput = {
        distance,
        mass,
        days,
    }

    localStorage.setItem("lastInput", JSON.stringify(lastInput))
}

function addition() {
    let { distance, mass, days } = getElementsValues()

    if (isNaN(distance) === true) {
        document.getElementById("result1").innerHTML = ``
        document.getElementById("result2").innerHTML = ``
        document.getElementById("result3").innerHTML = ``
        document.getElementById("result4").innerHTML = `Не все поля заполнены.`
        return
    }
    if (isNaN(mass) === true) {
        document.getElementById("result1").innerHTML = ``
        document.getElementById("result2").innerHTML = ``
        document.getElementById("result3").innerHTML = ``
        document.getElementById("result4").innerHTML = `Не все поля заполнены.`
        return
    }
    if (isNaN(days) === true) {
        document.getElementById("result1").innerHTML = ``
        document.getElementById("result2").innerHTML = ``
        document.getElementById("result3").innerHTML = ``
        document.getElementById("result4").innerHTML = `Не все поля заполнены.`
        return
    }

    const price = Math.floor(distance * 0.5 + mass * 15 + 100 / days)

    document.getElementById("result1").innerHTML = `Дистанция доставки: ${distance}.`
    document.getElementById("result2").innerHTML = `Масса груза: ${mass}.`
    document.getElementById("result3").innerHTML = `Желаемое время доставки: ${days}.`
    document.getElementById("result4").innerHTML = `Стоимость доставки примерно равна ${price}р.`
}

function getElementsValues() {
    return {
        distance: parseInt(document.getElementById("distance").value),
        mass: parseInt(document.getElementById("mass").value),
        days: parseInt(document.getElementById("days").value),
    }
}

function setElementsValues(a = "", b = "", c = "") {
    document.getElementById("distance").value = a
    document.getElementById("mass").value = b
    document.getElementById("days").value = c
}
