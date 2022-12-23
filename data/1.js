var data = []


document.addEventListener("DOMContentLoaded", function () {
    sln = 1
    document.getElementById("message").innerHTML = "Thanks for attending sessions on"
    document.getElementById("event_name").innerHTML = "Introduction to Google Cloud 2022"
    
    data = [{ sln: 0, name: "Select", link: "#" },
    {
        sln: 1, name: "Abhijeet Kumar", link: "https://drive.google.com/file/d/1_dniH-KF5Tb0bRSNYDvdtUrZvNq0aAcu/view?usp=drivesdk"
    },
    {
        sln: 2, name: "Abhilasha", link: "https://drive.google.com/file/d/1ul2Ou5WSJgJU_F55bTWYKeyOV9uw5tUU/view?usp=drivesdk"
    },
    {
        sln: 3, name: "Achhada Hiren Rajkumar", link: "https://drive.google.com/file/d/1xzo70-hNEeshSaWm_7yHryQ48KkTPDFr/view?usp=drivesdk"
    },
    {
        sln: 4, name: "Akash Kumar", link: "https://drive.google.com/file/d/1t3K96Yq1c3tAG_PB-CcRmIJorA46MRUh/view?usp=drivesdk"
    },
    {
        sln: 5, name: "Amar Kumar", link: "https://drive.google.com/file/d/1bFZsPpQ3ASyKaSxGlxjvbVmgxrZrbKhz/view?usp=drivesdk"
    },
    {
        sln: 6, name: "Anjali Kumari", link: "https://drive.google.com/file/d/1qvPgkmTquiFdITGneTrH47YsEIh_-27n/view?usp=drivesdk"
    },
    {
        sln: 7, name: "Aritra Bhaduri", link: "https://drive.google.com/file/d/151nL4dDEyQz2m92wYHqaN_UwJuUvWxzX/view?usp=drivesdk"
    },
    {
        sln: 8, name: "Baddala Shree Vaishnavi", link: "https://drive.google.com/file/d/1dItirg25wwgApE3piCVz4ck9nBYpbJSF/view?usp=drivesdk"
    },
    {
        sln: 9, name: "Harsh Kumar", link: "https://drive.google.com/file/d/1Fci6seXbnW99guQrXeJm4ZHqWENPb0Bv/view?usp=drivesdk"
    },
    {
        sln: 10, name: "Heet Dhorajiya", link: "https://drive.google.com/file/d/1HTL9Cha17NgllRow82iEIafmzMFryy5v/view?usp=drivesdk"
    },
    {
        sln: 11, name: "Himanshi", link: "https://drive.google.com/file/d/1DgFInMl73mfXIAOg23P69_1ueZWwdyXQ/view?usp=drivesdk"
    },
    {
        sln: 12, name: "Jatin Kumawat", link: "https://drive.google.com/file/d/17kShMV7gXKiSbLmbHe5H-yjPs9I0uAWv/view?usp=drivesdk"
    },
    {
        sln: 13, name: "Manish Singh Chauhan", link: "https://drive.google.com/file/d/1YECxQ-F2ZJIaS5LyvILvbae9N8l4yJcr/view?usp=drivesdk"
    },
    {
        sln: 14, name: "Marupaka Jayanth Kumar", link: "https://drive.google.com/file/d/1XePjktxkce30HgYavqjYH4bmLxh5Fhud/view?usp=drivesdk"
    },
    {
        sln: 15, name: "Nandita Gupta", link: "https://drive.google.com/file/d/1cF3pkCq-IHPnwORb3-pVwOkel5RgBKRg/view?usp=drivesdk"
    },
    {
        sln: 16, name: "Naveen Kumar", link: "https://drive.google.com/file/d/1FGoM9Va6dK7df2-Trrb2l4Wqe0WFJiIU/view?usp=drivesdk"
    },
    {
        sln: 17, name: "Nishita Kamal Lath", link: "https://drive.google.com/file/d/1jLODXNlipQXywFk62lkwpfFxf6d6K2oP/view?usp=drivesdk"
    },
    {
        sln: 18, name: "Nityanand Kumar", link: "https://drive.google.com/file/d/1IkIJqddjRziNZ65nhQZ8pWV9ZMCEOQ5o/view?usp=drivesdk"
    },
    {
        sln: 19, name: "Piyush Ojha", link: "https://drive.google.com/file/d/1IN2g0cVU5uxWbJp5cbOHjQOE8aCK6KiT/view?usp=drivesdk"
    },
    {
        sln: 20, name: "Rachakonda Eshwar", link: "https://drive.google.com/file/d/11-pMNrUGjQI4vJdPaqj05eqqy7opN9Hu/view?usp=drivesdk"
    },
    {
        sln: 21, name: "Rajat Kumar Behera", link: "https://drive.google.com/file/d/1QAjdplcPq5xJG5UBDPn5A8pGh6QyIVWh/view?usp=drivesdk"
    },
    {
        sln: 22, name: "Raunak Kumar Gupta", link: "https://drive.google.com/file/d/1FGUkidMOdS3Y49nFpwCYmxYnz2p-kMoO/view?usp=drivesdk"
    },
    {
        sln: 23, name: "Riddhi Rathi", link: "https://drive.google.com/file/d/10VtMHy3le1NJ7kKzlsXx3Mv9G2qh6B-3/view?usp=drivesdk"
    },
    {
        sln: 24, name: "Sahil", link: "https://drive.google.com/file/d/1OlHJYL2uepDZO8xI_3M15SUdtOXRY6Ah/view?usp=drivesdk"
    },
    {
        sln: 25, name: "Sairam Paila", link: "https://drive.google.com/file/d/1dmmibcINxE4aYG51YBpzXYHDLRA_Yr6I/view?usp=drivesdk"
    },
    {
        sln: 26, name: "Shashi Ranjan", link: "https://drive.google.com/file/d/1SvvGopsfLNo7eidQx1e0-uWlDpdQ_N8z/view?usp=drivesdk"
    },
    {
        sln: 27, name: "Shashikant Kumar", link: "https://drive.google.com/file/d/15As1zm5wz-ICnCf8SwokzjBw3DjiP3sx/view?usp=drivesdk"
    },
    {
        sln: 28, name: "Shilpa Kanjilal", link: "https://drive.google.com/file/d/1lcwCU4wutz4jQLAu7EMkA5ymj3DVkJIw/view?usp=drivesdk"
    },
    {
        sln: 29, name: "Shivani", link: "https://drive.google.com/file/d/1sFokyAh2cMQpSWyuQrqGs3v61xwGPlkv/view?usp=drivesdk"
    },
    {
        sln: 30, name: "Sravyasri Mortha", link: "https://drive.google.com/file/d/1kbjgu-swtngOA5AeYw3gJPATKtS8Gidd/view?usp=drivesdk"
    },
    {
        sln: 31, name: "Sruti Sahini", link: "https://drive.google.com/file/d/1VZNb97p4XEbl5AsNYpukLzPTS43pGaLc/view?usp=drivesdk"
    },
    {
        sln: 32, name: "Surmai", link: "https://drive.google.com/file/d/1Zyux3lEjwMCWfAC-bce31zDBZQBLytI3/view?usp=drivesdk"
    },
    {
        sln: 33, name: "Udita Das ", link: "https://drive.google.com/file/d/1aQ09Y9g3nZE5DEtTP2EwCGSoaBTUreXs/view?usp=drivesdk"
    },
    {
        sln: 34, name: "Vaibhav Gupta", link: "https://drive.google.com/file/d/1S475kPi86aNG-CQY8oXVJ8gfcHxJVd4r/view?usp=drivesdk"
    },
    {
        sln: 35, name: "Vankudothu Surya Prakash", link: "https://drive.google.com/file/d/1wsa4GILnKivXz3Iw4WXaCxFqVDQ6vLXY/view?usp=drivesdk"
    },
    {
        sln: 36, name: "Yogesh Kumar", link: "https://drive.google.com/file/d/1qXMqqv7g7d9RcXKA-kpL0AQO1OBFQsvS/view?usp=drivesdk"
    }]
    for (i = 0; i <= 36; i++) {
        document.getElementById("select").innerHTML += "<option value=" + data[i].sln + ">" + data[i].name + "</option>";
    }
    console.log(sessionStorage.getItem('event'))
});

document.getElementById("button").
    addEventListener("click", function () {
        var sln = document.getElementById("select").value
        window.location.href = data[sln].link;
    });

