Array.from(document.querySelectorAll("iframe")).forEach(function (a) {
  const r = a.width / a.height,
    reswrapper = document.createElement("div"),
    res = "resvid";

  reswrapper.classList.add(`${16 / 9 === r ? res : 9 / 16 === r ? (res, "alt") : 4 / 3 === r ? (res, "old") : r === 1 && (res, "square")}`),
  a.parentElement.insertBefore(reswrapper, a);
  reswrapper.appendChild(a)
})
