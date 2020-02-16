const app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const cors = require("cors")

app.use(cors())
app.use(express.static("build"))

let game = {
  clicks: 0
}

app.get("/clickpoints", (request, response) => {
  response.send(`Counter value: ${game.clicks}`)
})

io.on("connection", socket => {
  console.log("Client connected")
  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
  socket.on("click", () => {
    game.clicks++

    socket.emit("nextWin", { nextWin: 10 - (game.clicks % 10) })
    console.log(`Next win: ${10 - (game.clicks % 10)}`)

    console.log(`Clicks: ${game.clicks}`)
    if (game.clicks % 500 === 0) {
      console.log("250 points prize")
      socket.emit("win", { points: 250 })
    } else if (game.clicks % 100 === 0) {
      console.log("40 points prize")
      socket.emit("win", { points: 40 })
    } else if (game.clicks % 10 === 0) {
      console.log("5 points prize")
      socket.emit("win", { points: 5 })
    }
  })
})

const port = process.env.PORT || 3001
http.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
