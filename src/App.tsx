import CardView from './CardView/cardView';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCardData, setTotalPage } from './redux/action';
function App() {
  const [pageNum, setPageNum] = useState<number>(1);
  const dispatch = useDispatch<any>();

  const baseUrl: string = `https://reqres.in/api/users?page=`;
  const { cardData, totalpage } = useSelector((state: any) =>
    state
  )

  const fetchData: any = () => {
    axios.get(`${baseUrl}${pageNum}`).then((res: any) => {
      const updatedCardData = cardData.length > 0 ? [...cardData, ...res?.data?.data] : res?.data?.data;
      setPageNum(pageNum + 1);
      dispatch(setCardData(updatedCardData))
      dispatch(setTotalPage(res?.data?.total_pages))
    })
      .catch((err: any) => {
        console.log(err, 'ERROR>>>>>>');
      })
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (pageNum <= totalpage) {
        fetchData();
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNum]);

  useEffect(() => {
    if (cardData.length < 1) {
      fetchData();
    }
  }, [])


  return (
    <div className='mainContainer' onScroll={handleScroll}>
      {
        cardData.map((item: any, index: any) => {
          return <CardView key={index} image={item?.avatar} firstName={item?.first_name} lastName={item?.last_name} email={item?.email} />
        })
      }

    </div>
  )
}

export default App;
