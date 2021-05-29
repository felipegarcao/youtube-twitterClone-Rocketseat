# Projeto TwitterClone - Youtube Rockeatset 🤖


* Começando Criando  O Projeto Com React `yarn create react-app youtube-twitterClone-Rockeaset --template typescript`
* Apagando Alguns Arquivos Inuteis
### Instalando bibliotecas 📚📚
* `yarn add style-components`
*  `style-icons`
*  `react-sticky-box` é Caixas fixas com comportamento razoável se o conteúdo for maior do que a janela de visualização.
*  ` yarn add -D @types/styled-components`

#### Desabiltando a opção `isolatedModules` no arquivo `tsconfig.json`. 

### Criando o Layout

 * Criando a pasta `Components` criando outra pasta `Style` e adicionando o arquivo `GlobalStyle.ts`.
 * Criando a pasta de Layout dentro de Components e adicionando os arquivos `index.tsx` e `styles.ts`.
 * Criando outra pasta dentro de `Components` chamanda `Main` com os arquivos `index.tsx`e `styles.ts` dentro. 
 * Adicionando Conteudo no `index.tsx` da pasta Main (Container, Header, BackIcon, ProfileInfo) dentro do retorno da ArrowFunction Main e Estilzando o mesmo no `styles.ts`.
 
<p float="left">
  <img src="https://user-images.githubusercontent.com/78617974/119282895-a85c0180-bc11-11eb-836d-8b05f7ac218c.jpg" width="350" height="350" />
  <img src="https://user-images.githubusercontent.com/78617974/119283003-04268a80-bc12-11eb-9f1b-b5fae0b86fe3.jpg" width="350" height="350" /> 
</p>

 ## Importanto o Layout de dentro dos Components  para o `app.tsx`
 
 <img src="https://user-images.githubusercontent.com/78617974/119282500-464ecc80-bc10-11eb-903e-0078944681a9.jpg" width="300" height="300" />
 ### Criando um  Arquivo dentro da pasta de `styles` um arquivo chamado `Icons.ts` e exportando os seguintes itens:
 


 <img src="https://user-images.githubusercontent.com/78617974/119282588-9037b280-bc10-11eb-83c6-bceb32e8d2a2.jpg" width="450" height="350" />
 
* Importei dentro do `styles.ts`da pasta main a `ArrowLeft` que estava dentro do `Icons.ts`.
* Importanto o `{ css }` de dentro do `styled-components`, isso servira para criar somente uma estilização para todos os Icons.
* Estilizando o BottomMenu, Menuzinho que ficara escondido em desktop e ira aparecer em Mobile
* Fazendo as Importação dos Atributos dos  Icones e tags
* Estilizando os componentes de `Container, banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage`.

### Criando Componente `Button` 🔘

* Estilizando o Button (`index.tsx`)

 <img src="https://user-images.githubusercontent.com/78617974/120069156-ce8f0080-c05a-11eb-9d41-00c0ee77bb79.jpg" width="450" height="350" />
 
 * Exportanto o `EditButton`, para fazer o botão de `Editar Perfil` e logo em seguida aplicando estilização no mesmo, dentro de `styles.ts`da pasta `ProfilePage`.
 
 ## Criando o Componente `Feed`
 
 * o Feed é o pagina principal da postagens, memes.....

## ChechPoint (1:08:21)

