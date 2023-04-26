export function  formatDate(dateStr, numDigMonth, numDigDay, numDigYear) {
  const formattedDate = new Date(dateStr).toLocaleDateString('en-US', {
    month: numDigMonth + '-digit',
    day: numDigDay + '-digit',
    year: numDigYear + '-digit'
  });
  return formattedDate;
}