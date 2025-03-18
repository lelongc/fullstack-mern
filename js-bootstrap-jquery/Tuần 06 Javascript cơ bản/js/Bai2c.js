function chonCaPhe() {
    var checkboxes = document.querySelectorAll('.frm input[type="checkbox"]');
    var selectedCoffees = [];
    const displayOption = document.getElementById("txtDisplay");

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedCoffees.push(checkboxes[i].value);
        }
    }

    if (selectedCoffees.length > 0) {
        displayOption.value = selectedCoffees.join(', ');
    } else {
        alert("Bạn chưa chọn bất kỳ loại cà phê nào.");
    }
}