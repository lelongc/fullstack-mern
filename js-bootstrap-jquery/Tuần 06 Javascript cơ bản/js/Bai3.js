var c = 0;
        var t;
        var timer_is_on = 0;

        function setBG() {
            let a = [
                "url(../image/b1.jpg)",
                "url(../image/b2.jpg)",
                "url(../image/b3.jpg)",
                "url(../image/b4.jpg)",
                "url(../image/b5.jpg)",
                "url(../image/b6.jpg)",
                "url(../image/b7.jpg)",
                "url(../image/b8.jpg)",
                "url(../image/b9.jpg)",
                "url(../image/b10.jpg)"
            ];

            let n = a[Math.round(Math.random() * a.length)];

            let d = document.getElementById("div1");

            d.style.backgroundImage = n;
            d.style.backgroundSize = "cover";
            d.style.transition = "background-image 0.7s";

            t = setTimeout(setBG, 1000);
        }

        function play() {
            if (!timer_is_on) {
                timer_is_on = 1;
                setBG();
            }
        }

        function stop() {
            clearTimeout(t);
            timer_is_on = 0;
        }