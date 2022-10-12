
/*for (base_code in country_code) {
    let defaultChoice;

    if (i == 0) {
        if (base_code == "USD") {
            defaultChoice = "defaultChoice"
        } else {
            defaultChoice = "";
        }
    } else if (i == 1) {
        base_code = "GBP" {
            defaultChoice = "defaultChoice"
        }
    }
}*/


fetch(`${baseCurrencySrc}`, {
    method: "GET",
    }).then((Response) => {
        if(Response.ok) {
            Response.json().then((json) => {
                console.log(json);

                let USDCode = json.rates.GBP;
                console.log(USDCode);
            })
        }
    }).catch((error) => {
        console.log(error);
});

if (i == 0) {
    if (base_code == "USD") {
        defaultChoice = "defaultChoice";
    } else {
        defaultChoice = "";
    }
} else if (i == 1) {
    base_code = "GBP" 
}