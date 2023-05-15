// BÀI TẬP VỀ NHÀ: MẢNG(ARRAY);
// tạo biến chứa  mảng

var arr1 = [];

//input: người dùng nhập vào các số vào mảng(number);
//output: đầu ra theo đề bài;
//DOM .onclick ;
document.getElementById('btnNhapSo').onclick = function(){
    //lấy dữ liệu người dùng 
    var soN = document.getElementById('nhapSo').value * 1;
    //thêm dữ liệu người dùng nhập vào mảng
    arr1.push(soN);

    document.getElementById('ketQua').innerHTML = arr1;

    

}
//CẪU 1: TÍNH TÔNG SỐ DƯƠNG
//DOM .onclick
document.getElementById('btnNhapSo_1').onclick = function(){
    //input: số người dùng nhập vào trong mảng
    var tongSoDuong = tinhTongSoDuongMang(arr1);

    // output: tổng số dương trong mảng người dùng nhập (number)
    //In ra màn hình
    document.getElementById('ketQua_1').innerHTML = 'Tổng số dương = ' + tongSoDuong;
}
//Các bước xử lý:
// viết hàm tính tổng số dương trong mảng
function tinhTongSoDuongMang(arr){ //input(number)
    // output:number
    var tongSoDuongMang = 0;
    for(var i =  0;   i < arr.length; i++){
        if(arr[i] > 0){
            tongSoDuongMang += arr[i];
        }
    }
    return tongSoDuongMang
}


//CÂU 2: Đếm có bao nhiêu số dương trong mảng;
//DOM .onclick
document.getElementById('btnNhapSo_2').onclick = function(){
    //input: số người dùng nhập vào trong mảng(number);

    var demSo = demSoDuong(arr1);

    //output: Đếm số dương có trong mảng;
    // In ra màn hình;
    document.getElementById('ketQua_2').innerHTML = 
    'có ' + demSo + ' số dương'

}
//Các bước xử lý:
//Viết hàm đếm số dương:
function demSoDuong(arr){ //input
    //output
    var dem = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            dem++
        }
    }
    return dem;
}


//CÂU 3: TÌM  SỐ NHỎ NHẤT TRONG MẢNG
//DOM .onclick
document.getElementById('btnNhapSo_3').onclick = function(){
    //input: số người dùng nhập vào trong mảng(number);
    //đặt biến min 
    var bienMin = arr1[0];
    //khởi tạo biến bước nhảy, vòng lặp và thay đổi biến bước nhày
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] < bienMin){
            bienMin = arr1[i];
        }
        
    }
    //output: tìm ra số nhò nhất trong mảng;
    //In ra màn hình;
    document.getElementById('ketQua_3').innerHTML = 'Số nhỏ nhất = ' + bienMin;
}


//CÂU 4: TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
//DOM .onclick
document.getElementById('btnNhapSo_4').onclick = function() {
    var arrDuong = [];
    //input: số người dùng nhập vào trong mảng(number);
    //tạo biến chứa mảng số dương
    //khởi tạo biến bước nhảy, vòng lặp và thay đổi biến bước nhày
    for (var index = 0; index < arr1.length; index++){
        if(arr1[index] > 0){
            arrDuong.push(arr1[index])
        }
    }
    // khai báo biến minDuong chứ vị trí index đầu tiên trong mảng minDuong
    var bienMinDuong = arrDuong[0];
    for(var i = 0; i < arrDuong.length; i++){
        if(arrDuong[i] < bienMinDuong){
            bienMinDuong = arrDuong[i]
        }
    }
    //output: tìm ra số dương nhò nhất trong mảng;
    //In ra màn hình;
    document.getElementById('ketQua_4').innerHTML = 'Số dương nhỏ nhất = ' + bienMinDuong
}

//CÂU 5: TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
//DOM .onclick
document.getElementById('btnNhapSo_5').onclick = function(){
    //input: số người dùng nhập vào trong mảng(number);
    //tạo biến chứa mảng số dương
    //khởi tạo biến bước nhảy, vòng lặp và thay đổi biến bước nhày
    var arrSoChan = [];
    for(var index = 0; index < arr1.length; index++){
        if(arr1[index] % 2 == 0 ){
            arrSoChan.push(arr1[index])
        }
    }
    console.log(arrSoChan)
    for(var i = 0; i < arrSoChan.length; i++){
        var last = arrSoChan[i];
    }
    //output: tìm ra số dương nhò nhất trong mảng;
    //In ra màn hình;
    document.getElementById('ketQua_5').innerHTML = 'Số chẵn cuối cùng = ' + last;
}
//CÂU 6: ĐỔI VỊ TRÍ
//viết hàm swap đổi vị trí index
function swap(input, vt1, vt2){
    var bienTam = input[vt1];
    input[vt1] = input[vt2];
    input[vt2] = bienTam
}
//DOM .onclick
function doiViTri(){
    //đặt biến arrNew
    var arrNew = [];
    //input: số người dùng nhập vào trong mảng(number);
    var viTri1 = document.getElementById('btnNhapSo_7').value * 1;
    var viTri2 = document.getElementById('btn2NhapSo_7').value * 1;
    //các bước xử lý
    arr1.forEach(function(item){
        arrNew.push(item)
    })
    swap(arrNew,viTri1,viTri2);
     //output: thay đổi đc vị trí index trong mảng;
    //In ra màn hình;
    document.getElementById('ketQua_6').innerHTML = 'Mảng sau khi đỗi là: ' + arrNew
}


//CÂU 7: SẮP XẾP TĂNG DẦN
//DOM .onclick
document.getElementById('btnNhapSo_7').onclick = function(){
    var arrSapXep = [];
    //input: số người dùng nhập vào trong mảng(number);
    //tạo biến chứa mảng số dương
    //khởi tạo biến bước nhảy, vòng lặp và thay đổi biến bước nhày
    for(var i = 0; i < arr1.length; i++){
        arrSapXep.push(arr1[i])
    }
    //output: sắp xếp thứ tự tăng dần trong mảng;
    //In ra màn hình;
    document.getElementById('ketQua_7').innerHTML = 'thứ tự tăng dần: ' +
    arrSapXep.sort(function(a, b){return a - b});
}


//CÂU 8: TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
//DOM .onclick
document.getElementById('btnNhapSo_8').onclick = function (){
    //input: số người dùng nhập vào trong mảng(number);
    //tạo biến chứa mảng số dương
    //khởi tạo biến bước nhảy, vòng lặp và thay đổi biến bước nhày

    //output:number
    var soNtDauTien = 0;
    for (var i = 0; i < arr1.length; i++){
        if(kiemTraSoNguyenTo(arr1[i] * 1)){
            soNtDauTien = arr1[i];
            break
        }
    }
    //output: hiển thị số nguyên tố đầu tiên trong mảng;
    //In ra màn hình;
    document.getElementById('ketQua_8').innerHTML = 'số nguyên tố đầu tiên = ' + soNtDauTien;
}
//viết hàm check số nguyên tố
function kiemTraSoNguyenTo(so){ //input: number
    //output: true ? false;
    var checkSNT = true;
    for(var i = 2; i <= Math.sqrt(so); i++){
        if(so % i == 0){
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}

//CÂU 9: ĐẾM SỐ NGUYÊN 
//DOM .onclick
document.getElementById('btnNhapSo_9').onclick = function(){
    //input: số người dùng nhập vào trong mảng(number);
    //tạo biến chứa mảng số dương
    //khởi tạo biến bước nhảy, vòng lặp và thay đổi biến bước nhày
    var soNguyen = 0;
    for(var i = 0; i < arrSoThuc.length; i++){
        if(Number.isInteger(arrSoThuc[i])){
            soNguyen++
        }
    }
    document.getElementById('ketQua_9').innerHTML = 'Số nguyên = ' + soNguyen;
}
// Viết hàm thêm số thực vào mảng
var arrSoThuc = [];
document.getElementById('btnThemSo_9').onclick = function themSoThuc(){
    var soThuc = document.getElementById('nhapSo_9').value * 1;
    arrSoThuc.push(soThuc);
    document.getElementById('ketQuaThem_9').innerHTML = arrSoThuc;
}


//CÂU 10: SO SÁNH LƯỢNG SỐ DƯƠNG VÀ SỐ ÂM
//DOM .onclick
document.getElementById('btnNhapSo_10').onclick = function(){
    //input: số người dùng nhập vào trong mảng(number);
    //dùng hàm đếm số dương(viết sẵn trên câu 2) và hàm đểm số âm
    var hamDemSoDuong = demSoDuong(arr1);
    var hamDemSoAm = demSoAm(arr1);

    if(hamDemSoDuong == hamDemSoAm){
        document.getElementById('ketQua_10').innerHTML = 'số âm = số dương'
    }else if (hamDemSoDuong > hamDemSoAm){
        document.getElementById('ketQua_10').innerHTML = 'số âm < số dương'
    } else if (hamDemSoDuong < hamDemSoAm){
        document.getElementById('ketQua_10').innerHTML = 'số âm > số dương'
    }
}
//Viết hàm đếm số âm:
function demSoAm(arr){ //input
    //output
    var dem = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            dem++
        }
    }
    return dem;
}