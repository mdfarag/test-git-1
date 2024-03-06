resetBtn.addEventListener("click", function () {
    resetAll()
});

copyToClip.addEventListener("click", function () {
    navigator.clipboard.writeText(document.querySelector("#output").value);
    copyMsg = document.getElementById("copyMessage");
    copyMsg.className = "show";
    setTimeout(function () { copyMsg.className = copyMsg.className.replace("show", ""); }, 3000);
});