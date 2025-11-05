export function format(val: string | null): string {
  if (!val) {
    return '';
  }
  return val.replace(/^[+-]?\d+/, function (int) {
    return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  });
}
