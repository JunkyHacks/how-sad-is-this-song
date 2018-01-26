const cookie = {
  set: (name, val) => (document.cookie = `${name}=${val}`),
  get: () =>
    document.cookie
      .split('; ')
      .map(val => val.split('='))
      .reduce((att, [name, val]) => Object.assign(att, { [name]: val }), {}),
}

export default cookie
