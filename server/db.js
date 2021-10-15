const fs = require('fs')
const quests= []
const messages = "Quest Started"



module.exports = {
    quest: (req, res) => {

    const{fate, guide, item} = req.body

    const registeredQuest = {fate, guide, item}


      //quests.push(registeredQuest)
      quests.push(registeredQuest)


    if(registeredQuest){
        const myJSON = JSON.stringify(quests);
        fs.writeFile(`quest.json`, myJSON, (err) => {
      
          // In case of a error throw err.
          if (err) throw err;
        })
        }
    res.status(200).send(registeredQuest)
    console.log(registeredQuest)
    console.log(messages)
}
}