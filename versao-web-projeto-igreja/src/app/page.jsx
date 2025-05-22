// app/page.jsx
'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const todosLivros = [
  // Exemplo com alguns livros (você pode usar a lista completa que te passei)
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
  { sigla: "Ct", nome: "Cânticos", cor: "#def", categoria: "Poesia" },

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

  // Novo Testamento
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
  const [resposta, setResposta] = useState([]);
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    const antigo = todosLivros.filter(l => ["Lei","História","Poesia","Profetas Maiores","Profetas Menores"].includes(l.categoria)).sort(() => Math.random() - 0.5);
    const novo = todosLivros.filter(l => ["Evangelhos","Cartas de Paulo","Outras Cartas","Profecia"].includes(l.categoria)).sort(() => Math.random() - 0.5);
    setLivrosAntigo(antigo);
    setLivrosNovo(novo);
  }, []);

  const selecionarLivro = (livro) => {
    if (resposta.length < todosLivros.length && !resposta.includes(livro)) {
      setResposta([...resposta, livro]);
    }
  };

  const verificar = () => {
    const estaCorreto = todosLivros.every((livro, i) => livro.sigla === resposta[i]?.sigla);
    setResultado(estaCorreto ? "✅ Ordem Correta!" : "❌ Ordem Incorreta");
  };

  const resetar = () => {
    setResposta([]);
    setResultado("");
    const antigo = [...livrosAntigo].sort(() => Math.random() - 0.5);
    const novo = [...livrosNovo].sort(() => Math.random() - 0.5);
    setLivrosAntigo(antigo);
    setLivrosNovo(novo);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Ordem dos Livros Bíblicos</h1>
      <p className={styles.description}>Selecione os livros na ordem correta</p>

      {/* Área de resposta */}
      <div className={styles.areaResposta}>
        {Array(todosLivros.length).fill().map((_, i) => (
          <div key={i} className={styles.slot}>
            {resposta[i] && (
              <div 
                className={styles.livroDetalhado} 
                style={{ backgroundColor: resposta[i].cor }}
              >
                <div className={styles.capVers}>cap 04 Vers 879</div>
                <div className={styles.sigla}>{resposta[i].sigla}</div>
                <div className={styles.nomePequeno}>{resposta[i].nome}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Antigo Testamento */}
      <h2 className={styles.subtitulo}>Antigo Testamento</h2>
      <div className={styles.livrosContainer}>
        {livrosAntigo.map((livro, i) => (
          <button
            key={`antigo-${i}`}
            className={styles.livroDetalhado}
            style={{ backgroundColor: livro.cor }}
            onClick={() => selecionarLivro(livro)}
            disabled={resposta.includes(livro)}
          >
            <div className={styles.capVersPequeno}>cap 04 Vers 879</div>
            <div className={styles.sigla}>{livro.sigla}</div>
            <div className={styles.nomePequeno}>{livro.nome}</div>
          </button>
        ))}
      </div>

      {/* Novo Testamento */}
      <h2 className={styles.subtitulo}>Novo Testamento</h2>
      <div className={styles.livrosContainer}>
        {livrosNovo.map((livro, i) => (
          <button
            key={`novo-${i}`}
            className={styles.livroDetalhado}
            style={{ backgroundColor: livro.cor }}
            onClick={() => selecionarLivro(livro)}
            disabled={resposta.includes(livro)}
          >
            <div className={styles.capVersPequeno}>cap 04 Vers 879</div>
            <div className={styles.sigla}>{livro.sigla}</div>
            <div className={styles.nomePequeno}>{livro.nome}</div>
          </button>
        ))}
      </div>

      {/* Controles */}
      <div className={styles.controles}>
        <button onClick={verificar} disabled={resposta.length !== todosLivros.length} className={styles.botao}>
          Verificar
        </button>
        <button onClick={resetar} className={styles.botao}>Resetar</button>
      </div>

      {resultado && <p className={resultado.includes("✅") ? styles.acerto : styles.erro}>{resultado}</p>}
    </main>
  );
}
