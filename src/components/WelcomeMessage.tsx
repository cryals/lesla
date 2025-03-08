import React from 'react';
import { 
  WelcomeContainer, 
  AsciiArt, 
  WelcomeText,
  GithubLink,
  Version 
} from '../styles/TerminalStyles';

const WelcomeMessage: React.FC = () => {
  return (
    <WelcomeContainer>
      <Version>v1.0.0</Version>
      <GithubLink 
        href="https://github.com/cryals/lesla" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </GithubLink>
      <AsciiArt>
{`
██╗     ███████╗███████╗██╗      █████╗ 
██║     ██╔════╝██╔════╝██║     ██╔══██╗
██║     █████╗  ███████╗██║     ███████║
██║     ██╔══╝  ╚════██║██║     ██╔══██║
███████╗███████╗███████║███████╗██║  ██║
╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝`}
      </AsciiArt>
      <WelcomeText>
        <p>Добро пожаловать в Lesla Terminal</p>
        <p><i className="fas fa-tag"></i> LESLA - Интерактивный терминал с поддержкой команд</p>
        <p><i className="fas fa-code"></i> Разработано с использованием React и TypeScript</p>
        <p><i className="fas fa-palette"></i> Оформлено в стиле Catppuccin Mocha</p>
        <p><i className="fas fa-info-circle"></i> Введите <code>help</code> для просмотра доступных команд</p>
      </WelcomeText>
    </WelcomeContainer>
  );
};

export default WelcomeMessage; 