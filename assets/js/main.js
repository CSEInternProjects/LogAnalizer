/* #################### main-logic file #####################



*/
authSer = "";
mBas = "";
accSer = "";
midSer = "";
otherFile = "";
modeType = "[ERROR]";
modeTypeAcc = "no " + modeType;
fileInfoToDiv = [];
fileInfoToDiv[0] = [];
fileInfoToDiv[1] = [];
fileInfoToDiv[2] = [];
fileInfoToDiv[3] = [];
// auth services

var openFile1 = function(event) { // mbass file on change
 var input = event.target;
 var reader = new FileReader();
 reader.onload = function() {


  var fileEval = 0;
  var fileCheck = reader.result.lastIndexOf("[console.portal]");
  if (fileCheck !== -1) {
   fileEval = 1;
   var pos = reader.result.lastIndexOf(modeType);
   var child = document.getElementById("modal-content");
   var child1 = document.getElementById("MBASS1");
   document.getElementById('MBASS1').innerHTML = '';
   if (pos !== -1) {
    var text = reader.result.slice(pos, reader.result.indexOf("[console.portal]", pos));
    console.log(text.length);
    //mBas=reader.result.slice((reader.result.length/2),reader.result.length);
    mBas = reader.result;
    var node = document.createTextNode(modeType);
    var para = document.createElement("h4");
    para.appendChild(node);
    child1.appendChild(para);
   } else {
    var para = document.createElement("h4");
    text = modeType + " not found"; // when error not found
    var node = document.createTextNode(modeTypeAcc);
    para.appendChild(node);

    child1.appendChild(para);
   }
   text = "In Mbass file " + text;
   fileInfoToDiv[0][0] = text;


  }

  fileCheck = reader.result.lastIndexOf("[console.accounts]");
  console.log(fileCheck);

  if (fileCheck !== -1) //acc service
  {
   document.getElementById('ACC1').innerHTML = '';
   document.getElementById('ACC2').innerHTML = '';
   fileEval = 1;
   var accMbass = "";
   var pos = reader.result.lastIndexOf(modeType);
   //var end=-1;
   //document.getElementById("ACC").innerHTML="";
   var child = document.getElementById("ACC");
   var child1 = document.getElementById("ACC1");
   var child2 = document.getElementById("ACC2");
   if (pos !== -1) {
    var text = reader.result.slice(pos, reader.result.indexOf("[console.accounts]", pos));
    console.log(text.length);
    accSer = reader.result;
    accMbass = mBassInfo(text);
    fileInfoToDiv[1][0] = accMbass;
    var para = document.createElement("h4");
    var node = document.createTextNode(modeType);
    para.appendChild(node);
    child1.appendChild(para);
    para = "";
    node = "";
    var para = document.createElement("h4");
    var node = document.createTextNode(modeType);
    para.appendChild(node);
    child2.appendChild(para);
   } else {
    text = modeType + " not found";
    var para = document.createElement("h4");
    var node = document.createTextNode(modeTypeAcc);
    para.appendChild(node);
    child1.appendChild(para);
    para = "";
    node = "";
    var para = document.createElement("h4");
    var node = document.createTextNode(modeTypeAcc);
    para.appendChild(node);
    child2.appendChild(para);
   }
   text = "AccountSercives file has " + text;
   //document.getElementById("outputAcc").innerHTML = text;
   fileInfoToDiv[1][1] = text;
   var para = document.createElement("h4");
   var node = document.createTextNode(text);
   para.appendChild(node);
   child.appendChilde(para);
   //document.getElementById("two").innerHTML="AccountServices File analysis";
  }

  fileCheck = reader.result.lastIndexOf("[auth.service]"); // auth service
  if (fileCheck !== -1) {
   document.getElementById('AUTH1').innerHTML = '';
   document.getElementById('AUTH2').innerHTML = '';
   document.getElementById('AUTH3').innerHTML = '';
   var child1 = document.getElementById('AUTH1');
   var child2 = document.getElementById('AUTH2');
   var child3 = document.getElementById('AUTH3');
   var para1 = document.createElement("h4");
   var para2 = document.createElement("h4");
   var para3 = document.createElement("h4");
   fileEval = 1;
   var child = document.getElementById("AUTH");
   var pos = reader.result.lastIndexOf(modeType);
   if (pos == -1) {
    var node1 = document.createTextNode(modeTypeAcc);
    var node2 = document.createTextNode(modeTypeAcc);
    var node3 = document.createTextNode(modeTypeAcc);
   } else {
    var node1 = document.createTextNode(modeType);
    var node2 = document.createTextNode(modeType);
    var node3 = document.createTextNode(modeType);
   }
   para1.appendChild(node1);
   para2.appendChild(node2);
   para3.appendChild(node3);
   child1.appendChild(para1);
   child2.appendChild(para2);
   child3.appendChild(para3);
   var end = -1;
   var autsTOAcc = "";
   //var list=document.getElementById("AUTH");
   //authSer=reader.result.slice((reader.result.length/2),reader.result.length);
   authSer = reader.result;
   var text = reader.result.slice(pos, reader.result.indexOf("[auth.service]", pos));
   //document.getElementById("three").innerHTML="AuthServices File analysis";
   console.log(text.length);
   var mBassid;
   var autsTOMbass = "";
   if (text === "")
    text = modeType + " not found";
   else {
    autsTOMbass = mBassInfo(text);
    autsTOAcc = accInfo(text);
   }
   //document.getElementById("output2").innerHTML =autsTOMbass;
   fileInfoToDiv[2][0] = autsTOMbass;
   var para = document.createElement("h4");
   var node = document.createTextNode(autsTOMbass);
   para.appendChild(node);
   child.appendChild(para);
   //document.getElementById("autToAcc").innerHTML=autsTOAcc;
   fileInfoToDiv[2][1] = autsTOAcc;
   var para = document.createElement("h4");
   var node = document.createTextNode(autsTOAcc);
   para.appendChild(node);
   child.appendChild(para);
   text = "In authService file " + text;
   fileInfoToDiv[2][2] = text;
   var para = document.createElement("h4");
   //document.getElementById("output").innerHTML = text;
   var node = document.createTextNode(text);
   para.appendChild(node);
   child.appendChild(para);
  }
  fileCheck = reader.result.lastIndexOf("[app.services]"); // middle were
  if (fileCheck !== -1) {
   document.getElementById('MID1').innerHTML = '';
   document.getElementById('MID2').innerHTML = '';
   document.getElementById('MID3').innerHTML = '';
   document.getElementById('MID4').innerHTML = '';
   var child1 = document.getElementById('MID1');
   var child2 = document.getElementById('MID2');
   var child3 = document.getElementById('MID3');
   var child4 = document.getElementById('MID4');
   var para1 = document.createElement("h4");
   var para2 = document.createElement("h4");
   var para3 = document.createElement("h4");
   var para4 = document.createElement("h4");
   fileEval = 1;
   var child = document.getElementById("MID");
   var midMbass = "";
   var midAcc = "";
   var midAuth = "";
   var pos = reader.result.lastIndexOf(modeType);


   //var end=-1;
   //document.getElementById("mid").innerHTML="Middleware File analysis";
   if (pos !== -1) {
    var text = reader.result.slice(pos, reader.result.indexOf("[app.services]", pos));
    var node1 = document.createTextNode(modeType);
    var node2 = document.createTextNode(modeType);
    var node3 = document.createTextNode(modeType);
    var node4 = document.createTextNode(modeType);
    //end=text.indexOf("[console.portal]");
    //text=text.slice(0,end);
    console.log(text.length);
    //accSer=reader.result.slice((reader.result.length/2),reader.result.length);
    //midSer=reader.result.slice((reader.result.length/2),reader.result.length);
    midSer = reader.result;
    midMbass = mBassInfo(text);
    midAcc = accInfo(text);
    midAuth = authInfo(text);

   } else {
    text = "No errors";
    var node1 = document.createTextNode(modeTypeAcc);
    var node2 = document.createTextNode(modeTypeAcc);
    var node3 = document.createTextNode(modeTypeAcc);
    var node4 = document.createTextNode(modeTypeAcc);
   }
   para1.appendChild(node1);
   para2.appendChild(node2);
   para3.appendChild(node3);
   para4.appendChild(node4);
   child1.appendChild(para1);
   child2.appendChild(para2);
   child3.appendChild(para3);
   child4.appendChild(para4);
   text = "Middleware file has " + text;
   document.getElementById("MID").innerHTML = "";
   //document.getElementById("mid").innerHTML="Middleware File analysis";
   fileInfoToDiv[3][3] = text;
   var para = document.createElement("h4");
   var node = document.createTextNode(text);
   para.appendChild(node);
   var child = document.getElementById("MID");
   child.appendChild(para);
   fileInfoToDiv[3][0] = midMbass;
   var para = document.createElement("h4");
   var node = document.createTextNode(midMbass);
   para.appendChild(node);
   child.appendChild(para);
   fileInfoToDiv[3][1] = midAcc;
   var para = document.createElement("h4");
   var node = document.createTextNode(midAcc);
   para.appendChild(node);
   child.appendChild(para);
   fileInfoToDiv[3][2] = midAuth;
   var para = document.createElement("h4");
   var node = document.createTextNode(midAuth);
   para.appendChild(node);
   child.appendChild(para);
  }
  if (fileEval == 0) {
   alert("pls choose appropriate file");
  }
 };
 reader.readAsText(input.files[0]);

};



function accInfo(text) // id search in accservices
{
 if (searchCount != 1) {
  var s;
  var id = "";
  mBassid = text.indexOf("[", 15);
  s = text.indexOf("]", 40);
  //document.write("<br>");
  for (var i = mBassid; i <= s; i++) {
   id += text[i];
  }
  console.log(id);
 } else
  id = text;
 var autsTOaccIndex = accSer.lastIndexOf(id);
 if (autsTOaccIndex !== -1) {
  console.log(autsTOaccIndex);
  var autsTOacc = accSer.slice(autsTOaccIndex, accSer.indexOf("[console.accounts]", autsTOaccIndex));
 } else
  autsTOacc = "INFO not found with this id " + id;
 autsTOacc = "Id search in accountServices " + autsTOacc;
 return (autsTOacc);
 //document.getElementById("output2").innerHTML =autsTOMbass;

}

function mBassInfo(text) // id search in mbass
{
 if (searchCount != 1) {
  var s;
  var id = "";
  mBassid = text.indexOf("[", 15);
  s = text.indexOf("]", 40);
  //document.write("<br>");
  for (var i = mBassid; i <= s; i++) {
   id += text[i];
  }
  console.log(id);
 } else
  id = text;
 var autsTOMbassIndex = mBas.lastIndexOf(id);
 if (autsTOMbassIndex !== -1) {
  console.log(autsTOMbassIndex);
  var autsTOMbass = mBas.slice(autsTOMbassIndex, mBas.indexOf("[console.portal]", autsTOMbassIndex));
 } else
  autsTOMbass = " Info not found with this id " + id;
 autsTOMbass = "Id search in Mbass :" + autsTOMbass;
 return (autsTOMbass);
 //document.getElementById("output2").innerHTML =autsTOMbass;

}

function authInfo(text) // id search in authAcc
{
 if (searchCount != 1) {
  var s;
  var id = "";
  mBassid = text.indexOf("[", 15);
  s = text.indexOf("]", 40);
  //document.write("<br>");
  for (var i = mBassid; i <= s; i++) {
   id += text[i];
  }
  console.log(id);
 } else
  id = text;
 var autsTOautsIndex = authSer.lastIndexOf(id);
 if (autsTOautsIndex !== -1)
  var autsTOauts = authSer.slice(autsTOautsIndex, authSer.indexOf("[auth.service]", autsTOautsIndex));
 else
  autsTOauts = " Info not found with this id " + id;
 autsTOauts = "Id search in authServices :" + autsTOauts;
 return (autsTOauts);
 //document.getElementById("output2").innerHTML =autsTOMbass;

}

function midInfo(text) // id search in middleware
{
 //var midTOmid="INFO not found with this id ";
 //if(midSer!=="")


 if (searchCount != 1) {
  var s;
  var id = "";
  mBassid = text.indexOf("[", 15);
  s = text.indexOf("]", 40);
  //document.write("<br>");
  for (var i = mBassid; i <= s; i++) {
   id += text[i];
  }
  console.log(id);
 } else
  id = text;
 var midTOmidIndex = midSer.lastIndexOf(id);
 if (midTOmidIndex !== -1) {
  console.log("hii" + midSer.indexOf("[app.services]", midTOmidIndex));
  var midTOmid = midSer.slice(midTOmidIndex, midSer.indexOf("[app.services]", midTOmidIndex));
 } else
  midTOmid = " content not found with this id " + id;
 midTOmid = "Id search in middleware :" + midTOmid;
 return (midTOmid);


}



function enterpressalert(e, textarea) { //search implemented here

 var code = (e.keyCode ? e.keyCode : e.which);
 document.getElementById('searchid').style.display = 'block';
 if (code == 13) { //Enter your code
  document.getElementById("searchid").innerHTML = "";
  var id = textarea.value;
  searchCount = 1;

  var autsTOMbass = mBassInfo(id);
  var autsTOacc = accInfo(id);
  var autsTOauts = authInfo(id);
  var midTOmid = midInfo(id);
  var child = document.getElementById("searchid");
  if (autsTOMbass) {
   autsTOMbass = "In mbass file " + autsTOMbass;
   var para = document.createElement("h5");
   var node = document.createTextNode(autsTOMbass);
   para.appendChild(node);
   child.appendChild(para);
   //child.appendChild(para);
  }
  if (autsTOacc) {
   autsTOacc = "In Account services file " + autsTOacc;
   para = document.createElement("h5");
   node = document.createTextNode(autsTOacc);

   para.appendChild(node);
   child.appendChild(para);
  }
  if (autsTOauts) {
   autsTOauts = "In authServices file " + autsTOauts;
   var para = document.createElement("h5");
   var node = document.createTextNode(autsTOauts);
   para.appendChild(node);
   child.appendChild(para);
  }

  if (midTOmid) {
   midTOmid = "In middleware file " + midTOmid;
   var para = document.createElement("h5");
   var node = document.createTextNode(midTOmid);
   para.appendChild(node);
   child.appendChild(para);
  }

  searchCount = 0;
 }
}

//document.getElementById("demo").innerHTML=textarea.value;

searchCount = 0;

var day;
var mon;
var hour;
var min;

function onEnterTime(value) { //search implemented here
 console.log(parseInt(value));
 var Tl = parseInt(value);
 if (Tl !== -1) {
  document.getElementById('table_fill').style.display = 'none';
  document.getElementById('searchbar').style.display = 'block';
  document.getElementById('temptag').style.display = 'block';
  var dat = new Date();
  day = dat.getDate();
  mon = dat.getMonth();
  hour = dat.getHours();
  min = dat.getMinutes();
  document.getElementById("MBASS").innerHTML = ""; //
  document.getElementById("ACC").innerHTML = "";
  document.getElementById("AUTH").innerHTML = "";
  document.getElementById("MID").innerHTML = "";
  MbassTime(Tl, day, hour, min, mon); //
  accTime(Tl, day, hour, min, mon);
  authTime(Tl, day, hour, min, mon);
  midTime(Tl, day, hour, min, mon);
 }

}

function MbassTime(Tl, day1, hour1, min1, mon1) //
{
 document.getElementById("one").innerHTML = "MBass File analysis";
 var str = [];
 var i = 0;
 if (mBas !== "") {
  var pos;
  pos = mBas.indexOf(modeType);
  //pos=mBas.indexOf("]",pos);

  var child = document.getElementById("MBASS");
  if (Tl !== 0) {
   var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   while (pos !== -1) {
    console.log("here is the month see" + mBas.slice((pos + 5), (pos + 8)));
    pos = mBas.indexOf("]", pos);
    if (monthNames[mon] == mBas.slice((pos + 5), (pos + 8))) //5=11,8-14
    {
     console.log(mBas.slice((pos + 2), (pos + 4)) + "     " + day); //8,10
     console.log(parseInt(mBas.slice((pos + 14), (pos + 16)))); //20,22
     //console.log(mBas.slice((pos+7)));
     if (day1 == parseInt(mBas.slice((pos + 2), (pos + 4)))) {
      console.log(parseInt(mBas.slice((pos + 14), (pos + 16))));
      if (Tl > hour1 - parseInt(mBas.slice((pos + 14), (pos + 16)))) {
       str[i] = mBas.slice(pos, mBas.indexOf("[console.portal]", pos));
       var para = document.createElement("h4");
       var node = document.createTextNode(modeType + "" + str[i]);
       para.appendChild(node);
       child.appendChild(para);
       i++;

       //console.log(str[--i]);
      }
      if (Tl == hour1 - parseInt(mBas.slice((pos + 14), (pos + 16)))) {
       if (min1 <= parseInt(mBas.slice((pos + 17), (pos + 19)))) {
        str[i] = mBas.slice(pos, mBas.indexOf("[console.portal]", pos));
        var para = document.createElement("h4");
        var node = document.createTextNode(modeType + "" + str[i]);
        para.appendChild(node);
        child.appendChild(para);
        i++;
       }
      }

     } else {
      //if(pos!==-1)
      //pos=pos+10;
     }

    } else {
     //if(pos!==-1)
     //pos=pos+10;
    }
    pos = pos + 10;
    pos = mBas.indexOf(modeType, pos);

   }
   //for(i=0;i<str.length;i++)
   // {

   //}
  } else {
   pos = mBas.lastIndexOf(modeType);
   str[0] = mBas.slice(pos, mBas.indexOf("[console.portal]", pos));
   var para = document.createElement("h4");
   var node = document.createTextNode(str[0]);
   para.appendChild(node);
   child.appendChild(para);
  }
  if (hour1 < Tl) //
  {
   Tl = Tl - hour1; //
   if (day1 !== 01)
    MbassTime(Tl, --day1, 23, 59, mon1); //
  } //
 }
}

function accTime(Tl, day1, hour1, min1, mon1) {
 document.getElementById("two").innerHTML = "accountServices File analysis";
 var str = [];
 var i = 0;
 if (accSer !== "") {
  var pos;
  pos = accSer.indexOf(modeType);

  var child = document.getElementById("ACC");
  if (Tl !== 0) {
   var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   while (pos !== -1) {
    //console.log(" here is the month"+accSer.slice((pos+11),(pos+14)));
    pos = accSer.indexOf("]", pos);
    if (monthNames[mon] == accSer.slice((pos + 5), (pos + 8))) {
     console.log(accSer.slice((pos + 2), (pos + 4)) + "     " + day);
     console.log(parseInt(accSer.slice((pos + 14), (pos + 16))));
     //console.log(accSer.slice((pos+7)));
     if (day1 == parseInt(accSer.slice((pos + 2), (pos + 4)))) {
      console.log(parseInt(accSer.slice((pos + 14), (pos + 16))));
      if (Tl > hour1 - parseInt(accSer.slice((pos + 14), (pos + 16)))) {
       str[i] = accSer.slice(pos, accSer.indexOf("[console.accounts]", pos));
       var para = document.createElement("h4");
       var node = document.createTextNode(modeType + "" + str[i]);
       para.appendChild(node);
       child.appendChild(para);
       i++;

       //console.log(str[--i]);
      }
      if (Tl == hour1 - parseInt(accSer.slice((pos + 14), (pos + 16)))) {
       if (min1 <= parseInt(accSer.slice((pos + 17), (pos + 19)))) {
        str[i] = accSer.slice(pos, accSer.indexOf("[console.accounts]", pos));
        var para = document.createElement("h4");
        var node = document.createTextNode(modeType + "" + str[i]);
        para.appendChild(node);
        child.appendChild(para);
        i++;
       }
      }

     } else {
      //if(pos!==-1)
      //pos=pos+10;
     }

    } else {
     //if(pos!==-1)
     //pos=pos+10;
    }
    pos = pos + 10;
    pos = accSer.indexOf(modeType, pos);
   }
   //for(i=0;i<str.length;i++)
   // {

   //}
  } else {
   pos = accSer.lastIndexOf(modeType);
   str[0] = accSer.slice(pos, accSer.indexOf("[console.accounts]", pos));
   var para = document.createElement("h4");
   var node = document.createTextNode(str[0]);
   para.appendChild(node);
   child.appendChild(para);

  }
  if (hour1 < Tl) //
  {
   Tl = Tl - hour1; //
   if (day1 !== 01)
    accTime(Tl, --day1, 23, 59, mon1); //
  }
 }
 var strMbass = [];
 for (var i = 0; i < str.length; i++) {
  strMbass[i] = mBassInfo(str[i]);
  var para = document.createElement("h4");
  var node = document.createTextNode(strMbass[i]);
  para.appendChild(node);
  child.appendChild(para);
 }
}

function authTime(Tl, day1, hour1, min1, mon1) {
 document.getElementById("three").innerHTML = "AuthServices File analysis";
 var str = [];
 var i = 0;
 if (authSer !== "") {
  var pos;
  pos = authSer.indexOf(modeType);
  var child = document.getElementById("AUTH");
  if (Tl !== 0) {
   var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   while (pos !== -1) {
    pos = authSer.indexOf("]", pos);
    if (monthNames[mon] == authSer.slice((pos + 5), (pos + 8))) {
     console.log(authSer.slice((pos + 2), (pos + 4)) + "     " + day);
     console.log(parseInt(authSer.slice((pos + 14), (pos + 16))));
     //console.log(authSer.slice((pos+7)));
     if (day1 == parseInt(authSer.slice((pos + 2), (pos + 4)))) {
      console.log(parseInt(authSer.slice((pos + 14), (pos + 16))));
      if (Tl > hour1 - parseInt(authSer.slice((pos + 14), (pos + 16)))) {
       str[i] = authSer.slice(pos, authSer.indexOf("[auth.service]", pos));
       var para = document.createElement("h4");
       var node = document.createTextNode(modeType + "" + str[i]);
       para.appendChild(node);
       child.appendChild(para);
       i++;

       //console.log(str[--i]);
      }
      if (Tl == hour1 - parseInt(authSer.slice((pos + 14), (pos + 16)))) {
       if (min1 <= parseInt(authSer.slice((pos + 17), (pos + 19)))) {
        str[i] = authSer.slice(pos, authSer.indexOf("[auth.service]", pos));
        var para = document.createElement("h4");
        var node = document.createTextNode(modeType + "" + str[i]);
        para.appendChild(node);
        child.appendChild(para);
        i++;
       }
      }

     } else {
      //if(pos!==-1)
      //pos=pos+10;
     }

    } else {
     //if(pos!==-1)
     //pos=pos+10;
    }
    pos = pos + 10;
    pos = authSer.indexOf(modeType, pos);
   }
   //for(i=0;i<str.length;i++)
   // {

   //}
  } else {
   pos = authSer.lastIndexOf(modeType);
   str[0] = authSer.slice(pos, authSer.indexOf("[auth.service]", pos));
   var para = document.createElement("h4");
   var node = document.createTextNode(str[0]);
   para.appendChild(node);
   child.appendChild(para);

  }
  if (hour1 < Tl) //
  {
   Tl = Tl - hour1; //
   if (day1 !== 01)
    authTime(Tl, --day1, 23, 59, mon1); //
  } //
 }

 var strMbass = [];
 for (var i = 0; i < str.length; i++) {
  strMbass[i] = mBassInfo(str[i]);
  var para = document.createElement("h4");
  var node = document.createTextNode(strMbass[i]);
  para.appendChild(node);
  child.appendChild(para);
 }
 var strAcc = [];
 for (var i = 0; i < str.length; i++) {
  strAcc[i] = accInfo(str[i]);
  var para = document.createElement("h4");
  var node = document.createTextNode(strAcc[i]);
  para.appendChild(node);
  child.appendChild(para);
 }
}

function midTime(Tl, day1, hour1, min1, mon1) {
 document.getElementById("mid").innerHTML = "Middleware File analysis";
 var str = [];
 var i = 0;
 if (midSer !== "") {
  var pos;
  pos = midSer.indexOf(modeType);
  var child = document.getElementById("MID");
  if (Tl !== 0) {
   var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   while (pos !== -1) {
    pos = midSer.indexOf("]", pos);
    if (monthNames[mon] == midSer.slice((pos + 5), (pos + 8))) {
     console.log(midSer.slice((pos + 2), (pos + 4)) + "     " + day);
     console.log(parseInt(midSer.slice((pos + 14), (pos + 16))));
     //console.log(midSer.slice((pos+7)));
     if (day1 == parseInt(midSer.slice((pos + 2), (pos + 4)))) {
      console.log(parseInt(midSer.slice((pos + 14), (pos + 16))));
      if (Tl > hour1 - parseInt(midSer.slice((pos + 14), (pos + 16)))) {
       str[i] = midSer.slice(pos, midSer.indexOf("[app.services]", pos));
       var para = document.createElement("h4");
       var node = document.createTextNode(modeType + "" + str[i]);
       para.appendChild(node);
       child.appendChild(para);
       i++;

       //console.log(str[--i]);
      }
      if (Tl == hour1 - parseInt(midSer.slice((pos + 14), (pos + 16)))) {
       if (min1 <= parseInt(midSer.slice((pos + 17), (pos + 19)))) {
        str[i] = midSer.slice(pos, midSer.indexOf("[app.services]", pos));
        var para = document.createElement("h4");
        var node = document.createTextNode(modeType + "" + str[i]);
        para.appendChild(node);
        child.appendChild(para);
        i++;
       }
      }

     } else {
      //if(pos!==-1)
      //pos=pos+10;
     }

    } else {
     //if(pos!==-1)
     //pos=pos+10;
    }
    pos = pos + 10;
    pos = midSer.indexOf(modeType, pos);
   }
   //for(i=0;i<str.length;i++)
   // {

   //}
  } else {
   pos = midSer.lastIndexOf(modeType);
   str[0] = midSer.slice(pos, midSer.indexOf("[app.services]", pos));
   var para = document.createElement("h4");
   var node = document.createTextNode(str[0]);
   para.appendChild(node);
   child.appendChild(para);

  }
  if (hour1 < Tl) //
  {
   Tl = Tl - hour1; //
   if (day1 !== 01)
    midTime(Tl, --day1, 23, 59, mon1); //
  } //
 }

 var strMbass = [];
 for (var i = 0; i < str.length; i++) {
  strMbass[i] = mBassInfo(str[i]);
  var para = document.createElement("h4");
  var node = document.createTextNode(strMbass[i]);
  para.appendChild(node);
  child.appendChild(para);
 }
 var strAcc = [];
 for (var i = 0; i < str.length; i++) {
  strAcc[i] = accInfo(str[i]);
  var para = document.createElement("h4");
  var node = document.createTextNode(strAcc[i]);
  para.appendChild(node);
  child.appendChild(para);
 }
 var strAuth = [];
 for (var i = 0; i < str.length; i++) {
  strAuth[i] = authInfo(str[i]);
  var para = document.createElement("h4");
  var node = document.createTextNode(strAuth[i]);
  para.appendChild(node);
  child.appendChild(para);
 }
}

function onEnterMode(e, textarea) { //search implemented here
 var code = (e.keyCode ? e.keyCode : e.which);

 if (code == 13) { //Enter your code }
  //document.getElementById("demo").innerHTML=textarea.value;
  modeType = textarea.value;

 }

}