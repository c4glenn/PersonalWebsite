export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatDateRange(start: Date, end?: Date): string {
  return end ? `${formatDate(start)} – ${formatDate(end)}` : `${formatDate(start)} – Present`;
}

export function formatFullDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
