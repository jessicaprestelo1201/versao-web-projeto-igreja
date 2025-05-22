// app/page.jsx
'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const todosLivros = [
  // Antigo Testamento
  { sigla: "Gn", nome: "Gênesis", cor: "#f88", testamento: "antigo" },
  { sigla: "Êx", nome: "Êxodo", cor: "#f88", testamento: "antigo" },
  { sigla: "Lv", nome: "Levítico", cor: "#f88", testamento: "antigo" },
  // ... (insira todos os 39 livros do Antigo Testamento aqui)
  
  // Novo Testamento
  { sigla: "Mt", nome: "Mateus", cor: "#6cf", testamento: "novo" },
  { sigla: "Mc", nome: "Marcos", cor: "#6cf", testamento: "novo" },
  // ... (insira todos os 27 livros do Novo Testamento aqui)
  { sigla: "Ap", nome: "Apocalipse", cor: "#c6f", testamento: "novo" }
];

export default function JogoBiblia() {
  const [livrosAntigo, setLivrosAntigo] = useState([]);
  const [livrosNovo, setLivrosNovo] = useState([]);
  const [resposta, setResposta] = useState([]);
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    // Separa e embaralha os livros de cada testamento
    const antigo = todosLivros.filter(l => l.testamento === "antigo").sort(() => Math.random() - 0.5);
    const novo = todosLivros.filter(l => l.testamento === "novo").sort(() => Math.random() - 0.5);
    
    setLivrosAntigo(antigo);
    setLivrosNovo(novo);
  }, []);

  const selecionarLivro = (livro) => {
    if (resposta.length < todosLivros.length) {
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
                className={styles.livro} 
                style={{ backgroundColor: resposta[i].cor }}
              >
                {resposta[i].sigla}
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
            className={styles.livro}
            style={{ backgroundColor: livro.cor }}
            onClick={() => selecionarLivro(livro)}
            disabled={resposta.includes(livro)}
          >
            {livro.sigla}
          </button>
        ))}
      </div>

      {/* Novo Testamento */}
      <h2 className={styles.subtitulo}>Novo Testamento</h2>
      <div className={styles.livrosContainer}>
        {livrosNovo.map((livro, i) => (
          <button
            key={`novo-${i}`}
            className={styles.livro}
            style={{ backgroundColor: livro.cor }}
            onClick={() => selecionarLivro(livro)}
            disabled={resposta.includes(livro)}
          >
            {livro.sigla}
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