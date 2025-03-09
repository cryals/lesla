import React, { useState, useEffect } from 'react';
import { catppuccinMocha } from '../styles/catppuccin';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  const [opacity, setOpacity] = useState(0);
  const [transform, setTransform] = useState('translateY(20px)');
  const [isVisible, setIsVisible] = useState(false);
  
  // Анимация при открытии
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Небольшая задержка для плавности
      const timer1 = setTimeout(() => setOpacity(1), 50);
      const timer2 = setTimeout(() => setTransform('translateY(0)'), 100);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isOpen]);
  
  // Обработчик закрытия с анимацией
  const handleClose = () => {
    setOpacity(0);
    setTransform('translateY(20px)');
    
    // Удаляем компонент после завершения анимации
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 500);
  };
  
  if (!isOpen && !isVisible) return null;
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(17, 17, 27, 0.7)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        padding: '2rem',
        opacity: opacity,
        transition: 'opacity 0.5s ease-in-out',
      }}
      onClick={handleClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '700px',
          backgroundColor: catppuccinMocha.base,
          borderRadius: '12px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transform: transform,
          transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Шапка окна */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.2rem',
            backgroundColor: catppuccinMocha.mantle,
            borderBottom: `1px solid ${catppuccinMocha.surface0}`,
            userSelect: 'none'
          }}
        >
          {/* Заголовок с иконкой весов */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: catppuccinMocha.text,
              fontSize: '0.95rem',
              fontWeight: 500
            }}
          >
            <i className="fas fa-balance-scale" style={{ color: catppuccinMocha.mauve }} /> Лицензия MIT
          </div>
          
          {/* Кнопки окна */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: catppuccinMocha.yellow, cursor: 'pointer' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: catppuccinMocha.green, cursor: 'pointer' }} />
            <div 
              style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: catppuccinMocha.red, cursor: 'pointer' }}
              onClick={handleClose}
            />
          </div>
        </div>
        
        {/* Содержимое */}
        <div
          style={{
            padding: '2rem',
            maxHeight: '70vh',
            overflowY: 'auto'
          }}
        >
          <pre 
            style={{
              fontSize: '14px',
              whiteSpace: 'pre-wrap',
              color: catppuccinMocha.subtext0,
              lineHeight: 1.5,
              margin: 0,
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
{`MIT License

Copyright (c) 2025 cryals

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LicenseModal; 