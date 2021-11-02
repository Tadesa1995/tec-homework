const express = require("express"),
 PORT = 8000
app = express();
app.use(express.json())

const todos = require("./crud")

app.get("/todos", (req, res) => {

    todos.showDocsAsync(req, res)
})

app.get("/todos/:id", (req, res) => {
    todos.showByIdAsync(req, res)
})

app.post("/todos", (req, res) => {
    todos.postDoc(req,res)
})

app.delete("/todos/:id", (req, res) => {
    
    todos.deleteDocAsync(req, res)
})

app.patch("/todos/:id", (req, res) => {
    todos.updateDocAsync(req, res)
})


app.listen(PORT, () => {
    console.log(`listenning to port ${PORT}`);
})