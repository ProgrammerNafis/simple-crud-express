
let users = [
    {
        id: 1,
        name: "Asief Mahir",
        email: "asif@gmail.com",
    },
    
    {
        id: 2,
        name: "Hasan Mahir",
        email: "hasan@gmail.com",
    },
    
    {
        id: 3,
        name: "Khan Mahir",
        email: "Khan@gmail.com",
    }
]



let allUsers = (req,res)=>{
    res.json({
        status: true,
        users
    })
}

let signleUser = (req,res)=>{
    const {id} = req.params
    
    let user;
    for (let i = 0; i < users.length; i++) {
        if ( users[i].id == id){
            user = users[i]
            break;
        }
        
    }
  
    if (user){
        res.json({
            status: true,
            user
        })
    } else{
        res.json({
            status: false
        })
    }

}


let newUser = (req, res) => {

    const {name,email} = req.body;
    let id = users.length + 1;
    let newUser = {
        id, name , email
    }
    users.push(newUser)
    
   res.json({
    status: true
   })
 
  }


let updateUser = (req, res) => {

    const {id} = req.params

    for(let i = 0; i<users.length; i++){
        if (users[i].id == id){
            users[i].name = req.body.name;
            users[i].email = req.body.email;
        }
    }

    res.json({
        status: true,
        users
    })
  }


let deleteUser =  (req, res) => {
    const { id } = req.params

    users = users.filter(user => user.id != id)

    res.json({
        status: true,
        users
    })

  }


module.exports = {
    allUsers,
    signleUser,
    newUser,
    updateUser,
    deleteUser
}