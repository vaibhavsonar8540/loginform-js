
    const signupForm = document.getElementById('signup');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from the form inputs
        let Name = document.getElementById('name').value;
        let Email = document.getElementById('email').value;
        let Country = document.getElementById('country').value;
        let Phone = document.getElementById('phone').value;
        let Password = document.getElementById('password').value;

        let info = {
            UserName: Name,
            Email: Email,
            Country: Country,
            Phone: Phone,
            Password: Password
        };

        console.log(info);

    });


    let signin = document.getElementById('signin');

    signin.addEventListener('submit',(r) =>
    {
        r.preventDefault();

        let name = document.getElementById('signin-name').value;
        let email2 = document.getElementById('signin-email').value;
        let pass = document.getElementById('signin-password').value;

        let info2 =
        {
            Name : name,
            Email2 : email2,
            Pass : pass,
        };
        
        console.log(info2);
        
    })

    

 