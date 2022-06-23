const express = require("express");

const app = express();

todos = [
    {
        "title": "7時に起床する",
        "priority": 3
    },
    {
        "title": "学校に行く",
        "priority": 3
    },
    {
        "title": "開発をする",
        "priority": 2
    },
    {
        "title": "早めに就寝する",
        "priority": 1
    }
];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post("/todos", (req, res) => {
    const [title, priority] = req.body
    todos.push({
        "title": title,
        "priority": priority
    });
    res.status(201);
    res.send("Success!");
})

app.listen(process.env.PORT || 8080, () => {
    console.log(process.env.PORT || 8080);
 });