function displayError(type = "error", message = "Unknown error") {
  return `<div class=${type}>
            ${message}<span>Please try again later</span>
          </div>`
}
