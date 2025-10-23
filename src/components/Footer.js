import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-sinoptik-border mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-xs text-sinoptik-dark-gray space-y-2">
          <p>
            Усі права належать © 2010-2025 sinoptik.ua. Партнер проекту: FORECA
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-sinoptik-blue hover:underline">Угода користувача</a>
            <a href="#" className="text-sinoptik-blue hover:underline">Угода про конфіденційність</a>
            <a href="#" className="text-sinoptik-blue hover:underline">Написати нам</a>
            <a href="#" className="text-sinoptik-blue hover:underline">Реклама</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;