const Backdrop = ({ className }: { className?: string }) => {
  return <div className={`absolute top-0 left-0 w-full h-full ${className}`} />;
};

export default Backdrop;
