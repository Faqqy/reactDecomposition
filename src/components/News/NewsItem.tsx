import { NewsType } from '../../types/types';

type NewsItemProps = {
    item: NewsType;
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