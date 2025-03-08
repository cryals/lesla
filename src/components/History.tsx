import React from 'react';
import { HistoryContainer, HistoryEntry, CommandLineContainer, CommandPrompt, CommandText, OutputContainer, OutputTitle, OutputText } from '../styles/TerminalStyles';
import { HistoryItem } from '../types/commands';

interface HistoryProps {
  history: HistoryItem[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
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
              {item.output.title && <OutputTitle dangerouslySetInnerHTML={{ __html: item.output.title }} />}
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