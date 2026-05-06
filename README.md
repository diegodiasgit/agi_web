# Projeto de Testes E2E com Cypress
Este projeto contém testes automatizados end-to-end (E2E) utilizando o framework [Cypress](https://www.cypress.io/).

# Objetivo
Garantir a qualidade da aplicação web por meio de testes automatizados que simulam a interação real do usuário.

# Tecnologias utilizadas
- Node.js
- Cypress
- JavaScript

# Estrutura do projeto
cypress/
   e2e/ # Testes end-to-end
   fixtures/ # Massa de dados para testes
   support/ # Comandos customizados e configurações globais
cypress.config.js # Configuração do Cypress
package.json # Dependências do projeto

# Pré-requisitos
Antes de começar, você precisará ter instalado:

- Node.js (versão LTS recomendada)
- npm ou yarn

Verifique a instalação com:

```bash
node -v
npm -v

# Instalação do projeto
Clone o repositório:
git clone https://github.com/diegodiasgit/agi_web.git
cd agi_web

# Instale as dependências:
npm install

# Executando os testes
npx cypress open

# Rodar testes em modo headless
npx cypress run
