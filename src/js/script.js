const   dropDownList = document.querySelectorAll('.select-from-choice'),
        baseCurrencySrc = "https://open.er-api.com/v6/latest",
        getCurrencyBtn = document.getElementById("exchange-values");

fetch(`${baseCurrencySrc}`, {
    method: "GET",
    }).then((Response) => {
        if(Response.ok) {
            Response.json().then((json) => {
                
                console.log(json.rates);

                for (base_code in json.rates) {
                    for (let i = 0; i < dropDownList.length; i++) {
                        
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

            })
        }
    }).catch((error) => {
        console.log(error);
});

getCurrencyBtn.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate()
});

function getExchangeRate() {}