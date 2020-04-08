console.log("Loading......")

window.addEventListener('load', function () {
    const url = window.location.href;
    console.log("url", url);
    const arr = url.split("/");
    if (arr.length >= 4 && arr[3].length > 0) {
        console.log("I am the king");
        document.getElementById('primary').style.display = "flex";
        console.log(document.querySelector('#secondary.style-scope.ytd-watch-flexy'));
        document.querySelector('#secondary.style-scope.ytd-watch-flexy').style.display = "none";
        document.querySelector("#comments").style.display = "none";
    } else {
        document.querySelector("a[title=Trending]").style.display = "none";
        document.querySelector("a[title=Home]").style.display = "none";
        document.getElementById('primary').style.display = "none";
    }
});
window.addEventListener("yt-navigate-start", function () {
    console.log("tracked chnages");

    const url = window.location.href;
    const arr = url.split("/");
    console.log(arr);
    if (arr.length >= 4 && arr[3].length > 0) {
        console.log("I am the king");
        document.getElementById('primary').style.display = "flex";
        console.log(document.querySelector('#secondary.style-scope.ytd-watch-flexy'));
        document.querySelector('#secondary.style-scope.ytd-watch-flexy').style.display = "none";
        document.querySelector("#comments").style.display = "none";
    } else {
        document.querySelector("a[title=Trending]").style.display = "none";
        document.querySelector("a[title=Home]").style.display = "none";
        document.getElementById('primary').style.display = "none";
    }
})