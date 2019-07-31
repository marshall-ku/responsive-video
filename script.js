Array.from(document.querySelectorAll("iframe")).forEach(function (a) {
  const r = a.width / a.height,
    reswrapper = document.createElement("div"),
    res = "resvid";

  reswrapper.classList.add(`${(16/9 === r || 9/16 === r || 4/3 === r || 1 === r) && "resvid"}` ,`${9 / 16 === r ? "alt" : 4 / 3 === r ? "old" : r === 1 && "square"}`),
  a.parentElement.insertBefore(reswrapper, a);
  reswrapper.appendChild(a)
})
