document.querySelector("button").onclick = () => {
    let a = Number(document.querySelector("#a").value);
    let b = Number(document.querySelector("#b").value);
    console.log(a); // testing
    console.log(b); // testing

    if (isNaN(a)) { 
        document.querySelector("[for=a]")
            .style.display = "inline";
    }

    if (isNaN(b)) {
        document.querySelector("[for=b]")
            .style.display = "inline";
    }

    let result = a + b;

    if (!isNaN(result)) { 
        document.querySelector("#result").textContent = result;
    }

    document.querySelector("#a").onkeyup = () => { // hide the error text 
        let a = parseInt(document.querySelector("#a").value);

        if (!isNaN(a)) {
            document.querySelector("[for=a]")
                .style.display = "none";
        }
        document.querySelector("#result").textContent = null; // reset the result
    }
    document.querySelector("#b").onkeyup = () => { // hide the error text
        let b = parseInt(document.querySelector("#b").value);

        if (!isNaN(b)) {
            document.querySelector("[for=b]")
                .style.display = "none";
        }
        document.querySelector("#result").textContent = null; // reset the result

    }
}