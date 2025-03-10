import styled, { css, keyframes } from 'styled-components';
import { catppuccinMocha } from './catppuccin';

interface StyledProps {
  $isMobile?: boolean;
  $isNew?: boolean;
  $isError?: boolean;
  $status?: 'completed' | 'in-progress' | 'planned';
  color?: string;
}

// Анимации
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Анимация переливания цветов
const rainbowFlow = keyframes`
  0% { color: ${catppuccinMocha.mauve}; text-shadow: 0 0 10px ${catppuccinMocha.mauve}, 0 0 15px ${catppuccinMocha.mauve}; }
  12.5% { color: ${catppuccinMocha.blue}; text-shadow: 0 0 10px ${catppuccinMocha.blue}, 0 0 15px ${catppuccinMocha.blue}; }
  25% { color: ${catppuccinMocha.sapphire}; text-shadow: 0 0 10px ${catppuccinMocha.sapphire}, 0 0 15px ${catppuccinMocha.sapphire}; }
  37.5% { color: ${catppuccinMocha.teal}; text-shadow: 0 0 10px ${catppuccinMocha.teal}, 0 0 15px ${catppuccinMocha.teal}; }
  50% { color: ${catppuccinMocha.green}; text-shadow: 0 0 10px ${catppuccinMocha.green}, 0 0 15px ${catppuccinMocha.green}; }
  62.5% { color: ${catppuccinMocha.yellow}; text-shadow: 0 0 10px ${catppuccinMocha.yellow}, 0 0 15px ${catppuccinMocha.yellow}; }
  75% { color: ${catppuccinMocha.peach}; text-shadow: 0 0 10px ${catppuccinMocha.peach}, 0 0 15px ${catppuccinMocha.peach}; }
  87.5% { color: ${catppuccinMocha.maroon}; text-shadow: 0 0 10px ${catppuccinMocha.maroon}, 0 0 15px ${catppuccinMocha.maroon}; }
  100% { color: ${catppuccinMocha.mauve}; text-shadow: 0 0 10px ${catppuccinMocha.mauve}, 0 0 15px ${catppuccinMocha.mauve}; }
`;

// Пульсация свечения
const glowPulse = keyframes`
  0% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
  50% { text-shadow: 0 0 15px currentColor, 0 0 25px currentColor, 0 0 35px currentColor; }
  100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
`;

// Контейнер терминала
export const TerminalContainer = styled.div<StyledProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;

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
  background-color: rgba(17, 17, 27, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 2px 0 rgba(255, 255, 255, 0.05) inset;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 3rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${props => !props.$isMobile && css`
    &:hover {
      box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset,
        0 2px 0 rgba(255, 255, 255, 0.1) inset;
      transform: translateY(-2px);
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
  padding: 0.75rem 1.2rem;
  background-color: ${catppuccinMocha.mantle};
  border-bottom: 1px solid ${catppuccinMocha.surface0};
  user-select: none;
`;

export const TerminalTitle = styled.div`
  color: ${catppuccinMocha.text};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

export const TerminalIcon = styled.i`
  color: ${catppuccinMocha.mauve};
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
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

// Содержимое терминала
export const TerminalContent = styled.div<StyledProps>`
  flex: 1;
  padding: ${props => props.$isMobile ? '1.2rem' : '2rem'};
  overflow-y: auto;
  background-color: ${catppuccinMocha.base};
  font-family: 'JetBrains Mono', monospace;
  font-size: ${props => props.$isMobile ? '14px' : '16px'};
  line-height: 1.6;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${catppuccinMocha.mantle};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${catppuccinMocha.surface1};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${catppuccinMocha.surface2};
  }

  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
      color: ${catppuccinMocha.sapphire};
      text-shadow: 0 0 8px ${catppuccinMocha.sapphire}40;
    }
  }
`;

// Приветственное сообщение
export const WelcomeContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 800px;
  text-align: center;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;
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
  padding: 1.2rem;
  background-color: rgba(49, 50, 68, 0.5);
  border-radius: 12px;
  display: inline-block;
  text-align: center;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectTitle = styled.div`
  color: ${catppuccinMocha.mauve};
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(203, 166, 247, 0.3);
`;

export const Copyright = styled.div`
  color: ${catppuccinMocha.subtext0};
  font-size: 0.9em;
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
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
    transition: all 0.2s ease;

    &:hover {
      color: ${catppuccinMocha.sapphire};
      transform: translateY(-2px);
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
    margin: 0.7rem 0;
  }
`;

// История команд
export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const HistoryEntry = styled.div<StyledProps>`
  animation: ${props => props.$isNew ? css`${slideUp} 0.4s ease forwards` : 'none'};
`;

// Строка ввода команды
export const CommandLineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  background: transparent;
  border: none;
  outline: none;
`;

export const CommandPrompt = styled.span`
  color: ${catppuccinMocha.green};
  white-space: nowrap;
  font-weight: 500;
`;

export const CommandInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: ${catppuccinMocha.text};
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  caret-color: ${catppuccinMocha.mauve};
  padding: 0;
  width: 100%;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }
`;

// Footer
export const Footer = styled.footer<StyledProps>`
  background-color: ${catppuccinMocha.mantle};
  padding: 1rem;
  text-align: center;
  color: ${catppuccinMocha.subtext0};
  font-size: 0.8rem;
  border-top: 1px solid ${catppuccinMocha.surface0};
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;

  ${props => props.$isMobile && css`
    padding: 0.7rem;
    font-size: 0.7rem;

    // Скрываем блок с лицензией на мобильных устройствах
    @media (max-width: 768px) {
      display: none;
    }
  `}

  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${catppuccinMocha.mauve};
      text-decoration: underline;
    }
  }
`;


// Modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(17, 17, 27, 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${css`${fadeIn} 0.3s ease`};
  padding: 2rem;
`;

export const ModalContent = styled.div`
  background: ${catppuccinMocha.base};
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 700px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  animation: ${css`${slideUp} 0.4s ease`};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${catppuccinMocha.surface0};
`;

export const ModalTitle = styled.h2`
  color: ${catppuccinMocha.mauve};
  margin: 0;
  font-size: 1.5rem;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${catppuccinMocha.overlay0};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${catppuccinMocha.red};
  }
`;

export const ModalBody = styled.div`
  color: ${catppuccinMocha.text};
  line-height: 1.6;

  p {
    margin: 1rem 0;
  }

  a {
    color: ${catppuccinMocha.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Компоненты для команд
export const CommandContainer = styled.div`
  margin-top: 1rem;
`;

export const CommandTitle = styled.div<StyledProps>`
  color: ${catppuccinMocha.mauve};
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${catppuccinMocha.surface0};
`;

export const CommandDescription = styled.div`
  color: ${catppuccinMocha.subtext1};
  margin-bottom: 1rem;
`;

export const CommandSection = styled.div`
  margin-top: 1.5rem;
`;

export const CommandSectionTitle = styled.div`
  color: ${catppuccinMocha.blue};
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const CommandList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CommandItem = styled.div`
  padding: 1rem;
  background: ${catppuccinMocha.mantle};
  border-radius: 8px;
  border: 1px solid ${catppuccinMocha.surface0};
  transition: all 0.2s ease;

  &:hover {
    background: ${catppuccinMocha.surface0};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CommandName = styled.div`
  color: ${catppuccinMocha.green};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const CommandDetails = styled.div`
  color: ${catppuccinMocha.subtext0};
  font-size: 0.9rem;
`;

// Project styles
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProjectItem = styled.div<StyledProps>`
  padding: 1.5rem;
  background: ${catppuccinMocha.mantle};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-left: 4px solid ${props => {
    if (props.$status === 'completed') return catppuccinMocha.green;
    if (props.$status === 'in-progress') return catppuccinMocha.yellow;
    return catppuccinMocha.blue;
  }};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProjectName = styled.h3`
  color: ${catppuccinMocha.text};
  margin: 0;
  font-size: 1.2rem;
`;

export const ProjectStatus = styled.span<StyledProps>`
  font-size: 0.8rem;
  padding: 0.25rem 0.7rem;
  border-radius: 30px;
  font-weight: 500;
  background: ${props => {
    if (props.$status === 'completed') return `rgba(166, 227, 161, 0.15)`;
    if (props.$status === 'in-progress') return `rgba(249, 226, 175, 0.15)`;
    return `rgba(137, 180, 250, 0.15)`;
  }};
  color: ${props => {
    if (props.$status === 'completed') return catppuccinMocha.green;
    if (props.$status === 'in-progress') return catppuccinMocha.yellow;
    return catppuccinMocha.blue;
  }};
  animation: ${props => props.$isNew ? css`${pulse} 2s infinite` : 'none'};
`;

export const ProjectDesc = styled.div`
  color: ${catppuccinMocha.subtext0};
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const TechTag = styled.span`
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: ${catppuccinMocha.surface0};
  color: ${catppuccinMocha.subtext1};
`;

export const ProjectLinkGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${catppuccinMocha.blue};
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s ease;

    &:hover {
      color: ${catppuccinMocha.sapphire};
      transform: translateY(-2px);
    }
  }
`;

// Contact
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactItem = styled.div`
  padding: 1.5rem;
  background: ${catppuccinMocha.mantle};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${catppuccinMocha.surface0};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${catppuccinMocha.mauve};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${catppuccinMocha.base};
`;

export const ContactDetail = styled.div`
  flex: 1;
`;

export const ContactName = styled.div`
  color: ${catppuccinMocha.text};
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const ContactValue = styled.div`
  color: ${catppuccinMocha.subtext0};
  font-size: 0.9rem;
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
  flex: 1;
`;

// Стиль для заголовка HELP
export const HelpTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${rainbowFlow} 10s infinite linear, ${glowPulse} 2s infinite ease-in-out;
  animation-delay: 0s, 0s;
  user-select: none;
  white-space: pre;
  font-family: monospace;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 0;
`;

// Стиль для заголовка ABOUT
export const AboutTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${rainbowFlow} 10s infinite linear, ${glowPulse} 2s infinite ease-in-out;
  animation-delay: -1.25s, -0.25s;
  user-select: none;
  white-space: pre;
  font-family: monospace;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 0;
`;

// Стиль для заголовка PROJECTS
export const ProjectsTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${rainbowFlow} 10s infinite linear, ${glowPulse} 2s infinite ease-in-out;
  animation-delay: -2.5s, -0.5s;
  user-select: none;
  white-space: pre;
  font-family: monospace;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 0;
`;

export const PriceTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${rainbowFlow} 10s infinite linear, ${glowPulse} 2s infinite ease-in-out;
  animation-delay: -3.5s, -0.45s;
  user-select: none;
  white-space: pre;
  font-family: monospace;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 0;
`;

// Стиль для заголовка CONTACT
export const ContactTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${rainbowFlow} 10s infinite linear, ${glowPulse} 2s infinite ease-in-out;
  animation-delay: -3.75s, -0.75s;
  user-select: none;
  white-space: pre;
  font-family: monospace;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 0;
`;

// Стиль для скрытых команд (fooo и других)
export const HiddenCommandTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${rainbowFlow} 10s infinite linear, ${glowPulse} 2s infinite ease-in-out;
  animation-delay: -5s, -1s;
  user-select: none;
  white-space: pre;
  font-family: monospace;
  line-height: 1.2;
  text-align: center;
  padding: 1rem 0;
`;
