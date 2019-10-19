// ==UserScript==
// @name         SoundCloud Sort by Plays/Likes
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Based on SoundCloud Extensions by xerg0n (https://github.com/xerg0n/soundcloud_extentions). Only works on pages shown in waveform view. Scroll down to load more then press button.
// @author       nchlsschndr
// @match        https://soundcloud.com/*/likes
// @match        https://soundcloud.com/*/tracks
// @match        https://soundcloud.com/*/reposts
// ==/UserScript==
(function () {
    'use strict';
    var appendP = function () {
        var divWrapper = document.createElement("div");
        divWrapper.style.marginRight = "0";
        divWrapper.className = "playControls__repeat playControls__control";
        var button = document.createElement("button");
        button.className = "repeatControl sc-ir m-none sort-by-plays";
        button.style.backgroundImage = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkY1NTAwO30KPC9zdHlsZT4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxMS44LDcuNyAxMS44LDE2LjMgMTkuMywxMiAiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI2LjEsNi40IDYuMSwxNC42IDQuMSwxNC42IDcuMSwxOC42IDEwLjEsMTQuNiA4LjEsMTQuNiA4LjEsNi40ICIvPgo8L3N2Zz4K")'
        button.onclick = function () {
            var list = Array.from(document.querySelectorAll('.soundList__item')).sort(function (a, b) {
                var a_plays = parseInt(a.querySelector('.sc-ministats-group li').getAttribute('title').match(/\d+/g).join(''));
                var b_plays = parseInt(b.querySelector('.sc-ministats-group li').getAttribute('title').match(/\d+/g).join(''));
                return b_plays - a_plays;
            });

            for (var i = 0; i < list.length; i++) {
                list[i].parentNode.appendChild(list[i]);
            };
        };
        divWrapper.appendChild(button);
        var elToInsertBefore = document.querySelector(".playControls__timeline");
        var controlsBar = elToInsertBefore.parentNode;
        controlsBar.insertBefore(divWrapper, elToInsertBefore);
    };
    var appendL = function () {
        var divWrapper = document.createElement("div");
        divWrapper.style.marginLeft = "0";
        divWrapper.className = "playControls__repeat playControls__control";
        var button = document.createElement("button");
        button.className = "repeatControl sc-ir m-none sort-by-likes";
        button.style.backgroundImage = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkY1NTAwO30KPC9zdHlsZT4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI2LjEsNi40IDYuMSwxNC42IDQuMSwxNC42IDcuMSwxOC42IDEwLjEsMTQuNiA4LjEsMTQuNiA4LjEsNi40ICIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuNSw4LjVjLTEuNiwwLTIuMiwxLjktMi4yLDEuOVMxNC42LDguNSwxMyw4LjVjLTEuMywwLTIuNywwLjktMi41LDIuOGMwLjMsMi4zLDQuNSw1LjEsNC43LDUuMQoJYzAuMiwwLDQuNS0yLjksNC43LTUuMUMyMC4xLDkuNSwxOC44LDguNSwxNy41LDguNXoiLz4KPC9zdmc+Cg==")'
        button.onclick = function () {
            var list = Array.from(document.querySelectorAll('.soundList__item')).sort(function (a, b) {
                var a_likes = parseInt(a.querySelector('.sc-button-like').innerText.replace('.', '').replace(/,\d/g, '').replace('K', '000').replace('M', '000000'))
                var b_likes = parseInt(b.querySelector('.sc-button-like').innerText.replace('.', '').replace(/,\d/g, '').replace('K', '000').replace('M', '000000'))
                return b_likes - a_likes;
            });

            for (var i = 0; i < list.length; i++) {
                list[i].parentNode.appendChild(list[i]);
            };
        };
        divWrapper.appendChild(button);
        var elToInsertBefore = document.querySelector(".playControls__timeline");
        var controlsBar = elToInsertBefore.parentNode;
        controlsBar.insertBefore(divWrapper, elToInsertBefore);
    };

    async function waitFor(sel) {
        while (!document.querySelector(sel)) {
            await new Promise(r => setTimeout(r, 500));
        };
    };
    waitFor(".soundList__item").then(appendP).then(appendL);
})();