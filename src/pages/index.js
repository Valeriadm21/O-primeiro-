import React from 'react';
import { Cabecalho } from '../componentes/cabecalho';
import { Titulo } from '../componentes/title';
import { TituloSessao } from '../componentes/tituloSessao';
import { Cartao } from '../componentes/cartao';
import { Rodape } from '../componentes/rodape';

const projetos = [
  { nome: 'Projeto Contadora', descricao: 'O que voçê quer ser quando crescer? Medica, advogada, atriz, cantora, muitas eram as respostas, mas, o futuro nos leva a lugares nunca antes aspirados. Ser contadora não era um sonho de criança, porém, se tornou o presente de uma adulta, e, louvado seja Deus por isso. Ser aprovada na Federal foi um sonho realizado, e la estava eu, o curso iniciou em 2018, e depois de alguns anos, muitas lutas e uma pandemia, conquistei o tão sonhado diploma. Ainda na faculdade, fui aprovada no exame do Conselho, e de lá pra cá essa profissão, por vezes tão judiada, tem me dado e ainda me dará muita alegria.' },
  { nome: 'Projeto Mercadinho Maranhão', descricao: 'Meu pai tem a veia empreendedora, desde pequena sempre via ele vendendo algo, como moravamos em um povoado pequeno com tudo de dificil acesso, o sonho dele era ter um mercadinho, os anos se passaram e em 2022, nós demos inicio o projeto. Começamos em um quartinho desocupado, hoje ja temos um local proprio, mais confortavel, e a tendencia é só crescer! ' },
  { nome: 'Projeto de Inclusão de Crianças Atipicas', descricao: 'Há uma crescente preocupação e relação a inclusão de crianças atipicas nos meios sociais, e a igreja, de maneira nenhuma poderia ficar de fora. Com o objetivo de ajudar os pais nos momentos de culto, a Igreja Madureira da ARSE 112 criou o projeto de inclusão para essas crianças, funciona da seguinte forma: a igreja costruiu uma sala especial, equipou e algumas pessoas se voluntariaram para o projeto, entre as quais estou eu. Não é facil, tendo em vista que cada criança é diferente, mas cada momento com elas enche nossos corações de amor e de desejo de fazer um mundo melhor para elas.' },
];

export default function Home() {
  return (
    <div className="app">
      <Cabecalho
        nome="Portfólio Valéria Dias"
        subtitulo="Bem-vindo ao meu espaço"
        descricao="Aqui você encontrará uma seleção dos meus projetos e experiências."
      />
      <Titulo nome="Projetos" subnome="Alguns dos meus trabalhos recentes" />
      <section className="projetos">
        {projetos.map((projeto, index) => (
          <Cartao
            key={index}
            titulo={projeto.nome}
            conteudo={projeto.descricao}
            botaoTexto="Ver Projeto"
            onClickBotao={() => alert(`Abrindo ${projeto.nome}`)}
          />
        ))}
      </section>
      <TituloSessao titulo="Experiência e Educação" />
      <Rodape
        nome="Valéria Dias"
        linkGithub="https://github.com/seuusuario"
        linkLinkedin="https://linkedin.com/in/seuusuario"
        email="seuemail@exemplo.com"
      />
    </div>
  );
}
