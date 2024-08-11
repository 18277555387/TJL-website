// script.js

// 播放生日歌
document.getElementById("play-song").addEventListener("click", function() {
    document.getElementById("birthday-song").play();
});

// 生成礼炮动画
document.getElementById("celebrateButton").addEventListener("click", function() {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // 随机颜色
    confetti.style.backgroundColor = getRandomColor();

    // 随机位置和旋转角度
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    // 随机延迟
    confetti.style.animationDelay = Math.random() * 2 + "s";

    confettiContainer.appendChild(confetti);

    // 移除动画后的礼炮
    setTimeout(() => {
        confetti.remove();
    }, 4000);
}

function getRandomColor() {
    const colors = ["#FF69B4", "#FFD700", "#ADFF2F", "#00BFFF", "#FF4500"];
    return colors[Math.floor(Math.random() * colors.length)];
}
