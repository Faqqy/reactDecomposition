import { IBanner } from '../../common/types';
import styles from '../../components/Widget/banner.module.css';

export default function LogoSearch ({img}: IBanner) {

    return (
        <>
            {img && <img src={img} className={styles.bannerImg}/>}
        </>
    )
}