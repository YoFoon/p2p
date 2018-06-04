import mapObj from './map-obj'

const mapToArrey = (obj, fn) => {
  let idx = 0;
  const result = mapObj(obj, (key, value) => {
    return [idx++, fn(key, value)]
  })
  result.length = idx
  return Array.from(result)
}

export default mapToArrey

// let idx = 0;
// 	const result = mapObj(obj, (key, value) =>
// 		[idx++, fn(key, value)]
// 	);
// 	result.length = idx;
// 	return Array.from(result);