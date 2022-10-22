const   dropDownList = document.querySelectorAll('.select-from-choice'),
        baseCurrencySrc = `https://open.er-api.com/v6/latest`,
        getCurrencyBtn = document.getElementById('exchange-values'),
        fromCurrencyValue = document.querySelector('.convert-from select'),
        toCurrencyValue = document.querySelector('.convert-to select');

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

                        dropDownList[i].addEventListener('change', e => {
                            loadFlag(e.target);
                        });
                    }
                }

                function loadFlag(element) {
                    for (base_code in country_code) {
                        if (base_code == element.value) {
                            let imgElement = element.parentElement.querySelector('img');
                            imgElement.src = `https://flagpedia.net/data/flags/w1160/${base_code}.webp`;
                        }
                    }
                }

            })
        }
    }).catch((error) => {
        console.log(error);
});

/*window.addEventListener("load", () => {
    getExchangeRate()
});*/

getCurrencyBtn.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate()
});

function getExchangeRate() {
    const   amount = document.getElementById('input-value');
    let     amountVal = amount.value,
            urlFromCurrency = `https://open.er-api.com/v6/latest/${fromCurrencyValue.value}`;


    if ((amountVal == "") || (amountVal == "0")) {
        amountVal = 1;
        amount.value = "1"
    }

    fetch(`${urlFromCurrency}`, {
        method: "GET",
        }).then((Response) => {
            if(Response.ok) {
                Response.json().then((json) => {
                    let     exchangeRate = json.rates[toCurrencyValue.value],
                            totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
                    const   exchangeRateOutput = document.querySelector('.exchange-rate');

                    /*exchangeRateOutput.innerText = "Getting exchange rate..."*/
                    exchangeRateOutput.innerText = `${amountVal} ${fromCurrencyValue.value} = ${totalExchangeRate} ${toCurrencyValue.value}`;
                })
            }
        }).catch((error) => {
            console.log(error);
    });
}