const express = require("express");
const cors = require("cors");
const quest = require('./db')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.




app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});



app.get("/api/fortune", (req, res) => {
  const compliments = 
  [        "A beautiful, smart, and loving person will be coming into your life.",
					 "A lifetime of happiness lies ahead of you.",
					 "Believe in yourself and others will too.",
           "If you wish to see the best in others, show the best of yourself.",
           "It is honorable to stand up for what is right, however unpopular it seems."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
  
});


app.post(`/api/quest`, quest.quest)




app.listen(4000, () => console.log("Server running on 4000"));
