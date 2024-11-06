
var get_link = "http://localhost:3005/app/"
var fetched_data;


function loginfunction() {
    var login_id = document.forms["credentials"]["memberid"].value;
    
    console.log(login_id);

    document.getElementById("LOGIN_PAGE").style.display = "none";
    document.getElementById("DISPLAY_PAGE").style.display = "block";

     document.getElementById("PA_1").click();
    document.getElementById("PA_1").focus();
    get_link = get_link + login_id.toString();
    
    Click_PA_1();
    
}

// INFOGRAPHICS SCRIPTS

function animateGauge(targetPercentage) {
    const canvas = document.getElementById("gauge");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) / 2 - 15;
    let currentPercentage = 0;
    const textElement = document.getElementById("percentageText");

    function drawGauge(percentage) {
        const angle = (percentage / 100) * 2 * Math.PI;

        // Clear the canvas for each frame
        ctx.clearRect(0, 0, width, height);

        // Draw background circle
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#ddd";
        ctx.stroke();

        // Draw animated arc for percentage
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, -Math.PI / 2, -Math.PI / 2 + angle, false);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#CC0000";
        ctx.stroke();

        // Display percentage text in the center
        textElement.textContent = `${Math.floor(percentage)}%`;
    }

    // Animation function to increment percentage
    function animate() {
        if (currentPercentage <= targetPercentage) {
            drawGauge(currentPercentage);
            currentPercentage += 1; // Increment for smooth animation
            requestAnimationFrame(animate); // Recursively call for each frame
        }
    }

    animate(); // Start animation
}

// Example usage with a student percentage
var studentPercentage; // Replace with the student's overall percentage


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PA_1

function Click_PA_1() {

    studentPercentage = 90;
    animateGauge(studentPercentage);

    fetch(get_link)
        .then((response) => response.json())
        .then((data) => {

            fetched_data = data;  // Store fetched data
            console.log(fetched_data);  // For Test reasons

            // Profile 

            const student_name = document.getElementById("name");
            if (student_name) {
                student_name.innerHTML = fetched_data["Name"];
            }
            const branch = document.getElementById("branch");
            if (branch) {
                branch.innerHTML = fetched_data["Branch"];
            }
            const student_class = document.getElementById("section");
            if (student_class) {
                student_class.innerHTML = fetched_data["Class"];
            }
            const student_phone = document.getElementById("contact");
            if (student_phone) {
                student_phone.innerHTML = fetched_data["Phone"];
            }


            // MArks

            const English = document.getElementById("English");
            if (English) {
                English.innerHTML = fetched_data["English"][0];
            }
            const Mathematics = document.getElementById("Mathematics");
            if (Mathematics) {
                Mathematics.innerHTML = fetched_data["Mathematics"][0];
            }
            const Science = document.getElementById("Science");
            if (Science) {
                Science.innerHTML = fetched_data["Science"][0];
            }
            const Social_Science = document.getElementById("Social Science");
            if (Social_Science) {
                Social_Science.innerHTML = fetched_data["Social_Science"][0];
            }
            const Hindi = document.getElementById("Hindi");
            if (Hindi) {
                Hindi.innerHTML = fetched_data["Hindi"][0];
            }
            const Sanskrit = document.getElementById("Sanskrit");
            if (Sanskrit) {
                Sanskrit.innerHTML = fetched_data["Sanskrit"][0];
            }
            const Information_Technology = document.getElementById("Information Technology");
            if (Information_Technology) {
                Information_Technology.innerHTML = fetched_data["Information_Technology"][0];
            }

        })
        .catch((error) => console.log(error));
}



// PA_2


function Click_PA_2() {


    studentPercentage = 60;
    animateGauge(studentPercentage);

    fetch(get_link)
        .then((response) => response.json())
        .then((data) => {


            // MArks
            const English = document.getElementById("English");
            if (English) {
                English.innerHTML = fetched_data["English"][1];
            }
            const Mathematics = document.getElementById("Mathematics");
            if (Mathematics) {
                Mathematics.innerHTML = fetched_data["Mathematics"][1];
            }
            const Science = document.getElementById("Science");
            if (Science) {
                Science.innerHTML = fetched_data["Science"][1];
            }
            const Social_Science = document.getElementById("Social Science");
            if (Social_Science) {
                Social_Science.innerHTML = fetched_data["Social_Science"][1];
            }
            const Hindi = document.getElementById("Hindi");
            if (Hindi) {
                Hindi.innerHTML = fetched_data["Hindi"][1];
            }
            const Sanskrit = document.getElementById("Sanskrit");
            if (Sanskrit) {
                Sanskrit.innerHTML = fetched_data["Sanskrit"][1];
            }
            const Information_Technology = document.getElementById("Information Technology");
            if (Information_Technology) {
                Information_Technology.innerHTML = fetched_data["Information_Technology"][1];
            }

        })
        .catch((error) => console.log(error));

}

// PA_3

function Click_PA_3() {


    studentPercentage = 50;
    animateGauge(studentPercentage);

    fetch(get_link)
        .then((response) => response.json())
        .then((data) => {


            // MArks
            const English = document.getElementById("English");
            if (English) {
                English.innerHTML = fetched_data["English"][2];
            }
            const Mathematics = document.getElementById("Mathematics");
            if (Mathematics) {
                Mathematics.innerHTML = fetched_data["Mathematics"][2];
            }
            const Science = document.getElementById("Science");
            if (Science) {
                Science.innerHTML = fetched_data["Science"][2];
            }
            const Social_Science = document.getElementById("Social Science");
            if (Social_Science) {
                Social_Science.innerHTML = fetched_data["Social_Science"][2];
            }
            const Hindi = document.getElementById("Hindi");
            if (Hindi) {
                Hindi.innerHTML = fetched_data["Hindi"][2];
            }
            const Sanskrit = document.getElementById("Sanskrit");
            if (Sanskrit) {
                Sanskrit.innerHTML = fetched_data["Sanskrit"][2];
            }
            const Information_Technology = document.getElementById("Information Technology");
            if (Information_Technology) {
                Information_Technology.innerHTML = fetched_data["Information_Technology"][2];
            }

        })
        .catch((error) => console.log(error));

}
// PA_4

function Click_PA_4() {


    studentPercentage = 78;
    animateGauge(studentPercentage);

    fetch(get_link)
        .then((response) => response.json())
        .then((data) => {


            // MArks
            const English = document.getElementById("English");
            if (English) {
                English.innerHTML = fetched_data["English"][3];
            }
            const Mathematics = document.getElementById("Mathematics");
            if (Mathematics) {
                Mathematics.innerHTML = fetched_data["Mathematics"][3];
            }
            const Science = document.getElementById("Science");
            if (Science) {
                Science.innerHTML = fetched_data["Science"][3];
            }
            const Social_Science = document.getElementById("Social Science");
            if (Social_Science) {
                Social_Science.innerHTML = fetched_data["Social_Science"][3];
            }
            const Hindi = document.getElementById("Hindi");
            if (Hindi) {
                Hindi.innerHTML = fetched_data["Hindi"][3];
            }
            const Sanskrit = document.getElementById("Sanskrit");
            if (Sanskrit) {
                Sanskrit.innerHTML = fetched_data["Sanskrit"][3];
            }
            const Information_Technology = document.getElementById("Information Technology");
            if (Information_Technology) {
                Information_Technology.innerHTML = fetched_data["Information_Technology"][3];
            }

        })
        .catch((error) => console.log(error));

}
// Annual

function Click_Annual() {


    studentPercentage = 89;
    animateGauge(studentPercentage);

    fetch(get_link)
        .then((response) => response.json())
        .then((data) => {


            // MArks
            const English = document.getElementById("English");
            if (English) {
                English.innerHTML = fetched_data["English"][4];
            }
            const Mathematics = document.getElementById("Mathematics");
            if (Mathematics) {
                Mathematics.innerHTML = fetched_data["Mathematics"][4];
            }
            const Science = document.getElementById("Science");
            if (Science) {
                Science.innerHTML = fetched_data["Science"][4];
            }
            const Social_Science = document.getElementById("Social Science");
            if (Social_Science) {
                Social_Science.innerHTML = fetched_data["Social_Science"][4];
            }
            const Hindi = document.getElementById("Hindi");
            if (Hindi) {
                Hindi.innerHTML = fetched_data["Hindi"][4];
            }
            const Sanskrit = document.getElementById("Sanskrit");
            if (Sanskrit) {
                Sanskrit.innerHTML = fetched_data["Sanskrit"][4];
            }
            const Information_Technology = document.getElementById("Information Technology");
            if (Information_Technology) {
                Information_Technology.innerHTML = fetched_data["Information_Technology"][4];
            }

        })
        .catch((error) => console.log(error));

}








