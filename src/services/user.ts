import axios from "axios";

const query: string = "http://localhost:3003"

export function postUser(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/user`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getUser(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/user/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}