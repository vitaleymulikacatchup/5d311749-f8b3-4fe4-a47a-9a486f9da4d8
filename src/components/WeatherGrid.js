import React from 'react';
import { Star } from 'lucide-react';

const WeatherGrid = () => {
  const cities = [
    { name: 'Погода Київ', temp: '+12°', condition: 'Сухмарна хмарність', icon: '🌧️', night: '+7°', day: '+14°' },
    { name: 'Погода Харків', temp: '+8°', condition: 'Ясно', icon: '☀️', night: '0°', day: '+14°' },
    { name: 'Погода Дніпро', temp: '+13°', condition: 'Ясно', icon: '☀️', night: '+5°', day: '+16°' },
    { name: 'Погода Одеса', temp: '+14°', condition: 'Ясно', icon: '☀️', night: '+11°', day: '+17°' },
    { name: 'Погода Донецьк', temp: '+10°', condition: 'Ясно', icon: '☀️', night: '+2°', day: '+16°' },
    { name: 'Погода Запоріжжя', temp: '+13°', condition: 'Сухмарна хмарність', icon: '🌤️', night: '+5°', day: '+17°' },
    { name: 'Погода Львів', temp: '+17°', condition: 'Невелика хмарність', icon: '⛅', night: '+6°', day: '+20°' },
    { name: 'Погода Кривий Ріг', temp: '+13°', condition: 'Ясно', icon: '☀️', night: '+3°', day: '+17°' },
    { name: 'Погода Миколаїв', temp: '+14°', condition: 'Ясно', icon: '☀️', night: '+5°', day: '+18°' },
    { name: 'Погода Маріуполь', temp: '+11°', condition: 'Сухмарна хмарність', icon: '🌤️', night: '+5°', day: '+17°' },
    { name: 'Погода Луганськ', temp: '+8°', condition: 'Ясно', icon: '☀️', night: '-1°', day: '+14°' },
    { name: 'Погода Макіївка', temp: '+10°', condition: 'Ясно', icon: '☀️', night: '+2°', day: '+16°' },
    { name: 'Погода Севастополь', temp: '+15°', condition: 'Ясно', icon: '☀️', night: '+8°', day: '+20°' },
    { name: 'Погода Вінниця', temp: '+14°', condition: 'Хмарно з прояснениями', icon: '🌤️', night: '+6°', day: '+18°' },
    { name: 'Погода Сімферополь', temp: '+14°', condition: 'Ясно', icon: '☀️', night: '+8°', day: '+22°' },
    { name: 'Погода Херсон', temp: '+15°', condition: 'Ясно', icon: '☀️', night: '+5°', day: '+19°' },
    { name: 'Погода Полтава', temp: '+11°', condition: 'Ясно', icon: '☀️', night: '+4°', day: '+14°' },
    { name: 'Погода Чернігів', temp: '+11°', condition: 'Хмарно з прояснениями', icon: '🌤️', night: '+6°', day: '+15°' },
    { name: 'Погода Черкаси', temp: '+12°', condition: 'Ясно', icon: '☀️', night: '+7°', day: '+14°' },
    { name: 'Погода Суми', temp: '+8°', condition: 'Мінлива хмарність', icon: '⛅', night: '+1°', day: '+13°' },
    { name: 'Погода Горлівка', temp: '+9°', condition: 'Ясно', icon: '☀️', night: '+2°', day: '+15°' },
    { name: 'Погода Житомир', temp: '+13°', condition: 'Ясно', icon: '☀️', night: '+6°', day: '+16°' },
    { name: 'Погода Кам\'янське', temp: '+12°', condition: 'Ясно', icon: '☀️', night: '+5°', day: '+16°' },
    { name: 'Погода Хмельницький', temp: '+13°', condition: 'Ясно', icon: '☀️', night: '+6°', day: '+16°' },
    { name: 'Погода Кропивницький', temp: '+13°', condition: 'Ясно', icon: '☀️', night: '+5°', day: '+15°' },
    { name: 'Погода Рівне', temp: '+14°', condition: 'Сухмарна хмарність', icon: '🌤️', night: '+4°', day: '+17°' },
    { name: 'Погода Черніці', temp: '+15°', condition: 'Ясно', icon: '☀️', night: '+4°', day: '+18°' },
    { name: 'Погода Кременчук', temp: '+12°', condition: 'Ясно', icon: '☀️', night: '+6°', day: '+16°' },
    { name: 'Погода Тернопіль', temp: '+14°', condition: 'Сухмарна хмарність', icon: '🌤️', night: '+7°', day: '+17°' },
    { name: 'Погода Івано-Франківськ', temp: '+17°', condition: 'Мінлива хмарність', icon: '⛅', night: '+3°', day: '+22°' },
    { name: 'Погода Луцьк', temp: '+15°', condition: 'Невелика хмарність', icon: '⛅', night: '+4°', day: '+16°' },
    { name: 'Погода Біла Церква', temp: '+14°', condition: 'Сухмарна хмарність', icon: '🌤️', night: '+7°', day: '+15°' },
    { name: 'Погода Краматорськ', temp: '+10°', condition: 'Ясно', icon: '☀️', night: '+2°', day: '+16°' },
    { name: 'Погода Мелітополь', temp: '+12°', condition: 'Хмарно з прояснениями', icon: '🌤️', night: '+5°', day: '+17°' },
    { name: 'Погода Керч', temp: '+14°', condition: 'Ясно', icon: '☀️', night: '+10°', day: '+19°' },
    { name: 'Погода Нікополь', temp: '+15°', condition: 'Сухмарна хмарність', icon: '🌤️', night: '+3°', day: '+17°' }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Погода в інших населених пунктах України</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city, index) => (
          <div key={index} className="bg-white rounded border border-sinoptik-border p-3 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="w-3 h-3 text-sinoptik-yellow fill-current" />
                <span className="city-link font-medium">{city.name}</span>
              </div>
              <div className="text-lg font-bold">{city.temp}</div>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{city.icon}</span>
                <span className="text-sm text-sinoptik-dark-gray">{city.condition}</span>
              </div>
              <div className="text-sm text-sinoptik-dark-gray">
                {city.night}...{city.day}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherGrid;