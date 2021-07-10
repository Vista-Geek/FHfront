import BeautyStars from 'beauty-stars';

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <BeautyStars value={rating} activeColor="yellow" inactiveColor="white" size={24} />
  );
};

export default Rating;
