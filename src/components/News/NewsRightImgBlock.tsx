import { IRightBlock } from '../../common/types';
import styles from '../../components/News/newsStyle.module.css';


export default function NewsRightImgBlock ({ img }: IRightBlock) {

    return (
        <>
            {img && <img src={img} className={styles.rightImage}/>}
            <a href="">
                Работа над ошибками
            </a>
            <p>
                Смотрите на Яндекс и запоминайте
            </p>
        </>
    )
} 