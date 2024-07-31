import { ILogo } from '../../common/types';
import styles from '../../components/Search/logo.module.css';

export default function LogoSearch ({img}: ILogo) {

    return (
        <>
            {img && <img src={img} className={styles.logoImg}/>}
        </>
    )
}