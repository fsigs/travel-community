export function  formatDate(dateStr, numDigMonth, numDigDay, numDigYear) {
  const formattedDate = new Date(dateStr).toLocaleDateString('en-US', {
    month: numDigMonth + '-digit',
    day: numDigDay + '-digit',
    year: numDigYear + '-digit'
  });
  return formattedDate;
}

export function getDuration(dateStr1, dateStr2) {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays;
}

export function getDurationDates(date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays;
}