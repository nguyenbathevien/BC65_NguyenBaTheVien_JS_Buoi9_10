// Kiểm tra rỗng
function kiemTraRong(value, idErr, message) {
  if (value === "" || value == 0) {
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  } else {
    getEle(idErr).innerHTML = "";
    return true;
  }
}
// kiểm tra ký số
function kiemTraKySo(value, idErr, message) {
  const re = /^[0-9]+$/;
  var isNumber = re.test(value);
  if (isNumber) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    return false;
  }
}
// kiểm tra chuỗi
function kiemTraChuoi(value, idErr, message) {
  const re =
    /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
  var isString = re.test(value);

  if (isString) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  }
}
// kiểm tra độ dài
function kiemTraDoDai(min, max, value, idErr, message) {
  if (value.length > max || value.length < min) {
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  } else {
    getEle(idErr).innerHTML = "";
    return true;
  }
}
// kiểm tra trùng tài khoản hoặc email
function kiemTraTrungTK(value, array, idErr, message) {
  var viTri = array.findIndex(function (nv) {
    return nv.taiKhoan === value;
  });
  if (viTri != -1) {
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  } else {
    getEle(idErr).innerHTML = "";
    return true;
  }
}
function kiemTraTrungEmail(value, array, idErr, message) {
  var viTri = array.findIndex(function (nv) {
    return nv.email === value;
  });
  if (viTri != -1) {
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  } else {
    getEle(idErr).innerHTML = "";
    return true;
  }
}
function kiemTraEmail(value, idErr, message) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isEmail = re.test(value);

  if (isEmail) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  }
}

// kiểm tra mật khẩu
function kiemTraMatKhau(value, idErr, message) {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  var isPassWord = re.test(value);

  if (isPassWord) {
    getEle(idErr).innerHTML = "";
    return true;
  } else {
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  }
}

// Lương cơ bản 
function kiemTraLuong(value, idErr, message) {
  if(value<1e6 || value > 20e6){
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  }
  else{
    getEle(idErr).innerHTML = "";
    return true;
  }
}

// Kiểm Tra Chức Vụ
function kiemTraChucVu(value,idErr,message){
  if(value === "sep" ||value === "truongphong"|| value==="nhanvien"){
    getEle(idErr).innerHTML = "";
    return true;
  }
  else{
    getEle(idErr).innerHTML = message;
    getEle(idErr).style.display = "flex";
    return false;
  }
}
