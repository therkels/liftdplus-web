export default function getFormattedDate(): string {
  const date: Date = new Date();

  // Use the `toISOString` method for a close format, then adjust the timezone
  const isoString: string = date.toISOString(); // Example: 2025-01-03T21:59:55.974Z

  // Append the +00:00 timezone (or calculate your local timezone offset if needed)
  const timezoneOffset: string = '+00:00';

  // Replace the 'Z' with your timestamp offset
  const formattedDate: string = isoString.replace('Z', timezoneOffset);

  return formattedDate;
}