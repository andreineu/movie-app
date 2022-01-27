export function formatMinutes(total_minutes) {
  const hours = Math.floor(total_minutes / 60);
  const minutes = total_minutes % 60;
  let formattedTime;
  if (hours) {
    formattedTime = hours + "h";
  }
  if (minutes) {
    formattedTime += " " + minutes + "m";
  }
  return formattedTime;
}
