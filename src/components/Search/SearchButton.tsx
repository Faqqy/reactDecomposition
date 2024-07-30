import { IButtonName } from '../../common/types';


export default function SearchButton ({ className, title }: IButtonName) {

    return (
        <button className={className} type="submit">{ title }</button>
    )
}