const express = require ('express');

const router = express();

let users = [
    {
    name: 'Jhon'
},
{
    name: 'Alex'
},
{
    name: 'Ivan'
}
]

router.get('/', (req, res)=>{
    res.send(users)
  
})



router.get('/users/:id', (req, res)=> {
    const id = req.params.id;
    const sorting = req.query
    res.send (`You have reserve data on User #${id} with ${sorting}`)

})

router.post('/', (req, res)=>{
    users = users.contact(req.body);
    res.send(users)
  
})


module.export = {
    userRouter: router
};

router.listen(8080,()=>{
    console.log('Server is listening')
})
