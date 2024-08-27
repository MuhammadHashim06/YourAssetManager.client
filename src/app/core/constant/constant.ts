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
    GetDashBoardStatiticsData: 'http://localhost:5235/YourAssetManager.Server/DashboardManagement/GetDashBoardStatiticsData',
    GetAllPendingAssetRequests: 'http://localhost:5235/YourAssetManager.Server/DashboardManagement/GetAllPendingAssetRequests',
    GetAllAssetRequests: 'http://localhost:5235/YourAssetManager.Server/DashboardManagement/GetAllAssetRequests'
  },
  user: {
    AssignAssetManager: 'http://localhost:5235/YourAssetManager.Server/UserManagement/AssignAssetManager',
    DismissAssetManage: 'http://localhost:5235/YourAssetManager.Server/UserManagement/DismissAssetManager',
    DeactivateAccount: 'http://localhost:5235/YourAssetManager.Server/UserManagement/DeactivateAccount',
    ActivateAccount: 'http://localhost:5235/YourAssetManager.Server/UserManagement/ActivateAccount',
    GetAllUser: 'http://localhost:5235/YourAssetManager.Server/UserManagement/GetAllUser',
    GetUserById: 'http://localhost:5235/YourAssetManager.Server/UserManagement/GetUserById',
    GetMyData: 'http://localhost:5235/YourAssetManager.Server/UserManagement/GetMyData'
  }, profile: {
    UpdateUserProfile:
      'http://localhost:5235/YourAssetManager.Server/UserManagement/UpdateUserProfile'
  },
  assetactions: {
    sentrequest: 'http://localhost:5235/YourAssetManager.Server/AssetActionsManagement/RequestAsset',
    ProcessAssetRequest:'http://localhost:5235/YourAssetManager.Server/AssetActionsManagement/ProcessAssetRequest',
    AssignAsset:'http://localhost:5235/YourAssetManager.Server/AssetActionsManagement/AssignAsset',
    GetAssetRequestsByUserId: 'http://localhost:5235/YourAssetManager.Server/AssetActionsManagement/GetAssetRequestsByUserId'
  },

};
export const menu = [{
  path: 'home',
  label: 'Home',
  icon: 'fas fa-tachometer-alt',
  role: ['OrganizationOwner', 'AssetManager']
}, {
  path: 'user',
  label: 'User',
  icon: 'fas fa-users',
  role: ['OrganizationOwner', 'AssetManager']
}, {
  path: 'asset',
  label: 'Asset',
  icon: 'fas fa-basket-shopping',
  role: ['OrganizationOwner', 'AssetManager']

}, {
  path: 'categories',
  label: 'Categories',
  icon: 'fas fa-box',
  role: ['OrganizationOwner', 'AssetManager']
}, {
  path: 'type',
  label: 'Type',
  icon: 'fa-solid fa-table-list',
  role: ['OrganizationOwner', 'AssetManager']
}, {
  path: 'vendor',
  label: 'Vendor',
  icon: 'fas fa-truck',
  role: ['OrganizationOwner', 'AssetManager']
},
// {
//   path: 'history',
//   label: 'History',
//   icon:'fas fa-history',
//   role: ['OrganizationOwner', 'AssetManager']
// },
{
  path: 'requests/assetrequests',
  label: 'Request',
  icon: 'fa-solid fa-bell',
  role: ['OrganizationOwner', 'AssetManager']
},
{
  path: 'requests/yourrequests',
  label: 'Your Requests',
  icon: 'fa-solid fa-code-pull-request',
  role: ['OrganizationOwner', 'AssetManager', 'Employee']
},
{
  path: 'profile',
  label: 'Profile',
  icon: 'fas fa-user',
  role: ['OrganizationOwner', 'AssetManager', 'Employee']
}
]
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
export const ProfileIcon = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
export const response = {
  code: 404,
  message: 'Page Not Found',
}