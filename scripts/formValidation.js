document.addEventListener('DOMContentLoaded', function () {
    // NO PROJECT CHECKBOX
    document.getElementById('projcheck').addEventListener("change", (e) => {
        if (e.target.checked) {
            document.getElementById('projsec').classList.add("hidden");
        } else {
            document.getElementById('projsec').classList.remove("hidden");
        }
    });

    //NO EXP CHECKBOX
    document.getElementById('expcheck').addEventListener("change", (e) => {
        if (e.target.checked) {
            document.getElementById('exp1').classList.add("hidden");
        } else {
            document.getElementById('exp1').classList.remove("hidden");
        }
    });

    let avatarinput = document.getElementById('user_avatar');

    document.getElementById('submitBtn').addEventListener('click', function () {
        // Gather data from the form
        const data = {
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            fullName: document.getElementById('fname').value + " " + document.getElementById('lname').value,
            jobTitle: document.getElementById('jobtitle').value,
            quote: document.getElementById('quote').value,
            aboutText: document.getElementById('aboutme').value,
            skillsList: document.getElementById('pskills').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById("email").value,
            address: document.getElementById("contactinfo").value,

            // checkbox value
            projcheckBox: document.getElementById('projcheck').checked, // Store if checked
            expcheckBox: document.getElementById('expcheck').checked,

            // Educational Information
            instName: document.getElementById('inst').value,
            edulvl: document.getElementById('edulevel').value,
            eduField: document.getElementById('edufield').value,
            eduYear: document.getElementById('eduyear').value,
            eduDesc: document.getElementById('edudesc').value,


            // Projects
            projects: [
                {
                    name: document.getElementById('pname1').value,
                    desc: document.getElementById('pabout1').value,
                    github: document.getElementById('gitlink1').value
                },
                {
                    name: document.getElementById('pname2').value,
                    desc: document.getElementById('pabout2').value,
                    github: document.getElementById('gitlink2').value
                },
                {
                    name: document.getElementById('pname3').value,
                    desc: document.getElementById('pabout3').value,
                    github: document.getElementById('gitlink3').value
                }
            ],

            // Experience
            compName: document.getElementById('comp1').value,
            exprole: document.getElementById('exprole1').value,
            expYear: document.getElementById('expyear').value,
            expdesc: document.getElementById('expdesc1').value,
        };

        // Save data to localStorage
        if (avatarinput.files && avatarinput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                data.useravatar = e.target.result; // Base64 string
                // Save data to localStorage
                localStorage.setItem('formData', JSON.stringify(data));
                console.log('Data saved:', data);

                // Reload the iframe if needed
                let iframe = document.getElementById('portfolioIframe');
                iframe.contentWindow.location.reload();
            };
            reader.readAsDataURL(avatarinput.files[0]);
        } else {
            data.useravatar = ''; // No file selected
            // Save data to localStorage
            localStorage.setItem('formData', JSON.stringify(data));
            console.log('Data saved:', data);

            let iframe = document.getElementById('portfolioIframe');
                iframe.contentWindow.location.reload();
        }
    });
});