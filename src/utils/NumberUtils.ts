/**
 * Formats a number as a short currency string (e.g., $1.2M, $300K).
 * 45200000 -> $45.2M
 * 811000   -> $811K
 * 8123     -> $8,123
 * 123      -> $123
 * @param value The number to format.
 * @returns The formatted currency string.
 */
export function formatCurrencyShort(value: number|string): string {
  if (typeof value === "string") {
    value = parseFloat(value.replace(/[^0-9.-]+/g, '')); // Remove any non-numeric characters
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K`;
  } else {
    return `$${value.toLocaleString()}`;
  }
};

/**
 * Formats a number as string with commas (e.g., 45,200,000).
 * 45200000 -> 45,200,000
 * 811000   -> 811,000
 * 8123     -> 8,123
 * 123      -> 123
 * @param value The number to format.
 * @returns The formatted number string.
 */
export function formatNumber(value: number|string): string {
  if (typeof value === "string") {
    value = parseFloat(value.replace(/[^0-9.-]+/g, '')); // Remove any non-numeric characters
  }
  return `${value.toLocaleString()}`;
}

/**
 * Formats a number as a currency string with commas (e.g., $45,200,000).
 * 45200000 -> $45,200,000
 * 811000   -> $811,000
 * 8123     -> $8,123
 * 123      -> $123
 * @param value The number to format.
 * @returns The formatted currency string.
 */
export function formatCurrency(value: number|string): string {
  return `$`+formatNumber(value);
}

