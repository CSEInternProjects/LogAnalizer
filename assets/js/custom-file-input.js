'use strict';

var fileName, demo;
(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile1');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            fileName = '';
            demo = this.files;
            if (this.files && this.files.length >= 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

var fileName1, demo1;
(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile1');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal1 = label.innerHTML;

        input.addEventListener('change', function(e) {
            fileName1 = '';
            demo1 = this.files;
            if (this.files && this.files.length >= 1)
                fileName1 = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName1 = e.target.value.split('\\').pop();

            if (fileName1)
                label.querySelector('span').innerHTML = fileName1;
            else
                label.innerHTML = labelVal1;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

var fileName2, demo2;;
(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile1');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal2 = label.innerHTML;

        input.addEventListener('change', function(e) {
            fileName2 = '';
            demo2 = this.files;
            if (this.files && this.files.length >= 1)
                fileName2 = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName2 = e.target.value.split('\\').pop();

            if (fileName2)
                label.querySelector('span').innerHTML = fileNam2;
            else
                label.innerHTML = labelVal2;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

var fileName3, demo3;;
(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile1');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal3 = label.innerHTML;

        input.addEventListener('change', function(e) {
            fileName3 = '';
            demo3 = this.files;
            if (this.files && this.files.length >= 1)
                fileName3 = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName3 = e.target.value.split('\\').pop();

            if (fileName3)
                label.querySelector('span').innerHTML = fileName3;
            else
                label.innerHTML = labelVal3;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

var fileName4, demo4;
(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile1');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal4 = label.innerHTML;

        input.addEventListener('change', function(e) {
            fileName4 = '';
            demo4 = this.files;
            if (this.files && this.files.length >= 1)
                fileName4 = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName4 = e.target.value.split('\\').pop();

            if (fileName4)
                label.querySelector('span').innerHTML = fileName4;
            else
                label.innerHTML = labelVal4;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

function selected_key() {
    var e = document.getElementById("select_key");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser !== 0) {
        document.getElementById('temptag').style.display = 'none';
        document.getElementById('selectmode').style.display = 'block';
        document.getElementById('searchbar').style.display = 'block';
        document.getElementById('main-name1').style.display = 'block';
        document.getElementById('select_key2').style.display = 'block';
        document.getElementById('select_keytype').style.display = 'block';
        document.getElementById('searchid').style.display = 'none';
    }
    if (strUser == 'select value' || strUser === "0" || strUser === 0) {
        document.getElementById("inputfile_1").style.display = 'none';
        document.getElementById("inputfile_2").style.display = 'none';
        document.getElementById("inputfile_3").style.display = 'none';
        document.getElementById("inputfile_4").style.display = 'none';
        document.getElementById("inputfile_5").style.display = 'none';
        document.getElementById("container1").style.display = 'none';
        document.getElementById('selectmode').style.display = 'none';
        document.getElementById('searchbar').style.display = 'none';
        document.getElementById('main-name1').style.display = 'none';
        document.getElementById('select_key2').style.display = 'none';
        document.getElementById('select_keytype').style.display = 'none';
    } else if (strUser == 'one' || strUser == "1" || strUser == 1) {
        document.getElementById("inputfile_1").style.display = 'block';
        document.getElementById("inputfile_2").style.display = 'none';
        document.getElementById("inputfile_3").style.display = 'none';
        document.getElementById("inputfile_4").style.display = 'none';
        document.getElementById("inputfile_5").style.display = 'none';
        document.getElementById("container1").style.display = 'block';
    } else if (strUser == 'two' || strUser == "2" || strUser == 2) {
        document.getElementById("inputfile_1").style.display = 'block';
        document.getElementById("inputfile_2").style.display = 'block';
        document.getElementById("inputfile_3").style.display = 'none';
        document.getElementById("inputfile_4").style.display = 'none';
        document.getElementById("inputfile_5").style.display = 'none';
        document.getElementById("container1").style.display = 'block';
    } else if (strUser == 'three' || strUser == "3" || strUser == 3) {
        document.getElementById("inputfile_1").style.display = 'block';
        document.getElementById("inputfile_2").style.display = 'block';
        document.getElementById("inputfile_3").style.display = 'block';
        document.getElementById("inputfile_4").style.display = 'none';
        document.getElementById("inputfile_5").style.display = 'none';
        document.getElementById("container1").style.display = 'block';
    } else if (strUser == 'four' || strUser == "4" || strUser == 4) {
        document.getElementById("inputfile_1").style.display = 'block';
        document.getElementById("inputfile_2").style.display = 'block';
        document.getElementById("inputfile_3").style.display = 'block';
        document.getElementById("inputfile_4").style.display = 'block';
        document.getElementById("inputfile_5").style.display = 'none';
        document.getElementById("container1").style.display = 'block';
    } else if (strUser == 'five' || strUser == "5" || strUser == 5) {
        document.getElementById("inputfile_1").style.display = 'block';
        document.getElementById("inputfile_2").style.display = 'block';
        document.getElementById("inputfile_3").style.display = 'block';
        document.getElementById("inputfile_4").style.display = 'block';
        document.getElementById("inputfile_5").style.display = 'block';
        document.getElementById("container1").style.display = 'block';
    }

}

function tableshow() {
    var tabledata = document.getElementById('tebleid')
    var tabled = tabledata.options(tabledata.selectedIndex).value;
    if (tabled == 'None' || tabled == 'td00') {
        var result_style = document.getElementById('tr1').style;
        result_style.display = '';
    }
}

function scrolltoTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function temptagjs() {
    var temptag1 = document.createElement("p");
    temptag1.id = "ui";
    var element = document.getElementById("temptag");
    element.appendChild(temptag1);
}

function removeTable(id) {
    var table123 = document.getElementById(id);
    if (table123) table123.parentNode.removeChild(table123);
}

function selected_key1() {
        removeTable('table123');
        var e = document.getElementById("select_key");
        var strUser = parseInt(e.options[e.selectedIndex].value);
        var i;
        var tablearea = document.getElementById('table_fill'),
            table = document.createElement('table'),
            tr = document.createElement('tr');
        tablearea.style.display = 'none';
        table.setAttribute("id", "table123");
        table.setAttribute("class", "tabledata");
        var j = strUser + 1;
        for (i = 0; i < 6; i++) {
            var th = tr.appendChild(document.createElement('th'));
            th.setAttribute("class", "tableheader");
            th.setAttribute("id", "tableid");

            if (i == 1)
                tr.cells[i].appendChild(document.createTextNode('MBass File'));
            else if (i == 2)
                tr.cells[i].appendChild(document.createTextNode('Accounts'));
            else if (i == 3)
                tr.cells[i].appendChild(document.createTextNode('Auth'));
            else if (i == 4)
                tr.cells[i].appendChild(document.createTextNode('Middle Ware'));
            else if (i == 5)
                tr.cells[i].appendChild(document.createTextNode('File 5'));
            else
                tr.cells[i].appendChild(document.createTextNode('Sl. No.'));
        }
        table.appendChild(tr.cloneNode(true));
        for (var k = 0; k < (j - 1); k++) {
            tr = document.createElement('tr');
            for (i = 0; i < 6; i++) {
                var td = tr.appendChild(document.createElement('td'));
                if (i == 0) {
                    td.setAttribute("class", "columrow1");

                }
                if (i == 1 && k == 0) {
                    td.setAttribute("id", "MBASS1");
                    td.setAttribute("class", "column1");
                } else if (i == 2 && k == 0) {
                    td.setAttribute("id", "MBASS2");
                    td.setAttribute("class", "column1");
                } else if (i == 3 && k == 0) {
                    td.setAttribute("id", "MBASS3");
                    td.setAttribute("class", "column1");
                } else if (i == 4 && k == 0) {
                    td.setAttribute("id", "MBASS4");
                    td.setAttribute("class", "column1");
                } else if (i == 5 && k == 0) {
                    td.setAttribute("id", "MBASS5");
                    td.setAttribute("class", "column1");
                } else if (i == 1 && k == 1) {
                    td.setAttribute("id", "ACC1");
                    td.setAttribute("class", "column1");
                } else if (i == 2 && k == 1) {
                    td.setAttribute("id", "ACC2");
                    td.setAttribute("class", "column1");
                } else if (i == 3 && k == 1) {
                    td.setAttribute("id", "ACC3");
                    td.setAttribute("class", "column1");
                } else if (i == 4 && k == 1) {
                    td.setAttribute("id", "ACC4");
                    td.setAttribute("class", "column1");
                } else if (i == 5 && k == 1) {
                    td.setAttribute("id", "ACC5");
                    td.setAttribute("class", "column1");
                } else if (i == 1 && k == 2) {
                    td.setAttribute("id", "AUTH1");
                    td.setAttribute("class", "column1");
                } else if (i == 2 && k == 2) {
                    td.setAttribute("id", "AUTH2");
                    td.setAttribute("class", "column1");
                } else if (i == 3 && k == 2) {
                    td.setAttribute("id", "AUTH3");
                    td.setAttribute("class", "column1");
                } else if (i == 4 && k == 2) {
                    td.setAttribute("id", "AUTH4");
                    td.setAttribute("class", "column1");
                } else if (i == 5 && k == 2) {
                    td.setAttribute("id", "AUTH5");
                    td.setAttribute("class", "column1");
                } else if (i == 1 && k == 3) {
                    td.setAttribute("id", "MID1");
                    td.setAttribute("class", "column1");
                } else if (i == 2 && k == 3) {
                    td.setAttribute("id", "MID2");
                    td.setAttribute("class", "column1");
                } else if (i == 3 && k == 3) {
                    td.setAttribute("id", "MID3");
                    td.setAttribute("class", "column1");
                } else if (i == 4 && k == 3) {
                    td.setAttribute("id", "MID4");
                    td.setAttribute("class", "column1");
                } else if (i == 5 && k == 3) {
                    td.setAttribute("id", "MID5");
                    td.setAttribute("class", "column1");
                } else {
                    td.setAttribute("class", "column1");
                }
                if (i == 0)
                    tr.cells[i].appendChild(document.createTextNode(k + 1));
                else if (i == 1 & k == 0) {
                    tr.cells[i].appendChild(document.createTextNode('NONE'));
                } else
                    tr.cells[i].appendChild(document.createTextNode('NONE'));
            }
            table.appendChild(tr.cloneNode(true));
            tablearea.style.display = '';
        }
        tablearea.appendChild(table);
        document.getElementById('MBASS1').onclick = function() {
            popupboxopen(1);
        };
        document.getElementById('MBASS2').onclick = function() {
            popupboxopen(2);
        };
        document.getElementById('MBASS3').onclick = function() {
            popupboxopen(3);
        };
        document.getElementById('MBASS4').onclick = function() {
            popupboxopen(4);
        }; //function({document.getElementById('myModel').style.display= 'block'};
        document.getElementById('MBASS5').onclick = function() {
            popupboxopen(5);
        };
        document.getElementById('ACC1').onclick = function() {
            popupboxopen(11);
        };
        document.getElementById('ACC2').onclick = function() {
            popupboxopen(12);
        };
        document.getElementById('ACC3').onclick = function() {
            popupboxopen(13);
        };
        document.getElementById('ACC4').onclick = function() {
            popupboxopen(14);
        };
        document.getElementById('ACC5').onclick = function() {
            popupboxopen(15);
        };
        document.getElementById('AUTH1').onclick = function() {
            popupboxopen(21);
        };
        document.getElementById('AUTH2').onclick = function() {
            popupboxopen(22);
        };
        document.getElementById('AUTH3').onclick = function() {
            popupboxopen(23);
        };
        document.getElementById('AUTH4').onclick = function() {
            popupboxopen(24);
        };
        document.getElementById('AUTH5').onclick = function() {
            popupboxopen(25);
        };
        document.getElementById('MID1').onclick = function() {
            popupboxopen(31);
        };
        document.getElementById('MID2').onclick = function() {
            popupboxopen(32);
        };
        document.getElementById('MID3').onclick = function() {
            popupboxopen(33);
        };
        document.getElementById('MID4').onclick = function() {
            popupboxopen(34);
        };
        document.getElementById('MID5').onclick = function() {
            popupboxopen(35);
        };

    }
    /*(function(){
        var myDiv = document.getElementById("myDiv"),

          show = function(){
            myDiv.style.display = "block";
            myDiv1.style.display= "none";
            setTimeout(hide, 5000); // 5 seconds
          },


          hide = function(){
            myDiv.style.display = "none";
            myDiv1.style.display= "block";
          };

        show();
        })();
    */

function main_div()
{

}

function popupboxopen(counter) {
    var child = document.getElementById("mymodal1");
    var para = document.createElement("h4");
    para.setAttribute('id', 'alldata');
    if (counter == 1) {
        //document.getElementById('alldata').innerHTML= '';
        //alert('assdd');
        if (fileInfoToDiv[0][0]) {
            // document.getElementById('MBASS1').innerHTML= '';
            var node = document.createTextNode(fileInfoToDiv[0][0]);
            para.appendChild(node);
            child.appendChild(para);
            document.getElementById('myModal').style.display = 'block';
        } else
            alert("Mbass file not yet choosen");
    }
    if (counter == 2) {
        //alert('ddssa');

        if (fileInfoToDiv[0][1]) {
            var node = document.createTextNode(fileInfoToDiv[0][1]);
            para.appendChild(node);
            child.appendChild(para);
            document.getElementById('myModal').style.display = 'block';
        } else
            alert("MBass file not yet choosen OR no Data Found.");
    }
    if (counter == 3) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[0][2]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }

    if (counter == 4) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[0][3]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }

    if (counter == 5) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[0][4]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }

    if (counter == 11) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[1][0]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 12) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[1][1]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 13) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[1][2]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 14) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[1][3]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 15) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[1][4]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 21) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[2][0]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 22) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[2][1]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 23) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[2][2]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 24) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[2][3]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 25) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[2][4]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 31) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[3][0]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 32) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[3][1]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';

    }
    if (counter == 33) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[3][2]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 34) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[3][3]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 35) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[3][4]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 41) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[4][0]);
        para.appendChild(node);
        child.appendChild(para);
    }

    if (counter == 42) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[4][1]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 43) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[4][2]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 44) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[4][3]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }
    if (counter == 45) {
        //alert('ddssa');

        var node = document.createTextNode(fileInfoToDiv[4][4]);
        para.appendChild(node);
        child.appendChild(para);
        document.getElementById('myModal').style.display = 'block';
    }


    //document.getElementById('myModal').style.display= 'block';
}

function popupboxclose() //to close the popup
    {
        document.getElementById('mymodal1').innerHTML = "";
        document.getElementById('myModal').style.display = 'none';
    }

function selected_key2() //for table and data to display
    {
        var e = document.getElementById("select_keytype");
        var strUser = e.options[e.selectedIndex].value;
        if (strUser == 1) {
            document.getElementById('table_fill').style.display = 'block';
            document.getElementById('temptag').style.display = 'block';
        } else if (strUser == 2) {
            document.getElementById('table_fill').style.display = 'block';
            document.getElementById('temptag').style.display = 'none';
        } else if (strUser == 3) {
            document.getElementById('table_fill').style.display = 'none';
            document.getElementById('temptag').style.display = 'block';
        }
    }

function selected_key4() {
    var e = document.getElementById("selectmode");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser == 0) {}
    if (strUser == 1) {
        modeType = "[ERROR]";
    }
    if (strUser == 2) {
        modeType = "[ INFO]";
    }
    if (strUser == 3) {
        modeType = "[DEBUG]";
    }
    if (strUser == 4) {
        modeType = "[ WARN]";
    }
}
