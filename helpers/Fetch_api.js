export default async function (url, body, method, isBlob = null){
    let options = {
        method: method,
        headers: {}
    }
    if(!isBlob){
        options.headers['Content-Type'] = 'application/json'
    }
    if(body){
        options.body = JSON.stringify(body)
    }
    if (localStorage.getItem('token')){
        options.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    let response = await fetch(`http://api/api/${url}`, options)
    if(isBlob){
        try {
            let blob = await response.blob()
            let href = window.URL.createObjectURL(blob);
            const anchorElement = document.createElement('a');
            anchorElement.href = href;
            anchorElement.download = 'file';
            document.body.appendChild(anchorElement);
            anchorElement.click();
            document.body.removeChild(anchorElement);
            window.URL.revokeObjectURL(href);
        }catch{
            return null
        }
    }
    else {
        try {
            return await response.json()
        }catch{
            return null
        }
    }

}