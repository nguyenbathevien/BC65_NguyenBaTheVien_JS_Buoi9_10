var DSNV = [];

document.querySelector("#btnThemNV").onclick = function () {
  var nv = layThongTin();
  var isVaLid = kiemTraRong(
    nv.taiKhoan,
    "#tbTKNV",
    "Tài khoản tối đa 4-6 ký số và Không được để rỗng"
  );
  // isVaLid &=
  //   kiemTraRong(
  //     nv.taiKhoan,
  //     "#tbTKNV",
  //     "Tài khoản tối đa 4-6 ký số và Không được để rỗng"
  //   ) &&
  //   kiemTraDoDai(
  //     4,
  //     6,
  //     nv.taiKhoan,
  //     "#tbTKNV",
  //     "Độ dài phải từ 4 đến 6 kí số"
  //   ) &&
  //   kiemTraTrung(nv.taiKhoan, DSNV, "#tbTKNV", "Tài khoản bị trùng");
  // isVaLid &=
  //   kiemTraRong(
  //     nv.hoTen,
  //     "#tbTen",
  //     "Họ tên phải là chữ và Không được để rỗng"
  //   ) && kiemTraChuoi(nv.hoTen, "#tbTen", "Họ Tên chỉ có thể là chữ");
  // isVaLid &=
  //   kiemTraRong(nv.email, "#tbEmail", "Email Không được để rỗng") &&
  //   kiemTraEmail(nv.email, "#tbEmail", "Email không đúng định dạng") &&
  //   kiemTraTrung(nv.email, DSNV, "#tbEmail", "Email Đã Tồn Tại");
  // isVaLid &=
  //   kiemTraRong(nv.matKhau, "#tbMatKhau", "Mật Khẩu Không được để rỗng") &&
  //   kiemTraDoDai(
  //     6,
  //     10,
  //     nv.matKhau,
  //     "#tbMatKhau",
  //     "Độ dài mật khẩu phải từ 6 đến 10 kí tự"
  //   ) &&
  //   kiemTraMatKhau(
  //     nv.matKhau,
  //     "#tbMatKhau",
  //     "Mật Khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
  //   );
  // isVaLid &=
  //   kiemTraRong(nv.luongCB, "#tbLuongCB", "Lương Không được để rỗng") &&
  //   kiemTraLuong(
  //     nv.luongCB,
  //     "#tbLuongCB",
  //     "Lương Cơ Bản phải từ 1 triệu đến 20 triệu"
  //   );
  // isVaLid &= kiemTraChucVu(nv.chucVu, "#tbChucVu", "Vui lòng chon chức vụ");
  // isVaLid &=
  //   kiemTraRong(nv.gioLam, "#tbGiolam", "Giờ làm Không được để rỗng") &&
  //   kiemTraDoDai(80, 200, nv.gioLam, "#tbGiolam", "Giờ làm phải từ 80-200 giờ");
  if (isVaLid) {
    DSNV.push(nv);
    renderDSNV(DSNV);
    console.log("DSNV: ", DSNV);
  }
};

// xoa SV
function xoaNV(taiKhoan) {
  var viTri = DSNV.findIndex(function (nv) {
    return nv.taiKhoan === taiKhoan;
  });
  if (viTri != -1) {
    DSNV.splice(viTri, 1);
    renderDSNV(DSNV);
  }
}

// Xử lý sự kiện cho nút "Sửa nhân viên"
function suaNV(taiKhoan) {
  $("#myModal").modal("show");
  $("#header-title").text("Sửa nhân viên");
  var nhanVien = DSNV.find(function (nv) {
    return nv.taiKhoan === taiKhoan;
  });
 
  
  
}

