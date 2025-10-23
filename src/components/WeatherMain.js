import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const WeatherMain = () => {
  const weekDays = [
    { day: 'Четвер', date: '23', month: 'жовтня', temp: '+10°+12°', icon: '🌧️' },
    { day: "П'ятниця", date: '24', month: 'жовтня', temp: '+10°+11°', icon: '🌧️' },
    { day: 'Субота', date: '25', month: 'жовтня', temp: '+9°+11°', icon: '🌧️' },
    { day: 'Неділя', date: '26', month: 'жовтня', temp: '+6°+10°', icon: '🌤️' },
    { day: 'Понеділок', date: '27', month: 'жовтня', temp: '+5°+10°', icon: '🌤️' },
    { day: 'Вівторок', date: '28', month: 'жовтня', temp: '+5°+8°', icon: '🌧️' },
    { day: 'Середа', date: '29', month: 'жовтня', temp: '+4°+7°', icon: '🌧️' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-sinoptik-border mb-6">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-4 h-4 text-sinoptik-blue" />
          <h1 className="text-xl font-bold text-sinoptik-blue">Погода у Стокгольмі</h1>
          <span className="text-sm text-sinoptik-dark-gray">Стокгольм Швеція</span>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-6">
          {weekDays.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-sinoptik-dark-gray mb-1">{day.day}</div>
              <div className="text-2xl font-bold mb-1">{day.date}</div>
              <div className="text-xs text-sinoptik-dark-gray mb-2">{day.month}</div>
              <div className="text-2xl mb-2">{day.icon}</div>
              <div className="text-sm font-medium">{day.temp}</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-start space-x-6">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-sinoptik-dark-gray" />
              <span className="text-sm text-sinoptik-dark-gray">Стокгольм: 18:00</span>
            </div>
            
            <div className="bg-sinoptik-light-blue p-4 rounded">
              <div className="text-4xl font-bold text-center mb-2">+11°C</div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-sinoptik-dark-gray">Схід</div>
                  <div className="font-medium">07:45</div>
                </div>
                <div>
                  <div className="text-sinoptik-dark-gray">Захід</div>
                  <div className="font-medium">17:30</div>
                </div>
                <div>
                  <div className="text-sinoptik-dark-gray">Вологість</div>
                  <div className="font-medium">87%</div>
                </div>
                <div>
                  <div className="text-sinoptik-dark-gray">Вітер, м/с</div>
                  <div className="font-medium">Південний</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-64">
            <div className="bg-gray-100 h-48 rounded mb-2 flex items-center justify-center text-gray-500">
              [Карта погоди]
            </div>
            <button className="text-sm text-sinoptik-blue hover:underline">
              Подивитися погодою
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMain;