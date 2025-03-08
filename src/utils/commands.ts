import { services } from '../data/services';
import { contacts } from '../data/contacts';
import { fileIcons } from '../styles/catppuccin';

export interface CommandOutput {
  title?: string;
  content: string;
  isHtml?: boolean;
  isError?: boolean;
  jsonOutput?: any;
  meta?: any;
}

export type CommandHandler = (args: string[]) => CommandOutput | Promise<CommandOutput>;

export interface Command {
  name: string;
  description: string;
  usage?: string;
  handler: CommandHandler;
  aliases?: string[];
}

// Функция для получения иконки файла по типу
export const getFileIcon = (type: string): string => {
  return fileIcons[type as keyof typeof fileIcons] || fileIcons.default;
};

// Обработка команды help
const helpCommand: CommandHandler = () => {
  return {
    title: '[ПОМОЩЬ]',
    content: 'Доступные команды:',
    isHtml: true,
    meta: {
      type: 'help'
    }
  };
};

// Обработка команды about
const aboutCommand: CommandHandler = () => {
  return {
    title: '[О НАС]',
    content: `Lesla — команда профессионалов в области веб-разработки. Мы специализируемся на создании современных, функциональных и эстетически привлекательных сайтов.
    
Наша цель — помогать бизнесу эффективно представлять себя в цифровом пространстве и достигать поставленных целей.

Мы ценим долгосрочные отношения с клиентами и стремимся превосходить их ожидания, предоставляя качественные услуги в срок.`,
    isHtml: false
  };
};

// Обработка команды cat (просмотр файлов)
const catCommand: CommandHandler = (args) => {
  if (!args.length) {
    return {
      content: 'Укажите файл для просмотра, например: cat services.json',
      isError: true
    };
  }

  const filename = args[0];

  if (filename === 'services.json') {
    return {
      title: '[УСЛУГИ]',
      content: '',
      jsonOutput: services
    };
  } else {
    return {
      content: `Файл не найден: ${filename}`,
      isError: true
    };
  }
};

// Обработка команды ls (список файлов/проектов)
const lsCommand: CommandHandler = (args) => {
  const hasLaFlag = args.includes('-la');
  const targetDir = args.find(arg => !arg.startsWith('-')) || '';

  if (targetDir === 'projects/' || targetDir === 'projects') {
    return {
      title: '[ПРОЕКТЫ]',
      content: 'Список проектов:',
      meta: {
        type: 'projects',
        showDetails: hasLaFlag
      }
    };
  } else if (!targetDir) {
    return {
      title: '[ФАЙЛЫ]',
      content: 'Список файлов:',
      meta: {
        type: 'files',
        items: ['services.json', 'projects/', 'about.txt', 'contact.txt', 'license.txt']
      }
    };
  } else {
    return {
      content: `Директория не найдена: ${targetDir}`,
      isError: true
    };
  }
};

// Обработка команды contact
const contactCommand: CommandHandler = () => {
  return {
    title: '[КОНТАКТЫ]',
    content: 'Контактная информация:',
    meta: {
      type: 'contacts',
      data: contacts
    }
  };
};

// Обработка команды license - теперь выводит лицензию в терминал
const licenseCommand: CommandHandler = () => {
  return {
    title: '[MIT LICENSE]',
    content: `MIT License

Copyright (c) 2025 AL-S?

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  };
};

// Обработка команды clear
const clearCommand: CommandHandler = () => {
  return {
    content: '',
    meta: {
      type: 'clear'
    }
  };
};

// Обработка команды whoami
const whoamiCommand: CommandHandler = () => {
  return {
    content: 'visitor'
  };
};

// Обработка команды date
const dateCommand: CommandHandler = () => {
  return {
    content: new Date().toLocaleString()
  };
};

// Обработка команды echo
const echoCommand: CommandHandler = (args) => {
  return {
    content: args.join(' ')
  };
};

// Обработка команды exit
const exitCommand: CommandHandler = () => {
  return {
    content: 'Завершение работы терминала...',
    meta: {
      type: 'exit'
    }
  };
};

// Обработка команды version
const versionCommand: CommandHandler = () => {
  return {
    content: 'Lesla Term v1.0.0'
  };
};

// Список всех доступных команд
export const availableCommands: Command[] = [
  {
    name: 'help',
    description: 'Показать список доступных команд',
    handler: helpCommand
  },
  {
    name: 'about',
    description: 'Информация о компании',
    handler: aboutCommand
  },
  {
    name: 'cat',
    description: 'Просмотр содержимого файла',
    usage: 'cat [filename]',
    handler: catCommand
  },
  {
    name: 'ls',
    description: 'Просмотр списка файлов или проектов',
    usage: 'ls [-la] [directory]',
    handler: lsCommand,
    aliases: ['dir', 'list']
  },
  {
    name: 'contact',
    description: 'Контактная информация',
    handler: contactCommand,
    aliases: ['contacts']
  },
  {
    name: 'license',
    description: 'Показать лицензию',
    handler: licenseCommand
  },
  {
    name: 'clear',
    description: 'Очистить терминал',
    handler: clearCommand,
    aliases: ['cls']
  },
  {
    name: 'whoami',
    description: 'Показать текущего пользователя',
    handler: whoamiCommand
  },
  {
    name: 'date',
    description: 'Показать текущую дату и время',
    handler: dateCommand
  },
  {
    name: 'echo',
    description: 'Вывести текст в терминал',
    usage: 'echo [text]',
    handler: echoCommand
  },
  {
    name: 'exit',
    description: 'Закрыть терминал',
    handler: exitCommand,
    aliases: ['quit']
  },
  {
    name: 'version',
    description: 'Показать версию терминала',
    handler: versionCommand,
    aliases: ['ver']
  }
];

// Функция для поиска команды по имени или алиасу
export const findCommand = (name: string): Command | undefined => {
  const commandName = name.toLowerCase().trim();
  
  return availableCommands.find(cmd => 
    cmd.name === commandName || (cmd.aliases && cmd.aliases.includes(commandName))
  );
};

// Функция для парсинга строки ввода на команду и аргументы
export const parseCommand = (input: string): { command: string, args: string[] } => {
  const parts = input.trim().split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1).filter(arg => arg.length > 0);
  
  return { command, args };
};

// Функция обработки команды
export const executeCommand = async (input: string): Promise<CommandOutput> => {
  if (!input.trim()) {
    return { content: '', isError: false };
  }
  
  const { command, args } = parseCommand(input);
  const cmd = findCommand(command);
  
  if (!cmd) {
    return {
      content: `Команда не найдена: ${command}. Введите 'help' для списка доступных команд.`,
      isError: true
    };
  }
  
  try {
    return await cmd.handler(args);
  } catch (error) {
    return {
      content: `Ошибка выполнения команды: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`,
      isError: true
    };
  }
};

// Функция для автодополнения
export const autoComplete = (input: string): string[] => {
  if (!input) return [];
  
  const { command, args } = parseCommand(input);
  
  // Если есть пробел, но нет следующего аргумента, то ищем по команде
  if (input.endsWith(' ') && args.length === 0) {
    const cmd = findCommand(command);
    
    if (cmd) {
      if (cmd.name === 'cat') return ['services.json', 'license.txt'];
      if (cmd.name === 'ls') return ['projects/', '-la'];
    }
    
    return [];
  }
  
  // Если нет пробела, ищем команду
  const matches = availableCommands
    .map(cmd => [cmd.name, ...(cmd.aliases || [])])
    .flat()
    .filter(cmd => cmd.startsWith(command));
  
  return matches;
}; 