let ketQua = document.getElementById("ketQua");

// Bài tập 1
const handleCheckTrungTuyen = (tongdiem, diemChuan) => {
  if (tongdiem >= diemChuan) {
    return true;
  } else {
    return false;
  }
};

const handleCheckZone = (zone) => {
  let diemZone = 0;
  switch (zone) {
    case "zone0":
      diemZone = 0;
      break;
    case "zoneA":
      diemZone = 2;
      break;
    case "zoneB":
      diemZone = 1;
      break;
    case "zoneC":
      diemZone = 0.5;
      break;
    default:
      break;
  }
  return diemZone;
};
const handleCheckDoiTuong = (zone) => {
  let diemDoiTuong = 0;
  switch (zone) {
    case "obj-0":
      diemDoiTuong = 0;
      break;
    case "obj-1":
      diemDoiTuong = 2.5;
      break;
    case "obj-2":
      diemDoiTuong = 1.5;
      break;
    case "obj-3":
      diemDoiTuong = 1;
      break;
    default:
      break;
  }
  return diemDoiTuong;
};

const handleTuyenSinh = () => {
  ketQua.classList.remove("bg-danger", "bg-primary");
  let diemMon1 = document.querySelector("#form-diem1").value * 1;
  console.log("diemMon1", diemMon1);
  let diemMon2 = document.querySelector("#form-diem2").value * 1;
  console.log("diemMon2", diemMon2);
  let diemMon3 = document.querySelector("#form-diem3").value * 1;
  console.log("diemMon3", diemMon3);
  let diemChuan = document.querySelector("#form-diemChuan").value * 1;
  console.log("diem chuan", diemChuan);
  let getKhuVuc = document.querySelector("#checkbox-khuVuc").value;
  console.log("khu vuc", getKhuVuc);
  let getDoiTuong = document.querySelector("#checkbox-doiTuong").value;
  console.log("doi tuong", getDoiTuong);

  // validate null
  if (
    !document.querySelector("#form-diem1").value ||
    !document.querySelector("#form-diem2").value ||
    !document.querySelector("#form-diem3").value ||
    !document.querySelector("#form-diem1").value
  ) {
    alert("Mời nhập đủ thông tin");
    return;
  }

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    //validate diem 0
    ketQua.classList.remove("d-none");
    ketQua.classList.add("bg-danger");
    ketQua.innerHTML = "Bạn đã rớt";
    return;
  }
  //tinh diem vung
  let diemZone = handleCheckZone(getKhuVuc);
  console.log("checkKhuvuc", handleCheckZone(getKhuVuc));
  // tinh diem doi tuong
  let diemDoiTuong = handleCheckDoiTuong(getDoiTuong);
  console.log("checkDoiTuong", handleCheckDoiTuong(getDoiTuong));
  // tinh tong diem
  let tongdiem = 0;
  tongdiem = diemMon1 + diemMon2 + diemMon3 + diemZone + diemDoiTuong;
  //xet tuyen sinh
  let ketQuaTuyenSinh = handleCheckTrungTuyen(tongdiem, diemChuan);
  if (ketQuaTuyenSinh) {
    ketQua.classList.remove("d-none");
    ketQua.classList.add("bg-primary");
    ketQua.innerHTML = "Chúc mừng bạn đã đậu" + " " + "Tổng điểm: " + tongdiem;
  } else {
    ketQua.classList.remove("d-none");
    ketQua.classList.add("bg-danger");
    ketQua.innerHTML = "Bạn đã rớt" + "Tổng điểm: " + tongdiem;
  }
};

// Bài tập 2
const handleKW = (soKW) => {
  let tienKW = 0;

  if (soKW <= 50) {
    tienKW = 500 * soKW;
  } else if (soKW <= 100) {
    tienKW = 50 * 500 + 650 * (soKW - 50);
  } else if (soKW <= 200) {
    tienKW = 50 * 500 + 650 * 50 + 850 * (soKW - 100);
  } else if (soKW <= 350) {
    tienKW = 50 * 500 + 650 * 50 + 850 * 100 + 1100 * (soKW - 200);
  } else {
    tienKW = 50 * 500 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (soKW - 350);
  }

  return tienKW;
};

const handleTienDien = () => {
  let getTenNguoiDung = document.querySelector("#form-nguoiDung").value;
  console.log("getTenNguoiDung", getTenNguoiDung);
  let getSoKW = document.querySelector("#form-soKW").value * 1;
  console.log("getSoKW", getSoKW);

  if (
    !document.querySelector("#form-nguoiDung").value ||
    !document.querySelector("#form-soKW").value
  ) {
    alert("Mời nhập đủ thông tin");
    return;
  }

  let tongTienDien = 0;
  tongTienDien = handleKW(getSoKW);
  ketQua.classList.remove("d-none");
  ketQua.classList.add("bg-primary");
  ketQua.innerHTML =
    "Họ tên:" +
    getTenNguoiDung +
    " " +
    "Tiền điện: " +
    tongTienDien.toLocaleString();
};

//Bài tập 3

const handleCheckTinhThue = (chiuThue) => {
  let numChiuThue = 0;
  if (chiuThue <= 6e7) {
    numChiuThue = 0.05 * chiuThue;
  } else if (chiuThue <= 12e7) {
    numChiuThue = 0.05 * 6e7 + 0.1 * (chiuThue - 6e7);
  } else if (chiuThue <= 21e7) {
    numChiuThue = 0.05 * 6e7 + 0.1 * 6e7 + 0.15 * (chiuThue - 12e7);
  } else if (chiuThue <= 3.84e8) {
    numChiuThue = 0.05 * 6e7 + 0.1 * 6e7 + 0.15 * 9e7 + 0.2 * (chiuThue - 21e7);
  } else if (chiuThue <= 6.24e8) {
    numChiuThue =
      0.05 * 6e7 +
      0.1 * 6e7 +
      0.15 * 9e7 +
      0.2 * 174e6 +
      0.25 * (chiuThue - 3.84e8);
  } else if (chiuThue <= 9.6e8) {
    numChiuThue =
      0.05 * 6e7 +
      0.1 * 6e7 +
      0.15 * 9e7 +
      0.2 * 174e6 +
      0.25 * 240e6 +
      0.3 * (chiuThue - 6.24e8);
  } else {
    numChiuThue =
      0.05 * 6e7 +
      0.1 * 6e7 +
      0.15 * 9e7 +
      0.2 * 174e6 +
      0.25 * 240e6 +
      0.3 * 336e6 +
      0.35 * (chiuThue - 9.6e8);
  }
  return numChiuThue;
};

// Bài tập 4

const onDisplay = () => {
  let getloaiKH = document.querySelector("#form-loaiKH").value * 1;
  let addDisplay = document.querySelector("#form-soKetNoi");
  if (getloaiKH === 2) {
    addDisplay.classList.remove("d-none");
  } else {
    addDisplay.classList.add("d-none");
  }
};
const handleSoCapDN = (soCap) => {
  let tienCap = 0;
  if (soCap <= 10) {
    tienCap = 75;
  } else {
    tienCap = 75 + (soCap - 10) * 5;
  }
  return tienCap;
};
const handleTienCap = () => {
  let getloaiKH = document.querySelector("#form-loaiKH").value * 1;
  console.log("loai khach hang", getloaiKH);
  let getmaKH = document.querySelector("#form-maKH").value * 1;
  let getSoKenhCC = document.querySelector("#form-kenhCC").value * 1;
  let getSoKetNoi = document.querySelector("#form-soKetNoi").value * 1;
  let tongTien = 0;
  let phiDichVu = handleSoCapDN(getSoKetNoi);
  if (getloaiKH === 1) {
    tongTien = 4.5 + 20.5 + 7.5 * getSoKenhCC;
  } else {
    tongTien = 15 + phiDichVu + 50 * getSoKenhCC;
  }
  ketQua.classList.remove("d-none");
  ketQua.classList.add("bg-primary");
  ketQua.innerHTML =
    "Mã khách hàng: " +
    getmaKH +
    " " +
    "Tiền cáp: " +
    tongTien.toLocaleString() +
    "USD";
};

const handleTinhThue = () => {
  let getHoTen = document.querySelector("#form-hoTen").value;
  console.log("ho ten:", getHoTen);
  let getThuNhap = document.querySelector("#form-thuNhap").value * 1;
  console.log("thu nhap nam:", getThuNhap);
  let getPhuThuoc = document.querySelector("#form-phuThuoc").value * 1;
  console.log("phu thuoc:", getPhuThuoc);
  let thuNhapChiuThue = 0;
  thuNhapChiuThue = getThuNhap - 4000000 - getPhuThuoc * 1600000;
  let getSoChiuThue = handleCheckTinhThue(thuNhapChiuThue);
  console.log("=> tienPhaiTra:", getSoChiuThue);
  ketQua.classList.remove("d-none");
  ketQua.classList.add("bg-primary");
  ketQua.innerHTML =
    "Họ tên: " +
    getHoTen +
    " " +
    "Tiền thuế phải trả: " +
    getSoChiuThue.toLocaleString() +
    " VND";
};

//

function hienThiBai(bai) {
  ketQua.classList.add("d-none");
  let noiDung = document.querySelector(".main-content");

  let content = {
    1: `
    <h4>Bài 1: Quản lý tuyển sinh</h4>
                  <div class="mb-3">
                <!-- Điểm chuẩn -->
                <div class="mb-3">
                  <label for="" class="form-label">Nhập điểm chuẩn</label>
                  <input
                    type="number"
                    class="form-control"
                    name=""
                    id="form-diemChuan"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>

                <!-- Chọn khu vực -->
                <div class="mb-3">
                  <select
                    class="form-select form-select-lg"
                    name=""
                    id="checkbox-khuVuc"
                  >
                    <option selected value="zone0">Chọn khu vực</option>
                    <option value="zoneA">A</option>
                    <option value="zoneB">B</option>
                    <option value="zoneC">C</option>
                  </select>
                </div>
                <!-- Chọn đối tượng -->
                <div class="mb-3">
                  <select
                    class="form-select form-select-lg"
                    name=""
                    id="checkbox-doiTuong"
                  >
                    <option selected value="obj-0">Chọn đối tượng</option>
                    <option value="obj-1">1</option>
                    <option value="obj-2">2</option>
                    <option value="obj-3">3</option>
                  </select>
                </div>

                <label for="" class="form-label">Nhập Điểm Môn 1</label>
                <input
                  type="number"
                  class="form-control"
                  name=""
                  id="form-diem1"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <label for="" class="form-label">Nhập Điểm Môn 2</label>
                <input
                  type="number"
                  class="form-control"
                  name=""
                  id="form-diem2"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <label for="" class="form-label">Nhập Điểm Môn 3</label>
                <input
                  type="number"
                  class="form-control"
                  name=""
                  id="form-diem3"
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                onclick="handleTuyenSinh()"
              >
                Tính
              </button>
       
    `,
    2: `<h4>Bài 2: Tính tiền điện</h4>
                  <div class="mb-3">
                <label for="" class="form-label">Tên người dùng</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id="form-nguoiDung"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <label for="" class="form-label">Số KW</label>
                <input
                  type="number"
                  class="form-control"
                  name=""
                  id="form-soKW"
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>

              <button
                type="button"
                class="btn btn-primary"
                onclick="handleTienDien()"
              >
                Tính tiền điện
              </button>
                  
    `,
    3: `<h4>Bài 3: Tính thuế thu nhập cá nhân</h4>
                  <div class="mb-3">
                <label for="" class="form-label">Nhập họ tên</label>
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id="form-hoTen"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <label for="" class="form-label">Nhập tổng thu nhập năm</label>
                <input
                  type="number"
                  class="form-control"
                  name=""
                  id="form-thuNhap"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <label for="" class="form-label">Số người phụ thuộc</label>
                <input
                  type="number"
                  class="form-control"
                  name=""
                  id="form-phuThuoc"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <button
                  type="button"
                  class="btn btn-primary mt-3"
                  onclick="handleTinhThue()"
                >
                  Tính
                </button>
              </div>
              
    `,
    4: `<h4>Bài 4: Tính tiền cáp</h4>
                  <div class="mb-3">
                <select
                  class="form-select form-select-lg mb-3"
                  name=""
                  id="form-loaiKH"
                  onchange="onDisplay()"
                >
                  <option selected>Chọn loại khách hàng</option>
                  <option value="1">Nhà dân</option>
                  <option value="2">Doanh nghiệp</option>
                </select>
                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control"
                    name=""
                    id="form-maKH"
                    aria-describedby="helpId"
                    placeholder="Nhập mã khách hàng"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control"
                    name=""
                    id="form-kenhCC"
                    aria-describedby="helpId"
                    placeholder="Nhập số kênh cao cấp"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control d-none"
                    name=""
                    id="form-soKetNoi"
                    aria-describedby="helpId"
                    placeholder="Nhập số kết nối"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary mt-3"
                  onclick="handleTienCap()"
                >
                  Tính
                </button>
              </div>
      
    `,
  };

  noiDung.innerHTML = content[bai];
}
