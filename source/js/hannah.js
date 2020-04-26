(function (win) {
    function resizeFoot() {
        var footer = document.getElementById("footer");
        if (document.body.offsetHeight <= document.documentElement.clientHeight) {
            footer.style.bottom = "0px";
        } else {
            delete footer.style.bottom;
        }
        footer.classList.remove("hide");
    }

    function ajax(url, type, callback) {
        var xmlHttp = null;
        if (win.XMLHttpRequest) {// code for IE7, Firefox, Opera, etc.
            xmlHttp = new XMLHttpRequest();
        }
        else if (win.ActiveXObject) {// code for IE6, IE5
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlHttp != null) {
            xmlHttp.onreadystatechange = function () {
                callback(xmlHttp);
            };
            xmlHttp.open(type, url, true);
            xmlHttp.send(null);
        }
        else {
            console.error("Your browser does not support XMLHTTP.");
        }
    }

    var searchData;
    var timeOutSearch;

    function searchKey(ele) {
        var val = ele.value;
        ele.nextElementSibling.innerHTML = "<p style='text-align: center;line-height: 300%' class='animated tada col-lg-12'>暂无数据</p>";
        searchData.filter(function (t) {
            return t.title && t.title.toLowerCase().indexOf(val.trim().toLowerCase()) >= 0;
        }).forEach(function (t, i) {
            if (i === 0)
                ele.nextElementSibling.innerHTML = "";
            var ele_a = document.createElement("a");
            ele_a.setAttribute("url",t.url);
            ele_a.innerHTML = t.title;
            ele_a.classList.add("search-result-item");
            ele_a.classList.add("animated", "tada", "col-lg-12");
            ele.nextElementSibling.appendChild(ele_a);
        });
    }


    function search(ele, event, url) {
        clearTimeout(timeOutSearch);
        timeOutSearch = setTimeout(function () {
            if (searchData)
                searchKey(ele);
            else
                ajax(url, "GET", function (xmlHttp) {
                    if (xmlHttp.readyState == 4) {// 4 = "loaded"
                        if (xmlHttp.status == 200) {// 200 = OK
                            var entries = xmlHttp.responseXML.getElementsByTagName("entry");
                            searchData = [];
                            for (var i = 0; i < entries.length; i++) {
                                var entry = entries[i];
                                var categories = [], tags = [];
                                entry.getElementsByTagName("categories").item(0).childNodes.forEach(function (t) {
                                    if (t.tagName === "category" && t.textContent)
                                        categories.push(t.textContent.trim());
                                });
                                entry.getElementsByTagName("tags").item(0).childNodes.forEach(function (t) {
                                    if (t.tagName === "tag" && t.textContent)
                                        tags.push(t.textContent.trim());
                                });
                                searchData.push({
                                    title: entry.getElementsByTagName("title").item(0).textContent,
                                    content: entry.getElementsByTagName("content").item(0).textContent.replace(/<[^>]+>/g, ""),
                                    url: entry.getElementsByTagName("url").item(0).textContent,
                                    categories: categories,
                                    tags: tags
                                });
                            }
                            searchKey(ele);
                        }
                        else {
                            console.error("Problem retrieving XML data");
                        }
                    }
                });
        }, 500);
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

    win.searchFunc = search;

})(window);