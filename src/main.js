import cmdShell from 'g';
import * as dotenv from 'dotenv';
import { notifyDiscord } from './Helpers/notifyDiscord.js';
import { Now } from './Helpers/date.js';
import { validateWeekDay } from './Helpers/validateWeekDay.js';


dotenv.config({path: "../.env"});


const initialize = async (data)=>{
    data.forEach(async(command)=>{

        let weekDayAuthorized = validateWeekDay(command.weekDay);

        if(weekDayAuthorized.length > 0) {
            await notifyDiscord({content: command.content, title: 'Iniciado', description: `${Now()}`});

            const executeInShell = cmdShell.spawn(command.command, [], {shell: true})
        
            executeInShell.stdout.on('data', async data=>{
                console.log(`stdout: ${data}`);
            });
        
            executeInShell.stderr.on('data', data=>{
                console.log(`stderr: ${data}`);
            });

            executeInShell.on('error', (error)=>{
                console.log(`err: ${error}`);
            });

            executeInShell.on('close', async code=>{
                let title = `Finalizado com ${(code != 0)? "Falha": "Sucesso"} - Código(${code})`;
                
                await notifyDiscord({content: command.command, title, description: `${Now()}`}); 
            });

        }
        
    })
}

const commandLines = JSON.parse(process.env.COMMANDS)

initialize(commandLines);