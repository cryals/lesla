import React, { useState, useRef, useEffect } from 'react';
import { CommandLineContainer, CommandPrompt, CommandInput } from '../styles/TerminalStyles';
import { catppuccinMocha } from '../styles/catppuccin';

interface CommandLineProps {
  onExecute: (command: string) => void;
}

const CommandLine: React.FC<CommandLineProps> = ({ onExecute }) => {
  const [command, setCommand] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      onExecute(command);
      setCommand('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <CommandLineContainer as="form" onSubmit={handleSubmit}>
      <CommandPrompt>visitor@lesla.terminal:~$</CommandPrompt>
      <CommandInput
        ref={inputRef}
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
      />
      {isMobile && (
        <button 
          type="submit"
          style={{
            background: 'transparent',
            border: 'none',
            color: catppuccinMocha.green,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0.5rem',
            cursor: 'pointer'
          }}
        >
          <i className="fas fa-terminal" />
        </button>
      )}
    </CommandLineContainer>
  );
};

export default CommandLine; 