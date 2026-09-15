// ETAPA 1 - INÍCIO DO PROJETO: TELA INICIAL
// O que fazemos aqui?
// esta é a tela inial do app (rota "/")

import { View, Text, ScrollView, FlatList, Pressable, Stylesheet } from "react-native";

//view - container basicos
// text - para exibir textos
// scrollView - para criar uma área de rolagem
// FlatList - para criar listas com rolagem otimizada
// Pressable - para criar botões e áreas clicáveis
// Stylesheet - para criar estilos para os componentes

import { useRouter } from "expo-router";
// acesso ao objeto router, tem função de navegar baseada em arquivos
 
import GameCard from "../../components/GameCard";
// importando o componente GameCard, que é um cartão de jogo

import {jogos} from "../../data/jogos";
// importante uma array de objetos com informações dos jogos, que está no arquivo data/jogos.js

import {cores} from "../../data/tema";
// importa a paleta de cores do app do arquivo data/tema.js 


//===============================================

export default function Inicio() {
    //Obtemos o objeto router para navegar entre as telas do app
    const router = useRouter();
     //Obtemos o objeto router para navegar entre as telas do app
    const destaques = jogos.filter((jogo) => jogo.destaque);
     // percorre o array jogos e cria um novo array com os jogos que possuem destaque

     const populares = [... jogos].sort((a, b) => b.nota - a.nota).slice(0, 5);
     // cria um novo array com os 5 jogos mais notas, ordenados por notas



     //--------------------------------------------------
     //BLOCO 2- ESTRUTURA DA TELA INICIAL
     //--------------------------------------------------
    return (
        // Inicio do JSX retornando  pelo componente Inicio
        <ScrollView style={style.container}  contentContainerStyle={Stylesheet.conteudo}>
            {/*scrollView é o container principal da tela, que permite rolagem vertical */}
            <text style={style.titulo}>GameHub</text>
            {/* Exibe o texto "GameHub" com estilo de titulo */}
            <text style={style.subtitulo}>Seu universo de jogo em um só lugar</text>

    //--------------------------------------------------
    //BLOCO 2.1- Seção jogos
     //--------------------------------------------------
        </ScrollView>

        
  
      
    );
}