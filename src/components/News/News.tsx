import { useState, useEffect } from 'react';
import { INewsType } from '../../common/types';
import NewsTabs from './NewsTab';
import NewsList from './NewsList';
import NewsRightImgBlock from './NewsRightImgBlock';
import ImgBlock from '../../assets/cat.jpg';



export default function News () {

    let [news, setNews] = useState<INewsType[]>([]);

    useEffect(() => {
      // получаем список новостей и сохраняем в state
      setNews(news = []);
    }, []);

    return (
        <>
            <NewsTabs />
            <NewsList news={news}/>
            <NewsRightImgBlock img={ImgBlock} />
        </>
    )
}
