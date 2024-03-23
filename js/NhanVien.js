function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;

  this.tinhLuong = function () {
    var tongluong;
    if (this.chucVu === "sep") {
      tongluong = this.luongCB * 3;
    } else if (this.chucVu === "truongphong") {
      tongluong = this.luongCB * 2;
    } else {
      tongluong = this.luongCB;
    }
    return tongluong;
  };
  this.xepLoai = function () {
    var loai;
    if (this.chucVu) {
      if (this.gioLam >= 192) {
        loai = "Nhân viên Xuất Sắc";
      } else if (this.gioLam >= 176) {
        loai = "Nhân viên Giỏi";
      } else if (this.gioLam >= 160) {
        loai = "Nhân viên Khá";
      } else {
        loai = "Nhân viên Trung Bình";
      }
    }
    return loai;
  };
}
