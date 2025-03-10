import React from 'react';
import { 
  HistoryContainer, 
  HistoryEntry, 
  CommandLineContainer, 
  CommandPrompt, 
  CommandText, 
  OutputContainer, 
  OutputTitle, 
  OutputText, 
  HelpTitle,
  AboutTitle,
  ProjectsTitle,
  PriceTitle,
  ContactTitle,
  HiddenCommandTitle
} from '../styles/TerminalStyles';
import { HistoryItem } from '../types/commands';

interface HistoryProps {
  history: HistoryItem[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  const renderTitle = (item: HistoryItem) => {
    if (!item.output?.title) return null;
    
    // Применяем соответствующий компонент с анимацией свечения
    switch (item.command) {
      case 'help':
        return <HelpTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />;
      case 'about':
        return <AboutTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />;
      case 'projects':
        return <ProjectsTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />;
        case 'price':
          return <PriceTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />;
      case 'contact':
        return <ContactTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />;
      case 'fooo':
      case 'cat':
      case 'meow':
      case 'matrix':
      case 'coffee':
        return <HiddenCommandTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />;
      default:
        return <OutputTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />;
    }
  };

  return (
    <HistoryContainer>
      {history.map((item, index) => (
        <HistoryEntry key={index} $isNew={item.isNew}>
          <CommandLineContainer>
            <CommandPrompt>visitor@lesla.terminal:~$</CommandPrompt>
            <CommandText $isError={item.error}>{item.command}</CommandText>
          </CommandLineContainer>
          {item.output && (
            <OutputContainer>
              {item.output.title && renderTitle(item)}
              {item.output.content && (
                <OutputText 
                  $isError={item.error} 
                  dangerouslySetInnerHTML={{ __html: item.output.content }} 
                />
              )}
            </OutputContainer>
          )}
        </HistoryEntry>
      ))}
    </HistoryContainer>
  );
};

export default History; 