$(function () {
  const orderForm = $("#orderForm"),
    nameInput = $("#name"),
    phoneInput = $("#phone"),
    emailInput = $("#email"),
    addressInput = $("#address"),
    dateInput = $("#date"),
    teacherRadios = $("[name=gv]"),
    orderTable = $("#orderTable"),
    orderModal = new bootstrap.Modal($("#orderModal")[0]);

  nameInput.val("Nguyen Van An");

  function showError(input, message) {
    input.addClass("is-invalid").siblings(".invalid-feedback").text(message);
  }

  function clearError(input) {
    input
      .removeClass("is-invalid")
      .addClass("is-valid")
      .siblings(".invalid-feedback")
      .text("");
  }

  function validate(input, regex, message) {
    return regex.test(input.val().trim())
      ? (clearError(input), true)
      : (showError(input, message), false);
  }

  orderForm.on("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const nameVal = nameInput.val().trim(),
      phoneVal = phoneInput.val().trim(),
      emailVal = emailInput.val().trim(),
      addressVal = addressInput.val().trim(),
      dateVal = dateInput.val(),
      teacherVal = teacherRadios.filter(":checked").val();

    const validations = [
      [
        nameInput,
        /^[A-ZÀ-Ỹ][a-zà-ỹ]+(\s[A-ZÀ-Ỹ][a-zà-ỹ]+)+$/,
        "Họ tên phải có ít nhất 2 từ, mỗi từ viết hoa!",
      ],
      [
        phoneInput,
        /^(0[9876543]\d{2})\.\d{3}\.\d{3}$/,
        "SĐT theo mẫu: 0XXX.XXX.XXX",
      ],
      [
        emailInput,
        /^[a-zA-Z0-9_]{3,}@gmail\.com$/,
        "Email theo mẫu: name_email@gmail.com",
      ],
      [addressInput, /^[A-Za-z0-9\/]+$/, "Địa chỉ chỉ chứa số, chữ và '/'"],
    ];

    validations.forEach(
      ([input, regex, message]) => (valid &= validate(input, regex, message))
    );

    if (!dateVal) {
      valid = false;
      showError(dateInput, "Vui lòng chọn ngày sinh!");
    } else {
      let age = new Date().getFullYear() - new Date(dateVal).getFullYear();
      age >= 12
        ? clearError(dateInput)
        : ((valid = false), showError(dateInput, "Tuổi phải từ 12+!"));
    }

    if (!teacherVal) {
      valid = false;
      teacherRadios
        .addClass("is-invalid")
        .last()
        .parent()
        .append('<div class="invalid-feedback d-block">Chọn giáo viên!</div>');
    } else {
      teacherRadios
        .removeClass("is-invalid")
        .parent()
        .find(".invalid-feedback")
        .remove();
    }

    if (valid) {
      orderTable.append(`
        <tr>
          <td>${orderTable.find("tr").length + 1}</td>
          <td>${nameVal}</td>
          <td>${phoneVal}</td>
          <td>${emailVal}</td>
          <td>${addressVal}</td>
          <td>${new Date(dateVal).getFullYear()}</td>
          <td>${teacherVal}</td>
        </tr>`);

      orderForm[0].reset();
      nameInput.val("Nguyen Van An");
      orderForm.find("input").removeClass("is-valid is-invalid");
      orderModal.hide();
    }
  });
});
