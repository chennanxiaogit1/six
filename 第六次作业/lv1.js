window.addEventListener("load", function () {
    var ipt = document.querySelector("#song");

    var btn = document.querySelector("#btn");
    var xhr = new XMLHttpRequest();
    btn.addEventListener("click", function () {
        var songValue = ipt.value;
        var params = "keywords=" + songValue;
        console.log(params);
        /*   xhr.open(
          "get",
          "http://musicapi.leanapp.cn/personalized?" + params,
          true
        ); */
        xhr.open("get", "http://musicapi.leanapp.cn/search?" + params, true);
        xhr.send();
        xhr.addEventListener("load", function () {
            if (xhr.status == 200) {
                /*  var ul = document.querySelector("ul");
                var li = document.createElement("li");
                li.innerHTML = JSON.parse(xhr.responseText).result.songs[0].name;
                ul.appendChild(li); */
                var main = document.querySelector(".main");
                console.log(JSON.parse(xhr.responseText).result.songs.length);
                for (
                    var i = 0;
                    i < JSON.parse(xhr.responseText).result.songs.length;
                    i++
                ) {
                    var span1 = document.createElement("span");
                    var span2 = document.createElement("span");
                    var span3 = document.createElement("span");
                    span1.innerHTML = JSON.parse(xhr.responseText).result.songs[
                        i
                    ].name;
                    span2.innerHTML = JSON.parse(xhr.responseText).result.songs[
                        i
                    ].artists[0].name;
                    span3.innerHTML = JSON.parse(xhr.responseText).result.songs[
                        i
                    ].album.name;
                    main.appendChild(span1);
                    main.appendChild(span2);
                    main.appendChild(span3);
                }

                console.log(JSON.parse(xhr.responseText));
            }
        });
    });
})