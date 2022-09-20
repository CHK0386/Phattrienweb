const express = require("express");
const app = express();

app.post("/api/createStudent",(req, res) => {
    const Students = ["Khang"]
    res.json(Students);
})
app.get("/api/getStudent", (req, res) =>{
    const students = ["Khang"];

    res.json(students);
});

app.listen(8080, () => {
    console.log("Running");
});
