
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


                /*let USDCode = json.rates.GBP;
                console.log(USDCode);*/

                /*const base_code = "USD";
                const result = json.rates[base_code];
                console.log(result);*/

/*for (let i = 0; i < dropDownList.length; i++) {
    for (base_code in country_code) {
        let selected;
        
        if (i == 0) {
            selected = base_code == "USD" ? "selected" : "";
        } else if (i == 1) {
            selected = base_code == "GBP" ? "selected" : "";
        }

        let optionTag = `<option value="${base_code}" ${selected}>${base_code}</option>`;
        dropDownList[i].insertAdjacentHTML('beforeend', optionTag);
    }
}*/