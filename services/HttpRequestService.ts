export default class HttpRequestService {

    static async getData(url:string, body:{} =  {}, headers = {}): Promise<Response>{
        return fetch(url);
    }

    static async  postData(url:string, body:{}, headers = {}): Promise<Response>{
        return fetch(url, {
            method: "post",
            body: JSON.stringify(body),
            headers: headers,
        });
    }

    static async put(url:string, body = {}, headers = {}): Promise<Response>{
        return fetch(url, {
            method: "PUT",
            body: JSON.stringify(headers),
            headers: headers,
        })
    }

    static async delete(url:string): Promise<Response>{
        return fetch(url, {
            method: "DELETE",
        })
    }
}