const myEmojis = ["🧠", "🤖", "🚀"];
const emojiContainer = document.getElementById("emoji-container");
const pushBtn = document.getElementById("push-btn");
const emojiInput = document.getElementById("emoji-input");

renderEmojis();

function renderEmojis() {
    emojiContainer.innerHTML = "";
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span");
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}

pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        if (myEmojis.length > 3) {
            myEmojis.shift();
        }
        emojiInput.value = "";
        renderEmojis();
    }
});

const unshiftBtn = document.getElementById("unshift-btn");
unshiftBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        if (myEmojis.length > 3) {
            myEmojis.pop();
        }
        emojiInput.value = "";
        renderEmojis();
    }
});

const popBtn = document.getElementById("pop-btn");
popBtn.addEventListener("click", function () {
    myEmojis.pop();
    renderEmojis();
});

const shiftBtn = document.getElementById("shift-btn");
shiftBtn.addEventListener("click", function () {
    myEmojis.shift();
    renderEmojis();
});
