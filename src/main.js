import { Headers, Request, fetch} from 'cross-fetch'

class MainClass {
    constructor() {
        this.server = 'https://send-it-kibet.herokuapp.com/api/v2/'
        this.user_token = ""
    }

    async userToken(done) {
        if (this.user_token === "") {
            let user = {
                "email": "mnswaleh@gmail.com",
                "password": "Ab243677"
            }
            
            let request = new Request(this.server + 'auth/login', this.request_headers('POST', user))
            
            await fetch(request)
                .then(result => {
                    if (result.status !== 200 && result.status !== 403) {
                        alert("server error!");
                    } else {
                        return result.json()
                    }
                })
                .then(result => {
                    localStorage.setItem('user_token', result.token)
                    this.user_token = "result.token"
                })
        } else {
            await this.userToken()
        }
    }

    get serverName() {
        this.userToken()
        return this.server
    }

    request_headers(header_method, header_body = "") {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", 'Bearer ' + localStorage.getItem('user_token'));

        let my_headers = {
            method: header_method,
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        if (header_method == "POST") {
            my_headers.body = JSON.stringify(header_body)
        }

        return my_headers
    }
}

export default MainClass