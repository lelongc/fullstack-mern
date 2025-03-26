
// Số thứ tự bắt đầu từ 1
let stt = 1;

// 1) Hiển thị ảnh đại diện khi người dùng chọn file
// const avatarInput = document.getElementById("avatar");
// const previewImg = document.getElementById("preview");

// avatarInput.addEventListener("change", function() {
//   if (this.files && this.files[0]) {
//     const reader = new FileReader();
//     reader.onload = function(e) {
//       previewImg.style.display = "block";
//       previewImg.src = e.target.result;
//     };
//     reader.readAsDataURL(this.files[0]);
//   } else {
//     previewImg.style.display = "none";
//     previewImg.src = "";
//   }
// });

// 2) Bắt sự kiện submit form
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault(); // chặn load trang

  // Lấy các giá trị
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const email = document.getElementById("email").value.trim();
  const avatarFile = document.getElementById("avatar").files[0];

  // Kiểm tra hợp lệ
  let valid = true;

  // Regex cho Họ Và Tên (ít nhất 2 từ, mỗi từ viết hoa ký tự đầu)
  const nameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
  if (!nameRegex.test(name)) {
    setInvalid("name");
    valid = false;
  } else {
    setValid("name");
  }

  // Regex cho Số Điện Thoại: 0XXX.XXX.XXX
  const phoneRegex = /^0\d{3}\.\d{3}\.\d{3}$/;
  if (!phoneRegex.test(phone)) {
    setInvalid("phone");
    valid = false;
  } else {
    setValid("phone");
  }

  // Ngày Đặt phải sau ngày hiện tại
  const today = new Date();
  const selectedDate = new Date(date);
  if (!date || selectedDate <= today) {
    setInvalid("date");
    valid = false;
  } else {
    setValid("date");
  }

  // Email: name_email@gmail.com
  const emailRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z0-9._%+\-!@#$^&*]{3,}@gmail\.com$/;
  if (!emailRegex.test(email)) {
    setInvalid("email");
    valid = false;
  } else {
    setValid("email");
  }

  // Ảnh đại diện (không rỗng)
  if (!avatarFile) {
    setInvalid("avatar");
    valid = false;
  } else {
    setValid("avatar");
  }

  // Nếu hợp lệ => Thêm vào bảng + Đóng Modal
  if (valid) {
    addToTable(name, phone, date, email, avatarFile);
    // Đóng modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
    modal.hide();
    // Reset form
    document.getElementById("orderForm").reset();
    previewImg.style.display = "none";
    previewImg.src = "";
  }
});

// Hàm đánh dấu invalid
function setInvalid(id) {
  document.getElementById(id).classList.add("is-invalid");
}
function setValid(id) {
  document.getElementById(id).classList.remove("is-invalid");
}

// 3) Thêm dữ liệu vào bảng và thêm STT
function addToTable(name, phone, date, email, file) {
  const table = document.getElementById("orderTable");
  const newRow = table.insertRow();

  // Cột STT
  newRow.insertCell(0).innerText = stt++;

  // Cột Họ Và Tên
  newRow.insertCell(1).innerText = name;
  // Cột Số Điện Thoại
  newRow.insertCell(2).innerText = phone;
  // Cột Ngày Đặt
  newRow.insertCell(3).innerText = date;
  // Cột Email
  newRow.insertCell(4).innerText = email;
  // Cột Ảnh Đại Diện
  const imgCell = newRow.insertCell(5);

  // Tạo thẻ img để hiển thị
  const img = document.createElement("img");
  img.width = 50;
  const reader = new FileReader();
  reader.onload = function(e) {
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);

  imgCell.appendChild(img);
}

