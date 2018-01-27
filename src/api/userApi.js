import 'whatwg-fetch';
import getBaseUrl from './baseUrl'
/*eslint-disable no-console*/
const baseUrl = getBaseUrl();
export function getUsers(){
    return get('users');
}
export function deleteUser(id){
    del(`users/${id}`);
}
function get(url){
    return fetch(baseUrl+url).then(onSuccess,onError);
}
function del(url){
    const request=new Request(baseUrl+url,{
        method: "DELETE"
    })
    return fetch(request).then(onSuccess,onerror);
}
function onSuccess(response){
    return response.json();
}
function onError(error){
    console.log(error);
}