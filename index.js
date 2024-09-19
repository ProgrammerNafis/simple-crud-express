const express = require('express')
const app = express()
const port = 3000
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello World')
})


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



app.get('/users/',(req,res)=>{
    res.json({
        status: true,
        users
    })
})

app.get('/users/:id',(req,res)=>{
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

})


app.post('/users', (req, res) => {

    const {name,email} = req.body;
    let id = users.length + 1;
    let newUser = {
        id, name , email
    }
    users.push(newUser)
    
   res.json({
    status: true
   })
 
  })

app.patch('/users/:id', (req, res) => {

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
  })

app.delete('/users/:id', (req, res) => {
    const { id } = req.params

    users = users.filter(user => user.id != id)

    res.json({
        status: true,
        users
    })

  })
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })