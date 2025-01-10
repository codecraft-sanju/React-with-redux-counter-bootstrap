import { useSelector } from 'react-redux';

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return <p className="mb-4 lead">Counter current Value: {counter}</p>;
};

export default DisplayCounter;
