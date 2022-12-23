var data = []
var sln

document.addEventListener("DOMContentLoaded", function () {
    data = [{ sln: 0, name: "Select", link: "#" },
    {
        sln: 1, 
        name: "Certificate of Participation: Introduction to Google Cloud", 
        message: "Thanks for attending sessions on",
        event_name:"Introduction to Google Cloud 2022", 
        link: "./eventPages/1.html"
    },
    {
        sln: 2, name: "Certificate of GCCP Course Completion", link: "#"
    }]
    for (i = 0; i <= 2; i++) {
        document.getElementById("select").innerHTML += "<option value=" + data[i].sln + ">" + data[i].name + "</option>";
    }

});

document.getElementById("button").
    addEventListener("click", function () {
        sln = document.getElementById("select").value
        window.location.href = data[sln].link
    });

