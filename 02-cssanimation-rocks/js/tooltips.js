const anchors = document.querySelectorAll(".anchor-tooltip")
console.log(anchors)
anchors.forEach(anchor => {
  const tooltipText = anchor.getAttribute("title")
  const tooltip = document.createElement("span")
  tooltip.className = "title-tooltip"
  tooltip.innerHTML = tooltipText
  anchor.appendChild(tooltip)
})
