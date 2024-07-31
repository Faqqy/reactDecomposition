import { IwidgetCards } from '../../common/types';


export default function WidgetCards({ title, children }: IwidgetCards) {
    return (
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    );
  }