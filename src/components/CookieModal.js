import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-sinoptik-blue mb-4">
            s<span className="text-red-500">i</span>noptik
          </div>
          
          <h2 className="text-lg font-bold mb-4">
            "Sinoptik" просить вас надати згоду на використання ваших персональних даних, щоб надавати вам персоналізовані послуги.
          </h2>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-sinoptik-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">i</span>
            </div>
            <div className="text-sm">
              <p>Персоналізовані оголошення й контент, вимірювання оголошень й контенту, дослідження аудиторії та розвиток послуг</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-sinoptik-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">i</span>
            </div>
            <div className="text-sm">
              <p>Зберігати та/або отримувати доступ до інформації на пристрої</p>
            </div>
          </div>
          
          <div className="mt-4">
            <button className="text-sm text-sinoptik-blue hover:underline">
              Докладніше
            </button>
          </div>
          
          <div className="text-xs text-gray-600 leading-relaxed">
            <p>Постачальники зі специфікацією TCF (160) і рекламні партнери (73) можуть обробити ваші персональні дані, а також отримувати доступ до інформації з пристрою, зокрема файлів cookie, унікальних ідентифікаторів пристрою і Інтернет-протоколу, і зберігати їх. Крім того, цей сайт може використовувати всі згадані ваші дані.</p>
            
            <p className="mt-2">Деякі постачальники можуть обробити ваші персональні дані на основі законного інтересу. Ви можете заборонити це, змінивши параметри за посиланням нижче або сторінки або в меню сайту в розділі "до налаштувань конфіденційності" у файлах cookie.</p>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button className="btn-primary flex-1" onClick={onClose}>
            Налаштування
          </button>
          <button className="btn-primary flex-1" onClick={onClose}>
            Погоджуюся
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;