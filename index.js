const express = require("express");

const app = express();

const defaults = [
    [
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
    ]
];

let todos = defaults;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post("/todos", (req, res) => {
    const { title, priority } = req.body
    console.log("title", title);
    console.log("priority", priority);
    todos.push({
        "title": title,
        "priority": priority || 2
    });
    res.status(201);
    res.send("Success!");
})

app.delete("/todos", (req, res) => {
    todos = defaults;
    res.status(200).send("Clear");
})

app.listen(process.env.PORT || 8080, () => {
    console.log(process.env.PORT || 8080);
 });