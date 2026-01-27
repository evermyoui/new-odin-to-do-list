const storageAvail = (type) => {
    try {
        const storage = window[type];
        const x = '--storage-test--';
        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    }catch(e){
        return false;
    }
}