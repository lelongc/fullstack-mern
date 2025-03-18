function cal(operation) {
    const num1 = parseFloat(document.getElementById("txtNum1").value);
    const num2 = parseFloat(document.getElementById("txtNum2").value);
    const result_output = document.getElementById("txtResult");

    if (isNaN(num1) || isNaN(num2)) {
        const resultElement = document.getElementById("idcheck");
        resultElement.innerHTML = "Lỗi! Vui lòng nhập lại";
    } else {
        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;

            case 'sub':
                result = num1 - num2;
                break;

            case 'mul':
                result = num1 * num2;
                break;

            case 'div':
                result = num1 / num2;
                break;

            case 'rem':
                result = num1 % num2;
                break;


            default:
                result = "Phép toàn không hợp lệ";
        }
        result_output.value = result;
    }

}