import "@k2oss/k2-broker-core";
import { executexhr, Readxhr } from "./common";
 
export var jobFunctions = {
        displayName: "Salesforce Job Functions",
        description: "Salesforce Job Functions",
        properties: {
          jobId:{
            displayName: "Job Id",
            type: "string",
          },
          resultCode:{
            displayName: "Result Code",
            type: "string",
          },
          message:{
            displayName: "Message",
            type: "extendedString",
          },
          csvFile:{
            displayName: "CSV File",
            type: "attachment",
          },
          csvFileContent:{
            displayName: "File Content",
            type: "extendedString",
          },
          oldHeader:{
            displayName: "Old Header",
            type: "extendedString",
          },
          newHeader:{
            displayName: "New Header",
            type: "extendedString",
          },
          sobrId:{
            displayName: "SOBRID",
            type: "string",
          },
          csvString:{
            displayName: "CSV string",
            type: "extendedString",
          },
        },
        methods: {
            createJob: {
                displayName: "Create a New Job",
                type: "execute",
                parameters:{
                    instanceUrl: {
                        displayName: "Instance URL",
                        type: "extendedString",
                      },
                      version:{
                        displayName: "Version",
                        type: "string",
                      },
                      token:{
                        displayName: "Token",
                        type: "string",
                      },
                      sfobject:{
                        displayName: "SF Object",
                        type: "string",
                      },
                      le:{
                        displayName: "Line Ending",
                        type: "string",
                      },
                    },
               // requiredParameters:["instanceUrl", "version", "token"],
                inputs: [],
                //requiredInputs: ["jobId"],
                outputs: ["jobId", "resultCode", "message"],
              },
         updateJobState: {
            displayName: "Update Job State",
            type: "execute",
            parameters:{
                instanceUrl: {
                    displayName: "Instance URL",
                    type: "extendedString",
                  },
                  version:{
                    displayName: "Version",
                    type: "string",
                  },
                  token:{
                    displayName: "Token",
                    type: "string",
                  },
                },
           // requiredParameters:["instanceUrl", "version", "token"],
            inputs: ["jobId"],
            //requiredInputs: ["jobId"],
            outputs: ["resultCode", "message"],
          },
          uploadJobData: {
            displayName: "Upload Job Data",
            type: "execute",
            parameters:{
                instanceUrl: {
                    displayName: "Instance URL",
                    type: "extendedString",
                  },
                  version:{
                    displayName: "Version",
                    type: "string",
                  },
                  token:{
                    displayName: "Token",
                    type: "string",
                  },
                },
           // requiredParameters:["instanceUrl", "version"],
            inputs: ["jobId", "csvFile"],
            //requiredInputs: ["jobId", "csvFile"],
            outputs: ["resultCode", "message"],
          },
          convertAndUploadJobData: {
            displayName: "Convert and Upload Job Data",
            type: "execute",
            parameters:{
                instanceUrl: {
                    displayName: "Instance URL",
                    type: "extendedString",
                  },
                  version:{
                    displayName: "Version",
                    type: "string",
                  },
                  token:{
                    displayName: "Token",
                    type: "string",
                  },
                },
           // requiredParameters:["instanceUrl", "version"],
            inputs: ["jobId", "oldHeader", "newHeader", "sobrId", "csvFileContent"],
            //requiredInputs: ["jobId", "csvFile"],
            outputs: ["resultCode", "message"],
          },
          createCSVAndUploadJobData: {
            displayName: "Create CSV and Upload Job Data",
            type: "execute",
            parameters:{
                instanceUrl: {
                    displayName: "Instance URL",
                    type: "extendedString",
                  },
                  version:{
                    displayName: "Version",
                    type: "string",
                  },
                  token:{
                    displayName: "Token",
                    type: "string",
                  },

                },
           // requiredParameters:["instanceUrl", "version"],
            inputs: ["jobId", "csvString"],
            //requiredInputs: ["jobId", "csvFile"],
            outputs: ["resultCode", "message"],
          },
        },
      } as ServiceObject; 
 

export async function onexecuteJobFunctions(
  methodName: string,
  properties: SingleRecord,
  parameters: SingleRecord,
  configuration: SingleRecord
) {
  switch (methodName) {
    case "updateJobState":
        await onexecuteUpdateJobState(parameters, properties, configuration);
        break;
    case "uploadJobData":
        await onexecuteUploadJobData(parameters, properties, configuration);
        break;
    case "convertAndUploadJobData":
            await onexecuteConvertAndUploadJobData(parameters, properties, configuration);
            break;
    case "createJob":
            await onexecuteCreateJob(parameters, properties, configuration);
            break;
    case "createCSVAndUploadJobData":
            await onexecutecreateCSVAndUploadJobData(parameters, properties, configuration);
            break;
            
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}
 
export function onexecuteUpdateJobState(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
  return new Promise<void>((resolve, reject) => {
    try {
        var data = JSON.stringify({
            "state": "UploadComplete"
          });
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
 
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) throw new Error("Failed with status ".concat(xhr.status.toString(), " ").concat(xhr.statusText, " and response ").concat(JSON.stringify(xhr.response), " "));
            postResult({
                resultCode: xhr.status,
                message: xhr.statusText
            });
        };
 
        xhr.open("PATCH", parameters["instanceUrl"] + "/services/data/" + parameters["version"] + "/jobs/ingest/" + properties["jobId"]);
        xhr.setRequestHeader("Authorization", "Bearer " + parameters["token"]);
        xhr.setRequestHeader("Content-Type", "application/json");
        
        return xhr.send(data);
    } catch (e) {
      reject(e);
    }
  });
}
 

export function onexecuteCreateJob(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    return new Promise<void>((resolve, reject) => {
      try {
        console.log(parameters["sfobject"]);
        var data = JSON.stringify({
            "object": parameters["sfobject"],
            "contentType": "CSV",
            "operation": "insert",
            "lineEnding": parameters["le"],
          });
 
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
  
          xhr.onreadystatechange = function () {
              if (xhr.readyState !== 4) return;
              if (xhr.status !== 200) throw new Error("Failed with status ".concat(xhr.status.toString(), " ").concat(xhr.statusText, " and response ").concat(JSON.stringify(xhr.response), " "));
              let respJSON = JSON.parse(xhr.responseText);
 

 
              postResult({
                  jobId:respJSON.id,
                  resultCode: xhr.status,
                  message: xhr.statusText
              });
          };
  
          xhr.open("POST", parameters["instanceUrl"] + "/services/data/" + parameters["version"] + "/jobs/ingest");
          xhr.setRequestHeader("Authorization", "Bearer " + parameters["token"]);
          xhr.setRequestHeader("Content-Type", "application/json");
          
          return xhr.send(data);
      } catch (e) {
        reject(e);
      }
    });
  }
 
  export function onexecuteUploadJobData(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    return new Promise<void>((resolve, reject) => {
      try {
        var xhr = new XMLHttpRequest();
        // var csvFile = properties["csvFile"];
        // var form = new FormData();
        // form.append('file', csvFile.content);
 
        xhr.withCredentials = true;
 
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 201) throw new Error("Failed with status ".concat(xhr.status.toString(), " ").concat(xhr.statusText, " and response ").concat(JSON.stringify(xhr.response), " "));
            postResult({
                resultCode: xhr.status,
                message: xhr.statusText
                /*"modifiedDate": new Date(data.modified_at),
                "File": {
                    filename: data.name,
                    content: xhr.response
                }*/
            });
        };
 
        xhr.open("PUT", parameters["instanceUrl"] + "/services/data/" + parameters["version"] + "/jobs/ingest/" + properties["jobId"] + "/batches");
        xhr.setRequestHeader("Authorization", "Bearer " + parameters["token"]);
        xhr.setRequestHeader("Content-Type", "text/csv");
        
        return xhr.send(properties["csvFile"]);
  
      } catch (e) {
        reject(e);
      }
    });
}

export function onexecutecreateCSVAndUploadJobData(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
  return new Promise<void>((resolve, reject) => {
    try {
      var xhr = new XMLHttpRequest();
      var csv = properties["csvString"].toString();
 //     workingCsvStr = workingCsvStr.replace(new RegExp('\n', 'g'), '\n' + sobrId+ ',');
 //csv = csv.replace(new RegExp(/\$LB\//gm), '\r\n');
 csv = csv.replace(new RegExp(/\$LB\//gm), '\n');
      xhr.withCredentials = true;
      xhr.onreadystatechange = function () {
          if (xhr.readyState !== 4) return;
          if (xhr.status !== 201) throw new Error("Failed with status ".concat(xhr.status.toString(), " ").concat(xhr.statusText, " and response ").concat(JSON.stringify(xhr.response), " "));
          postResult({
              resultCode: xhr.status,
              message: xhr.statusText
              /*"modifiedDate": new Date(data.modified_at),
              "File": {
                  filename: data.name,
                  content: xhr.response
              }*/
          });
      };

      xhr.open("PUT", parameters["instanceUrl"] + "/services/data/" + parameters["version"] + "/jobs/ingest/" + properties["jobId"] + "/batches");
      xhr.setRequestHeader("Authorization", "Bearer " + parameters["token"]);
      xhr.setRequestHeader("Content-Type", "text/csv");
      console.log("Posted CSV: " + csv);
      return xhr.send(csv);

    } catch (e) {
      reject(e);
    }
  });
}



 
function getBase64FromContent(content: string)
{
    var base64 = "";
    var split1 = content.split("<content>")[1];
 
    base64 = split1.split("</content>")[0];
 
    return base64;
}
 
export function onexecuteConvertAndUploadJobData(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
    return new Promise<void>((resolve, reject) => {
      try {
        const csvStr = Base64.decode(getBase64FromContent(properties["csvFileContent"].toString()));
  //      console.log("CSV Length:" + csvStr.length.toString());
  //      console.log("CSV:" + csvStr);
 
        var oldHdr = properties["oldHeader"].toString();
        var newHdr = properties["newHeader"].toString();
        var sobrId = properties["sobrId"].toString();
  
        var workingCsvStr = csvStr.replace(oldHdr, "");
        //workingCsvStr = workingCsvStr.replace('\n', '\n' + sobrId+ ',');
        workingCsvStr = workingCsvStr.replace(new RegExp('\n', 'g'), '\n' + sobrId+ ',');
        
 //       console.log("CSV Pre Header:" + workingCsvStr);
 
        workingCsvStr = newHdr + workingCsvStr;
 
  //      console.log("CSV fixed:" + workingCsvStr);
 
        var xhr = new XMLHttpRequest();
 
        xhr.withCredentials = true;
 
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 201) throw new Error("Failed with status ".concat(xhr.status.toString(), " ").concat(xhr.statusText, " and response ").concat(JSON.stringify(xhr.response), " "));
            postResult({
                resultCode: xhr.status,
                message: xhr.statusText
            });
        };
 
//        console.log("URL:" + parameters["instanceUrl"] + "/services/data/" + parameters["version"] + "/jobs/ingest/" + properties["jobId"] + "/batches");
        
        xhr.open("PUT", parameters["instanceUrl"] + "/services/data/" + parameters["version"] + "/jobs/ingest/" + properties["jobId"] + "/batches");
        xhr.setRequestHeader("Authorization", "Bearer " + parameters["token"]);
        xhr.setRequestHeader("Content-Type", "text/csv");
        
        return xhr.send(workingCsvStr);
  
      } catch (e) {
        reject(e);
      }
    });
}
 
var Base64 = {
 
    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = Base64._utf8_encode(input);
    
        while (i < input.length) {
    
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
    
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
    
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
    
            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    
        }
    
        return output;
    },
    
    // public method for decoding
    decode : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
        while (i < input.length) {
    
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
    
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
    
            output = output + String.fromCharCode(chr1);
    
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
    
        }
    
        output = Base64._utf8_decode(output);
    
        return output;
    
    },
    
    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
    
        for (var n = 0; n < string.length; n++) {
    
            var c = string.charCodeAt(n);
    
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
    
        }
    
        return utftext;
    },
    
    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = 0, c1 = 0, c2 = 0, c3 = 0;
    
        while ( i < utftext.length ) {
    
            c = utftext.charCodeAt(i);
    
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
    
        }
    
        return string;
    }
    
    }
 
