function displayStudentInfo() {

    var studentlist = new Array();

    while (true) {
        var maSV = prompt("Nhap ma so SV hoac nhan Cancel de ket thuc: ");
        if (maSV == null) {
            break;
            // dung chuong trinh
        }
        var tenSV = prompt("Nhap ten SV");
        var LopSV = prompt("Nhap lop SV: ");
        var student = {
            maSV,
            tenSV,
            LopSV
        };

        studentlist.push(student);
    }

    if (studentlist.length > 0) {
        document.write("<table width='50%' border='1' > ");
        document.write("<tr>");
        document.write("<td colspan='3' align='center' style='color: red; font-wieght:bold'> DANH SACH SINH VIEN </td>");
        document.write("</tr>");

        document.write("<tr>");
        document.write("<td align ='center' > MSSV</td>");
        document.write("<td align ='center' > Ten</td>");
        document.write("<td align ='center' > Lop</td>");
        document.write("</tr>");

        for (let index = 0; index < studentlist.length; index++) {
            const element = studentlist[index];
            document.write("<tr>");
            document.write("<td align ='center' >" + element.maSV + "</td>");
            document.write("<td align ='center' > " + element.tenSV + "</td>");
            document.write("<td align ='center' > " + element.LopSV + "</td>");
            document.write("</tr>");

        }

        document.write("</table>");
    }

}

displayStudentInfo();