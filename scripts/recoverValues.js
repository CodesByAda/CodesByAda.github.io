document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) {
        console.error('No form data found in localStorage');
        return;
    }

    const userAvatar = formData.useravatar || 'https://picsum.photos/200/300?random=1';
    let viewProjBtn = document.getElementById('viewProjBtn');
    let projNav = document.getElementById('projNav');
    let expNav = document.getElementById('expNav');



    // Personal Information
    document.getElementById('fullnametag').textContent = formData.fullName;
    document.getElementById('firstnametag').textContent = formData.firstName;
    document.getElementById('abouttag').textContent = formData.aboutText;
    document.getElementById('jobtitletag').textContent = formData.jobTitle;
    document.getElementById('quotetag').textContent = formData.quote;
    document.getElementById('skillstag').textContent = formData.skillsList;
    document.getElementById('profilepic').src = formData.useravatar;
    document.getElementById('phone').textContent = formData.phone;
    document.getElementById('email').textContent = formData.email;
    document.getElementById('message').textContent = formData.address;
    document.getElementById('footername').textContent = formData.fullName;
    document.getElementById('contactName').textContent = formData.fullName;
    document.getElementById('profilepic').src = userAvatar;

    // Education Information
    document.getElementById('instnametag').textContent = formData.instName;
    document.getElementById('edulvltag').textContent = formData.edulvl;
    document.getElementById('eduFieldtag').textContent = formData.eduField;
    document.getElementById('eduDesctag').textContent = formData.eduDesc;
    document.getElementById('edudatetag').textContent = formData.eduYear;

    // NO PROJECT CHECKBOX
    const projCheckBox = formData.projcheckBox;
    const projSection = document.getElementById('projects');  // Ensure this is the correct section ID
    if (projCheckBox) {
        projSection.classList.add("hidden"); // Hide project section if checkbox is checked
        viewProjBtn.classList.add("hidden");
        projNav.classList.add("hidden")
    } else {
        viewProjBtn.classList.remove("hidden") 
        projNav.classList.remove("hidden")
        projSection.classList.remove("hidden"); // Show project section if checkbox is unchecked
    }


    // NO EXP CHECKBOX
    const expCheckBox = formData.expcheckBox;
    const expSection = document.getElementById('experience');
    if (expCheckBox) {
        expNav.classList.add("hidden");
        expSection.classList.add("hidden"); // Hide project section if checkbox is checked
    } else {
        expNav.classList.remove("hidden");
        expSection.classList.remove("hidden"); // Show project section if checkbox is unchecked
    }

    // Projects Information
    if (formData.projects[0]) {
        document.getElementById('projName1tag').textContent = formData.projects[0].name;
        document.getElementById('projDesc1tag').textContent = formData.projects[0].desc;
        document.getElementById('githubLink1tag').href = formData.projects[0].github;
    }
    if (formData.projects[1]) {
        document.getElementById('projName2tag').textContent = formData.projects[1].name;
        document.getElementById('projDesc2tag').textContent = formData.projects[1].desc;
        document.getElementById('githubLink2tag').href = formData.projects[1].github;
    }
    if (formData.projects[2]) {
        document.getElementById('projName3tag').textContent = formData.projects[2].name;
        document.getElementById('projDesc3tag').textContent = formData.projects[2].desc;
        document.getElementById('githubLink3tag').href = formData.projects[2].github;
    }

    // Experience Information
    document.getElementById('compNametag').textContent = formData.compName;
    document.getElementById('expdatetag').textContent = formData.expYear;
    document.getElementById('exproletag').textContent = formData.exprole;
    document.getElementById('expdesctag').textContent = formData.expdesc;

    console.log('Project Data:', formData.projects);
    console.log('Education Data:', formData.instName, formData.edulvl);
    console.log('Experience Data:', formData.compName);



});
