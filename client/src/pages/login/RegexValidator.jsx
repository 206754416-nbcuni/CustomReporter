

export const userValidator = (users, user) =>{
  var result = false
  users.forEach((use)=>{
    //console.log(use.ID)
    if(use.ID === user){
      console.log("Match found")
      result = true
    }
  })
  // console.log("false")
  return result
  //   try{
  //       //const data = {name: {${state.Name}}, username: {${state.ID}}, password: {${state.Password}}, project:{${state.Project}}}
  //       const response = await fetch('http://localhost:3002/checkUser', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json',
  //         },
  //         body: JSON.stringify({user: user})
  //       }).then(async (res) =>{
  //           console.log(res.value)
  //           // const output = await (await fetch('http://localhost:3002/status')).json()
  //           // console.log("response:" + output)
  //           // if(output == 'true')
  //           // return true
  //           // return false
  //       })

  //       const output = await (await fetch('http://localhost:3002/status')).json()
  //           console.log("response:" + output)
  //           if(output == 'true')
  //           return true
  //           return false
  //       
  //     }catch(error){
  //       console.log("Error: ", error)
  //       return false
  //     }
}


export const credentialValidator = (users, id, password) =>{
  var result = false
  users.forEach((use)=>{
    // console.log(use)
    if(use.ID === id && use.Password === password){
      console.log(id + " " + password)
      console.log("Match found")
      result = true
    }
  })
  // console.log("false")
  return result
}

export const getUser = (users, id) =>{
  var result = {}
  users.forEach((use)=>{
    // console.log(use)
    if(use.ID === id){
      console.log("User:" + use)
      // console.log("Match found")
      result = use
    }
  })
  // console.log("false")
  return result
}

