import React from 'react';
import Button from '@components/Button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow rounded-lg p-8 max-w-md w-full animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            React Awesome Template
          </h1>
          <p className="text-gray-600">
            Стартовый шаблон для быстрой разработки React приложений
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-md p-4 border border-blue-100">
            <h2 className="text-lg font-medium text-blue-800 mb-2">
              Шаблон готов к использованию
            </h2>
            <p className="text-blue-700 text-sm">
              Включает React, TypeScript, Vite, TailwindCSS и многое другое
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="primary">
              Начать
            </Button>
            <Button variant="outline">
              Документация
            </Button>
          </div>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-gray-500 text-sm animate-slide-up">
        Создано с ❤️ CodeDestroyer
      </footer>
    </div>
  );
};

export default App; 