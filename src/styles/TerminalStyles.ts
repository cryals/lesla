import styled, { css } from 'styled-components';
import { catppuccinMocha, statusColors } from './catppuccin';

interface DraggableProps {
  $isMobile?: boolean;
}

interface StyledProps {
  $isMobile?: boolean;
  $isNew?: boolean;
  $isError?: boolean;
  $status?: 'completed' | 'in-progress' | 'planned';
  color?: string;
}

// Контейнер терминала
export const TerminalContainer = styled.div<StyledProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;

  ${props => props.$isMobile && css`
    padding: 0;
  `}
`;

// Окно терминала
export const TerminalWindow = styled.div<StyledProps>`
  width: 100%;
  max-width: 800px;
  height: calc(100vh - 8rem);
  max-height: 700px;
  background-color: ${catppuccinMocha.crust};
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 3rem;
  
  ${props => !props.$isMobile && css`
    &:hover {
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    }
  `}

  ${props => props.$isMobile && css`
    width: 100%;
    height: 100vh;
    max-height: none;
    border-radius: 0;
    margin: 0;
  `}
`;

// Шапка терминала
export const TerminalHeader = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: ${catppuccinMocha.mantle};
  border-bottom: 1px solid ${catppuccinMocha.surface0};
`;

export const TerminalTitle = styled.div`
  color: ${catppuccinMocha.text};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TerminalIcon = styled.i`
  color: ${catppuccinMocha.blue};
  font-size: 1rem;
  margin-right: 0.5rem;
`;

export const TerminalButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TerminalButton = styled.div<StyledProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

// Содержимое терминала
export const TerminalContent = styled.div<StyledProps>`
  flex: 1;
  padding: ${props => props.$isMobile ? '1rem' : '2rem'};
  overflow-y: auto;
  background-color: ${catppuccinMocha.base};
  font-family: 'JetBrains Mono', monospace;
  font-size: ${props => props.$isMobile ? '14px' : '15px'};
  line-height: 1.6;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${catppuccinMocha.mantle};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${catppuccinMocha.surface1};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${catppuccinMocha.surface2};
  }
`;

// Приветственное сообщение
export const WelcomeContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 800px;
  text-align: center;
  position: relative;
`;

export const AsciiArt = styled.div`
  color: ${catppuccinMocha.mauve};
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  user-select: none;
  font-family: monospace;
  white-space: pre;
  text-align: center;
  
  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      text-decoration: underline;
      color: ${catppuccinMocha.sapphire};
    }
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.0;
  }
`;

export const InfoOverlay = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: ${catppuccinMocha.surface0};
  border-radius: 8px;
  display: inline-block;
  text-align: center;
`;

export const ProjectTitle = styled.div`
  color: ${catppuccinMocha.mauve};
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Copyright = styled.div`
  color: ${catppuccinMocha.subtext0};
  font-size: 0.9em;
  margin-bottom: 1rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  
  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${catppuccinMocha.sapphire};
    }
    
    i {
      font-size: 1.1em;
    }
  }
`;

export const WelcomeText = styled.div`
  color: ${catppuccinMocha.subtext1};
  margin-top: 2rem;
  text-align: left;

  p {
    margin: 0.5rem 0;
  }
`;

// История команд
export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HistoryEntry = styled.div<StyledProps>`
  animation: ${props => props.$isNew ? 'slideUp 0.4s ease forwards' : 'none'};
`;

// Строка ввода команды
export const CommandLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const CommandPrompt = styled.span`
  color: ${catppuccinMocha.green};
  white-space: nowrap;
`;

export const CommandInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: ${catppuccinMocha.text};
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  caret-color: ${catppuccinMocha.text};
  padding: 0;
  width: 100%;
  outline: none;
  
  &::selection {
    background: ${catppuccinMocha.surface0};
    color: ${catppuccinMocha.text};
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  display: none;
  background-color: ${catppuccinMocha.surface0};
  color: ${catppuccinMocha.green};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: ${catppuccinMocha.surface1};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    display: flex;
    width: 36px;
    height: 36px;
    margin-left: 6px;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 18px;
  background-color: ${catppuccinMocha.text};
  margin-left: 2px;
  animation: blink 1s infinite;
  position: absolute;
  left: 0;
`;

// Вывод команды
export const OutputContainer = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  
  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-block;
    
    &:hover {
      text-decoration: underline;
      color: ${catppuccinMocha.sapphire};
    }
  }

  i {
    width: 20px;
    text-align: center;
    margin-right: 0.5rem;
    color: ${catppuccinMocha.blue};
  }
`;

export const OutputTitle = styled.h3`
  color: ${catppuccinMocha.mauve};
  margin-bottom: 1rem;
  font-size: 1.1em;
  white-space: pre;
  font-family: monospace;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 0;
`;

export const OutputText = styled.div<StyledProps>`
  color: ${props => props.$isError ? catppuccinMocha.red : catppuccinMocha.text};
  white-space: pre-wrap;
  word-break: break-word;
  font-family: monospace;
  line-height: 1.2;
  margin-top: 1rem;

  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    transition: all 0.2s ease;
    padding: 0 0.2rem;
    border-radius: 3px;
    display: inline-block;
    
    &:hover {
      text-decoration: underline;
      color: ${catppuccinMocha.sapphire};
      background-color: transparent;
    }
  }

  .contact-container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 1rem;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  
  .command-container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 1rem;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  
  .ascii-art {
    flex: 0 0 auto;
    color: ${catppuccinMocha.mauve};
    white-space: pre;
    line-height: 1.0;
    margin: 0;
    font-family: monospace;
    font-size: 10px;
    transform: scale(0.9);
    transform-origin: left top;
    
    @media (max-width: 768px) {
      font-size: 7px;
      transform: scale(0.8);
      transform-origin: left top;
      max-width: 100%;
      overflow-x: auto;
    }
  }
  
  .command-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    white-space: normal;
    background-color: #1e1e2e;
    border-radius: 10px;
    
    p {
      margin: 0.5rem 0;
      
      i {
        width: 24px;
        margin-right: 0.5rem;
        text-align: center;
        color: ${catppuccinMocha.blue};
      }
      
      a {
        margin-left: 0.5rem;
      }
    }
  }
  
  .contact-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    background-color: #1e1e2e;
    border-radius: 10px;
    white-space: normal;
    
    p {
      margin: 0.7rem 0;
      display: flex;
      align-items: center;
      
      i {
        width: 24px;
        margin-right: 1rem;
        text-align: center;
        color: ${catppuccinMocha.blue};
      }
      
      a {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const CommandText = styled.span<StyledProps>`
  color: ${props => props.$isError ? catppuccinMocha.red : catppuccinMocha.text};
`;

// Стили для таблиц
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.5rem;
  color: ${catppuccinMocha.blue};
  border-bottom: 1px solid ${catppuccinMocha.surface0};
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: ${catppuccinMocha.surface0};
  }
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid ${catppuccinMocha.surface0};
`;

export const StatusCell = styled(TableCell)<StyledProps>`
  color: ${props => {
    switch (props.$status) {
      case 'completed':
        return catppuccinMocha.green;
      case 'in-progress':
        return catppuccinMocha.yellow;
      case 'planned':
        return catppuccinMocha.blue;
      default:
        return catppuccinMocha.text;
    }
  }};
`;

export const FileIcon = styled.span`
  color: ${catppuccinMocha.blue};
  margin-right: 0.5rem;
`;

// Модальное окно
export const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
`;

export const ModalContent = styled.div`
  background-color: ${catppuccinMocha.base};
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 95%;
    max-height: 90vh;
    border-radius: 4px;
  }
`;

export const ModalHeader = styled.div`
  padding: 1rem;
  background-color: ${catppuccinMocha.mantle};
  border-bottom: 1px solid ${catppuccinMocha.surface0};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.div`
  color: ${catppuccinMocha.yellow};
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: ${catppuccinMocha.blue};
  }
`;

export const ModalClose = styled.div`
  color: ${catppuccinMocha.text};
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${catppuccinMocha.red};
    background: ${catppuccinMocha.surface0};
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  max-height: 60vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
    max-height: 75vh;
  }
`;

export const LicenseText = styled.pre`
  font-size: 14px;
  white-space: pre-wrap;
  color: ${catppuccinMocha.subtext0};
  line-height: 1.5;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1.4;
  }
`;

// Footer
export const Footer = styled.footer<StyledProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${catppuccinMocha.mantle};
  color: ${catppuccinMocha.subtext0};
  padding: 0.75rem;
  text-align: center;
  border-top: 1px solid ${catppuccinMocha.surface0};
  font-size: ${props => props.$isMobile ? '12px' : '14px'};
  
  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
      color: ${catppuccinMocha.sapphire};
    }
  }
`;

// Командный блок помощи
export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommandList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CommandItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CommandName = styled.code`
  color: ${catppuccinMocha.mauve};
  background-color: ${catppuccinMocha.surface0};
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-size: 0.9em;
  
  small {
    color: ${catppuccinMocha.subtext0};
    margin-left: 0.5rem;
  }
`;

export const CommandDescription = styled.div`
  color: ${catppuccinMocha.subtext1};
  margin-left: 1rem;
  font-size: 0.9em;
`;

// Контактная информация
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ContactLabel = styled.span`
  color: ${catppuccinMocha.blue};
  min-width: 100px;
`;

export const ContactValue = styled.span`
  color: ${catppuccinMocha.text};
  
  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const SocialLink = styled.a`
  color: ${catppuccinMocha.blue};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
    color: ${catppuccinMocha.sapphire};
  }
`;

export const GithubLink = styled.a`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${catppuccinMocha.blue};
  text-decoration: none;
  font-size: 1.2em;
  padding: 0.5rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
  
  &:hover {
    color: ${catppuccinMocha.sapphire};
  }
  
  i {
    font-size: 1.2em;
  }
  
  @media (max-width: 768px) {
    right: 0;
    top: 0.25rem;
    padding-right: 0.25rem;
  }
`;

export const Version = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 2.5rem;
  color: ${catppuccinMocha.subtext0};
  font-size: 0.9em;
  padding: 0.5rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`; 