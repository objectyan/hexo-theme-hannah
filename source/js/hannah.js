(function (win) {
    function resizeFoot() {
        var footer = document.getElementById("footer");
        if (document.body.offsetHeight <= document.documentElement.clientHeight) {
            footer.style.bottom = "0px";
        } else {
            delete footer.style.bottom;
        }
    }

    win.onload = function () {
        var btnMenu = document.getElementById("btn_menu");
        if (btnMenu) {
            btnMenu.addEventListener("click", function () {
                var divMenu = document.getElementById("div_menu");
                if (divMenu.classList.contains("hide")) {
                    divMenu.classList.remove("hide");
                    divMenu.classList.add("bounceInDown");
                } else {
                    divMenu.classList.remove("bounceInDown");
                    divMenu.classList.add("hide");
                }
            });
        }
        var interval = setInterval(function () {
            resizeFoot();
        }, 500);

    }
})(window);