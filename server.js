const express = require('express');

const app = express();

let exampleData = [
    {
        id: 1,
        activity: "Baking a cake"
    },
    {
        id: 2,
        activity: "Going for a 5 km walk"
    },
    {
        id: 3,
        activity: "Reading a book"
    }
];

app.get('/', (req, res) => {
    res.send("Welcome to 'What am I going to do today?' API.");
});

app.route('/activities')
    .get((req, res) => {
        res.json({ 'Result': exampleData });
    })
    // Maybe PATCH later.
    .post((req, res) => {

        let lastElement = exampleData[exampleData.length - 1].id
        console.log(lastElement)

        exampleData.push({
            id: lastElement += 1,
            activity: "Example activity"
        })

        res.json({ 'Result': 'List is updated!' })
    });

app.listen(3000, () => {
    console.log("'What am I going to do today?' API is running...");
});