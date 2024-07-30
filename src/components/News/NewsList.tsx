import NewsItem from "./NewsItem";
import { INewsType } from '../../common/types';

interface NewINewsType {
    news: INewsType[];
}

export default function NewsList ({ news }: NewINewsType) {

    news = [{id: 1, icon: '#', title: 'Суд в США отказал СМИ в съемке процесса над Трампом'}, 
        {id: 2, icon: '#', title: 'Счетная палата назвала крупнейших плательщиков дивидендов в бюджет'}, 
        {id: 3, icon: '#', title: 'Фильм "Переводчик" возглавил прокат в России и СНГ за выходные'}, 
        {id: 4, icon: '#', title: 'В Италии скончался Сильвио Берлускони'}, 
        {id: 5, icon: '#', title: '"Вредные" продукты, без которых сложно сохранить здоровье'}, 
    ]
    
    return (
        <ul>
            {news.map((item) => <NewsItem key={item.id} item={item} />)}
        </ul>
    );
    
    
}