module.exports ={
    presets: [  // presets é um conjunto de configurações criadas por terceiros.
         '@babel/preset-env', // Vai ser responsavel por converter um código JS mais moderno, para um código JS mais antigo, pórem, comforme o ambiente das nossas aplicações.
         '@babel/preset-react' // Vai acrescentar o código do React na converção.
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}