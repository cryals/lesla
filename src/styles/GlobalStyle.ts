import { createGlobalStyle, css } from 'styled-components';
import { catppuccinMocha } from './catppuccin';

interface GlobalStyleProps {
  isMobile?: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* Не используем @import, так как это может вызывать проблемы в styled-components */
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'JetBrains Mono', monospace;
    background-color: ${catppuccinMocha.crust};
    color: ${catppuccinMocha.text};
    line-height: 1.6;
    font-size: ${props => props.isMobile ? '14px' : '16px'};
    height: 100%;
    overflow: hidden;
    
    ${props => props.isMobile && css`
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    `}
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      text-decoration: underline;
      color: ${catppuccinMocha.sapphire};
    }
  }

  /* Scrollbar стилизация */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${catppuccinMocha.mantle};
  }

  ::-webkit-scrollbar-thumb {
    background: ${catppuccinMocha.surface1};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${catppuccinMocha.surface2};
  }

  /* Отключаем outline для элементов */
  button:focus, 
  input:focus {
    outline: none;
  }

  /* Анимации для элементов */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  .fadeIn {
    animation: fadeIn 0.3s ease forwards;
  }

  .slideUp {
    animation: slideUp 0.4s ease forwards;
  }

  /* Footer styles */
  footer {
    background-color: ${catppuccinMocha.mantle};
    color: ${catppuccinMocha.subtext0};
    padding: 1rem;
    text-align: center;
    border-top: 1px solid ${catppuccinMocha.surface0};
    font-size: 14px;
  }

  /* Мобильные стили */
  @media (max-width: 768px) {
    html, body {
      font-size: 14px;
    }
    
    input, button {
      font-size: 16px; /* Предотвращает зум на iOS */
    }
  }
`; 