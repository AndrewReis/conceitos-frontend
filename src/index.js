// Arrow function é uma maneira mais moderna de escrever funções no JS
// Porem, nem todos os browers entendem está escrita.


//Vamos ver na pratica o babel converter este código.

const soma = (a,b) => a + b ;

console.log(soma(1,3));


//Apos rodar "yarn babel src/index.js --out-file public/bundle.js " no terminal, será criado um novo arquivo na pasta "public" chamado "bundle.js" 
//Note que este arquivo foi preenchido automaticamente, com o mesmo código que escrevemos, só que com a sintaxe de função tradicional.