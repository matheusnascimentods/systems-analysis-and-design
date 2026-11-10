const form = document.querySelector("#form").addEventListener("submit", (event)=>{

    event.preventDefault(event)

    const dTfinal = document.querySelector("#time").value
    const v1 = document.querySelector("#initial-speed").value
    const vF = document.querySelector("#final-speed").value
    const result = document.querySelector("#result")

    const error = document.querySelector("#error")
    error.classList.remove("error")
    error.classList.add("invisible")

    if (Number(dTfinal) <= 0) {

        result.parentElement.classList.remove("visible")
        result.parentElement.classList.add("invisible")

        error.classList.remove("invisible")
        error.classList.add("error")
        document.querySelector("#error-message").innerHTML = "O tempo deve ser maior que zero"
        return

    }

    const a = (vF - v1) / dTfinal

    result.parentElement.classList.remove("invisible")
    result.parentElement.classList.add("visible")
    result.innerText = a + " m/s²"
})