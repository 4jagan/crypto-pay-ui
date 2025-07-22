/**
 * Returns a human-readable relative time string for a given date.
 * Examples:
 *   30 secs ago
 *   30 min ago
 *   2 hours ago
 *   today
 *   yesterday
 *   3 days ago
 *   week ago
 *   month ago
 *   year ago
 * @param inputDate Date object or date string/number
 * @returns Relative time string
 */
export function formatRelativeTime(inputDate: Date | string | number): string {
    const now = new Date();
    const date = new Date(inputDate);
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours   = Math.floor(diffInMinutes / 60);
    const diffInDays    = Math.floor(diffInHours / 24);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} secs ago`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays === 0) {
      return 'today';
    } else if (diffInDays === 1) {
      return 'yesterday';
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      return 'week ago';
    } else if (diffInDays < 365) {
      return 'month ago';
    } else {
      return 'year ago';
    }

}
