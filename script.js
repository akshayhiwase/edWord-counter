const counterContainer = document.getElementById("counter-continer")
const inputBox = document.getElementById("input-box")
const character = document.getElementById("character")
const words = document.getElementById("words")
const whitespace = document.getElementById("whitespace")
const lines = document.getElementById("lines")

const countChars = (obj) => {
    character.innerHTML = "Characters:" + " " + obj.value.length;
    words.innerHTML === null ? words.innerHTML = "Words:" + " " + 0 : words.innerHTML = "Words:" + " " + obj.value.split(" ").length;
    whitespace.innerHTML = obj.value.length === null ? "WhiteSpace" + " " + 0 : "WhiteSpace" + " " + obj.value.split(" ").length;
    lines.innerHTML === null ? lines.innerHTML = "Lines:" + " " + 0 : lines.innerHTML = "Lines:" + " " + obj.value.split(/\r\n|\r|\n/).length;
}
