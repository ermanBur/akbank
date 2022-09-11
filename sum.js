var num = prompt("Lütfen sayı giriniz.");
   
if( (num != "") && (num != null) ) {

    var sum = getSumOfDigits(num);

    if (sum % 2 == 0 ) {
        alert(sum + '-' + 'even');
    }else {
        alert(sum + '-' + 'odd');
    }

} else if(num == "") {
    alert("Boş giriş yaptınız!");
}else if(num == null) {
    alert("Giriş yapmaktan vazgeçtiniz!");
}

function getSumOfDigits(num) {
    return String(num)
        .split('')
        .reduce((acc, curr) => {
        return acc + Number(curr);
        }, 0);
}