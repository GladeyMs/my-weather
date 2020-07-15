export const isValidResponse = (res) => {
  if(!res){
    return false
  }
  return res
}

export const isValidResponseLogin = (res) => {
  if(!res) {
    console.log('Cannot login')
    return false
  }
  return true
}