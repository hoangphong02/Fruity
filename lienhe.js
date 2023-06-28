
function contactValidate(){
    var name = document.getElementById('name').value;
    if(name==''){
        alert('Vui lòng nhập họ tên');
        return false;

    }

    var diachi = document.getElementById('diachi').value;
    if(diachi==''){
        alert('Vui lòng nhập địa chỉ');
        return false;

    }


    var sodienthoai = document.getElementById('sodienthoai').value;
    if(sodienthoai==''){
        alert('Vui lòng nhập số điện thoại');
        return false;

    }

    else{
        sdt=/(09|03|07|08|05)+([0-9]{8}$)/;
        if(sdt.test(sodienthoai)==false){
            alert('Số điện thoại không hợp lệ. Vui lòng kiểm tra lại');
            return false;
        }
    }

    var email = document.getElementById('email').value;
    if(email==''){
        alert('Vui lòng nhập email');
        return false;
    }
    else{
        var Email= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
        if(Email.test(email)==false){
            alert('Email không hợp lệ. Vui lòng kiểm tra lại..!');
            return false;        }
    }


    var content = document.getElementById('content').value;
    if(content==''){
        alert('Vui lòng nhập nội dung');
        return false;

    }

    alert('Đã gửi nội dung liên hệ thành công');
    return true;

}