document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử cần thiết
  const orderForm = document.getElementById("orderForm");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const dateInput = document.getElementById("date");
  const teacherRadios = document.getElementsByName("gv");
  const orderTable = document.getElementById("orderTable");
  const orderModalEl = document.getElementById("orderModal");
  // Tạo instance của Modal theo Bootstrap 5
  const orderModal = new bootstrap.Modal(orderModalEl);

  // Thiết lập giá trị mặc định cho Họ và Tên
  nameInput.value = "Nguyen Van An";

  // Hàm hiển thị lỗi cho một input cụ thể
  function showError(input, message) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    // Tìm phần tử hiển thị lỗi (sibling có class invalid-feedback)
    let errorElem = input.parentElement.querySelector(".invalid-feedback");
    if (errorElem) {
      errorElem.textContent = message;
    }
  }

  // Hàm xóa lỗi của một input cụ thể
  function clearError(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    let errorElem = input.parentElement.querySelector(".invalid-feedback");
    if (errorElem) {
      errorElem.textContent = "";
    }
  }

  // Xử lý sự kiện submit form
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Lấy giá trị của từng input
    const nameVal = nameInput.value.trim();
    const phoneVal = phoneInput.value.trim();
    const emailVal = emailInput.value.trim();
    const addressVal = addressInput.value.trim();
    const dateVal = dateInput.value;
    let teacherVal = "";
    teacherRadios.forEach((radio) => {
      if (radio.checked) teacherVal = radio.value;
    });

    // --- a. Kiểm tra HỌ VÀ TÊN ---
    // Phải có ít nhất 2 từ và mỗi từ bắt đầu bằng chữ in hoa, phần còn lại là chữ thường
    let nameWords = nameVal.split(/\s+/);
    if (nameWords.length < 2) {
      valid = false;
      showError(nameInput, "Họ và tên phải có ít nhất 2 từ!");
    } else {
      // Kiểm tra từng từ
      let nameValid = true;
      for (let word of nameWords) {
        if (!/^[A-ZÀ-Ỹ][a-zà-ỹ]+$/.test(word)) {
          nameValid = false;
          break;
        }
      }
      if (!nameValid) {
        valid = false;
        showError(
          nameInput,
          "Mỗi từ phải bắt đầu bằng chữ in hoa và các chữ còn lại là chữ thường!"
        );
      } else {
        clearError(nameInput);
      }
    }

    // --- b. Kiểm tra SỐ ĐIỆN THOẠI ---
    // Theo mẫu: 0XXX.XXX.XXX, với 10 số, bắt đầu bằng 09,08,07,06,05,04,03
    let phonePattern = /^(0[9876543]\d{2})\.\d{3}\.\d{3}$/;
    if (!phonePattern.test(phoneVal)) {
      valid = false;
      showError(phoneInput, "Số điện thoại phải theo mẫu: 0XXX.XXX.XXX");
    } else {
      clearError(phoneInput);
    }

    // --- c. Kiểm tra EMAIL ---
    // Theo mẫu: name_email@gmail.com, name_email ít nhất 3 ký tự (chỉ gồm chữ, số, dấu gạch dưới)
    let emailPattern = /^[a-zA-Z0-9_]{3,}@gmail\.com$/;
    if (!emailPattern.test(emailVal)) {
      valid = false;
      showError(
        emailInput,
        "Email phải theo mẫu: name_email@gmail.com với name_email >= 3 ký tự!"
      );
    } else {
      clearError(emailInput);
    }

    // --- d. Kiểm tra ĐỊA CHỈ ---
    // Chỉ cho phép chữ, số, khoảng trắng và dấu '/'
    let addressPattern = /^[A-Za-z0-9\/]+$/;
    if (!addressPattern.test(addressVal)) {
      valid = false;
      showError(addressInput, "Địa chỉ chỉ cho phép số, chữ và ký tự '/'!");
    } else {
      clearError(addressInput);
    }

    // --- e. Kiểm tra NGÀY SINH ---
    // Tuổi phải từ 12 trở lên
    if (!dateVal) {
      valid = false;
      showError(dateInput, "Vui lòng chọn ngày sinh!");
    } else {
      let birthDate = new Date(dateVal);
      let today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 12) {
        valid = false;
        showError(dateInput, "Tuổi phải từ 12 trở lên!");
      } else {
        clearError(dateInput);
      }
    }

    // --- f. Kiểm tra CHỌN GIÁO VIÊN ---
    if (teacherVal === "") {
      valid = false;
      // Vì radio không có sibling để thông báo lỗi, ta thêm thông báo lỗi ngay sau nhóm radio
      let teacherGroup = teacherRadios[teacherRadios.length - 1].parentElement;
      let errorElem = teacherGroup.querySelector(".invalid-feedback");
      if (!errorElem) {
        errorElem = document.createElement("div");
        errorElem.className = "invalid-feedback d-block";
        teacherGroup.appendChild(errorElem);
      }
      errorElem.textContent = "Vui lòng chọn giáo viên!";
      // Đánh dấu lỗi cho các radio (nếu muốn)
      teacherRadios.forEach((radio) => {
        radio.classList.add("is-invalid");
      });
    } else {
      // Xóa thông báo lỗi (nếu có)
      teacherRadios.forEach((radio) => {
        radio.classList.remove("is-invalid");
        let teacherGroup = radio.parentElement;
        let errorElem = teacherGroup.querySelector(".invalid-feedback");
        if (errorElem) {
          errorElem.textContent = "";
        }
      });
    }

    // Nếu tất cả các giá trị hợp lệ
    if (valid) {
      // Xác định số thứ tự dựa vào số dòng hiện có trong bảng
      let stt = orderTable.getElementsByTagName("tr").length + 1;
      // Lấy năm sinh từ ngày được chọn
      let birthYear = new Date(dateVal).getFullYear();
      // Tạo dòng mới cho bảng
      let newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${stt}</td>
        <td>${nameVal}</td>
        <td>${phoneVal}</td>
        <td>${emailVal}</td>
        <td>${addressVal}</td>
        <td>${birthYear}</td>
        <td>${teacherVal}</td>
      `;
      orderTable.appendChild(newRow);

      // Reset form và xóa các lớp kiểm tra
      orderForm.reset();
      // Sau reset, set lại giá trị mặc định cho name
      nameInput.value = "Nguyen Van An";
      let inputs = orderForm.querySelectorAll("input");
      inputs.forEach((inp) => {
        inp.classList.remove("is-valid", "is-invalid");
      });

      // Đóng modal bằng Bootstrap
      orderModal.hide();
    }
  });
});
