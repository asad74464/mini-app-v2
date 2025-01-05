interface StarProps {
  size: number;
  style: React.CSSProperties;
}

export default function Star({ size, style }: StarProps) {
  return (
    <div
      className="absolute bg-white rounded-full animate-twinkle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    />
  );
}