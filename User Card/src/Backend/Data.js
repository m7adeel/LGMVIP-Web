const getData = (api) => {
    fetch("https://reqres.in/api/users?page=1")
    .then(  response => {
      if(response.ok){
        return response.json()
      }
      throw response
    })
    .then(data=>{
      return data
    })
    .catch(error => {
        console.log("Error Fetching Data : ", error)
    })
}