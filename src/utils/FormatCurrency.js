function formatCurrency(amount) {
    return Intl.NumberFormat("en-NG",{
        style:"currency",
        currency:"NGN"
    }).format(amount)
}

export default formatCurrency