const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// CORS error resolve
const cors = require("cors");
app.use(cors());

const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




// Data

const results = {

    AB9600: {
        Name: "Alice Moon",
        Branch: "HYD-AMD",
        Class: "12 B",
        Phone: 9876543210,
        English: ["75/100", 85, 65, 90],
        Mathematics: ["80/100", 70, 95, 88],
        Science: ["92/100", 89, 78, 85],
        Social_Science: [45, 76, 84, 60],
        Hindi: [70, 80, 65, 90],
        Sanskrit: [60, 50, 70, 80],
        Information_Technology: [95, 88, 76, 85]
    },
    AB9601: {
        Name: "John Doe",
        Branch: "DLH-NST",
        Class: "12 D",
        Phone: 9988776655,
        English: ["65/100", 55, 70, 82],
        Mathematics: ["73/100", 78, 69, 92],
        Science: ["88/100", 79, 85, 75],
        Social_Science: [80, 64, 75, 60],
        Hindi: [55, 75, 85, 70],
        Sanskrit: [60, 85, 74, 68],
        Information_Technology: [80, 95, 72, 78]
    },
    AB9602: {
        Name: "Eva Long",
        Branch: "MUM-PRM",
        Class: "12 A",
        Phone: 9123456789,
        English: ["90/100", 78, 88, 94],
        Mathematics: ["85/100", 65, 80, 91],
        Science: ["76/100", 72, 88, 60],
        Social_Science: [70, 85, 90, 76],
        Hindi: [64, 79, 58, 82],
        Sanskrit: [83, 72, 68, 75],
        Information_Technology: [85, 90, 78, 84]
    },
    AB9603: {
        Name: "Pilupao",
        Branch: "HYD-DAY",
        Class: "12 C",
        Phone: 9876543211,
        English: ["68/100", 77, 58, 80],
        Mathematics: ["82/100", 88, 75, 60],
        Science: ["72/100", 64, 85, 70],
        Social_Science: [60, 78, 84, 68],
        Hindi: [65, 70, 78, 75],
        Sanskrit: [70, 88, 74, 80],
        Information_Technology: [92, 85, 76, 79]
    }

};



// Get Endpoints

app.get("/app/:MID", (req, res) => {
    const data = results[req.params.MID];
    res.json(data);

})