import { useEffect, useState } from 'react';
import Star from './Star';

export default function StarField() {
  const [stars, setStars] = useState<Array<{
    id: number;
    size: number;
    style: React.CSSProperties;
  }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        },
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <Star key={star.id} size={star.size} style={star.style} />
      ))}
    </div>
  );
}