import Http from "./Http"

export default {
    login_Data(data) {
        console.log("Apidata->", data)
        return new Promise((resolve, reject) => {
            Http.post("https://c240-223-236-114-188.ngrok.io/api/login", data)
                .then(function (res) {
                    console.log("res01->", res)
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
            Http.post("https://c240-223-236-114-188.ngrok.io/api/register", data)
                .then(function (res) {
                    console.log("res->", res)
                    return resolve(res.data);
                })
                .catch(function (error) {
                    return reject(error);
                });
        });
    },
    get_Data(){
        return new Promise((resolve,reject)=>{
            Http.get("https://c240-223-236-114-188.ngrok.io/api/student")
            .then(function(res){
                console.log("getpostdata->",res)
                return resolve(res.data)
            })
            .catch(function(error){
                return reject(error)
            })
        })
    }

    //     createPost(data){
    //     // console.log(data)
    //     return new Promise((resolve, reject) => {
    //         Http.post("https://c240-223-236-114-188.ngrok.io/api/student", data)
    //             // Http.post("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY",data)
    //             // console.log(data)
    //             .then(function (res) {
    //                 return resolve(res.data);
    //             })
    //             .catch(function (error) {
    //                 return reject(error);
    //             });
    //         console.log(data)

    //     });
    // }
}