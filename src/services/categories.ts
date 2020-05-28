import axios from "axios";

const query: string = "http://localhost:3003"


export function getCategories(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/categories`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}

export function getCategoriesWProducts(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/categories/products`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}

export function getCategory(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/category/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}

export function deleteCategory(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.delete(`${query}/category/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve({successed:false}));
    });
}
