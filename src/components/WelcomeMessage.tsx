import React from 'react';
import { 
  WelcomeContainer, 
  AsciiArt, 
  WelcomeText
} from '../styles/TerminalStyles';
import { catppuccinMocha } from '../styles/catppuccin';

const WelcomeMessage: React.FC = () => {
  return (
    <WelcomeContainer>
      <AsciiArt>
{`
██╗     ███████╗███████╗██╗      █████╗ 
██║     ██╔════╝██╔════╝██║     ██╔══██╗
██║     █████╗  ███████╗██║     ███████║
██║     ██╔══╝  ╚════██║██║     ██╔══██║
███████╗███████╗███████║███████╗██║  ██║
╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝`}
      </AsciiArt>
      
      <div style={{ 
        position: 'absolute', 
        top: '1rem', 
        right: '1rem', 
        display: 'flex', 
        gap: '1rem',
        color: catppuccinMocha.subtext0,
        fontSize: '0.8rem'
      }}>
        <span>v1.1.5</span>
        <a 
          href="https://github.com/cryals/lesla" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          style={{ 
            color: catppuccinMocha.blue,
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = catppuccinMocha.mauve;
            e.currentTarget.style.textShadow = `0 0 8px ${catppuccinMocha.mauve}`;
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = catppuccinMocha.blue;
            e.currentTarget.style.textShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      
      <WelcomeText>
        <p><span style={{color: catppuccinMocha.mauve}}>●</span> Добро пожаловать в Lesla Terminal - интерактивный веб-терминал</p>
        <p><span style={{color: catppuccinMocha.blue}}>●</span> Разработано с использованием React и TypeScript</p>
        <p><span style={{color: catppuccinMocha.green}}>●</span> Оформлено в стиле Catppuccin Mocha</p>
        <p><span style={{color: catppuccinMocha.peach}}>●</span> Введите <span style={{color: catppuccinMocha.lavender}}>help</span> для просмотра доступных команд</p>
      </WelcomeText>
    </WelcomeContainer>
  );
};

export default WelcomeMessage; 
