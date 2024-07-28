

export default function NewsTabs () {

    const TabUse = () => {
        // Функцией опеределяем географию пользователя и показываем в списке
        return 'в России';
    }
    

    return (
        <div>
            <ul>
                <li>
                    <a href="">Сейчас в СМИ</a>
                </li>
                <li>
                    <a href="#">{TabUse()}</a>
                </li>
                <li>
                    <a href="#">Рекомендуем</a>
                </li>
            </ul>
            <div>
            {/* текущие время и дата*/}
            </div>
      </div>
    )
}