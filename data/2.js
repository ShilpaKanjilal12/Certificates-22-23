var data = []


document.addEventListener("DOMContentLoaded", function () {
    sln = 1
    document.getElementById("message").innerHTML = "Thanks for completing the mandatory courses and quests in"
    document.getElementById("event_name").innerHTML = "Google Cloud Career Practioners Camp 2022-23"
    
    data = [{ sln: 0, name: "Select", link: "#" },
    {
        sln: 1, name: "Abhilasha ", link: "https://drive.google.com/file/d/1RZaHFJdyFR6QCeDlHths1arKbtpSb2ox/view?usp=drivesdk"
        },
        {
        sln: 2, name: "Achhada Hiren Rajkumar", link: "https://drive.google.com/file/d/1jCNLR4I38w6MlJ760ZIhxZZxZuRjf8kd/view?usp=drivesdk"
        },
        {
        sln: 3, name: "Agniprovo Mandal ", link: "https://drive.google.com/file/d/1bWwmD2bi161sDQYvUUx958hwMLfAA1M0/view?usp=drivesdk"
        },
        {
        sln: 4, name: "Akash Kumar", link: "https://drive.google.com/file/d/1uen52qxO0xhBkVeasw5jkZ0REQ8B8MwA/view?usp=drivesdk"
        },
        {
        sln: 5, name: "Aman Agrawal", link: "https://drive.google.com/file/d/1J-1w3M0GK4jqi5CruDnG9GQ-jNnyLV7Z/view?usp=drivesdk"
        },
        {
        sln: 6, name: "Amar Kumar", link: "https://drive.google.com/file/d/1CqNjkOGnfwSj84CB8r_hzqEsEi2WGY3S/view?usp=drivesdk"
        },
        {
        sln: 7, name: "Amisha Kumari", link: "https://drive.google.com/file/d/1SgPfL6f6td027qIV6-8kp7jauZh2MFQT/view?usp=drivesdk"
        },
        {
        sln: 8, name: "Anjali Kumari", link: "https://drive.google.com/file/d/1KPXqhUK5-UiVuxRfBkp6F-WbyC4BtIGB/view?usp=drivesdk"
        },
        {
        sln: 9, name: "Aritra Bhaduri", link: "https://drive.google.com/file/d/1YSPA9o9TyChwdjxspXqfIG8of2iCXZ0Y/view?usp=drivesdk"
        },
        {
        sln: 10, name: "Astha Singhal", link: "https://drive.google.com/file/d/1zBKnEf9tAJABzpQ7xkrPAsOHy-3wfNGZ/view?usp=drivesdk"
        },
        {
        sln: 11, name: "Ayush Pal", link: "https://drive.google.com/file/d/1-JVbSu4_a0m86Dvcfzc4L66OJbD3Ws0N/view?usp=drivesdk"
        },
        {
        sln: 12, name: "Devesh Kumar Pandey", link: "https://drive.google.com/file/d/1tOysMn0oqcuD9WQ2dSalkkR3E43MjCLm/view?usp=drivesdk"
        },
        {
        sln: 13, name: "Gaurav Singh", link: "https://drive.google.com/file/d/1dkHIYwtRPMsOq7lbOLXcWfxa28cZW7DH/view?usp=drivesdk"
        },
        {
        sln: 14, name: "Himanshi", link: "https://drive.google.com/file/d/17jV_5XXDgTqq27NqSBDN5YWkdfOKJS0j/view?usp=drivesdk"
        },
        {
        sln: 15, name: "Jatin Kumawat", link: "https://drive.google.com/file/d/1PhIgRIsDaYOe6u-rky5sWi9QZXHqBMrX/view?usp=drivesdk"
        },
        {
        sln: 16, name: "K.Sravanthi ", link: "https://drive.google.com/file/d/1pNMTRU8kLbvXKDtlpqvzgwppx_gd2nbs/view?usp=drivesdk"
        },
        {
        sln: 17, name: "Kartikay ", link: "https://drive.google.com/file/d/1czHsBJ9U3l3ttrKudpAP6XcxNGHY6U4l/view?usp=drivesdk"
        },
        {
        sln: 18, name: "Kaushal Raj", link: "https://drive.google.com/file/d/1FSt8ssMC7HtG3FewezvEyfdMylC077a2/view?usp=drivesdk"
        },
        {
        sln: 19, name: "Manish Singh Chauhan", link: "https://drive.google.com/file/d/1lotNi5_KYcOQEM0x05hETRdb3UDl67nN/view?usp=drivesdk"
        },
        {
        sln: 20, name: "Nandita Gupta ", link: "https://drive.google.com/file/d/18ZTB_cNGH7-vcw37mT2OntIEEr-xo-5K/view?usp=drivesdk"
        },
        {
        sln: 21, name: "Naveen Kumar ", link: "https://drive.google.com/file/d/1a9xuvRIKo34tSu9Ewa9KyYe_2_nFcrcO/view?usp=drivesdk"
        },
        {
        sln: 22, name: "Nityanand Kumar ", link: "https://drive.google.com/file/d/1OCiOJOgTzdYAt4wUoTpZcsGWQ8WipnKR/view?usp=drivesdk"
        },
        {
        sln: 23, name: "Pichikala Karthik Satyanarayana", link: "https://drive.google.com/file/d/1RRZsdZSYIS9FRQX8Lt82ktjpt2COzzu9/view?usp=drivesdk"
        },
        {
        sln: 24, name: "Rachakonda Eshwar ", link: "https://drive.google.com/file/d/1kXkgWGfUn0PIyAZlHQs3if7z4xLgz_II/view?usp=drivesdk"
        },
        {
        sln: 25, name: "Rakesh Kumar ", link: "https://drive.google.com/file/d/1uIT-yvkJH6rL8p0yHYvcSaVdYD9wycJd/view?usp=drivesdk"
        },
        {
        sln: 26, name: "Raunak Kumar Gupta ", link: "https://drive.google.com/file/d/1z8gP54LLoFYoclMvzOED0AS_ZH7k7vhH/view?usp=drivesdk"
        },
        {
        sln: 27, name: "Riddhi Rathi", link: "https://drive.google.com/file/d/1VyVUWGRhkr4tzS85rYv60FQSjZa23-EX/view?usp=drivesdk"
        },
        {
        sln: 28, name: "Sahil", link: "https://drive.google.com/file/d/1vQDSTxp37p_lG9MnNrggaXINmCzYMqa9/view?usp=drivesdk"
        },
        {
        sln: 29, name: "Sahini Venkata Sitaram Sruti ", link: "https://drive.google.com/file/d/1P1vtdfHOFUKxHuLYRph6XwXQMlcYJhg1/view?usp=drivesdk"
        },
        {
        sln: 30, name: "Shashi Ranjan ", link: "https://drive.google.com/file/d/1ImEpAK312Jo0-2Pw4q6vh2xGw6dFx6zu/view?usp=drivesdk"
        },
        {
        sln: 31, name: "Shivani ", link: "https://drive.google.com/file/d/1F5GN1wqNYH1Xgih0qj9C44M9rJNRAmHR/view?usp=drivesdk"
        },
        {
        sln: 32, name: "Shreshy Srivastava ", link: "https://drive.google.com/file/d/1CQa87kZmizTzJWZZAXWOXmReZp2ZfNQY/view?usp=drivesdk"
        },
        
        {sln: 36, name: "Surmai", link: "https://drive.google.com/file/d/1XfNnsrY3s9KTgos8arWThvd-MIjzYyOT/view?usp=drivesdk"
        },
        {sln: 37, name: "Udita Das", link: "https://drive.google.com/file/d/1EHNij8hxOzPzi2-LzL5Hra_A97GKvK47/view?usp=drivesdk"
        },
        {sln: 38, name: "Vaibhav Gupta", link: "https://drive.google.com/file/d/1FOr2UnlvRM_4WNfB9YtwlXj8_Bc52ftn/view?usp=drivesdk"
        },
        {sln: 39, name: "Vinay M Sobarad ", link: "https://drive.google.com/file/d/1KfnVxzcXnleBCIDC9zPVtezeO0j8qaMM/view?usp=drivesdk"
        },]
    for (i = 0; i <= 36; i++) {
        document.getElementById("select").innerHTML += "<option value=" + data[i].sln + ">" + data[i].name + "</option>";
    }
});

document.getElementById("button").
    addEventListener("click", function () {
        var sln = document.getElementById("select").value
        window.location.href = data[sln].link;
    });

