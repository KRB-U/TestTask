import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
      navigate('/');
    }

    return () => {
      clearInterval(timer);
    };
  }, [seconds, navigate]);

  return (
    <div>
      Сторінку не знайдено. Перейдіть на <Link to="/">домашню сторінку</Link>
      або дочекайдеся автоматичного перенаправлення {seconds}
    </div>
  );
}

export default NotFound;
