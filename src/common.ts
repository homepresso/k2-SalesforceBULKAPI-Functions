import "@k2oss/k2-broker-core";


// Execute and XHR method where no Body is needed
export function executexhr(methotType: string, url: string, callback: (n: string) => any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status + " statustext: " + xhr.statusText);
                
                console.log("executexhr xhr responseText: " + xhr.responseText);
                callback(xhr.responseText);
                resolve();
            } catch (e) {
                console.log("executexhr error: " + e + ' xhr.responseText: ' + xhr.responseText);
                reject(e);
            }
        };
        xhr.onerror = function () {
            Error("Failed with status " + xhr.status);
            console.log("executexhr onerror: Failed with status " + xhr.status);
            reject(new Error("Failed with status " + xhr.status));
        }

        console.log("executexhr " + methotType + " url: " + url);
        xhr.open(methotType, url);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Accept', '*/*');
        xhr.setRequestHeader('Accept-Encoding', 'gzip, deflate, br');
 
        xhr.send();
    });
}

//  Execute and XHR Method where a body is needed
export function Readxhr(methotType: string, url: string, data:any, callback: (n: string) => any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status + " statustext: " + xhr.statusText);
                
                console.log("executexhr xhr responseText: " + xhr.responseText);
                callback(xhr.responseText);
                resolve();
            } catch (e) {
                console.log("executexhr error: " + e + ' xhr.responseText: ' + xhr.responseText);
                reject(e);
            }
        };
        xhr.onerror = function () {
            Error("Failed with status " + xhr.status);
            console.log("executexhr onerror: Failed with status " + xhr.status);
            reject(new Error("Failed with status " + xhr.status));
        }

        console.log("executexhr " + methotType + " url: " + url);
        xhr.open(methotType, url);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Accept', '*/*');
        xhr.setRequestHeader('Accept-Encoding', 'gzip, deflate, br');
        xhr.setRequestHeader("Content-Type", "application/json");
        if(data !== null && data !== undefined)
        {
            console.log("Request Data "+data);
            xhr.send(data);

        }
        else
        {
            xhr.send();
        }
       
    });
}