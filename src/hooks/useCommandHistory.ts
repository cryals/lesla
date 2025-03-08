import { useState, useCallback } from 'react';

export interface CommandHistoryEntry {
  id: string;
  command: string;
  output: string;
  title?: string;
  isError?: boolean;
  isHtml?: boolean;
  jsonOutput?: any;
  meta?: any;
  timestamp: number;
}

const useCommandHistory = () => {
  const [history, setHistory] = useState<CommandHistoryEntry[]>([]);
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  // Добавление новой команды в историю
  const addToHistory = useCallback((entry: Omit<CommandHistoryEntry, 'id' | 'timestamp'>) => {
    const id = `cmd-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    setHistory(prev => [
      ...prev,
      {
        ...entry,
        id,
        timestamp: Date.now()
      }
    ]);
    
    // Если это команда, добавляем ее в историю команд
    if (entry.command) {
      setCommandsHistory(prev => [...prev, entry.command]);
      setHistoryIndex(prev => prev + 1);
    }
  }, []);
  
  // Очистка истории
  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);
  
  // Навигация по истории команд (для клавиш вверх/вниз)
  const navigateHistory = useCallback((direction: 'up' | 'down'): string => {
    if (direction === 'up' && historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      return commandsHistory[historyIndex - 1] || '';
    } else if (direction === 'down' && historyIndex < commandsHistory.length) {
      setHistoryIndex(prev => prev + 1);
      return historyIndex + 1 === commandsHistory.length 
        ? '' 
        : commandsHistory[historyIndex + 1] || '';
    }
    
    return direction === 'up' 
      ? commandsHistory[historyIndex] || '' 
      : '';
  }, [historyIndex, commandsHistory]);
  
  return {
    history,
    commandsHistory,
    historyIndex,
    addToHistory,
    clearHistory,
    navigateHistory
  };
};

export default useCommandHistory; 