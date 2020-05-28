import axios from "axios";

const query: string = "http://localhost:3003"

export function getProducts(){       
    return axios.get(`${query}/products`);    
};

export function postProduct(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/product`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putProduct(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/product/${id}`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteProduct(id:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.delete(`${query}/product/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getproduct(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/product/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getProductByCategory(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/products/category/${id}`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}

