function calculateProfit(){

let sales=localStorage.getItem("sales") || 0

let expenses=localStorage.getItem("expenses") || 0

let profit=sales-expenses

alert("الربح:"+profit)

}
