const convertButton = document.querySelector(".convert")
const realCoin = document.querySelector(".real")
const convertCoin = document.querySelector(".abrod-coin")
const imgCoin = document.querySelector(".moedaAbroad")
const coinName = document.querySelector(".coin-name")
const selectOptionElement = document.querySelector("#select") // ⬅️ capturando o elemento

function convertMoney() {
    const inputMoney = document.querySelector(".money").value
    const selectOption = selectOptionElement.value // ⬅️ capturando o valor atualizado

    const dolarToday = 5.70
    const euroToday = 6.20
    const poundsToday = 7.00
    const bitcoinToday = 350000

    realCoin.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoney)

    if (selectOption === "dollar") {
        convertCoin.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoney / dolarToday)
    }

    if (selectOption === "euro") {
        convertCoin.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoney / euroToday)
    }

    if (selectOption === "libra") {
        convertCoin.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoney / poundsToday)
    }

    if (selectOption === "bitcoin") {
        convertCoin.innerHTML = (inputMoney / bitcoinToday).toFixed(6) + " BTC"
    }
}

function coinTrade() {
    console.log(selectOptionElement.value)

    if (selectOptionElement.value == "dollar") {
        imgCoin.src = "./assets/img/dollar.png"
        coinName.innerHTML = "<b>Dollar</b>"
    }
    if (selectOptionElement.value == "euro") {
        imgCoin.src = "./assets/img/euro.png"
        coinName.innerHTML = "<b>Euro</b>"
    }
    if (selectOptionElement.value == "libra") {
        imgCoin.src = "./assets/img/libra.png"
        coinName.innerHTML = "<b>Libra</b>"
    }
    if (selectOptionElement.value == "bitcoin") {
        imgCoin.src = "./assets/img/bitcoin.png"
        coinName.innerHTML = "<b>Bitcoin</b>"
    }
}

convertButton.addEventListener("click", convertMoney)
selectOptionElement.addEventListener("change", coinTrade)
