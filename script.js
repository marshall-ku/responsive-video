Array.from(document.querySelectorAll("iframe")).forEach(function(a) {
  const r = a.width / a.height,
        reswrapper = document.createElement("div");

  reswrapper. classList.add("resvid", `${9 / 16 === r ? "alt" : 4 / 3 === r ? "old" : r === 1 && "square"}`),
  a.parentElement.insertBefore(reswrapper, a);
  reswrapper.appendChild(a)
})
