
const platform = { 
    district: "TN-05",
    issues: [
        "Taxes", "Jobs", "Infrastructure", "Health care", "Crime and enforcement"
    ],
    donation: "test donation",
    calender: "test calendar",
    volunteer: [
        "Name", "Address", "Email", "Phone number", "Availability", "Desired activities"
    ],
    biography: "test biography",
    image: [
        document.querySelectorAll(".headshot"), document.querySelectorAll(".family"), document.querySelectorAll(".constituents")
    ]
//******* Below is the original code/solution for images; code above is a different approach; same results with both codes (due to HTML? How to hide HTML?) */
       // { headshot: 
            //document.querySelectorAll(".headshot");     //Tried as an ALTERNATIVE to .getElementById on line 19.
            // document.getElementById("headshot"); 
        // },
        // {
        //     family: document.getElementById("family");
        // },
        // {
        //     constituents: document.getElementById("constituents");
        // }
    
}


//  TEST: 
console.log((platform.district) + " " + (platform.issues[2]) + " " + (platform.calender) + (platform.image.headshot));