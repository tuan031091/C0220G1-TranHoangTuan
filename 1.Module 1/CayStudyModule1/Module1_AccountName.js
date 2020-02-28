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

function xacnhan() {
    let FullName = document.getElementById('fullName').value;
    let Gender = document.getElementById('gender').value;
    let IdCard = document.getElementById('idCard').value;
    let PhoneNumber = document.getElementById('phoneNumber').value;
    let BirthDay = document.getElementById('birthDay').value;
    let Email = document.getElementById('email').value;
    let Address = document.getElementById('address').value;
    let KindCustomer = document.getElementById('kindCustomer').value;
    let AmountPeople = document.getElementById('amountPeople').value;
    let RentDays = document.getElementById('rentDays').value;
    let KindService = document.getElementById('kindService').value;
    let Price = document.getElementById('price1').value;
    let KindRoom = document.getElementById('kindRoom').value;
    let Discount = document.getElementById('discount').value;
    let payment = document.getElementById('payment').value;
    alert('Ten ban la : ' + FullName + "\n" + 'Gioi tinh :' + Gender + '\n' +
        'ID la :' + IdCard + '\n' + 'Phone :' + PhoneNumber + '\n' + 'Your Bithday :' + BirthDay + '\n' +
        'Email :' + Email + '\n' + "Address : " + Address + '\n' + 'Kind of Customer' + KindCustomer + '\n' +
        'Amount of people :' + AmountPeople + '\n' + 'Rent days :' + RentDays + '\n' + 'Kind of service :' +
        KindService + '\n' + Price + 'Kind of Room : ' + KindRoom + '\n' + 'Discount : ' + Discount + '\n' +
        'Tottal cost you must pay being : '
        + '\n' + payment);
}




