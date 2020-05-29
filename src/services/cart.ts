import axios from "axios";

const query: string = "http://localhost:3003"

export function postCart(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/cart`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getCartByUser(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/carts/user/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteCart(id:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/cart/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}