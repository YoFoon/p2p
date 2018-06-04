const decamelize = (str, separator) => {
  if (typeof str !== 'string'){
    throw new TypeError('Expected a string');
  }

  separator = separator || '_'

  str = str.replace(/([A-Z])/g,`${separator}$1`).toLowerCase();
  return str
}

export default decamelize