const inputText = document.querySelector("#user-text");
const outputText = document.querySelector("#returned-message");
const imagenOcultar = document.querySelector("#image-lupa");
const textFinal = document.querySelector(".text-final");
const contentColumn = document.querySelector(".content__column2");
const buttonCopy = document.querySelector(".column2__button-copy ");

const codedVowels = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function handleEncryption() {
    const encryptedText = encrypt();
    outputText.innerHTML = encryptedText;
    imagenOcultar.style.display = "none";
    textFinal.style.display = "none";
    buttonCopy.style.display = "block";
    contentColumn.classList.add("ajustar");
    clearInput();
}

function handleDecryption() {
    const decryptedText = decrypt();
    outputText.textContent = decryptedText;
    clearInput();
}

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

function decrypt() {
    let decryptMessage = outputText.textContent.toLowerCase();

    for (let i = 0; i < codedVowels.length; i++) {
        decryptMessage = decryptMessage.replaceAll(
            codedVowels[i][1],
            codedVowels[i][0]
        );
    }

    console.log(decryptMessage);
    return decryptMessage;
}

function clearInput() {
    inputText.value = "";
}

function handleCopy() {
    const textCopiado = outputText.textContent;
    navigator.clipboard.writeText(textCopiado);
}
