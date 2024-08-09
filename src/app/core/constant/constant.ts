export const  apiEndPoint= {
    authentication: {
        isAlive: 'http://localhost:5235/IsAlive',
        signUp: 'http://localhost:5235/SignUp',
        confirmEmail: 'http://localhost:5235/ConfirmEmail',
        signIn: 'http://localhost:5235/SignIn',
        emailverifyforgetpassword: 'http://localhost:5235/ForgetPassword',
        setresetpassword: 'http://localhost:5235/ResetPassword'
    },
    organizationManagement: {
        getOrganizationsInfo: 'http://localhost:5235/GetOrganizationsInfo',
        createOrganization: 'http://localhost:5235/CreateOrganization',
        updateOrganization: 'http://localhost:5235/UpdateOrganization',
        organizationOwnerDetails: 'http://localhost:5235/OrganizationOwnerDetails',
        deleteOrganization: 'http://localhost:5235/DeleteOrganization'
    },
    dashboard: {
        organizationOwner: 'http://localhost:5235/api/dashboard/organization-owner',
        assetManager: 'http://localhost:5235/api/dashboard/asset-manager'
    },

    logActions: 'http://localhost:5235/api/logs',

    

    profileManagement: {
        getProfile: 'http://localhost:5235/api/profile',
        updateProfile: 'http://localhost:5235/api/profile'
    },

    searchFunctionality: {
        searchAssets: 'http://localhost:5235/api/assets/search'
    },

    // vendorManagement: {
    //     getVendors: 'http://localhost:5235/api/vendors',
    //     createVendor: 'http://localhost:5235/api/vendors',
    //     updateVendor: (id) => `http://localhost:5235/api/vendors/${id}`,
    //     deleteVendor: (id) => `http://localhost:5235/api/vendors/${id}`
    // }
}
export const constant = {
    login: {
        success: {
            code: 200,
            message: 'Login Success',
        }, fail: {
            code: 400,
            message: 'Login Fail',
        }
    },

    // Registration Message
    register: {
        success: {
            //Account Successfully Added
            accountsuccess: 'Account created successfully and a Confirmation email sent. please verify your email',
            // Confirmation Email
            verificationmessage: 'Verification Email sent',
            // Registeration Successfull after Verfication
            registeration: 'Registration Successfull',
            // Email Verification message on Successfull Registration
            emailverification: 'Your Email Address is Successfully Verified! PLease login to access your account!'
        },
        fail: {
            // Registeration failed Verfication
            registeration: 'Registration Fail',
            // Email Verification message on failed Registration
            emailverification: 'Your Email Address is not Confirmed!'
        }
    },

    inputerrormessage: {
        required: 'Please fill Field',
        email: 'Please Enter Valid Email',
        password: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
        passwordmatch:'Password didnot math'   
    },
    CRUDmessages:{
        created:{
            message:'Succesfully Created',
            theme:'green'
        },
        updated:{
            message:'Succesfully Updated',
            theme:'green'
        },
        deleted:{
            message:'Succesfully Deleted',
            theme:'green'
        },        
    }
}

export const response = {
    code: 404,
    message: 'Page Not Found',
}