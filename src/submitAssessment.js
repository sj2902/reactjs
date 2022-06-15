const authentication = getAuth();
            const user = authentication.currentUser;
            // const displayName = user.displayName;
            const email = user.email;
            // const photoURL = user.photoURL;
            // const emailVerified = user.emailVerified;
            // const uid = user.uid;
            
            // if (user !== null) {
            // // The user object has basic properties such as display name, email, etc.
            // const displayName = user.Firstname;
            // const email = user.email;
            // const photoURL = user.photoURL;
            // const emailVerified = user.emailVerified;
            // const uid = user.uid;
            // // console.log(email)
            // // The user's ID, unique to the Firebase project. Do NOT use
            // // this value to authenticate with your backend server, if
            // // you have one. Use User.getToken() instead.
        
            // }
            console.log("user who has performed the sign is: ",email);