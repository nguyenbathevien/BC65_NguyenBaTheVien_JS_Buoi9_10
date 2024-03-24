function layThongTin() {
  var taiKhoan = getEle("#tknv").value;
  var hoTen = getEle("#name").value;
  var email = getEle("#email").value;
  var matKhau = getEle("#password").value;
  var ngayLam = getEle("#datepicker").value;
  var luongCB = +getEle("#luongCB").value;
  var chucVu = getEle("#chucvu").value;
  var gioLam = +getEle("#gioLam").value;

  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    gioLam
  );
  return nhanVien;
}

function renderDSNV(DSNV) {
  var contentHTML = "";
  for (var i = 0; i < DSNV.length; i++) {
    var nv = DSNV[i];
    var contentTR = `<tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tinhLuong()}</td>
    <td>${nv.xepLoai()}</td>
    <td><button id="sua" class="btn btn-warning" onclick="suaNV('${
      nv.taiKhoan
    }')">Sửa Nhân Viên</button>
    <button class="btn btn-danger" onclick="xoaNV('${
      nv.taiKhoan
    }')">Xóa Nhân Viên</button></td>
</tr>`;
    contentHTML += contentTR;
  }

  getEle("#tableDanhSach").innerHTML = contentHTML;
}
function hienThiFormSua(nhanVien) {
  // Hiển thị modal
  $("#myModal").modal("show");

  // Đặt tiêu đề modal thành "Sửa nhân viên"
  $("#header-title").text("Sửa nhân viên");

  // Hiển thị thông tin của nhân viên vào các trường nhập liệu
  getEle("#tknv").value = nhanVien.taiKhoan;
  getEle("#name").value = nhanVien.hoTen;
  getEle("#email").value = nhanVien.email;
  getEle("#password").value = nhanVien.matKhau;
  getEle("#datepicker").value = nhanVien.ngayLam;
  getEle("#luongCB").value = nhanVien.luongCB;
  getEle("#chucvu").value = nhanVien.chucVu;
  getEle("#gioLam").value = nhanVien.gioLam;

  // Ẩn button "Thêm người dùng", hiển thị button "Cập nhật"
  $("#btnThemNV").hide();
  $("#btnCapNhat").show();
}
