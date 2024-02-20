const MINUTES = 60;

export const formatDurationToHuman = (initialMinutes) => {
  if (!initialMinutes) return initialMinutes;

  const hours = Math.floor(initialMinutes / MINUTES);
  const minutes = initialMinutes % MINUTES;
  return `${hours}ч ${minutes ? `${minutes}м` : ""}`;
};
