const inputText = document.querySelector("#left-textarea");
const outputText = document.querySelector("#right-textarea");

const buttonEncrypt = document.querySelector(".button__encrypt");
const buttonDecrypt = document.querySelector(".button__decrypt");
const buttonCopy = document.querySelector(".column2__button-copy");

const contentColumnRight = document.querySelector(".content__column2");
const imagenColumnRight = document.querySelector("#hidden-image");
const subtitleColumnRight = document.querySelector(".column2__subtitle");
const textColumnRight = document.querySelector(".column2__description");

buttonEncrypt.addEventListener("click", handleEncryption);
buttonDecrypt.addEventListener("click", handleDecryption);
buttonCopy.addEventListener("click", handleCopy);

const codedVowels = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function handleEncryption() {
    if (validateField()) {
        const encryptedText = encrypt();
        outputText.innerHTML = encryptedText;
        toggleVisibility();
        clearInput();
    }
}

function handleDecryption() {
    if (validateField()) {
        const decryptedText = decrypt();
        outputText.innerHTML = decryptedText;
        console.log(decryptedText);
        toggleVisibility();
        clearInput();
    }
}

function handleCopy() {
    // selecciona el contenido, para input o textarea
    outputText.select();
    // Método obsoleto, pero aún compatible con algunos navegadores
    document.execCommand("copy");

    Toastify({
        text: "Texto copiado",
        className: "info",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "#6d9c1dc0",
            borderRadius: "8px",
        },
    }).showToast();
}

// Encriptación del mensaje reemplazando vocales según nuestro array
function encrypt() {
    let encryptMessage = inputText.value.toLowerCase();

    for (let i = 0; i < codedVowels.length; i++) {
        encryptMessage = encryptMessage.replaceAll(
            codedVowels[i][0],
            codedVowels[i][1]
        );
    }

    console.log(encryptMessage);
    return encryptMessage;
}

// Desencriptación del mensaje reemplazando el código por las vocales originales
function decrypt() {
    let decryptMessage = inputText.value.toLowerCase();

    for (let i = 0; i < codedVowels.length; i++) {
        decryptMessage = decryptMessage.replaceAll(
            codedVowels[i][1],
            codedVowels[i][0]
        );
    }

    console.log(decryptMessage);
    return decryptMessage;
}

function validateField() {
    if (inputText.value !== "") {
        return true;
    } else {
        Toastify({
            text: "Por favor, llena el campo antes de realizar la acción.",
            className: "info",
            duration: 3000,
            gravity: "bottom",
            position: "left",
            style: {
                background: "#6d9c1de7",
                borderRadius: "8px",
            },
        }).showToast();
        return false;
    }
}

function toggleVisibility() {
    contentColumnRight.classList.add("mostrar");
    imagenColumnRight.style.display = "none";
    subtitleColumnRight.style.display = "none";
    textColumnRight.style.display = "none";
    outputText.style.display = "block";
    buttonCopy.style.display = "block";
}

function clearInput() {
    inputText.value = "";
}
