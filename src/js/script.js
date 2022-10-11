const dropDownList = document.querySelectorAll('.select-from-choice');

for (let i = 0; i < dropDownList.length; i++) {
    for (base_code in country_code) {
        let optionTag = `<option value="$base_code}">${base_code}</option>`;
        dropDownList[i].insertAdjacentHTML('beforeend', optionTag);
    }
}