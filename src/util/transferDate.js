export function getSimpleDatePattern(date) {
  const formattedDate = new Date(date);

  const yyyy = formattedDate.getFullYear();
  const mm = formattedDate.getMonth();
  const dd = formattedDate.getDate();

  const transferedDate = yyyy + '년 ' + mm + '월 ' + dd + '일';

  return transferedDate;
}
