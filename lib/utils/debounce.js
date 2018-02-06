const debounce = (wait, func) => {
  let timeout
  return function(...args) {
    const later = () => {
      timeout = null
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (!timeout) func(...args)
  }
}

module.exports = debounce
