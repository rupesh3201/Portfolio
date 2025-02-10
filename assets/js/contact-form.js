const sendBtn = document.getElementById("sendbtn");

const homePageContactForm = document.getElementById("homePageContactForm");
homePageContactForm?.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const formData = new FormData(homePageContactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    try{
        if(sendBtn){
            sendBtn.disabled = true;
        }
        const response = await fetch("", {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(formObject)
        })
        const result = await response.json();
        if(result.success){
            $('#contactFormModal').modal({})
            homePageContactForm.reset();
        }
        else{
            $('#contactFormErrorModal').modal({})
        }
        if(sendBtn){
            sendBtn.disabled = false;
        }
    }
    catch(error){
        $('#contactFormErrorModal').modal({})
        if(sendBtn){
            sendBtn.disabled = false;
        }
    }
})


const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    try{
        if(sendBtn){
            sendBtn.disabled = true;
        }
        const response = await fetch("", {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(formObject)
        })
        const result = await response.json();
        if(result.success){
            $('#contactFormModal').modal({})
            contactForm.reset();
        }
        else{
            $('#contactFormErrorModal').modal({})
        }
        if(sendBtn){
            sendBtn.disabled = false;
        }
    }
    catch(error){
        if(sendBtn){
            sendBtn.disabled = false;
        }
        $('#contactFormErrorModal').modal({})
    }
    
})
