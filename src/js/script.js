const dropDownList = document.querySelectorAll('.select-from-choice');
const baseCurrencySrc = "https://open.er-api.com/v6/latest";

for (let i = 0; i < dropDownList.length; i++) {
    for (base_code in country_code) {
        let defaultChoice;
        
        if (i == 0) {
            defaultChoice = base_code == "USD" ? "defaultChoice" : "";
        } else if (i == 1) {
            defaultChoice = base_code == "GBP" ? "defaultChoice" : "";
        }

        let optionTag = `<option value="${base_code}" ${defaultChoice}>${base_code}</option>`;
        dropDownList[i].insertAdjacentHTML('beforeend', optionTag);
    }
}
