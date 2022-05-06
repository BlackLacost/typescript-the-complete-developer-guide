export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString
    .split('/')
    .map((value) => parseInt(value))
  return new Date(year, month, day)
}
