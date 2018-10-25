
/*
 * Items is an array of order item objects e.g.
 * [
 *   { quantity: 50, width: 1, height: 2, product: { area_price: 0.8 } }
 * ]
 * You should return a number rounded to 2 decimal places
 */
const reducer = (acc, curr) => acc + curr;
// I didn't have time to try and refactor, but I wanted to do below is try and use reduce to
// multiply the constValues expressed below.
// That would have cut down the lines of code used.
//
// const multiplier = (acc, curr) => {
//     if isNaN(acc){
//         acc * curr
//     }
//     }

function quantityDiscount(items) {
    let itemPriceArr = []; let reducedArr = []
//     variables used to determine new pricing model quantity and discount adjustment
    const totalQuantity = totalOrderQuantity(items)
    let reduced_quant_adjust = (totalQuantity) **-0.1
    items.forEach(item=>{
//         variables saved to make code easier to read. Not necessarily needed
        let quant_adjust = item.quantity ** -0.1;
        let area = item.width * item.height;
        let quantity = item.quantity;
        let product_area_price = item.product.area_price;

//         constValues created to multiple constant amounts that are not directly
//         being compared.
        let constValues = area * product_area_price * quantity

        let item_price =  constValues * quant_adjust
        let new_reduced_item_price = constValues * reduced_quant_adjust

        itemPriceArr.push(item_price)
        reducedArr.push(new_reduced_item_price)
    })

    let oldPriceTotal = (itemPriceArr.reduce(reducer, 0)).toFixed(2)
    let reducedTotal = (reducedArr.reduce(reducer, 0)).toFixed(2)
    let total = (oldPriceTotal-reducedTotal === 0) ? 0 : (oldPriceTotal-reducedTotal).toFixed(2)

    return (oldPriceTotal-reducedTotal === 0) ? 0 : (oldPriceTotal-reducedTotal).toFixed(2)
}
function totalOrderQuantity(items){
    //function used to determine new discount pricing before.
    let total = 0
    items.forEach(item=>total += item.quantity)
    return total
}


const A1 = { "quantity": 50,"width": 2,"height": 1, "product":{"area_price": 0.8 } }
const A2 ={"quantity": 50,"width": 1, "height": 1, "product": { "area_price": 0.8 } }

const B1 = {"quantity": 50,"width": 2,"height": 1, "product": { "area_price": 0.8 } }
const B2 = {"quantity": 100,"width": 1,"height": 1, "product": { "area_price": 0.8 } }
const B3 = {"quantity": 150,"width": 3,"height": 3, "product": { "area_price": 0.8 } }


const C1 ={"quantity": 50,"width": 2,"height": 2, "product": { "area_price": 0.6 } }
const C2 ={"quantity": 150,"width": 3,"height": 2, "product": { "area_price": 0.8 } }
const C3 ={"quantity": 50,"width": 2,"height": 2, "product": { "area_price": 0.8 } }
