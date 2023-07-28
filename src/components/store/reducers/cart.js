export default function reducer(state = [], action ){
    if(action.type === 'ADD_PRODUCT_TO_CART'){
        return [...state, action.payload] //primeiro pega tudo que estava no estado anterior. Segundo ele adiciona um objeto nessa lista, com isso atualizando o estado.
    } // esse nome que está dentro em letras maiúsculas, pode ser criado por mim. No entanto, sempre siga o exemplo acima AS LETRAS EM MAIÚSCULO E ESPAÇAMENTO COM UNDERLINE( _ )

    return state // caso não seja passado um tipo, será retornado o estado atual. 
}  