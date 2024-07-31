import Banner from './Banner';
import WidgetCards from './WidgetsCards';

export default function Widgets () {

    const resorted = [{id:1, title: 'пример', url: '#'}];
    const tvPrograms = [{id:1, time: 12.00, title: 'пример', description: 'описание', url: '#'}];
    const broadcasts = [{id:1, title: 'пример', description: 'описание', url: '#'}];
  
    const getTitleByLocation = () => {
      /* определяем заголовок по местоположению */
      return 'страна/город';
    }

    return (
        <div>
            <Banner img='#'/>
            <WidgetCards title="погода">
                /* тут подгружаем погоду из внешнего API */
            </WidgetCards>
            <WidgetCards title="посещаемое">
                <ul>
                {resorted.map((item) => (
                    <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                    </li>
                ))} 
                </ul>

            </WidgetCards>
            <WidgetCards title={getTitleByLocation()}>
                <a href="#">Расписания</a>
            </WidgetCards>
            <WidgetCards title="телепрограмма">
                <ul>
                {tvPrograms.map((programm) => (
                    <li key={programm.id}>
                    <a href={programm.url}>{programm.time} {programm.title}</a>
                    <span>{programm.description}</span>
                    </li>
                ))}
                </ul>
            </WidgetCards>
            <WidgetCards title="эфир">
                <ul>
                {broadcasts.map((broadcast) => (
                    <li key={broadcast.id}>
                    <a href={broadcast.url}>
                        <img src="ссылка на иконку" alt="play" /> {broadcast.title}
                    </a>
                    <span>{broadcast.description}</span>
                    </li>
                ))}
                </ul>
            </WidgetCards>
        </div>
    )
}