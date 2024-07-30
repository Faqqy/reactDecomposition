

export default function NewsTabs () {

    const TabUse = () => {
        // Функцией опеределяем географию пользователя и показываем в списке
        return 'в России';
    }
    
    const nowDate = new Date().toLocaleString('ru', {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric'
      });

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
            { nowDate }
            </div>
      </div>
    )
}