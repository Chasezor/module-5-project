const fs = require('fs')
const quests= []
const messages = "Quest Started"



module.exports = {
    player: (req, res) => {

    const{username} = req.body

    const registeredPlayer = {username}


      //quests.push(registeredQuest)
      quests.push(registeredPlayer)


    if(registeredPlayer){
        const myJSON = JSON.stringify(quests);
        fs.writeFile(`player.json`, myJSON, (err) => {
      
          // In case of a error throw err.
          if (err) throw err;
        })
        }
    res.status(200).send(registeredPlayer)
    console.log(registeredPlayer)
    console.log(messages)
}
}