export function addProductsToCart(product){
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}

//Na action ela receba a função product e retorna um objeto. Ela funciona como um ouvinte. O retorno acima são dois objetos um é o tipo e o outro o peso ou o item que está sendo enviado.