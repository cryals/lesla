import { CommandType } from '../types/commands';
import { catppuccinMocha } from '../styles/catppuccin';

const commands: CommandType[] = [
  {
    name: 'help',
    description: 'Показать список доступных команд',
    execute: () => ({
      title: `
   ▄█    █▄       ▄████████  ▄█          ▄███████▄ 
  ███    ███     ███    ███ ███         ███    ███ 
  ███    ███     ███    █▀  ███         ███    ███ 
 ▄███▄▄▄▄███▄▄  ▄███▄▄▄     ███         ███    ███ 
▀▀███▀▀▀▀███▀  ▀▀███▀▀▀     ███       ▀█████████▀  
  ███    ███     ███    █▄  ███         ███        
  ███    ███     ███    ███ ███▌    ▄   ███        
  ███    █▀      ██████████ █████▄▄██  ▄████▀      
 `,
      content: `<div class="command-container">
<div class="ascii-art" style="user-select: none;">
                      ######%%           %%#############
                      ##########%     %################%
                      ######%%%%##%%%###%##%@%#########
                      %#####%###****#########%########%
                       #####*=------=#####@@%#########
                       ##+=----------=##############%
                      +---------------=*############%#
                   %#=--------------==--+*#########%%##%
                 %#*------++-------=+++--=++%%#####%####%
                 %*------+=+-------==--==--=*#%%%%%######%
                 +-----=+--+=------+----=+=-+####%#+++###%
                *=----=+----=------+------=+=+++++=---=#
                +----=+------=----=+-------====----=--=*
               #=----+=====---+=--=+--====--+------==--=+
               *----==----------=++=--------==------=---=#
              #+----*%%%###**------+**###%%%@=------=----=
              *=---=*=+#####--------+=######*=--==-=+----=#
              +=---=#-######--------=#######+---*=-++-----*
              *=*--=+=-####*---------*#####==--*=-=**----=
              +*=*+=+*=--------------------===#=-+++*=-+==+#
              %##**+*+*+------------------=***=+*++#*=*
                 *%   ****+=-----------=+**+**#*+*
                            **%*#++++*####*%%+===*
                         ####%#+=--*##+-----#+----+
####%*#**              %#%##%###%###*=------+*=-=+
 %*##*#***+*           ****###*##%+---------*%*+#
   #*++=+====+*        ++**####*#=--==------**=-=*
      #*=====+*+==+#  =--#%##%%##=------=---#*=---=+
                  ##+-----*%%%#%+-==-==---=###===+#
                   %#----*+*##*------+*+=-=%##+*
              *#%*%##%##%%%#*+------*%#########*=
            ****+--=++=+#####*-----*%###########%%
       ==+==---=+*-----=######%**%%%#++=###*####*=+
    =====+-=----+++-----##***++===-+###%#*+++==----=+
      ===+-==---==+++-----------=====+**++++#*==+++-=*
         *-+=---=-==++=--------+-------==*+*=++***==++*#
         =**===+**++==++*=---=*---------==+=++--+*+#**==-=%
          ====+        ===+==++---------====+=++=======**#
                               *+======**+===        ====+
                                 ++++====
</div>
<div class="command-info">
<p><span style="color: ${catppuccinMocha.green}; font-weight: bold;">help</span>    - Показать список доступных команд</p>
<p><span style="color: ${catppuccinMocha.green}; font-weight: bold;">about</span>   - Обо мне</p>
<p><span style="color: ${catppuccinMocha.green}; font-weight: bold;">projects</span> - Мои проекты</p>
<p><span style="color: ${catppuccinMocha.green}; font-weight: bold;">contact</span> - Контактная информация</p>
<p><span style="color: ${catppuccinMocha.green}; font-weight: bold;">price</span> - Прайс-Лист с ценами и услугами</p>
<p><span style="color: ${catppuccinMocha.green}; font-weight: bold;">clear</span>   - Очистить терминал</p>
</div>
</div>

<div style="font-family: monospace; margin-top: 10px;">
</div>`,
    }),
  },
  {
    name: 'about',
    description: 'Информация обо мне',
    execute: () => ({
      title: `
 ▄▄▄       ▄▄▄▄    ▒█████   █    ██ ▄▄▄█████▓
▒████▄    ▓█████▄ ▒██▒  ██▒ ██  ▓██▒▓  ██▒ ▓▒
▒██  ▀█▄  ▒██▒ ▄██▒██░  ██▒▓██  ▒██░▒ ▓██░ ▒░
░██▄▄▄▄██ ▒██░█▀  ▒██   ██░▓▓█  ░██░░ ▓██▓ ░ 
 ▓█   ▓██▒░▓█  ▀█▓░ ████▓▒░▒▒█████▓   ▒██▒ ░ 
 ▒▒   ▓▒█░░▒▓███▀▒░ ▒░▒░▒░ ░▒▓▒ ▒ ▒   ▒ ░░   
  ▒   ▒▒ ░▒░▒   ░   ░ ▒ ▒░ ░░▒░ ░ ░     ░    
  ░   ▒    ░    ░ ░ ░ ░ ▒   ░░░ ░ ░   ░      
      ░  ░ ░          ░ ░     ░              
                ░                                
 `,
      content: `<div class="command-container">
<div class="ascii-art" style="user-select: none;">

...............-.@@%%%##%%*#**=%++-+-##=**#@++........-......+-.......
..........=*+*++#*%*+==*-.-:+-:*::...:.=-:=%@#%:-.............-=......
.........==+%++*-:+*.+:+.%%.=.+.+-.-@-.--::.+:%%@:#....=........:-....
.......#+*=+-:-:.+:-=--+::%@:+*+=.*.--@=:.-#.::-#@#::...........:=.:..
.....=**-:-.#::-.+*.=-=:*:%+%%*%@*:=*.:#%*--%%+*.=+#+.....:......--.:.
...-=++*==..=:*.:::*+*:-:-:*@%...@*+.+.-#.+%.+@=:-*++*-...#=.......+..
..=#=-+=.:..-:+:.-.#**:+.--*%=-....-*=+=**..#-+%@*=.%@#=...%@%:....-:.
%#@#@:==..=+.:#.+.+.%.+=..*:@#-......-+++.#...@:@#@=.:@*:..:@@@**...-.
@@@@*:.:.-.--+--==.:%-.*.-:.#@.........*--=@.--*@*-#*.@@*:.+*@@%@%*:..
@@@@+.:.:-..+=*=-*..*-..*:-.=@-.........=*.*%%@@@%-.-%:@**.:=%@@@@#*..
@@@@*::.:-..=@*.#.+-@...+.-+@+..........:..-@@@@@@+..%%#+=.##%@@@@**.
@@@%%.::-.-.=.@+@.=:#@....@:-#................*%#%%-...@%##..###@@@@@+
@@@#@..*.+..-..#*%+.@:-.##@@.#..................*.......:@..%+%#*@*#
#@@@---..==-.-.%@@+%:-.+=@@@@+............................%:@+#**##-*#
.*@@@..-..=::=.*@%#*@...@@@#%*.............................%%%#*%@*%*+
..#@#=..:*=++.+%@+#=@....+@-..=...............=-............@+*+*@%+@.
.:#@@*...-=*=.++=-@@%.....-...............+=+**@+@..........@#%@%=@%=#
.:@@@*+.-.+#@%.*@%..@..............:-=*-##--%**@@@%.........=#@#@#+#%-
..@%*@@*%@%+%#=+*%...:............:=+*+@=%.....-*@@*........%#@%@@@*#%
:*@@@*@@@@@@@@@@.#.................#@*+:........:*@@:......:@@%@%%@#-.
*@@@@@@@@@@@@@@@@..................-@@#...........+@@......%#@@@%@%#*.
+#@@@@*@@@@@@@@@@@..................*@#............@=:.=@@@@@@@@*%...
*%@@@#@%@@@@@@@@@@@..................@@-............@=:.=@@@@@@@@*-...
.+@@@@@@@@@@@@@@@@@@-................:@#............-#+*%@@@@@@@@*-...
..%%@@@@@@@%@@@@@@@@@.................*@-...........#.@@@@@@#@@@@.:...
..=-%@@@@@@@%@@%@@@@@-.................#=*....+%.%#.#.@@@@@@@@@@**....
#.:...#=@@@@@@@@*@@@@*@%:..............:%-##@@**#%#+@@@@@@@@@@@-......
*-.*.-.*-@%@@@@@@#@@@@@+@%*@==-.-=.=+.+%@%+@@#+%@@@@@@@@@%@@@%++:.....
.*.++...+.%@@@@@@@@@@@@@*#@@@*+%#*+*@@-#%+##%@@@@@@@*@%@@@#@@@.=......
..#+--..:..*@@@@@@@+@@@@@@%@@@@*:-::+#@@*%@@@@@@%@@##%@*@@@@@@#.......
...#@....:..=*+#@@@@%%@@@@@@*@#--..==*:+%@@@@@@@=%-+*=@@+@@@%*#.......
....@=......=%@=+@@@@@%@@@*@@@#-+......::+#*@@%@:+*....=*@@##.........
.....#...-.:.-%-:#+@%%%@@@@@@#:..-........-:#@+=.::.....+=@@*.........
......=*.:=-=..#.-#..-#-@@@*+%...:-..........-*@.........:#@+:........
.......:=:..=--.:.....*@+#@*::.....:=........:.-@=........=%%=........
........-..:.+.........@*..#::.......=...........**........-@#=.......
.........=..:.=........+*.............-...........*+........=#........
........................@:..............:..........:+........*........
</div>
<div class="command-info">
<p>Ынтузиаст <span style="color: ${catppuccinMocha.blue}; font-weight: bold;">open source</span></p>
<p>Пишет всякую <span style="color: ${catppuccinMocha.peach}; font-weight: bold;">дичь</span></p>
<p>Контрибьютор каких-то проектов и не очень</p>
<p></p>
<p>Исследую разные направления в <span style="color: ${catppuccinMocha.mauve}; font-weight: bold;">ЫТ</span>, не ограничиваясь одной областью, делаю не пойми что</p>
</div>
</div>

<div style="font-family: monospace; margin-top: 10px;">
</div>`,
    }),
  },
  {
    name: 'projects',
    description: 'Мои проекты и вклады',
    execute: () => ({
      title: `
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
 `,
      content: `<div style="display: flex; justify-content: space-between; font-family: monospace; background: transparent; border: none; width: 100%;">
  <div class="ascii-art" style="user-select: none; text-align: left; flex-shrink: 0; margin-right: 20px;">
               ####
                 ##++##
                    #++#
                     ##+##########
      #+####        #####+++++++++++##
       #+++++++####+++++++++++++++++++##
        #+++#####++++++++++++++++++++#######++++##
         #+++++++++++++#+#+++++++++#++++++++++#+#
          ##+++++++++++#++++++-------+#++++#+-#
           ###+#+++++####++++++++#####+#####+#
            ####++++####+++###+#+++++++###-#
            ####+++####+--++###+#++++++####
             # #+++####---+#+#-###++++++##+#
               #+++##+++---+#+-++##+#+++##+#
               #+++######-----#######++#+++#      ##
                +++##-------+-----+##+#+#++#      ++#
                ##++#+----##+----+#+#++##++#     #++#
                #+##++########+++###+++##++##    #++##
                 #+#++#######+---##+++###+++#    #++#
                 #++##++######--##+++####+++#    #+##
                 #++##+#+#####-+##+###-###++#   #++#
                 ##+#+-+-####++##+##-+++##+++   ++##
                 #++#+---###########---##+---###+##
                 #+-++----#########---#-###++#+###
                 #++##----+#######---+++-+#+++##
                #+++###-----##-++-----########+++#
              ##+++#####----+###------#########++++#
            #+++#########-----#------#####+#####++#
           ########.----++----#------#------+############
      #############+-----++--+#+#+--+-------##############
    #################+-+#######+++###++-+##################
     ### ##                +------+
                            ##  ##
  </div>

  <div style="text-align: left; flex-shrink: 0; align-self: center;">
    <span style="color: ${catppuccinMocha.blue}; white-space: pre-line; display: block;">
<i class="fas fa-atlas" style="color: ${catppuccinMocha.blue};"></i> ALT Gnome Wiki: <a href="https://alt-gnome.wiki/" target="_blank" style="color: ${catppuccinMocha.green}; text-decoration: none;">alt-gnome.wiki</a>
<span><span style={{color: catppuccinMocha.mauve}}>●</span>  Автор каких-то статей</span>
<i class="fab fa-telegram" style="color: ${catppuccinMocha.blue};"></i> ALT KDE Telegram: <a href="https://t.me/alt_kde" target="_blank" style="color: ${catppuccinMocha.green}; text-decoration: none;">t.me/alt_kde</a>
<span><span style={{color: catppuccinMocha.mauve}}>●</span>  Автор каких-то постов</span>
<i class="fas fa-satellite" style="color: ${catppuccinMocha.blue};"></i> Space Station 14: <a href="https://spacestation14.com" target="_blank" style="color: ${catppuccinMocha.green}; text-decoration: none;">spacestation14.com</a>
<span><span style={{color: catppuccinMocha.mauve}}>●</span>  Развитие ru сообщества и что-то еще 👆</span>
</span>
  </div>
</div>
`,
    }),
  },
  {
    name: 'price',
    description: 'Прайс-Лист. Ценамы и услуги',
    execute: () => ({
      title: `
:::::::::  :::::::::  ::::::::::: ::::::::  :::::::::: 
:+:    :+: :+:    :+:     :+:    :+:    :+: :+:        
+:+    +:+ +:+    +:+     +:+    +:+        +:+        
+#++:++#+  +#++:++#:      +#+    +#+        +#++:++#   
+#+        +#+    +#+     +#+    +#+        +#+        
#+#        #+#    #+#     #+#    #+#    #+# #+#        
###        ###    ### ########### ########  ########## 
 `,
      content: `<div style="display: flex; justify-content: space-between; font-family: monospace; background: transparent; border: none; width: 100%;">
  <div class="ascii-art" style="user-select: none; text-align: left; flex-shrink: 0; margin-right: 20px;">
                                     #@@@@@@#                         
                                   #@%######%@   #%@@@@@%             
            #@@@@%#               %@#########%@@%+===--*@%            
           %@#=-==#@@%           @@###########@#-------=%@            
          @@+-------=#@@@@@@@@@@@@#####%%##@@@@@@%=-----*@%           
         %@=-----------=+==-----#%#####@##%#######%@%%%%@@%           
        %@#---------------------#%######@@#########%%#####@@          
        %@*---------------------=@%######%#########%@%#####@#         
        %@@#----------------------+#@@@@@@@#######%%##%####@          
        %@@+------------------------------=%@%##%@%%%%####@%          
        %@*-----------------------------------=*@########@%           
       %@*--------------------------------------+@%###%@#*@@          
       @@=----------------------------------------=+**=---=@%         
      *@*--------------------------------------------------*@%        
      %@=--------------------------------------------------=@%        
      %@----------------------------------------------------%@#       
      %@-------------------------------------------------+@@@@@%%%%@@#
      %@+---------=##=--------------------------*@@+--------*@#       
  %@%@@@@##*=-----%@@%--------------------------%@@#--------%@        
  #    @@=--------+@@#--------------------------=##=-----=#@@@@%%     
        @@**+--------------------+%#%%=--------------------%@%  #%    
     %%@@@@=--------------------=%===**----------------=++%@#         
          @@+-=+=----------------=+**=------------------=@@@@@%*      
          %@@@%=--------------------------------------=*@@%   #@@%    
        %@@# %@@+=----------------------------------=#@@%             
               #%@@%+=--------------------------=+%@@@#               
                   #%@@@@@%*+++========+++*#@@@@@@@@%%                
               #%%%@@%#*#@%%@%%%%%%%%%%%##+@%*#@%#+@@@@@@@@%          
            %@@%%%%@@%#%@***@@+####*######@%*+++#@@+------=%@%        
          %@%=-------#@%++++*@@#*##*##+*@@*++++*@#----------%@#       
          @%=---------=@*+++++*@@@@@@@@%*++++++*@=----------*@%       
         #@#-----------%%+++++++**++*++++++++++*@*---------=@@        
          @@+--------=*@************************#@@#%@#==+%@%++       
           %@@+==#@@@@%                               #%%%*           
             *%%%#                                                    
  </div>

  <div style="text-align: left; flex-shrink: 0; align-self: center;">
    <span style="color: ${catppuccinMocha.blue}; white-space: pre-line; display: block;">
<i class="fas fa-window-maximize" style="color: ${catppuccinMocha.blue};"></i> Создание сайтов
<span><span style={{color: catppuccinMocha.mauve}}>●</span>  от 1500₽ ^^</span>
<i class="fas fa-pen-nib" style="color: ${catppuccinMocha.blue};"></i> Работа в фотошопе, инфографика,
превью, обработка фото
<span><span style={{color: catppuccinMocha.mauve}}>●</span>  от 500₽ @-@</span>
<i class="fas fa-box-open" style="color: ${catppuccinMocha.blue};"></i> Создание ботов telegram, discord
<span><span style={{color: catppuccinMocha.mauve}}>●</span>  от 1000₽ *_*</span>
</span>
  </div>
</div>
`,
    }),
  },

  {
    name: 'contact',
    description: 'Контактная информация',
    execute: () => ({
      title: `
                               █████                        █████   
                              ░░███                        ░░███    
  ██████   ██████  ████████   ███████    ██████    ██████  ███████  
 ███░░███ ███░░███░░███░░███ ░░░███░    ░░░░░███  ███░░███░░░███░   
░███ ░░░ ░███ ░███ ░███ ░███   ░███      ███████ ░███ ░░░   ░███    
░███  ███░███ ░███ ░███ ░███   ░███ ███ ███░░███ ░███  ███  ░███ ███
░░██████ ░░██████  ████ █████  ░░█████ ░░████████░░██████   ░░█████ 
 ░░░░░░   ░░░░░░  ░░░░ ░░░░░    ░░░░░   ░░░░░░░░  ░░░░░░     ░░░░░  
 `,
      content: `<div class="command-container">
<div class="ascii-art" style="user-select: none;">
                        %@@#*@%#
                 %#++#%%#%@@%%%%%##**%%*+*##
             ##+***%#%%%%%%%%%%%%%%%%%%%*#@@%*+##
          #*=+++*#*%%%#################%%%@*%@%%#+##
        #==++%%%+#%%######################%%%#@@@%**+%
      #==+%%%#**%###########*################%#%@@%#+-*%
     *-+%%%*#*%%##%%###***#****####**#########%%#=+-::*+*=
   +=*+##*%%#%%##%@@%###*##***####*###@@%######%%#=+-::*+*=
  ..=+-:=#*#%###%@%=%%###############++@@%######%#=**++#=..:
 #==:-*%#+=####%@#=-+@%####***#####%=-:=@@#######%%-:+:.--:*
   +=-.==:####%@#=-:-+@###********%=:..:-%@######%#*==-:.:
   @@:-.=+*##%%#=::..:-%#********#=:....:-@@%%%###%#=::--%
     #..+#***##=::.....:+%*+++**#*:......:-@########@:***
    :-=#+*++*%=-:........:*#+++*#:........:+#*****#*%#=:.%
   =.-*=*++*#*=*+++++*++-.:-##*#--++++=-::-=#*****##+*#:=*
  .:=*=@*#**%--*.%@@%#*+....:+#.#:.%****+#:#*++*%##*#+*-:*
 +.-#+@*%@@%@=:#%%%%%%%%=........@*#%%%%%%%.+#*%@@%#***=+-%
  -++@%@@%@@@=:-%%%%%%%%.........#%%%%%%%%#.=%%@@%%@#+#=#@
  %*%#%%%%@@@=:.+#++=+#:.........:%*+++++#:.:=#@%%##@%##@
    %#%%%%@@@=:..:=++-.............-*##*=.:--=*@@%##%@@@
        %@@@@+-:..........................:----*@@##
        @@@@@@@=:.........................:----+@@@@
       #=%@%@@@@@#:......................-=----*@@*=
       +*@@%@%@@@@@@@#-.............:=*+%=----=#@@#=
       *%@@@  @*#@@@@@@#++***++*+::.:==-------==-------
       *#@%    %%%#%%%*--=+*++++=::-----------=--------
      #%@         %+***@*++##+=*.:------------=---------
                   @#+@::::-:-+:::=----------===-------=
                 %=+%#::::::::-+--.=*--------=-==-------=
              #+..=%#::::::::::+=:=*++===------==------=
             %.-::*@::::::::::-#-=*+++================-
             +---=@::::::::::::-#-=*+++================-
</div>
<div class="contact-info">
<p><i class="fas fa-globe" style="color: ${catppuccinMocha.blue};"></i> (in dev) Блог: <a href="http://blog.stopco.ru" target="_blank" rel="noopener noreferrer">blog.stopco.ru</a></p>
<p><i class="fab fa-github" style="color: ${catppuccinMocha.blue};"></i> GitHub: <a href="https://github.com/cryals" target="_blank" rel="noopener noreferrer">github.com/cryals</a></p>
<p><i class="fab fa-telegram" style="color: ${catppuccinMocha.blue};"></i> Telegram: <a href="https://t.me/cryalsss" target="_blank" rel="noopener noreferrer">t.me/cryalsss</a></p>
<p><i class="fas fa-broadcast-tower" style="color: ${catppuccinMocha.blue};"></i> Канал: <a href="https://t.me/stopco_ru" target="_blank" rel="noopener noreferrer">t.me/stopco_ru</a></p>
<p><i class="fas fa-envelope" style="color: ${catppuccinMocha.blue};"></i> Email: <a href="mailto:als@stopco.ru">als@stopco.ru</a></p>
</div>
</div>

<div style="font-family: monospace; margin-top: 10px;">
</div>`,
    }),
  },
  {
    name: 'clear',
    description: 'Очистить терминал',
    execute: () => ({
      clear: true,
    }),
  },
  {
    name: 'cat',
    description: '',
    hidden: true,
    execute: () => ({
      content: `<div style="display: flex; justify-content: center; padding: 2rem; color: ${catppuccinMocha.mauve}; font-size: 1.2rem; user-select: none; text-shadow: 0 0 10px ${catppuccinMocha.mauve};">
  /\\___/\\
 (  o o  )
 (  =^=  )
  (-----|)
   |___|_|
</div>`,
    }),
  },
  {
    name: 'meow',
    description: '',
    hidden: true,
    execute: () => ({
      content: `<div style="display: flex; justify-content: center; padding: 2rem; color: ${catppuccinMocha.mauve}; font-size: 1.2rem; user-select: none; text-shadow: 0 0 10px ${catppuccinMocha.mauve};">
  /\\___/\\
 (  o o  )  ∆
 (  =^=  )  |
  (-----|) <span style="color: ${catppuccinMocha.blue}; font-weight: bold;">meow!</span>
   |___|_|
</div>`,
    }),
  },
  {
    name: 'matrix',
    description: '',
    hidden: true,
    execute: () => ({
      content: `<div style="display: flex; justify-content: center; padding: 2rem; color: ${catppuccinMocha.green}; font-size: 1.2rem; user-select: none; text-shadow: 0 0 15px ${catppuccinMocha.green};">
██╗    ██╗ █████╗ ██╗  ██╗███████╗    ██╗   ██╗██████╗
██║    ██║██╔══██╗██║ ██╔╝██╔════╝    ██║   ██║██╔══██╗
██║ █╗ ██║███████║█████╔╝ █████╗      ██║   ██║██████╔╝
██║███╗██║██╔══██║██╔═██╗ ██╔══╝      ██║   ██║██╔═══╝
╚███╔███╔╝██║  ██║██║  ██╗███████╗    ╚██████╔╝██║
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚════╝ ╚═╝
</div>`,
    }),
  },
  {
    name: 'coffee',
    description: '',
    hidden: true,
    execute: () => ({
      content: `<div style="display: flex; justify-content: center; padding: 2rem; color: ${catppuccinMocha.peach}; font-size: 1.2rem; user-select: none; text-shadow: 0 0 10px ${catppuccinMocha.peach};">
   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----\'
</div><div style="text-align: center; color: ${catppuccinMocha.text}; margin-top: 1rem;">Кофе готов! ☕</div>`,
    }),
  },
  {
    name: 'fooo',
    description: '',
    hidden: true,
    execute: () => ({
      title: `
      :::::::::: ::::::::   ::::::::   ::::::::
     :+:       :+:    :+: :+:    :+: :+:    :+:
    +:+       +:+    +:+ +:+    +:+ +:+    +:+
   :#::+::#  +#+    +:+ +#+    +:+ +#+    +:+
  +#+       +#+    +#+ +#+    +#+ +#+    +#+
 #+#       #+#    #+# #+#    #+# #+#    #+#
###        ########   ########   ########
 `,
      content: `<div style="display: flex; justify-content: center; padding: 2rem; color: ${catppuccinMocha.rosewater}; font-size: 1.2rem; user-select: none; text-shadow: 0 0 10px ${catppuccinMocha.rosewater};"></div>`,
    }),
  },
];

export default commands;
