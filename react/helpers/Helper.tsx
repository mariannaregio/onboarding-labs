export function formatPrice(value: number) {
  const valueFormated = value !== 0 ? value / 100 : ''

  return valueFormated.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  })
}
