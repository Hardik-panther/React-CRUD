import Http from "./Http"
import { baseurl } from "../Baseurl/BaseURL";

export default {
  login_Data(data) {
    // console.log("Apidata->", data)
    return new Promise((resolve, reject) => {
      Http.post(baseurl + "api/login", data)
        .then(function (res) {

          // console.log("res01->", res)
          return resolve(res.data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  },
  signup_Data(data) {
    // console.log("Apidata->", data)
    return new Promise((resolve, reject) => {
      Http.post(baseurl + "api/register", data)
        .then(function (res) {

          // console.log("res->", res)
          return resolve(res.data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  },
  get_Data() {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/student")

        .then(function (res) {
          return resolve(res.data)
        })
        .catch(function (error) {
          return reject(error)
        })
    })
  },

  create_Data(data) {
    console.log("create data->", data)
    return new Promise((resolve, reject) => {
      Http.post(baseurl + "api/student/add", data)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (error) {
          return reject(error);
        });
      // console.log(data)

    });
  },
  edit_Data(id, data) {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/student/edit/" + id, data)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  update_Data(id, data) {
    console.log("id--------", id, data)
    return new Promise((resolve, reject) => {
      Http.post(baseurl + "api/student/update/" + id, data)
        .then(function (res) {
          console.log("id res", res)
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  delete_Data(id) {
    return new Promise((resolve, reject) => {
      Http.delete(baseurl + "api/student/delete/" + id)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  get_UserData() {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/user")

        .then(function (res) {
          return resolve(res.data)
        })
        // .then((res) =>res.json())

        .catch(function (error) {
          return reject(error)
        })
    })
  },
  create_UserData(data) {
    return new Promise((resolve, reject) => {
      Http.post(baseurl + "api/user/add", data)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  },
  edit_UserData(id, data) {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/user/show/" + id, data)//show=edit
        .then(function (res) {
          // console.log("edti-------", res)
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  update_UserData(id,data) {
    console.log("id 00--------",id, data)
    return new Promise((resolve, reject) => {
      Http.post(baseurl +"api/user/update/"+id,data)
        .then(function (res) {
          console.log("id res", res)
          return resolve(res.data);
        })
        .catch(function (err) {
          console.log("id err res", err)

          return reject(err);
        });
    });
  },
  delete_UserData(id) {
    return new Promise((resolve, reject) => {
      Http.delete(baseurl + "api/user/delete/" + id)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  get_RoleData() {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/role")

        .then(function (res) {
          return resolve(res.data)
        })
        // .then((res) =>res.json())

        .catch(function (error) {
          return reject(error)
        })
    })
  },
  create_RoleData(data) {
    return new Promise((resolve, reject) => {
      Http.post(baseurl + "api/role/add", data)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  },
  edit_RoleData(id, data) {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/role/edit/" + id, data)//show=edit
        .then(function (res) {
          // console.log("edti-------", res)
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  update_RoleData(id,data) {
    console.log("id 00--------",id, data)
    return new Promise((resolve, reject) => {
      Http.post(baseurl +"api/role/update/"+id,data)
        .then(function (res) {
          console.log("id res", res)
          return resolve(res.data);
        })
        .catch(function (err) {
          console.log("id err res", err)

          return reject(err);
        });
    });
  },
  delete_RoleData(id) {
    return new Promise((resolve, reject) => {
      Http.delete(baseurl + "api/role/delete/" + id)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  get_PermissionData() {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/permission")

        .then(function (res) {
          return resolve(res.data)
        })
        .catch(function (error) {
          return reject(error)
        })
    })
  },
  create_PermissionData(data) {
    return new Promise((resolve, reject) => {
      Http.post(baseurl + "api/permission/add", data)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (error) {
          return reject(error);
        });
    });
  },
  edit_PermissionData(id, data) {
    return new Promise((resolve, reject) => {
      Http.get(baseurl + "api/permission/edit/" + id, data)//show=edit
        .then(function (res) {
          // console.log("edti-------", res)
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
  update_PermissionData(id,data) {
    console.log("id 00--------",id, data)
    return new Promise((resolve, reject) => {
      Http.post(baseurl +"api/permission/update/"+id,data)
        .then(function (res) {
          console.log("id res", res)
          return resolve(res.data);
        })
        .catch(function (err) {
          console.log("id err res", err)

          return reject(err);
        });
    });
  },
  delete_PermissionData(id) {
    return new Promise((resolve, reject) => {
      Http.delete(baseurl + "api/permission/delete/" + id)
        .then(function (res) {
          return resolve(res.data);
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  },
}