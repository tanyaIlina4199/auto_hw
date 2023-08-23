import superagent from "superagent"

export default class HttpClient {

    static readonly apiUrl = "https://jsonplaceholder.typicode.com/";
    

    static async get(path: string, query?: string|object): Promise<any> {
        const url = this.apiUrl + path;

        let response: any;
        try {
            response = await superagent.get(url).query(query);

        } catch (err: any) {
            console.log(err.message);
        }
    
        return response;
    }

    static async post(path: string, body: object): Promise<any> {

        const url = this.apiUrl + path;

        let response: any;
        try {
            response = await superagent
                        .post(url)
                        .set("Content-Type", "application/json")
                        .send(body);

        } catch (err: any) {
            console.log(err.message);
        }
    
        return response;
    }

    static async put(path: string, body: object): Promise<any> {
        const url = this.apiUrl + path;

        let response: any;
        try {
            response = await superagent
                        .put(url)
                        .set("Content-Type", "application/json")
                        .send(body);

        } catch (err: any) {
            console.log(err.message);
        }

        return response;
    }

    static async delete(path: string): Promise<any> {
        const url = this.apiUrl + path;

        let response: any;
        try {
            response = await superagent.delete(url);

        } catch (err: any) {
            console.log(err.message);
        }
    
        return response;
    }
}