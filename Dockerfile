# Use a imagem oficial Node.js como base
FROM node:20

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte da aplicação
COPY . .

# Exponha a porta que o Fastify usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
#CMD ["tail","-f","/dev/null"]

#run
#docker build -t quest-nest-api .