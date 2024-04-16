import CardView from './CardView/cardView';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCardData } from './redux/action';
function App() {
  const [pageNum, setPageNum] = useState<number>(1);
  const dispatch = useDispatch<any>();

  const { cardData } = useSelector((state: any) => state);
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPageNum(pageNum + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    dispatch(setCardData(pageNum.toString(), cardData));
  }, [pageNum])


  return (
    <div data-testid="mainContainer-component" className='mainContainer' onScroll={handleScroll}>
      {
        cardData.map((item: any, index: any) => {
          return <CardView key={index} image={item?.avatar} firstName={item?.first_name} lastName={item?.last_name} email={item?.email} />
        })
      }

    </div>
  )
}

export default App;
