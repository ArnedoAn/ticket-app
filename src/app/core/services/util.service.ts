export function formatDate(fecha: string): string {
  const opcionesFormato = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  } as const;
  const fechaObjeto = new Date(fecha);
  const fechaFormateada = fechaObjeto.toLocaleDateString(
    'es-ES',
    opcionesFormato
  );
  return fechaFormateada;
}
