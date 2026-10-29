# Visualizador de Perfil do GitHub

Aplicação web simples para consultar um perfil do GitHub e exibir informações públicas do usuário e seus repositórios.

## Funcionalidades

- Busca pelo nome de usuário do GitHub ao clicar em **Buscar** ou pressionar **Enter**.
- Exibe avatar, nome, biografia, seguidores e pessoas que o usuário segue.
- Lista até 10 repositórios, com estrelas, forks, observadores e linguagem principal.
- Mostra uma mensagem de carregamento durante a busca.

## Como executar

Como o projeto usa módulos JavaScript, abra-o por meio de um servidor local:

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto em um servidor local, como a extensão **Live Server** do VS Code.
3. Acesse a página `index.html` pelo endereço fornecido pelo servidor.
4. Digite um nome de usuário do GitHub e pressione **Enter** ou clique em **Buscar**.

Não é necessário instalar dependências ou configurar uma chave de API.

## Tecnologias

- HTML
- CSS
- JavaScript (ES Modules)
- GitHub REST API

## Estrutura do projeto

```text
index.html
src/
  animations.css
  reset.css
  responsive.css
  styles.css
  js/
    githuApi.js
    index.js
    profileView.js
```

## Observações

Os dados são consultados na API pública do GitHub. A aplicação mostra até 10 repositórios do usuário, ordenados por data de criação.
