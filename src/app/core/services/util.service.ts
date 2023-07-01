export function formatDate(date: Date): string {
  const monthName =
    date.toLocaleString('es-ES', { month: 'long' }).charAt(0).toUpperCase() +
    date.toLocaleString('es-ES', { month: 'long' }).slice(1);

  const formattedDate = `${monthName} ${date.getDate()} de ${date.getFullYear()}`;

  return formattedDate;
}
