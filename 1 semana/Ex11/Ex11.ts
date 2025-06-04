// Crie uma função que recebe esse status e retorna uma mensagem apropriada.

type Status = {
    order: 'pendente' | 'pago'| 'cancelado'
}

const purchaseStatus = (a:Status): string =>{
return ` Status da compra: ${a.order}`
}

console.log(purchaseStatus({order: 'pago'}));
