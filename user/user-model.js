const bcrypt = require("bcryptjs")
const db = require("../data/db-config")

module.exports = {
    add,
    findById
}
function findById(id){
    return db("user")
    .select('id','username')
    .where({id})
    .first()
}
async function add(user){
    user.password = await bcrypt.hash(user.password,10)
    console.log(user)
    db('user').insert(user)
    .then(ids => {
        const [id] = ids
        return findById(id)
    })
   
    
}