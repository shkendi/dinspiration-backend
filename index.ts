import express from "express"

const app = express()

const router = express.Router()

const foodData = [
  {name: "Orange", id: 1},
  {name: "Spaghetti", id: 2},
  {name: "Fig", id: 3},
  {name: "Tofu", id: 4}
]

const userData = []

const inspirationData = []

router.route('/api/my-foods')
.get((req,res) => {res.send(foodData)})



app.use(router)
app.listen(8000,
  () => {console.log("The post is listening on http://localhost:8000 ")})

