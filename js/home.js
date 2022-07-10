var indexpath = "F:/Cursos/Oracle ONE Alura/Challenge 3 Front End/eCommerce/eCommerce parte 01/";
    var imgpath = indexpath + "/assets";
    
    const sendBtn = document.querySelector('.link-produto');
    const img = document.getElementById('skill-img');

    var data = indexpath + img.getAttribute('src');
    var dtbk = data;
    var npos = data.indexOf('.');
    data = data.substring(0, npos) + '-big' + data.substring(npos);
    //                                      if OK                      if not OK
    checkImage(data, function(){ console.log("good"); }, function(){ data = dtbk; } );

    var toFile = sendBtn.getAttribute('href');

    console.log('file : ' + data);

    sendBtn.addEventListener('click', (event) => {
      event.preventDefault();

      //console.log('Elem : ' + event.target.id);
      //console.log('data : ' + data);

      var url = indexpath;
      url += toFile + "?"; 
      url += "input-data="; 
      url += data;
    
      //window.location.replace(url);
      window.open(url, '_blank');
    });


    //https://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript
    //Author : Epascarello
    function checkImage(imageSrc, good, bad) {
        var img = new Image();
        img.onload = good; 
        img.onerror = bad;
        img.src = imageSrc;
    }

    //checkImage("foo.gif", function(){ alert("good"); }, function(){ alert("bad"); } );
