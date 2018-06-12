const url = 'https://www.reddit.com/r/dogs.json'

const getData = () => fetch(url)
  .then(res => res.json())
  .then(data => Promise.resolve(data))
  .catch(err => Promise.reject(err))

export default {getData}