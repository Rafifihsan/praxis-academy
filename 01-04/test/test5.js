function rupiah(){
    var rupiah = new Intl.NumberFormat('un-IDR',{
        style : 'currency',currency:'IDR',maximumFractionDigits : 3,
    });
    console.log(rupiah.format(2000));
}
rupiah();