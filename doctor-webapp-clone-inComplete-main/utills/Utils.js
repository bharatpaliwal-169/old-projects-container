export function getHeader() {
    // let appUsrObj = AppUser.getInstance();
    console.log("getHeader", appUsrObj)
    let headers = {};
    // let token = appUsrObj.token;
    let token = null;

    console.log("TOKEN", token)
    if (token && token.length > 0) {
      headers = {
        "x-access-token": token,
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    } else {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    }
    return headers;
  }
