import ajax from './ajax.js'

export function getMultiData() {
  return ajax('/home/mulitData')
}

export function getData(type, page) {
  return ajax('/home/data', {type,page})
}