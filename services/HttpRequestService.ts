export default class HttpRequestService {

    static async getData(url:string, body: {}, headers = {}): Promise<Response>{
        return fetch(url, {
            body: JSON.stringify(body),
            headers: headers,
        });
    }

    static async  postData(url:string, body:{}, headers = {}): Promise<Response>{
        return fetch(url, {
            method: "post",
            body: JSON.stringify(body),
            headers: headers,
        });
    }
}