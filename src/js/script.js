const dropDownList = document.querySelectorAll('.select-from-choice');
const baseCurrencySrc = "https://open.er-api.com/v6/latest";

for (let i = 0; i < dropDownList.length; i++) {
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
}

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