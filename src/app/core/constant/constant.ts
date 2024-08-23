export const apiEndPoint = {
  authentication: {
    isAlive:
      "http://localhost:5235/YourAssetManager.Server/Authentication/IsAlive",
    signUp:
      "http://localhost:5235/YourAssetManager.Server/Authentication/SignUp",
    confirmEmail:
      "http://localhost:5235/YourAssetManager.Server/Authentication/ConfirmEmail",
    signIn:
      "http://localhost:5235/YourAssetManager.Server/Authentication/SignIn",
    emailverifyforgetpassword:
      "http://localhost:5235/YourAssetManager.Server/Authentication/ForgetPassword",
    setresetpassword:
      "http://localhost:5235/YourAssetManager.Server/Authentication/ResetPassword",
  },
  organizationManagement: {
    getOrganizationsInfo:
      "http://localhost:5235/YourAssetManager.Server/OrganizationManagement/GetOrganizationsInfo",
    createOrganization:
      "http://localhost:5235/YourAssetManager.Server/OrganizationManagement/CreateOrganization",
    updateOrganization:
      "http://localhost:5235/YourAssetManager.Server/OrganizationManagement/UpdateOrganization",
    organizationOwnerDetails:
      "http://localhost:5235/YourAssetManager.Server/OrganizationManagement/OrganizationOwnerDetails",
    deleteOrganization:
      "http://localhost:5235/YourAssetManager.Server/OrganizationManagement/DeleteOrganization",
  },
  category: {
    GetAllAssetCategories:
      "http://localhost:5235/YourAssetManager.Server/AssetCatagoryManagement/GetAllAssetCategories",
    CreateAssetCategory:
      "http://localhost:5235/YourAssetManager.Server/AssetCatagoryManagement/CreateAssetCategory",
    GetAssetCategoryById:
      "http://localhost:5235/YourAssetManager.Server/AssetCatagoryManagement/GetAssetCategoryById",
    DeleteAssetCategory:
      "http://localhost:5235/YourAssetManager.Server/AssetCatagoryManagement/DeleteAssetCategory",
    UpdateAssetCategory:
      "http://localhost:5235/YourAssetManager.Server/AssetCatagoryManagement/UpdateAssetCategory",
  },
  vendor: {
    CreateVender:
      "http://localhost:5235/YourAssetManager.Server/VendorManagement/CreateVendor",
    GetAllVenders:
      "http://localhost:5235/YourAssetManager.Server/VendorManagement/GetAllVendors",
    DeleteVender:
      "http://localhost:5235/YourAssetManager.Server/VendorManagement/DeleteVendor",
    GetVenderById:
      "http://localhost:5235/YourAssetManager.Server/VendorManagement/GetVendorById",
    UpdateVender:
      "http://localhost:5235/YourAssetManager.Server/VendorManagement/UpdateVendor",
  },
  assettype: {
    CreateAssetType:
      "http://localhost:5235/YourAssetManager.Server/AssetTypeManagement/CreateAssetType",
    GetAllAssetTypes:
      "http://localhost:5235/YourAssetManager.Server/AssetTypeManagement/GetAllAssetTypes",
    DeleteAssetType:
      "http://localhost:5235/YourAssetManager.Server/AssetTypeManagement/DeleteAssetType",
    UpdateAssetType:
      "http://localhost:5235/YourAssetManager.Server/AssetTypeManagement/UpdateAssetType",
  },
  asset: {
    CreateAsset:
      "http://localhost:5235/YourAssetManager.Server/AssetManagement/CreateAsset",
    GetAllAssets:
      "http://localhost:5235/YourAssetManager.Server/AssetManagement/GetAllAssets",
    DeleteAsset:
      "http://localhost:5235/YourAssetManager.Server/AssetManagement/DeleteAsset",
    UpdateAsset:
      "http://localhost:5235/YourAssetManager.Server/AssetManagement/UpdateAsset",
    GetAssetById:
      "http://localhost:5235/YourAssetManager.Server/AssetManagement/GetAssetById",
  },
  dashboard: {
    GetDashBoardStatiticsData: 'http://localhost:5235/YourAssetManager.Server/DashboardManagement/GetDashBoardStatiticsData'
  }
};
export const menu = [{
  path: 'home',
  label: 'Home',
  role: ['OrganizationOwner', 'AssetManager']

}, {
  path: 'asset',
  label: 'Asset',
  role: ['OrganizationOwner', 'AssetManager']

}, {
  path: 'categories',
  label: 'Categories',
  role: ['OrganizationOwner', 'AssetManager']
}, {
  path: 'user',
  label: 'User',
  role: ['OrganizationOwner', 'AssetManager']
}]
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
    passwordmatch: 'Password didnot math'
  },
  CRUDmessages: {
    created: {
      message: 'Succesfully Created',
      theme: 'green'
    },
    updated: {
      message: 'Succesfully Updated',
      theme: 'green'
    },
    deleted: {
      message: 'Succesfully Deleted',
      theme: 'green'
    },
  }
}

export const response = {
  code: 404,
  message: 'Page Not Found',
}