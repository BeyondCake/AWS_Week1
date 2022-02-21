const express = require('express')

const app = express()
app.use(express.json())

app.use(express.static("build"))

const houses = [
    {
        id: 1,
        address: {
            streetNumber: 555,
            streetName: "Seymour St",
            city: "Vancouver",
            province: "BC",
            postalCode: "V6B 3H6"
        },
        listingPrice: 518446000
    }
]

app.get("/api/houses", (req, res) => {
  res.send(houses)
});

app.post("/api/houses", (req,res) => {
    const data = req.body
    data.id = houses.length+1
    houses.push(data)
    res.send(data)
});

// app.get('*', (req, res) => {
//     res.sendFile('build/index.html')
// });

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))