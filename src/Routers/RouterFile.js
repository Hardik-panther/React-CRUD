
import AddPermission from "../Pages/Permission/AddPermission";
import PermissionDashbord from "../Pages/Permission/PermissionDashbord";
import AddRole from "../Pages/Role/AddRole";
import RoleDashbord from "../Pages/Role/RoleDashbord";
import Dashbord from "../Pages/StudentsForm/Dashbord";
import StudentsForm from "../Pages/StudentsForm/StudentsForm";
import UserDashbord from "../Pages/User/UserDashbord";
import UserForm from "../Pages/User/UserForm";


const RouterFile = [
  {
    path: "/dashbord",
    Component: Dashbord,
    permission: "view student"

  },
  {
    path: "/studentsform",
    Component: StudentsForm,
    permission: "add student"

  },

  {
    path: "/studentsform/:id",
    Component: StudentsForm,
    permission: "edit student"

  },

  {
    path: "/userdashbord",
    Component: UserDashbord,
    permission: "view user"

  },
  {
    path: "/userform",
    Component: UserForm,
    permission: "add user"

  },
  {
    path: "/userform/:id",
    Component: UserForm,
    permission: "edit user"

  },
  {
    path: "/roledashbord",
    Component: RoleDashbord,
    permission: "view role"

  },
  {
    path: "/addrole",
    Component: AddRole,
    permission: "add role"

  },
  {
    path: "/addrole/:id",
    Component: AddRole,
    permission: "edit role"

  },
  {
    path: "/permissiondashbord",
    Component: PermissionDashbord,
    permission: "view permission"

  },
  {
    path: "/addpermission",
    Component: AddPermission,
    permission: "add permission"

  },
  {
    path: "/addpermission/:id",
    Component: AddPermission,
    permission: "edit permission"

  }
]

export default RouterFile
