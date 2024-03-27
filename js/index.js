var DSNV = [];
var JsonData = localStorage.getItem("DSNV_LOCAL");
if (JsonData !== null) {
  JsonData = JSON.parse(JsonData);
  DSNV = JsonData.map(function (item) {
    return new NhanVien(
      item.taiKhoan,
      item.hoTen,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCB,
      item.chucVu,
      item.gioLam
    );
  });
  renderDSNV(DSNV);
}
document.querySelector("#btnThemNV").onclick = function () {
  var nv = layThongTin();
  var isVaLid = kiemTraRong(
    nv.taiKhoan,
    "#tbTKNV",
    "Tài khoản tối đa 4-6 ký số và Không được để rỗng"
  );
  isVaLid &=
    kiemTraRong(
      nv.taiKhoan,
      "#tbTKNV",
      "Tài khoản tối đa 4-6 ký số và Không được để rỗng"
    ) &&
    kiemTraDoDai(
      4,
      6,
      nv.taiKhoan,
      "#tbTKNV",
      "Độ dài phải từ 4 đến 6 kí số"
    ) &&
    kiemTraTrungTK(nv.taiKhoan, DSNV, "#tbTKNV", "Tài khoản bị trùng");
  isVaLid &=
    kiemTraRong(
      nv.hoTen,
      "#tbTen",
      "Họ tên phải là chữ và Không được để rỗng"
    ) && kiemTraChuoi(nv.hoTen, "#tbTen", "Họ Tên chỉ có thể là chữ");
  isVaLid &=
    kiemTraRong(nv.email, "#tbEmail", "Email Không được để rỗng") &&
    kiemTraEmail(nv.email, "#tbEmail", "Email không đúng định dạng") &&
    kiemTraTrungEmail(nv.email, DSNV, "#tbEmail", "Email Đã Tồn Tại");
  isVaLid &=
    kiemTraRong(nv.matKhau, "#tbMatKhau", "Mật Khẩu Không được để rỗng") &&
    kiemTraDoDai(
      6,
      10,
      nv.matKhau,
      "#tbMatKhau",
      "Độ dài mật khẩu phải từ 6 đến 10 kí tự"
    ) &&
    kiemTraMatKhau(
      nv.matKhau,
      "#tbMatKhau",
      "Mật Khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );
  isVaLid &=
    kiemTraRong(nv.luongCB, "#tbLuongCB", "Lương Không được để rỗng") &&
    kiemTraLuong(
      nv.luongCB,
      "#tbLuongCB",
      "Lương Cơ Bản phải từ 1 triệu đến 20 triệu"
    );
  isVaLid &= kiemTraChucVu(nv.chucVu, "#tbChucVu", "Vui lòng chon chức vụ");
  isVaLid &=
    kiemTraRong(nv.gioLam, "#tbGiolam", "Giờ làm Không được để rỗng") &&
    kiemTraDoDai(80, 200, nv.gioLam, "#tbGiolam", "Giờ làm phải từ 80-200 giờ");
  if (isVaLid) {
    DSNV.push(nv);
    var dataJson = JSON.stringify(DSNV);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    renderDSNV(DSNV);
  }
};

// xoa SV
function xoaNV(taiKhoan) {
  var viTri = DSNV.findIndex(function (nv) {
    return nv.taiKhoan === taiKhoan;
  });
  if (viTri != -1) {
    DSNV.splice(viTri, 1);
    var dataJson = JSON.stringify(DSNV);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    renderDSNV(DSNV);
  }
}

// Xử lý sự kiện cho nút "Sửa nhân viên"
function suaNV(taiKhoan) {
  var nhanVien = DSNV.find(function (nv) {
    return nv.taiKhoan === taiKhoan;
  });
  getEle("#tknv").readOnly = true;
  hienThiFormSua(nhanVien);
  $("#myModal").modal("show"); // Hiển thị modal
  $("#header-title").text("Sửa nhân viên"); // Đặt tiêu đề modal thành "Sửa nhân viên"
  $("#btnThemNV").hide(); // Ẩn nút "Thêm nhân viên"
  $("#btnCapNhat").show(); // Hiển thị nút "Cập nhật"
}
getEle("#btnCapNhat").onclick = function () {
  var nv = layThongTin();
  var viTri = DSNV.findIndex(function (ds) {
    return ds.taiKhoan === nv.taiKhoan;
  });
  DSNV[viTri] = nv;
  var isVaLid = kiemTraRong(
    nv.taiKhoan,
    "#tbTKNV",
    "Tài khoản tối đa 4-6 ký số và Không được để rỗng"
  );
  isVaLid &=
    kiemTraRong(
      nv.taiKhoan,
      "#tbTKNV",
      "Tài khoản tối đa 4-6 ký số và Không được để rỗng"
    ) &&
    kiemTraDoDai(4, 6, nv.taiKhoan, "#tbTKNV", "Độ dài phải từ 4 đến 6 kí số");

  isVaLid &=
    kiemTraRong(
      nv.hoTen,
      "#tbTen",
      "Họ tên phải là chữ và Không được để rỗng"
    ) && kiemTraChuoi(nv.hoTen, "#tbTen", "Họ Tên chỉ có thể là chữ");
  isVaLid &=
    kiemTraRong(nv.email, "#tbEmail", "Email Không được để rỗng") &&
    kiemTraEmail(nv.email, "#tbEmail", "Email không đúng định dạng") &&
    kiemTraTrungEmail(nv.email, DSNV, "#tbEmail", "Email Đã Tồn Tại");
  isVaLid &=
    kiemTraRong(nv.matKhau, "#tbMatKhau", "Mật Khẩu Không được để rỗng") &&
    kiemTraDoDai(
      6,
      10,
      nv.matKhau,
      "#tbMatKhau",
      "Độ dài mật khẩu phải từ 6 đến 10 kí tự"
    ) &&
    kiemTraMatKhau(
      nv.matKhau,
      "#tbMatKhau",
      "Mật Khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    );
  isVaLid &=
    kiemTraRong(nv.luongCB, "#tbLuongCB", "Lương Không được để rỗng") &&
    kiemTraLuong(
      nv.luongCB,
      "#tbLuongCB",
      "Lương Cơ Bản phải từ 1 triệu đến 20 triệu"
    );
  isVaLid &= kiemTraChucVu(nv.chucVu, "#tbChucVu", "Vui lòng chon chức vụ");
  isVaLid &=
    kiemTraRong(nv.gioLam, "#tbGiolam", "Giờ làm Không được để rỗng") &&
    kiemTraDoDai(80, 200, nv.gioLam, "#tbGiolam", "Giờ làm phải từ 80-200 giờ");
  if (isVaLid) {
    var dataJson = JSON.stringify(DSNV);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    renderDSNV(DSNV);
  }
};
// Xử lý sự kiện cho nút "Thêm nhân viên"
getEle("#btnThem").onclick = function () {
  // Xóa dữ liệu form
  getEle("#tknv").value = "";
  getEle("#tknv").readOnly = false;
  getEle("#name").value = "";
  getEle("#email").value = "";
  getEle("#password").value = "";
  getEle("#datepicker").value = "";
  getEle("#luongCB").value = "";
  getEle("#chucvu").value = "chucvu";
  getEle("#gioLam").value = "";
  // Hiển thị modal và đặt tiêu đề modal thành "Thêm nhân viên"
  $("#myModal").modal("show");
  $("#header-title").text("Thêm nhân viên");
  // Hiển thị nút "Thêm nhân viên" và ẩn nút "Cập nhật"
  $("#btnThemNV").show();
  $("#btnCapNhat").hide();
};

// Tìm Kiếm
getEle("#btnTimNV").onclick = function () {
  var textSearch = getEle("#searchName").value.trim()?.toLowerCase();
  var resultSearch = [];
  if (textSearch.length > 0) {
    resultSearch = DSNV.filter(function (nv) {
      return nv.xepLoai().toLowerCase().includes(textSearch);
    });
    renderDSNV(resultSearch);
  } else {
    renderDSNV(DSNV);
  }
};
