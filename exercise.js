var objtv ={
    price:1,
itemname: "ohho",
discount: "5 %",
itemcode: 1234
}
console.log(objtv)

function createproduct(price,itemname,discount,itemcode){
    return {
        price : price,
        itemname:itemname,
        discount:discount,
        itemcode:itemcode
    }
}
const obj = createproduct(1,"abc","2%",7329);
console.log(obj)

function  Product(price,itemname,discount,itemcode){
    this.price =price;
    this.itemname=itemname,
    this.discount=discount,
    this.itemcode=itemcode,
    this.discountprice=function(){
        return discount*price/100;
    }
    
    
}
const mobile = new Product(100,"samsung",20,73296353);
console.log(mobile.discountprice())