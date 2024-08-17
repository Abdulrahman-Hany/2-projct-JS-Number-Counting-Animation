let countNumber = document.querySelectorAll(".number");
window.addEventListener("scroll", function(){
    if (window.scrollY > 480) {
        for (let i = 0; i < countNumber.length; i++) {
            if (countNumber[i].innerText === "0") {
                function increment() {
                    let current = +countNumber[i].innerText;
                    let dataNum = +countNumber[i].getAttribute("data-num");
                    let incrementVa = Math.ceil(dataNum / 60); 
                    current += incrementVa;
                    countNumber[i].innerText = current;
                    if (current < dataNum) {
                        setTimeout(increment, 50);
                    } else {
                        countNumber[i].innerText = dataNum; 
                    }
                }
                increment();
            }
        }
    }
});