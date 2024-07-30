import { ISearchTab } from '../../common/types';

export default function SearchTabs () {

    const tabs: ISearchTab[] = [
        {id: 6, title: 'Видео', url: '#'},
        {id: 7, title: 'Картинки', url: '#'},
        {id: 8, title: 'Новости', url: '#'},
        {id: 9, title: 'Карты', url: '#'},
        {id: 10, title: 'Маркет', url: '#'},
        {id: 11, title: 'Переводчик', url: '#'},
        {id: 12, title: 'Эфир', url: '#'},
        {id: 13, title: 'еще', url: '#'},
    ];

    return (
        <ul>
            {tabs.map((tab) => (
                <li key={tab.id}>
                <a href={tab.url}>{tab.title}</a>
                </li>
            ))}
        </ul>
    )
}