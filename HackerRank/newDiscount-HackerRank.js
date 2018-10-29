
const reducer = (acc, curr) => acc + curr;


function quantityDiscount(items) {
    let itemPriceArr = []; let reducedPriceArr = []
    const totalQuantity = totalOrderQuantity(items)
    const reduced_quant_adjust = (totalQuantity) **-0.1

    items.forEach(item=>{
      let itemArr = multiplyOrderValues(item)
      let constValuesTotal = itemArr.reduce(multiplier, 1) * item.product.area_price //multiplies quant,width, & height * area_price
      let quant_adjust = item.quantity ** -0.1;
      itemPriceArr.push(constValuesTotal * quant_adjust)
      reducedPriceArr.push(constValuesTotal * reduced_quant_adjust)
    })

    let oldPriceTotal = (itemPriceArr.reduce(reducer, 0)).toFixed(2)
    let reducedTotal = (reducedPriceArr.reduce(reducer, 0)).toFixed(2)
    return (oldPriceTotal-reducedTotal === 0) ? 0 : (oldPriceTotal-reducedTotal).toFixed(2)
}
function totalOrderQuantity(items){
    //function used to determine new discount pricing before.
    let total = 0
    items.forEach(item=>total += item.quantity)
    return total
}
function multiplyOrderValues(item){
  let itemArr = Object.values(item)
  const multiplier = (acc, curr) => ((!isNaN(curr)) ? (acc*curr) : acc)
  return itemArr.reduce(multiplier, 1) * item.product.area_price
}


const A1 = [
  {"quantity": 50,"width": 2,"height": 1, "product":{"area_price": 0.8 } },
  {"quantity": 50,"width": 1, "height": 1, "product": { "area_price": 0.8 } }
]

const B1 = {"quantity": 50,"width": 2,"height": 1, "product": { "area_price": 0.8 } }
const B2 = {"quantity": 100,"width": 1,"height": 1, "product": { "area_price": 0.8 } }
const B3 = {"quantity": 150,"width": 3,"height": 3, "product": { "area_price": 0.8 } }


const C1 =[
  {"quantity": 50,"width": 2,"height": 2, "product": { "area_price": 0.6 }},
  {"quantity": 150,"width": 3,"height": 2, "product": { "area_price": 0.8 } },
  {"quantity": 50,"width": 2,"height": 2, "product": { "area_price": 0.8 }
}]


quantityDiscount(C1)
