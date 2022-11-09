function reset1() {
  debugger
  document.getElementById("rows").value='';
 document.getElementById("columns").value ='';
  document.getElementById('data_table').innerHTML='';
}


function createheader() {
  debugger
  var element = document.getElementById("button1");
  element.classList.remove("d-none");
  // document.getElementById("button1").style.display = "block";
  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  let thead = document.createElement("thead");
  var row = document.getElementById("rows").value;
  var col = document.getElementById("columns").value;
  var table_data = document.getElementById("data_table");
  let value = document.createElement("div");
  value.innerHtml = "enter header values";
  value.style.fontWeight = "bold";
  value.style.padding = 10 + 'px';
  thead.appendChild(value);
  var header_value = document.createElement("div");
  thead.style.width = 100 + '%';
  if (number_of_rows()) {
    if (number_of_cols()) {
      for (i = 0; i < col; i++) {
        let div = document.createElement("div");
        var textarea = document.createElement("textarea");
        textarea.setAttribute("class", "textarea");
        textarea.setAttribute("id", `divid_${i}`);
        textarea.style.height = 50 + 'px';
        textarea.style.width = 100 + 'px';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.overflow = 'hidden';
        div.style.margin = 5 + 'px';
       
        td.appendChild(textarea);
       
      }
    }
  }
  tr.appendChild(td);
  table.appendChild(tr);
  header_value.appendChild(table);
  table_data.appendChild(header_value);
}



//check no of rows are in range or not
function number_of_rows() {
  let no_of_rows = document.getElementById("rows").value;
  if (no_of_rows < 1) {
    alert("Enter valid number of rows..");
    return false;
  } else {
    return true;
  }
}
//check no of columns are in range or not
function number_of_cols() {
  let no_of_cols = document.getElementById("columns").value;
  if (no_of_cols < 1 || no_of_cols > 10) {
    alert("Enter valid number of columns..");
    return false;
  } else {
    return true;
  }
}

//creating header data and row data to the table
function add_Data_To_Table() {
  
  // var myArray = [];
  
  // myArray.push(header_value);
  debugger;
  var myArray = [];
  const ele = document.getElementsByTagName("textarea");
  console.log(ele);
  for (let i = 0; i <= ele.length - 1; i++) {
    if (ele[i].value != "") myArray.push(ele[i].value);
    else {
      alert("Enter some value in textarea");
      return false;
    }
  }

  // for (var i = 0; i < myArray.length; i++) {
  //   if (myArray[i] === "") {
  //     alert("Header must be filled");
  //     return false;
  //   }
  // }

  var table2 = document.createElement("table");
  // table2.style.border = '1px solid black';
  var cols = document.getElementById("columns").value ;
  var rows = document.getElementById("rows").value ;

     for (let i = 0; i <= rows; i++) {
  var tr = document.createElement("tr");
  for (let j = 0; j < cols; j++) {
    var td = document.createElement("td");
    // td.innerHTML = document.getElementById(`divid_${j}`).value;
    if (i == 0) {
      td.innerHTML = document.getElementById(`divid_${j}`).value;
      td.style.border = '1px solid black';
      td.style.height = 50 + 'px';
      td.style.width = 100 + 'px';
      // td.innerHTML = myArray[j];
      tr.appendChild(td);
    } else {
      td.style.border = '1px solid black';
      td.style.height = 50 + 'px';
       td.style.width = 100 + 'px';
      tr.appendChild(td);
    }
  }
  table2.appendChild(tr);
     }

  var data = document.getElementById("data_table");
  data.appendChild(table2);
  console.log(table2);
    }
    

    
