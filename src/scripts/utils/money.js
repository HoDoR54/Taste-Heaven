export function formatCurrency(Cents) {
  const formattedCurrency = (Cents / 100).toFixed(2);
  return formattedCurrency;
}
