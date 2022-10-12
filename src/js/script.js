const dropDownList = document.querySelectorAll('.select-from-choice');
const baseCurrencySrc = "https://open.er-api.com/v6/latest";

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

for (let i = 0; i < dropDownList.length; i++) {
    for (base_code in country_code) {
        let defaultChoice;
        if (i == 1) {
            defaultChoice = base_code == "GBP" ? "defaultChoice" : "";
        }
        let optionTag = `<option value="${base_code}" ${defaultChoice}>${base_code}</option>`;
        dropDownList[i].insertAdjacentHTML('beforeend', optionTag);
    }
}