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

