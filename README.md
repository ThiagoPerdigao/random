![Banner image](media/banner.png)

# n8n-nodes-random

Este repositório contém um **conector personalizado para n8n** chamado `Random`.  
O conector possui uma operação: **"True Random Number Generator"**, que recebe um intervalo (`Min` e `Max`) e retorna um número aleatório utilizando a API do [Random.org](https://www.random.org/integers/?num=1&min=1&max=60&col=1&base=10&format=plain&rnd=new).

O objetivo deste projeto é demonstrar a criação de nós customizados no n8n, com TypeScript, Docker e integração com APIs externas.

---

## Pré-requisitos

Para rodar este projeto localmente, você precisará ter instalado:

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/) (versão 22 LTS ou superior)
* [npm](https://www.npmjs.com/)
* [Docker](https://docs.docker.com/get-docker/)

---

## Configuração e execução

### 1. Clonar o repositório
```bash
git clone https://github.com/ThiagoPerdigao/random.git
cd random
```

### 2. Instalar dependências

Instala todas as dependências necessárias para compilar o código e rodar os scripts.

```bash
npm install
```

### 3. Gerar build

O build compila o TypeScript e copia os ícones SVG para a pasta `dist`:

```bash
npm install
```
* Sempre execute este comando após modificar arquivos TypeScript ou SVG para garantir que o nó esteja atualizado no n8n.

### 4. Configurar variáveis de ambiente

Crie o arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```


### 5. Subir a infraestrutura com Docker

O `docker-compose.yml` cria containers para:
1. n8n (instância local self-hosted)
2. PostgreSQL (banco de dados do n8n)

```bash
docker-compose up -d
```

Acesse a instância do n8n em: `http://localhost:5678`

---

## Testando o conector

Este teste permite validar se o nó `Random` está funcionando corretamente, gerando números aleatórios dentro do intervalo definido pelos parâmetros `Min` e `Max`, utilizando a API do [Random.org](https://www.random.org/integers/).  
Ele também garante que o nó esteja integrado corretamente à interface do n8n e que os ícones e parâmetros estejam sendo exibidos corretamente.

## Testando o conector

Esta seção mostra passo a passo como testar o nó `Random` no n8n, incluindo imagens animadas para ajudar na execução.

---

##### 1. Acesse a instância do n8n

![Passo 1](media/Passo1.gif)

Na primeira vez que você acessar, será necessário fazer um **cadastro**.  
Nas próximas visitas, basta **realizar login** ou você será redirecionado diretamente para a **home page** do n8n.

---

##### 2. Crie um novo workflow

![Passo 2](media/Passo2.gif)

Clique em **Create Workflow** e selecione o **evento de disparo** desejado para iniciar o workflow.

---

##### 3. Adicione o nó `Random` ao workflow

![Passo 3](media/Passo3.gif)

Clique no **+** à direita do evento, abra a aba de busca de nodes e pesquise pelo nosso nó customizado **`Random`**, identificado pelo **ícone dos dados amarelos**.

---

##### 4. Configure os parâmetros Min e Max e execute o workflow

![Passo 4](media/Passo4.gif)

Preencha os inputs **Min** e **Max** com valores inteiros.  
Clique em **Execute Steps** para rodar o workflow e verificar se o nó retorna um número aleatório usando a API do Random.org.
