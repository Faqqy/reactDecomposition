import { useState, useEffect } from 'react';
import NewsTabs from './NewsTab';
import NewsList from './NewsList';
import { NewsType } from '../../types/types';


export default function News () {

    const [news, setNews] = useState<NewsType[]>([]);

    useEffect(() => {
        return;
      // получаем список новостей и сохраняем в state
    }, [news]);

    return (
        <>
            <NewsTabs />
            <NewsList news={news}/>
        </>
    )
}
