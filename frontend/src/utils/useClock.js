import { useState, useEffect } from 'react';

export default function useClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const time = now.toLocaleTimeString(); // 12:34:56 PM

  // Format: DD-MM-YY
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = String(now.getFullYear()).slice(-2); // Last two digits

  const date = `${day}-${month}-${year}`;

  return { time, date };
}
