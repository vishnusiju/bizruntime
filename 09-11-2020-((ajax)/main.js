function loadDoc()
    {
        var xhttp = new XMLHttpRequest();
        // ORSC-it define a function to be executed
        // when readystate change
        xhttp.onreadystatechange =function()
        {
            // the readystate hold the status of XMLHttpRequest.
            if(this.readyState == 4 && this.status == 200)
            {  // status hold the propertys of XMLhttprequest.
                document.getElementById("Aja").innerHTML = this.responseText;
                //document.getElementById("Aja").innerHTML = this.getResponseHeader("Last-Modified");
                //document.getElementById("Aja").innerHTML = this.getAllResponseHeaders();
            }
        };
        xhttp.open("GET", "ajax.txt", true);
        xhttp.send();
    }



// function loadDocs()
// {
//     var hvm = new XMLDocumentRequest();
//     hvm.open("get", "ajax.txt", true);
//     hvm.send();

//     hvm.onreadystatechange = function()
//     {
//         if(hvm.readystate == 4)
//         {
//             if(hvm.status == 200)
//             {
//                 alert("success")
//             }
//         }
//     }
// }



    //var xhttp = new XMLHttpRequest();
    //xhttp.open("get", "link that paste here");
    //xhttp.send();

    //xhttp.onreadystatechange = function()
     //{
        //if(xhttp.readystate == 4) 
        //{
            // if(xhttp.status == 200)
            //{
                //alert("succes message");
            //}

            //else {
                //alert("error");
            //}


        
//readyState:-
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// status:-	
// 200: "OK"
// 403: "Forbidden"
// 404: "Page not found"

// statusText:-
// Returns the status-text 
// (e.g. "OK" or "Not Found")

// getResponseHeader/getAllResponseHeader:-
// length, server-type, content-type, last-modified.