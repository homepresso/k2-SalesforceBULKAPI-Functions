import "@k2oss/k2-broker-core";
import {Base64} from "./base64";
const ID = "id";
const Name = "Name";
const Value = "Value";
const SFName = "SFName";
const SFValue = "SFValue";
const SFParentID = "SFParentID";
const SFCombinedString = "SFCombinedString";
const Column1 = "column1";
const Column2 = "column2";
const Column3 = "column3";
const Column4 = "column4";
const Column5 = "column5";
const Column6 = "column6";
const Column7 = "column7";
const Column8 = "column8";
const Column9 = "column9";
const Column10 = "column10";
const Column11 = "column11";
const Column12 = "column12";
const Column13 = "column13";
const Column14 = "column14";
const Column15 = "column15";
const Column16 = "column16";
const Column17 = "column17";
const Column18 = "column18";
const Column19 = "column19";
const Column20 = "column20";
const Column21 = "column21";
const Column22 = "column22";
const Column23 = "column23";
const Column24 = "column24";
const Column25 = "column25";
const Column26 = "column26";
const Column27 = "column27";
const Column28 = "column28";
const Column29 = "column29";
const Column30 = "column30";
const Column31 = "column31";
const Column32 = "column32";
const Column33 = "column33";
const Column34 = "column34";
const Column35 = "column35";
const Column36 = "column36";
const Column37 = "column37";
const Column38 = "column38";
const Column39 = "column39";
const Column40 = "column40";
const Column41 = "column41";
const Column42 = "column42";
const Column43 = "column43";
const Column44 = "column44";
const Column45 = "column45";
const Column46 = "column46";
const Column47 = "column47";
const Column48 = "column48";
const Column49 = "column49";
const Column50 = "column50";
const Column51 = "column51";
const Column52 = "column52";
const Column53 = "column53";
const Column54 = "column54";
const Column55 = "column55";
const Column56 = "column56";
const Column57 = "column57";
const Column58 = "column58";
const Column59 = "column59";
const Column60 = "column60";
const Column61 = "column61";
const ColumnCount = 61; 

const ColumnName = "ColumnName";




export var csvFunctions = {
        displayName: "Read CSV as JSON",
        description: "CSV to JSON Object",

        properties: {
          csv: {
            displayName: "CSV File",
            type: "extendedString",
          },
          [ID]: {
            displayName: "ID",
            description: "ID",
            type: "number"
        },
        [Name]: {
          displayName: "Name",
          description: "Name",
          type: "extendedString"
      },
      [Value]: {
        displayName: "Value",
        description: "Value",
        type: "extendedString"
    },
        [SFName]: {
          displayName: "SFName",
          description: "Name",
          type: "extendedString"
      },
      [SFValue]: {
        displayName: "SFValue",
        description: "Value",
        type: "extendedString"
    },
    [SFParentID]: {
      displayName: "SFParentID",
      description: "ParentID",
      type: "extendedString"
  },
    [SFCombinedString]: {
      displayName: "SFCombinedString",
      description: "CombinedString",
      type: "extendedString"
  },
          [Column1]: {
            displayName: "Column 1",
            description: "Column 1",
            type: "string"
        },
        [Column2]: {
            displayName: "Column 2",
            description: "Column 2",
            type: "string"
        },
        [Column3]: {
            displayName: "Column 3",
            description: "Column 3",
            type: "string"
        },
        [Column4]: {
            displayName: "Column 4",
            description: "Column 4",
            type: "string"
        },
        [Column5]: {
            displayName: "Column 5",
            description: "Column 5",
            type: "string"
        },
        [Column6]: {
            displayName: "Column 6",
            description: "Column 6",
            type: "string"
        },
        [Column7]: {
            displayName: "Column 7",
            description: "Column 7",
            type: "string"
        },
        [Column8]: {
            displayName: "Column 8",
            description: "Column 8",
            type: "string"
        },
        [Column9]: {
            displayName: "Column 9",
            description: "Column 9",
            type: "string"
        },
        [Column10]: {
            displayName: "Column 10",
            description: "Column 10",
            type: "string"
        },
        [Column11]: {
            displayName: "Column 11",
            description: "Column 11",
            type: "string"
        },
        [Column12]: {
            displayName: "Column 12",
            description: "Column 12",
            type: "string"
        },
        [Column13]: {
            displayName: "Column 13",
            description: "Column 13",
            type: "string"
        },
        [Column14]: {
            displayName: "Column 14",
            description: "Column 14",
            type: "string"
        },
        [Column15]: {
            displayName: "Column 15",
            description: "Column 15",
            type: "string"
        },
        [Column16]: {
            displayName: "Column 16",
            description: "Column 16",
            type: "string"
        },
        [Column17]: {
            displayName: "Column 17",
            description: "Column 17",
            type: "string"
        },
        [Column18]: {
            displayName: "Column 18",
            description: "Column 18",
            type: "string"
        },
        [Column19]: {
            displayName: "Column 19",
            description: "Column 19",
            type: "string"
        },
        [Column20]: {
            displayName: "Column 20",
            description: "Column 20",
            type: "string"
        },
        [Column21]: {
          displayName: "Column 21",
          description: "Column 21",
          type: "string"
      },
      [Column22]: {
        displayName: "Column 22",
        description: "Column 22",
        type: "string"
    },
    [Column23]: {
      displayName: "Column 23",
      description: "Column 23",
      type: "string"
  },
  [Column24]: {
    displayName: "Column 24",
    description: "Column 24",
    type: "string"
},
[Column25]: {
  displayName: "Column 25",
  description: "Column 25",
  type: "string"
},
[Column26]: {
  displayName: "Column 26",
  description: "Column 26",
  type: "string"
},
[Column27]: {
  displayName: "Column 27",
  description: "Column 27",
  type: "string"
},
[Column28]: {
  displayName: "Column 28",
  description: "Column 28",
  type: "string"
},
[Column29]: {
  displayName: "Column 29",
  description: "Column 29",
  type: "string"
},
[Column30]: {
  displayName: "Column 30",
  description: "Column 30",
  type: "string"
},
[Column31]: {
  displayName: "Column 31",
  description: "Column 31",
  type: "string"
},
[Column32]: {
  displayName: "Column 32",
  description: "Column 32",
  type: "string"
},
[Column33]: {
  displayName: "Column 33",
  description: "Column 33",
  type: "string"
},
[Column34]: {
  displayName: "Column 34",
  description: "Column 34",
  type: "string"
},
[Column35]: {
  displayName: "Column 35",
  description: "Column 35",
  type: "string"
},
[Column36]: {
  displayName: "Column 36",
  description: "Column 36",
  type: "string"
},
[Column37]: {
  displayName: "Column 37",
  description: "Column 37",
  type: "string"
},
[Column38]: {
  displayName: "Column 38",
  description: "Column 38",
  type: "string"
},
[Column39]: {
  displayName: "Column 39",
  description: "Column 39",
  type: "string"
},
[Column40]: {
  displayName: "Column 40",
  description: "Column 40",
  type: "string"
},
[Column41]: {
  displayName: "Column 41",
  description: "Column 41",
  type: "string"
},
[Column42]: {
  displayName: "Column 42",
  description: "Column 42",
  type: "string"
},
[Column43]: {
  displayName: "Column 43",
  description: "Column 43",
  type: "string"
},
[Column44]: {
  displayName: "Column 44",
  description: "Column 44",
  type: "string"
},
[Column45]: {
  displayName: "Column 45",
  description: "Column 45",
  type: "string"
},
[Column46]: {
  displayName: "Column 46",
  description: "Column 46",
  type: "string"
},
[Column47]: {
  displayName: "Column 47",
  description: "Column 47",
  type: "string"
},
[Column48]: {
  displayName: "Column 48",
  description: "Column 48",
  type: "string"
},
[Column49]: {
  displayName: "Column 49",
  description: "Column 49",
  type: "string"
},
[Column50]: {
  displayName: "Column 50",
  description: "Column 50",
  type: "string"
},
[Column51]: {
  displayName: "Column 51",
  description: "Column 51",
  type: "string"
},
[Column52]: {
  displayName: "Column 52",
  description: "Column 52",
  type: "string"
},
[Column53]: {
  displayName: "Column 53",
  description: "Column 53",
  type: "string"
},
[Column54]: {
  displayName: "Column 54",
  description: "Column 54",
  type: "string"
},
[Column55]: {
  displayName: "Column 55",
  description: "Column 55",
  type: "string"
},
[Column56]: {
  displayName: "Column 56",
  description: "Column 56",
  type: "string"
},
[Column57]: {
  displayName: "Column 57",
  description: "Column 57",
  type: "string"
},
[Column58]: {
  displayName: "Column 58",
  description: "Column 58",
  type: "string"
},
[Column59]: {
  displayName: "Column 59",
  description: "Column 59",
  type: "string"
},
[Column60]: {
  displayName: "Column 60",
  description: "Column 60",
  type: "string"
},
[Column61]: {
  displayName: "Column 61",
  description: "Column 61",
  type: "string"
},
        [ColumnName]: {
            displayName: "Column Index",
            description: "Column Index",
            type: "string"
        },
          output: {
            displayName: "Output",
            type: "extendedString",
          }
        },
        methods: {
          readCSV: {
            displayName: "Read CSV",
            type: "list",
            inputs: ["csv"],
            outputs: [ID, Column1, Column2, Column3, Column4, Column5, Column6, Column7, Column8, Column9, Column10, Column11, Column12, Column13, Column14, Column15, Column16, Column17, Column18, Column19, Column20, Column21, Column22, Column23, Column24, Column25, Column26, Column27, Column28, Column29, Column30, Column31, Column32, Column33, Column34, Column35, Column36, Column37, Column38, Column39, Column40, Column41, Column42, Column43, Column44, Column45, Column46, Column47, Column48, Column49, Column50, Column51, Column52, Column53, Column54, Column55, Column56, Column57, Column58, Column59, Column60, Column61]
          },
          readCsvRow: {
            displayName: "Get a Row from CSV File",
            type: "read",
            inputs: ["csv", "id"],
            outputs: ["id", "column1","column2","column3","column4","column5","column6","column7","column8","column9","column10","column11","column12","column13","column14","column15","column16","column17","column18","column19","column20","column21","column22","column23","column24","column25","column26","column27","column28","column29","column30","column31","column32","column33","column34","column35","column36","column37","column38","column39","column40","column41","column42","column43","column44","column45","column46","column47","column48","column49","column50","column51","column52", "column53", "column54", "column55", "column56", "column57", "column58", "column59", "column60", "column61"],
          },
          listHeaders: {
            displayName: "List Headers from CSV",
            type: "list",
            inputs: ["csv", "id"],
            outputs: [ID, Name, Value]
          },
          readRowHeaders: {
            displayName: "Read Header row from CSV",
            type: "read",
            inputs: ["csv", "id"],
            outputs: [ID, Name, Value]
          },
          combineString: {
            displayName: "Combine Strings for BULK API Upload",
            type: "read",
            inputs: [ "SFParentID", "SFValue", "SFName"],
            outputs: [SFCombinedString]
          },
        },
      } as ServiceObject; 


export async function onexecuteCSVFunctions(
  methodName: string,
  properties: SingleRecord,
  parameters: SingleRecord,
  configuration: SingleRecord
) {
  switch (methodName) {
    case "readCSV":
      await onexecuteReadCsv(properties, configuration);
      break;
      case "readCsvRow":
        await onexecuteReadCSVRow(parameters, properties, configuration);
        break;
        case "listHeaders":
        await onexecutelistHeaders(parameters, properties, configuration);
        break;
        case "combineString":
        await onexecutecombineString(parameters, properties, configuration);
        break;
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

function getBase64FromContent(content: string)
{
    var base64 = "";
    var split1 = content.split("<content>")[1];

    base64 = split1.split("</content>")[0];

    return base64;
}

export function onexecutecombineString(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
  return new Promise<void>((resolve, reject) => {

console.log("executed")
var combined = "";

var pnames = properties[SFName].toString();
var pvalue = properties[SFValue].toString();
//var psfparentID = properties["SFParentID"].toString();

    var names = pnames.split(",");
    var values = pvalue.split(",");


    for (var i=0; i<names.length; i++) {

      combined += properties["SFParentID"] + "," + names[i] + "," + values[i] + "\n";

      
      }






postResult({SFCombinedString: combined});
    resolve();
    } 


)};




export function onexecuteReadCsv(properties: SingleRecord, configuration: SingleRecord) {
  return new Promise<void>((resolve, reject) => {
    try {

      const csv = Base64.decode(getBase64FromContent(properties["csv"].toString()));


      var lines=csv.split('\n');
      var reg = new RegExp('"', 'g');

          var counter = 0;
          var obj = lines.map(x => {
            let obj = {};
            counter = counter + 1;
            
            var cells = x.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            obj["id"] = counter;

            for (var i = 0; i < cells.length; i++) {

        //      console.log(i);
                if ((i + 1) < ColumnCount) {

                    obj["column" + (i + 1)] = cells[i].replace(reg, '');
           
                }
            }
          
     //       console.log(obj);
            return obj;
        }); 

        postResult(obj);


      resolve();
    } catch (e) {
      reject(e);
    }
    
    });
}

export function onexecutelistHeaders(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
  return new Promise<void>((resolve, reject) => {
    try {
      const csvStr = Base64.decode(getBase64FromContent(properties["csv"].toString()));
      var reg = new RegExp('"', 'g');
      var lines = [];
      var indexToFind: number = + properties["id"];
  //    console.log(indexToFind);


      var counter = 0;
      lines = csvStr.split(/\r?\n/);
       var headerRow = lines[0];
       var workingRow = lines[indexToFind - 1];

       let resobj = {};
        

        var workingCells = workingRow.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        var headerCells = headerRow.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        
        resobj = headerCells.map(x => {let objArr = {}; objArr[Name] = x; return objArr;});

        for (var i = 0; i < workingCells.length; i++) {
                      if ((i + 1) < ColumnCount) {
                        resobj[i][ID] = i + 1;
                        resobj[i][Value] = workingCells[i].replace(reg, '');
        //                console.log(resobj[i][Name]);
         //               console.log(resobj[i][Value]);
                      }
                  }
//console.log(resobj);
    postResult(resobj);

      resolve();
  } catch (e) {
    reject(e);
  }
    
    });
}

export function onexecutereadRowHeaders(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
  return new Promise<void>((resolve, reject) => {
    try {
      const csvStr = Base64.decode(getBase64FromContent(properties["csv"].toString()));
      var reg = new RegExp('"', 'g');
      var lines = [];
      var indexToFind: number = + properties[ID];
    //  console.log(indexToFind);


      lines = csvStr.split(/\r?\n/);
       var headerRow = lines[0];
       var workingRow = lines[indexToFind - 1];

       let objArr = {};
        
        var workingCells = workingRow.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        var headerCells = headerRow.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        objArr[ID] = indexToFind;
        


        for (var i = 0; i < workingCells.length; i++) {
                      if ((i + 1) < ColumnCount) {

                         objArr[i][ID] = i + 1;
                         objArr[i][Value] = workingCells[i].replace(reg, '');
                     //    console.log(objArr[i][Name]);
                      //   console.log(objArr[i][Value]);
                      }
                  }
//console.log(objArr);
    postResult(objArr);

      resolve();
  } catch (e) {
    reject(e);
  }
    
    });
}




export function onexecuteReadCSVRow(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord) {
  return new Promise<void>((resolve, reject) => {
    try {
        const csvStr = Base64.decode(getBase64FromContent(properties["csv"].toString()));
        var reg = new RegExp('"', 'g');
        var lines = [];
        var indexToFind: number = + properties["id"];

        lines = csvStr.split(/\r?\n/);
        
         var workingRow = lines[indexToFind - 1];

          let objArr = {};
          var cells = workingRow.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          objArr["id"] = indexToFind;
          for (var i = 0; i < cells.length; i++) {
              if ((i + 1) < ColumnCount) {
                objArr["column" + (i + 1)] = cells[i].replace(reg, '');
              }
          }

      postResult(objArr);

        resolve();
    } catch (e) {
      reject(e);
    }
  });
}
