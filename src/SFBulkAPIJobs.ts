import "@k2oss/k2-broker-core";
import {jobFunctions, onexecuteJobFunctions} from "./sfJob"

metadata = {
  systemName: "SFBulkAPIjobs",
  displayName: "Salesforce Bulk API Functions",
  description: "A Utility broker to upload content to the Salesforce BULK API",
  configuration : {
    "ServiceURL" : {
      "displayName": "Service URL",
      "type": "string",
      "value": "https://www.cloudfunctions.net"
    }
  }
};

ondescribe = async function ({ configuration }): Promise<void> {
  postSchema({
    objects: {
      jobFunctions
    }
  });
};

onexecute = async function ({objectName, methodName, parameters, properties, configuration}): Promise<void> {
  switch(objectName){

    case "jobFunctions" : await onexecuteJobFunctions(methodName, properties, parameters, configuration); break;
    default: throw new Error("The object " + objectName + " is not supported.");
  }
}
