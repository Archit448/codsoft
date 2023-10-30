function addtask(){
    var inputvalue=$("#inputvalue").val();

    if(inputvalue==""){
        alert("Please enter item");
    }
    else{
        var li=document.createElement("li");
        var content=document.createTextNode(inputvalue);
        li.appendChild(content);
        var closebtn=document.createElement("button");
        closebtn.innerHTML='\u00d7';
        li.appendChild(closebtn);
    
        var element=document.getElementById("alltasklist");
        element.appendChild(li);
        $("#inputvalue").val("");
        $("#clearall").show();

    }
}
