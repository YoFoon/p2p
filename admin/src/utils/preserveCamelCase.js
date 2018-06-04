const preserveCamelCase = (str, separator) => {
  if (typeof str !== 'string'){
    throw new TypeError('Expected a string');
  }
  
  separator = separator || '_'

  str = str.replace(/_\/W/g,(all, letter) => {
    return letter.toUpperCase()
  })
  return str
}

export default preserveCamelCase