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