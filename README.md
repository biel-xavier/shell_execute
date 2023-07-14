# shell_execute
Esse projeto teve como objetivo inicial utilizar NodeJS para execução de comandos aceitos somente no CMD. 
Utilizando a lib child_process nativa do Node é possível executar as linhas de comandos que constam no objeto COMMANDS no .env, e acompanhar os retornos do mesmo.

Quando configurava os comandos para um arquivo .BAT, acabava perdendo o controle sobre como estava a execução dos processos e se finalizavam com sucesso ou com algum alerta, porém com a utilização do Shell Execute
foi possível ter visão da execução em  tempo real.

Como ilustração, utilizo hoje esse script para envio de dados para o S3 da AWS, utilizando os comandos do AWS CLI. Dessa forma, consigo identificar quando foi iniciado e finalizado a execução do processo, 
quando configurado o Webhook de alguma sala do Discord no .env
