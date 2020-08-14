const formatMoney = (value) => {
  return Intl.NumberFormat('pt', { style: 'currency', currency: 'BRL' }).format(value)
}

export { formatMoney }