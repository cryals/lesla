import React, { useEffect, useState, useRef } from 'react';
import WelcomeMessage from './WelcomeMessage';
import CommandLine from './CommandLine';
import History from './History';
import LicenseModal from './LicenseModal';
import { catppuccinMocha } from '../styles/catppuccin';
import useTerminal from '../hooks/useTerminal';
import {
  TerminalContainer,
  TerminalWindow,
  TerminalHeader,
  TerminalTitle,
  TerminalButtons,
  TerminalButton,
  TerminalContent,
  Footer,
  TerminalIcon
} from '../styles/TerminalStyles';

const Terminal: React.FC = () => {
  const {
    history,
    executeCommand,
    showLicense,
    setShowLicense,
    contentRef
  } = useTerminal();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      try {
        setIsMobile(window.innerWidth <= 768);
      } catch (error) {
        console.warn('Failed to check mobile state:', error);
        setIsMobile(false);
      }
    };

    checkMobile();

    try {
      window.addEventListener('resize', checkMobile);
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    } catch (error) {
      console.warn('Failed to add resize listener:', error);
    }
  }, []);

  useEffect(() => {
    // Добавляем эффект загрузки
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleLicenseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      setShowLicense(true);
    } catch (error) {
      console.error('Failed to show license:', error);
    }
  };

  const handleCloseClick = () => {
    // Закрываем вкладку или перезагружаем страницу
    window.close(); // Это закроет вкладку, если она была открыта с помощью window.open()
    // Если необходимо перезагрузить страницу, используйте:
    // window.location.reload();
  };

  return (
    <>
      <TerminalContainer $isMobile={isMobile} style={{opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease', padding: isMobile ? '0 10px' : '0'}}>
        <TerminalWindow
          id="terminal-window"
          ref={terminalRef}
          $isMobile={isMobile}
        >
          <TerminalHeader $isMobile={isMobile}>
            <TerminalTitle>
              <TerminalIcon className="fas fa-terminal" />
              visitor@lesla.terminal:~$
            </TerminalTitle>
            <TerminalButtons>
              <TerminalButton color={catppuccinMocha.yellow} />
              <TerminalButton color={catppuccinMocha.green} />
              <TerminalButton color={catppuccinMocha.red} onClick={handleCloseClick} />
            </TerminalButtons>
          </TerminalHeader>

          <TerminalContent ref={contentRef} $isMobile={isMobile}>
            <WelcomeMessage />
            <History history={history} />
            <CommandLine onExecute={executeCommand} />
          </TerminalContent>
        </TerminalWindow>
      </TerminalContainer>

      <Footer $isMobile={isMobile}>
        <p>
          Copyright © 2025 cryals под лицензией MIT{' '}
          <a href="#" onClick={handleLicenseClick}>
            Посмотреть лицензию
          </a>
        </p>
      </Footer>

      {showLicense && <LicenseModal isOpen={showLicense} onClose={() => setShowLicense(false)} isMobile={isMobile} />}
    </>
  );
};

export default Terminal;
