function dis(val){
    document.getElementById("input_data").value +=val
}
function clr(){
    document.getElementById("input_data").value =""
}
function solve(){
    let x = document.getElementById("input_data").value
    let y = eval(x)
    document.getElementById("input_data").value=y
}