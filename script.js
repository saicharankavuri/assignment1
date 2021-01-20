function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  var abc=1;
  function edit_row(no)
  {
   if(abc==1)
   {
   document.getElementById("edit_button"+no).value="Save";
   
      
   var did=document.getElementById("did"+no);
   var cid=document.getElementById("cid"+no);
   var dname=document.getElementById("dname"+no);
   var due=document.getElementById("due"+no);
   var idate=document.getElementById("idate"+no);
   var edate=document.getElementById("edate"+no);
   var status=document.getElementById("status"+no);
   
      
   var did_data=did.innerHTML;
   var cid_data=cid.innerHTML;
   var dname_data=dname.innerHTML;
   var due_data=due.innerHTML;
   var idate_data=idate.innerHTML;
   var edate_data=edate.innerHTML;
   var status_data=status.innerHTML;
      
   did.innerHTML="<input type='text' id='did_text"+no+"' value='"+did_data+"'>";
   cid.innerHTML="<input type='text' id='cid_text"+no+"' value='"+cid_data+"'>";
   dname.innerHTML="<input type='text' id='dname_text"+no+"' value='"+dname_data+"'>";
   due.innerHTML="<input type='text' id='due_text"+no+"' value='"+due_data+"'>";
   idate.innerHTML="<input type='text' id='idate_text"+no+"' value='"+idate_data+"'>";
   edate.innerHTML="<input type='text' id='edate_text"+no+"' value='"+edate_data+"'>";
   status.innerHTML="<input type='text' id='status_text"+no+"' value='"+status_data+"'>";
   abc=2;
   }
   else
   {
       var did_val=document.getElementById("did_text"+no).value;
   var cid_val=document.getElementById("cid_text"+no).value;
   var dname_val=document.getElementById("dname_text"+no).value;
    var due_val=document.getElementById("due_text"+no).value;
    var idate_val=document.getElementById("idate_text"+no).value;
     var edate_val=document.getElementById("edate_text"+no).value;
    var status_val=document.getElementById("status_text"+no).value;
  
  
   document.getElementById("did"+no).innerHTML=did_val;
   document.getElementById("cid"+no).innerHTML=cid_val;
   document.getElementById("dname"+no).innerHTML=dname_val;
    document.getElementById("due"+no).innerHTML=due_val;
    document.getElementById("idate"+no).innerHTML=idate_val;
    document.getElementById("edate"+no).innerHTML=edate_val;
    document.getElementById("status"+no).innerHTML=status_val;
  
   document.getElementById("edit_button"+no).value="Edit";
  
   abc=1;
   }
  }
  
  
  
  function delete_row(no)
  {
   document.getElementById("row"+no+"").outerHTML="";
  }
  