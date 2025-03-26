$(function () {
  $("#orderForm").on("submit", function (e) {
    e.preventDefault(); // Chặn load trang

    // Lấy các giá trị
    const name = $("#name").val().trim();
    const phone = $("#phone").val().trim();
    const date = $("#date").val();
    const email = $("#email").val().trim();
    const avatarFile = $("#avatar")[0].files[0];

    let valid = true;

    // Regex cho Họ Và Tên (ít nhất 2 từ, mỗi từ viết hoa ký tự đầu)
    const nameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
    valid &= validateInput("#name", nameRegex, name);

    // Regex cho Số Điện Thoại: 0XXX.XXX.XXX
    const phoneRegex = /^0\d{3}\.\d{3}\.\d{3}$/;
    valid &= validateInput("#phone", phoneRegex, phone);

    // Ngày Đặt phải sau ngày hiện tại
    const today = new Date();
    const selectedDate = new Date(date);
    valid &= validateInput(
      "#date",
      null,
      date && selectedDate > today,
      "Ngày đặt phải sau hôm nay!"
    );

    // Email: name_email@gmail.com
    const emailRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z0-9._%+\-!@#$^&*]{3,}@gmail\.com$/;
    valid &= validateInput("#email", emailRegex, email);

    // Ảnh đại diện (không rỗng)
    valid &= validateInput("#avatar", null, avatarFile, "Vui lòng chọn ảnh!");

    // Nếu hợp lệ => Thêm vào bảng + Đóng Modal
    if (valid) {
      addToTable(name, phone, date, email, avatarFile);
      bootstrap.Modal.getInstance($("#orderModal")[0]).hide();
      $("#orderForm")[0].reset();
      $("#previewImg").hide().attr("src", "");
    }
  });

  // Hàm kiểm tra input
  function validateInput(
    selector,
    regex,
    value,
    errorMsg = "Dữ liệu không hợp lệ!"
  ) {
    if (regex ? regex.test(value) : value) {
      $(selector).removeClass("is-invalid");
      return true;
    } else {
      $(selector)
        .addClass("is-invalid")
        .siblings(".invalid-feedback")
        .text(errorMsg);
      return false;
    }
  }

  // 3) Thêm dữ liệu vào bảng và thêm STT
  function addToTable(name, phone, date, email, file) {
    const table = $("#orderTable");
    const stt = table.find("tr").length;
    const reader = new FileReader();

    reader.onload = function (e) {
      const newRow = `
        <tr>
          <td>${stt}</td>
          <td>${name}</td>
          <td>${phone}</td>
          <td>${date}</td>
          <td>${email}</td>
          <td><img src="${e.target.result}" width="50"></td>
        </tr>`;
      table.append(newRow);
    };

    reader.readAsDataURL(file);
  }
});
