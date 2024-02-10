let target = document.querySelectorAll(".btn")
    let count = 0;
    target.forEach((tra) => {
        tra.addEventListener("click", () => {
            let p = document.querySelector(".p1")
            if (tra.innerText === "Increase") {
                count++
            } else if (tra.innerText === "Reset") {
                count = 0
            } else {
                count--
            }
            p.innerText = count
        })
    });

    // let count = 0;
    // target[0].addEventListener("click", () => {
    //     let p = document.querySelector(".p1")
    //     count++
    //     p.innerText = count
    // })
    // target[1].addEventListener("click", () => {
    //     let p = document.querySelector(".p1")
    //     count = 0;
    //     p.innerText = "0"
    // })
    // target[2].addEventListener("click", () => {
    //     let p = document.querySelector(".p1")
    //     count--
    //     p.innerText = count
    // })