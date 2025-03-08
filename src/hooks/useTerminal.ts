import { useState, useRef, useEffect } from 'react';
import commands from '../components/commands';
import { HistoryItem } from '../types/commands';

const useTerminal = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showLicense, setShowLicense] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Автоскролл при добавлении новых команд
  useEffect(() => {
    if (contentRef.current) {
      try {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      } catch (error) {
        console.warn('Failed to scroll terminal:', error);
      }
    }
  }, [history]);

  const executeCommand = (command: string) => {
    try {
      const trimmedCommand = command.trim().toLowerCase();
      const cmd = commands.find(c => c.name === trimmedCommand);
      
      if (trimmedCommand === '') {
        return;
      }

      const historyItem: HistoryItem = {
        command,
        error: !cmd,
        isNew: true
      };

      if (cmd) {
        try {
          const output = cmd.execute();
          if (output?.clear) {
            setHistory([]);
            return;
          }
          historyItem.output = output;
        } catch (error) {
          historyItem.error = true;
          historyItem.output = {
            content: `Ошибка выполнения команды: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
          };
        }
      } else {
        historyItem.output = {
          content: `Команда не найдена: ${command}\nВведите 'help' для списка команд`
        };
      }

      setHistory(prev => [...prev, historyItem]);

      // Убираем флаг isNew через секунду
      const timeoutId = setTimeout(() => {
        setHistory(prev => 
          prev.map(item => 
            item === historyItem ? { ...item, isNew: false } : item
          )
        );
      }, 1000);

      // Очистка таймера при размонтировании
      return () => clearTimeout(timeoutId);

    } catch (error) {
      console.error('Error executing command:', error);
      setHistory(prev => [...prev, {
        command,
        error: true,
        isNew: true,
        output: {
          content: 'Произошла критическая ошибка при выполнении команды'
        }
      }]);
    }
  };

  return {
    history,
    executeCommand,
    showLicense,
    setShowLicense,
    contentRef
  };
};

export default useTerminal; 