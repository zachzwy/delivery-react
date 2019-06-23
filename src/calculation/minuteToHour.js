const minuteToHour = minute => {
  const hour = parseInt(minute / 60, 10);
  const minuteRemain = minute - hour * 60;
  return hour > 0 ? (
    minuteRemain === 0 ? `${hour} h` : `${hour} h ${minuteRemain} min`
  ) : `${minute} min`;
}

export default minuteToHour;
