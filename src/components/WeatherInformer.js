import React from 'react';
import { Info } from 'lucide-react';

const WeatherInformer = () => {
  return (
    <div className="bg-white rounded-lg border border-sinoptik-border p-4 mb-6">
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2">
          <Info className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-sinoptik-blue mb-1">Погодний інформер</h3>
          <p className="text-sm text-sinoptik-dark-gray">
            Бажаєте, щоб на вашому сайті показувалася погода?
          </p>
        </div>
        <button className="btn-primary">
          Налаштувати інформер
        </button>
      </div>
    </div>
  );
};

export default WeatherInformer;