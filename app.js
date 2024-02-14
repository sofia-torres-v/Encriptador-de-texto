const inputText = document.querySelector("#user-text");
const outputText = document.querySelector("#returned-message");
const buttonsEncrypt = document.querySelector(".buttons__encrypt");
const buttonsDecrypt = document.querySelector(".buttons__decrypt");
const imagenOcultar = document.querySelector("#image-lupa");
const textFinal = document.querySelector(".text-final");
const subtitle = document.querySelector(".subtitle");
const contentColumn = document.querySelector(".content__column2");
const buttonCopy = document.querySelector(".column2__button-copy ");

buttonsEncrypt.addEventListener("click", handleEncryption);
buttonsDecrypt.addEventListener("click", handleDecryption);

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
    reuse();
    clearInput();
}

function handleDecryption() {
    const decryptedText = decrypt();
    outputText.innerHTML = decryptedText;
    console.log(decryptedText);
    reuse();
    // clearInput();
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

function clearInput() {
    inputText.value = "";
}

function handleCopy() {
    const textCopiado = outputText.textContent;
    navigator.clipboard.writeText(textCopiado);
}

function reuse() {
    imagenOcultar.style.display = "none";
    textFinal.style.display = "none";
    buttonCopy.style.display = "block";
    contentColumn.classList.add("mostrar");
    outputText.style.display = "block";
    subtitle.style.display = "none";
}
