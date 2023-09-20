    const data = [
        {
        category: "HTML",
        questions: [
            {
            question: "Qual tag cria um parágrafo?",
            options: ["<p>", "<h1>", "<text>", "<ul>"],
            answer: "<p>",
            tip: "É uma tag de uma letra apenas",
            },
            {
            question: "Qual atributo adiciona um link para a tag a?",
            options: ["alt", "href", "src", "link"],
            answer: "href",
            tip: "Hyperlink Reference",
            },
            {
            question: "As listas não ordenadas tem a tag de:",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            answer: "<ul>",
            },
            {
            question: "Qual atributo deixa o input obrigatório?",
            options: ["placeholder", "value", "required", "maxlength"],
            answer: "required",
            },
            {
            question: "A tag semântica indicada para rodapés é a:",
            options: ["div", "main", "section", "footer"],
            answer: "footer",
            },
            {question:"Quais são exemplos de tags semânticas?",
            options:["span, main, footer","main, section, footer","div, header, main","div, header, main"],
            answer:"main, section, footer"
            },
            {
            question:"Se não definirmos um type em uma tag input, qual será o seu type padrão?",
            options:["button","text","password","submit"],
            answer:"text"
            },
        ],
        },
        {
        category: "CSS",
        questions: [
            {
            question: "Qual regra altera a cor de um elemento?",
            options: ["color", "background-color", "font-size", "transition"],
            answer: "color",
            tip: "Cor em inglês",
            },
            {
            question: "Para aumentar a fonte de um elemento utilizamos:",
            options: ["font", "text-transform", "font-size", "hover"],
            answer: "font-size",
            },
            {
            question: "A posição que deixa um elemento fixo é a:",
            options: ["static", "absolute", "fixed", "relative"],
            answer: "fixed",
            },
            {
            question: "Se queremos forçar que os flex items tenham um mesmo tamanho mesmo com conteúdos diferentes, qual propriedade podemos utilizar?",
            options:["flex-grow","flex-shrink","flex-wrap","flex-basis"],
            answer:"flex-basis"
            },
            {
            question:"Quais são os valores padrões das propriedades quando utilizamos o flex-flow ?",
            options:["row e wrap","column e wrap","row-reverse e wrap","row e nowrap"],
            answer:"row e nowrap"
            },
        ],
        },
        {
        category: "Java Script",
        questions: [
            {
            question: "O que é Vanilla JavaScript?",
            options: [
                "JavaScript puro",
                "Uma biblioteca JavaScript",
                "Um framework JavaScript",
                "Um compilador de JavaScript",
            ],
            answer: "JavaScript puro",
            },
            {
            question: "Com qual instrução declaramos uma constante em JavaScript?",
            options: ["const", "let", "var", "define"],
            answer: "const",
            },
            {
            question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
            options: ["string", "number", "boolean", "float"],
            answer: "float",
            },
            {
            question: "Qual dos métodos a seguir seleciona um elemento?",
            options: ["querySelector", "parseInt", "sort", "reduce"],
            answer: "querySelector",
            },
            {
            question:
                "Qual destas propriedades da a quantidade de elementos de um array?",
            options: ["qty", "length", "items", "index"],
            answer: "length",
            },
            {
            question: "Quais os principais paradigmas do Javascript?",
            options:["orientação a objetos e orientação a eventos","Orientação a objetos, funcional e orientação a eventos","Funcional e orientação a objetos","Orientação a eventos e funcional"],
            answer:"Orientação a objetos, funcional e orientação a eventos"
            },
            {
            question: "Quais as tipagens utilizadas no JavaScript?",
            options:["Tipagem dinâmica e fraca","Tipagem estática e fraca","Tipagem dinâmica e forte","Tipagem forte e fraca"],
            answer:"Tipagem dinâmica e fraca"
            },
        ],
        },
        {
            category: "React",
            questions: [
                {
                question:"O que é o JSX no React?",
                options:["Uma biblioteca CSS","Uma extensão de JavaScript","Um banco de dados","Uma linguagem de programação"],
                answer:"Uma extensão de JavaScript",
                },
                {
                    question:"O que o método render() retorna em um componente React?",
                    options:["Uma matriz","Uma string","Elementos JSX","Um objeto JavaScript"],
                    answer:"Elementos JSX"
                },
                {
                    question:"Qual é a finalidade da propriedade 'defaultProps' no React?",
                    options:["Definir a renderização padrão de um componente","Definir a ordem de execução de métodos em um componente","Definir estilos CSS padrão para um componente","Definir valores padrão para as props de um componente"],
                    answer:"Definir valores padrão para as props de um componente"
                },
                {
                    question:"Qual método é obrigatório em um componente de classe React?",
                    options:["render()","constructor()","componentDidMount()","componentDidUpdate()"],
                    answer:"render()",
                },
                {
                    question:"O que são 'props' no React?",
                    options:["Uma maneira de estilizar componentes","Uma maneira de armazenar dados","Uma maneira de passar dados entre componentes","Uma maneira de criar funções"],
                    answer:"Uma maneira de passar dados entre componentes",
                },
            ],
        },
    ];
    
    export default data;
    