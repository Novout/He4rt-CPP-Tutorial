(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{217:function(t,s,a){"use strict";a.r(s);var r=a(0),n=Object(r.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_7-1-std-array-e-std-vector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-std-array-e-std-vector","aria-hidden":"true"}},[t._v("#")]),t._v(" 7.1 - std::array e std::vector")]),t._v(" "),a("p",[t._v("C arrays não são muito flexíveis, algo que dificulta o desenvolvimento de um programa.")]),t._v(" "),a("p",[t._v("Felizmente, no C++ temos outras opções (que você deve usar): O std::array e std::vector")]),t._v(" "),a("h1",{attrs:{id:"exemplos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exemplos","aria-hidden":"true"}},[t._v("#")]),t._v(" Exemplos")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<array>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*|--------------------------------------|\n     *|                                      |\n     *|           He4rt Developers           |\n     *|                                      |\n     *|--------------------------------------|\n     */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n      * std::array é o primeiro container que iremos ver.\n      * A STL(Standard Template Library) oferece uma série de containers.\n      * Um container é uma estrutura que pode conter uma coleção de objetos.\n\n      * O std::array é uma Struct <link pra seção de struct> que possui um C array dentro dela.\n      * Possui uma implementação simples e várias funções que facilitam o manejo de arrays.\n      * O tamanho do std::array precisa ser conhecimento durante a compilação.\n\n      * Recomenda-se que você use esse tipo de array ao invés de C arrays.\n    */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Criando um std::array com 3 posições que podem conter elementos do tipo std::string */")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" meu_array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Mostrando os elementos do array, funciona igual o C array */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" meu_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" meu_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Também podemos usar um ranged loop para percorrer o array */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("string elemento "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" meu_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-cpp extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<vector>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*|--------------------------------------|\n     *|                                      |\n     *|           He4rt Developers           |\n     *|                                      |\n     *|--------------------------------------|\n     */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * std::vector é um array que pode mudar de tamanho durante a execução do programa\n     * Isso é possível através do uso de ponteiros <link para seção de ponteiros>\n     * Ao contrário do C array e std::array, o tamanho do std::vector não precisa\n     * ser conhecido durante a compilação\n    */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Criando um std::vector de floats */")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" meu_vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Foi criado um std::vector vazio, sendo assim, o tamanho dele é 0\n     * Podemos adicionar elementos no std::vector usando as funções push_back() e emplace_back()\n     * O std::vector aumenta e diminui de tamanho conforme você insere e remove elementos\n    */")]),t._v("\n    meu_vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14159")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Agora o meu_vector tem o tamanho 1\n     * Podemos verificar o tamanho do vector do mesmo jeito que\n     * vericamos o tamanho do std::array. Usando a função size()\n    */")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" meu_vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Podemos percorrer o std::vector do mesmo jeito que percorremos o std::array\n    */")]),t._v("\n\n    meu_vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.71828")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    meu_vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.30357")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" valor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" meu_vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" valor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);