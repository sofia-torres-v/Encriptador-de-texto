const inputText = document.querySelector("#user-text");
const outputText = document.querySelector("#returned-message");

const codedVowels = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function handleEncryption() {
    const encryptedText = encrypt();
    outputText.value = encryptedText;
    clearInput();
}

function handleDecryption() {
    const decryptedText = decrypt();
    inputText.value = decryptedText;
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
    let decryptMessage = outputText.value.toLowerCase();

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
    const textCopiado = outputText.value;
    navigator.clipboard.writeText(textCopiado);
}
