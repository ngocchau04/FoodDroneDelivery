// Utility function to format Vietnamese currency
export const formatVND = (amount) => {
  if (!amount && amount !== 0) return '0₫'
  
  // Convert to number and format with Vietnamese locale
  const formattedNumber = Number(amount).toLocaleString('vi-VN')
  
  // Always use ₫ symbol for Vietnamese Dong
  return `${formattedNumber}₫`
}

// Helper function to get currency symbol with VND fallback
export const getCurrencySymbol = (configSymbol) => {
  return configSymbol || '₫'
}
