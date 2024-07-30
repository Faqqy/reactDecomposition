import { INewsType } from '../../common/types';

interface NewsItemProps {
    item: INewsType;
}

export default function NewsItem ({item}: NewsItemProps) {

    return (
        <>
            <li>
                <img src={item.icon} alt="..."/>
                <a href={item.url}>{item.title}</a>
            </li>
        </>
    )
}