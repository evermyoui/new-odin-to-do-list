export default class Storage{
    save(key, value){
        JSON.stringify(localStorage.setItem(key, value));
    }
    load(key){
        return localStorage.getItem(JSON.parse(key));
    }
}