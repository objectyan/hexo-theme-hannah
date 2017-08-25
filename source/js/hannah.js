(function (win) {
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

    }
})(window);