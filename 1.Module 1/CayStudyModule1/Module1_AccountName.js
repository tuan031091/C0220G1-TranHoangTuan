// let FullName = document.getElementById('fullName');
// let  Gender = document.getElementById('gender');
// let IdCard = document.getElementById('idCard');
// let PhoneNumber = document.getElementById('phoneNumber');
// let BirthDay = document.getElementById('birthDay');
// let Email = document.getElementById('email');
// let Address = document.getElementById('address');
// let KindCustomer = document.getElementById('kindCustomer');
// let Amount
//let RentDays = document.getElementById('rentdays');


function price() {
    let KindService = document.getElementById('kindService');
    let Price = document.getElementById('price1');
    if (KindService.value == 'villa') {
        Price.value = 500;
    } else if (KindService.value == "house") {
        Price.value = 300;
    } else {
        Price.value = 100;
    }
}

function payment() {
    let Price = document.getElementById('price1');
    let RentDays = document.getElementById('rentDays');
    let Discount = document.getElementById('discount');
    let Payment = document.getElementById("payment");
    Payment.value = Price.value * RentDays.value * (1 - Discount.value / 100)
}




