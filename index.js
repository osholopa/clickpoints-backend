const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const cors = require("cors")

app.use(cors())
app.use(express.static("build"))

let game = {
  clicks: 0
}

app.get("/", (request, response) => {
  response.send(`Counter value: ${game.clicks}`)
})

const getWin = clicks => {
  if (clicks % 500 === 0) {
    return 250
  } else if (clicks % 100 === 0) {
    return 40
  } else if (clicks % 10 === 0) {
    return 5
  }
  return 0
}

const calculateNextWin = () => {
  return 10 - (game.clicks % 10)
}

io.on("connection", socket => {
  console.log("Client connected")

  socket.on("getNextWin", () => {
    socket.emit("nextWin", { nextWin: calculateNextWin() })
  })

  socket.on("click", () => {
    game.clicks++
    socket.emit("nextWin", { nextWin: calculateNextWin() })
    const calculateWin = getWin(game.clicks)
    const gainedPoints = calculateWin > 0 ? true : false
    if (gainedPoints) {
      socket.emit("win", { points: getWin(game.clicks) })
    }
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
})

const port = process.env.PORT || 3001
http.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
