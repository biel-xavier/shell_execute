# shell_execute
Esse projeto teve como objetivo inicial utilizar NodeJS para execução de comandos aceitos somente no CMD. 
Utilizando a lib child_process, nativa do Node é possível executar as linhas de comandos que constam no objeto COMMANDS no .env, e acompanhar os retornos do mesmo via Discord.

Quando configurava os comandos para um arquivo .BAT, acabava perdendo o controle sobre como estava a execução dos processos e se finalizavam com sucesso ou com algum alerta, porém com a utilização do Shell Execute
foi possível ter visão da execução em  tempo real.

Como ilustração, utilizo hoje esse script para envio de dados para o S3 da AWS, utilizando os comandos do AWS CLI. Dessa forma, consigo identificar quando foi iniciado e finalizado a execução do processo, 
quando configurado o Webhook de alguma sala do Discord no .env



## Configuração do .env

### BASE_URL
O Base URL por padrão utilizo como https://discord.com/api

### WEBHOOK
Nesse parâmentro utilize o Webhook da sala do Discord onde deseja receber as notificações.
Ex.:
 - /webhooks/.../.....

### COMMANDS
No COMMANDS devemos inserir um array de objetos, onde cada objeto deve conter:
 - content: Nome de identificação do comando (para notificação do Discord)
 - command: Comando a ser executado no CMD
 - weekDay: Um Array contendo o número relativo ao dia da semana no padrão americano. Ex.: [1, 2, 7]

Ex.:
```
COMMANDS= [{"content": "node", "command": "node --version", "weekDay": [1, 2, 3, 4, 5, 6, 7]}, {"content": "ipconfig", "command": "ipconfig", "weekDay": [ 3 ]} ]
``` 

### DEBUG
No DEBUG espera-se um boolean para indicar se deve ou não enviar notificações via DISCORD.
Ex.:
```
DEBUG=true
```
