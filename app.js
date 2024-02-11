const inputText = document.querySelector("#user-text");
const outputText = document.querySelector(".returned-message");

function encryptText() {
    const codedVowels = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
}

function handleEncryption() {
    const encryptedText = encrypt();
    outputText.textContent = encryptedText;
    inputText.value = "";
}

function handleDecryption() {
    const decryptedText = inputText.value.toLowerCase();
    console.log(decryptedText);
}

function encrypt() {
    const ingreso = inputText.value;
    console.log(ingreso);
    return ingreso;
}
