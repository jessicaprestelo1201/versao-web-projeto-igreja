'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const todosLivros = [
  { sigla: "Gn", nome: "Gênesis", cor: "#fdd", categoria: "Lei" },
  { sigla: "Êx", nome: "Êxodo", cor: "#fdd", categoria: "Lei" },
  { sigla: "Lv", nome: "Levítico", cor: "#fdd", categoria: "Lei" },
  { sigla: "Nm", nome: "Números", cor: "#fdd", categoria: "Lei" },
  { sigla: "Dt", nome: "Deuteronômio", cor: "#fdd", categoria: "Lei" },
  { sigla: "Js", nome: "Josué", cor: "#fdc", categoria: "História" },
  { sigla: "Jz", nome: "Juízes", cor: "#fdc", categoria: "História" },
  { sigla: "Rt", nome: "Rute", cor: "#fdc", categoria: "História" },
  { sigla: "1Sm", nome: "1 Samuel", cor: "#fdc", categoria: "História" },
  { sigla: "2Sm", nome: "2 Samuel", cor: "#fdc", categoria: "História" },
  { sigla: "1Rs", nome: "1 Reis", cor: "#fdc", categoria: "História" },
  { sigla: "2Rs", nome: "2 Reis", cor: "#fdc", categoria: "História" },
  { sigla: "1Cr", nome: "1 Crônicas", cor: "#fdc", categoria: "História" },
  { sigla: "2Cr", nome: "2 Crônicas", cor: "#fdc", categoria: "História" },
  { sigla: "Ed", nome: "Esdras", cor: "#fdc", categoria: "História" },
  { sigla: "Ne", nome: "Neemias", cor: "#fdc", categoria: "História" },
  { sigla: "Et", nome: "Ester", cor: "#fdc", categoria: "História" },
  { sigla: "Jó", nome: "Jó", cor: "#def", categoria: "Poesia" },
  { sigla: "Sl", nome: "Salmos", cor: "#def", categoria: "Poesia" },
  { sigla: "Pv", nome: "Provérbios", cor: "#def", categoria: "Poesia" },
  { sigla: "Ec", nome: "Eclesiastes", cor: "#def", categoria: "Poesia" },
  { sigla: "Ct", nome: "Cantares", cor: "#def", categoria: "Poesia" },
  { sigla: "Is", nome: "Isaías", cor: "#dff", categoria: "Profetas Maiores" },
  { sigla: "Jr", nome: "Jeremias", cor: "#dff", categoria: "Profetas Maiores" },
  { sigla: "Lm", nome: "Lamentações", cor: "#dff", categoria: "Profetas Maiores" },
  { sigla: "Ez", nome: "Ezequiel", cor: "#dff", categoria: "Profetas Maiores" },
  { sigla: "Dn", nome: "Daniel", cor: "#dff", categoria: "Profetas Maiores" },
  { sigla: "Os", nome: "Oseias", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Jl", nome: "Joel", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Am", nome: "Amós", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Ob", nome: "Obadias", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Jn", nome: "Jonas", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Mq", nome: "Miqueias", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Na", nome: "Naum", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Hc", nome: "Habacuque", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Sf", nome: "Sofonias", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Ag", nome: "Ageu", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Zc", nome: "Zacarias", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Ml", nome: "Malaquias", cor: "#cfc", categoria: "Profetas Menores" },
  { sigla: "Mt", nome: "Mateus", cor: "#cdf", categoria: "Evangelhos" },
  { sigla: "Mc", nome: "Marcos", cor: "#cdf", categoria: "Evangelhos" },
  { sigla: "Lc", nome: "Lucas", cor: "#cdf", categoria: "Evangelhos" },
  { sigla: "Jo", nome: "João", cor: "#cdf", categoria: "Evangelhos" },
  { sigla: "At", nome: "Atos", cor: "#dfd", categoria: "História" },
  { sigla: "Rm", nome: "Romanos", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "1Co", nome: "1 Coríntios", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "2Co", nome: "2 Coríntios", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "Gl", nome: "Gálatas", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "Ef", nome: "Efésios", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "Fp", nome: "Filipenses", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "Cl", nome: "Colossenses", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "1Ts", nome: "1 Tessalonicenses", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "2Ts", nome: "2 Tessalonicenses", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "1Tm", nome: "1 Timóteo", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "2Tm", nome: "2 Timóteo", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "Tt", nome: "Tito", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "Fm", nome: "Filemom", cor: "#ffc", categoria: "Cartas de Paulo" },
  { sigla: "Hb", nome: "Hebreus", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "Tg", nome: "Tiago", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "1Pe", nome: "1 Pedro", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "2Pe", nome: "2 Pedro", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "1Jo", nome: "1 João", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "2Jo", nome: "2 João", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "3Jo", nome: "3 João", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "Jd", nome: "Judas", cor: "#fec", categoria: "Outras Cartas" },
  { sigla: "Ap", nome: "Apocalipse", cor: "#fcd", categoria: "Profecia" }
];

export default function JogoBiblia() {
  const [livrosAntigo, setLivrosAntigo] = useState([]);
  const [livrosNovo, setLivrosNovo] = useState([]);
  const [resposta, setResposta] = useState(Array(todosLivros.length).fill(null));
  const [resultado, setResultado] = useState("");
  const [progresso, setProgresso] = useState("");
  const [slotSelecionado, setSlotSelecionado] = useState(null);
  const [livrosDisponiveis, setLivrosDisponiveis] = useState([]);

  useEffect(() => {
    embaralharLivros();
  }, []);

  const embaralharLivros = () => {
    const antigo = todosLivros
      .filter(l => ["Lei", "História", "Poesia", "Profetas Maiores", "Profetas Menores"].includes(l.categoria))
      .sort(() => Math.random() - 0.5);
    const novo = todosLivros
      .filter(l => ["Evangelhos", "Cartas de Paulo", "Outras Cartas", "Profecia"].includes(l.categoria))
      .sort(() => Math.random() - 0.5);
    setLivrosAntigo(antigo);
    setLivrosNovo(novo);
    setLivrosDisponiveis([...antigo, ...novo]);
  };

  const abrirSelecao = (index) => {
    setSlotSelecionado(index);
  };

  const escolherLivro = (livro) => {
    const novaResposta = [...resposta];
    novaResposta[slotSelecionado] = livro;
    setResposta(novaResposta);

    const novaDisponiveis = livrosDisponiveis.filter(l => l.sigla !== livro.sigla);
    setLivrosDisponiveis(novaDisponiveis);

    setSlotSelecionado(null);
  };

  const verificar = () => {
    const estaCorreto = todosLivros.every((livro, i) => livro.sigla === resposta[i]?.sigla);
    setResultado(estaCorreto ? "✅ Ordem Correta!" : "❌ Ordem Incorreta");

    const ateOndeAcertou = resposta.findIndex((l, i) => l?.sigla !== todosLivros[i]?.sigla);
    if (estaCorreto) {
      setProgresso("Você está no caminho certo! Tudo certo até agora.");
    } else if (ateOndeAcertou === -1) {
      setProgresso("Você está no caminho certo até o fim da sua resposta.");
    } else if (ateOndeAcertou === 0) {
      setProgresso("⚠️ Comece novamente, a ordem inicial já está errada.");
    } else {
      setProgresso(`Você acertou até o livro de número ${ateOndeAcertou}. Continue assim!`);
    }
  };

  const resetar = () => {
    setResposta(Array(todosLivros.length).fill(null));
    setResultado("");
    setProgresso("");
    setSlotSelecionado(null);
    embaralharLivros();
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Ordem dos Livros Bíblicos</h1>
      <p className={styles.description}>Clique em cada espaço para selecionar um livro</p>

      <div className={styles.legenda}>
        <h3>Legenda das Categorias</h3>
        <div className={styles.linhasLegenda}>
          {/* (Mantém as legendas exatamente como estão) */}
        </div>
      </div>

      <h2 className={styles.subtitulo}>Antigo Testamento</h2>
      <div className={styles.areaResposta}>
        {Array(39).fill().map((_, i) => (
          <div key={`antigo-slot-${i}`} className={styles.slot} onClick={() => abrirSelecao(i)}>
            {resposta[i] ? (
              <div className={styles.livroDetalhado} style={{ backgroundColor: resposta[i].cor }}>
                <div className={styles.capVers}>cap 04 Vers 879</div>
                <div className={styles.sigla}>{resposta[i].sigla}</div>
                <div className={styles.nomePequeno}>{resposta[i].nome}</div>
              </div>
            ) : <div className={styles.vazio}>+</div>}
          </div>
        ))}
      </div>

      <h2 className={styles.subtitulo}>Novo Testamento</h2>
      <div className={styles.areaResposta}>
        {Array(27).fill().map((_, i) => (
          <div key={`novo-slot-${i}`} className={styles.slot} onClick={() => abrirSelecao(i + 39)}>
            {resposta[i + 39] ? (
              <div className={styles.livroDetalhado} style={{ backgroundColor: resposta[i + 39].cor }}>
                <div className={styles.capVers}>cap 04 Vers 879</div>
                <div className={styles.sigla}>{resposta[i + 39].sigla}</div>
                <div className={styles.nomePequeno}>{resposta[i + 39].nome}</div>
              </div>
            ) : <div className={styles.vazio}>+</div>}
          </div>
        ))}
      </div>

      {slotSelecionado !== null && (
        <div className={styles.modal}>
          <h3>Selecione o livro para a posição {slotSelecionado + 1}</h3>
          <div className={styles.livrosContainer}>
            {livrosDisponiveis.map((livro, i) => (
              <button
                key={`livro-${i}`}
                className={styles.livroDetalhado}
                style={{ backgroundColor: livro.cor }}
                onClick={() => escolherLivro(livro)}
              >
                <div className={styles.capVersPequeno}>cap 04 Vers 879</div>
                <div className={styles.sigla}>{livro.sigla}</div>
                <div className={styles.nomePequeno}>{livro.nome}</div>
              </button>
            ))}
          </div>
          <button className={styles.botaoCustom} onClick={() => setSlotSelecionado(null)}>Cancelar</button>
        </div>
      )}

      <div className={styles.botoes}>
        <button className={styles.botaoCustom} onClick={verificar}>Verificar</button>
        <button className={styles.botaoCustom} onClick={resetar}>Resetar</button>
      </div>

      {resultado && <p>{resultado}</p>}
      {progresso && <p>{progresso}</p>}
    </main>
  );
}