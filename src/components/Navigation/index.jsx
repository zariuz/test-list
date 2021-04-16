import React from 'react';
import './styles.scss';

export const Navigation = () => {
  return (
    <nav>
      <div>
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label for="checkbox">Новые</label>
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label for="checkbox">Выполненные</label>
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label for="checkbox">Все</label>
      </div>
      <div>
        <p>Приоритет</p>
        <ul>
          <li>Высокий</li>
          <li>Средний</li>
          <li>Низкий</li>
        </ul>
      </div>
    </nav>
  );
};
