import { useState } from 'react'
import './style/global.scss'
import { Experience } from './components/Experience/experiece.jsx'
import { Header } from './components/Header/header'
import '../src/components/style/home.scss'
function App() {


  return (
    <>
      <main className='container'>
        <Header />
        <Experience />
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-infos">
            <span>
              EN - Basic br
            </span>
            <span>
              PT-BR - Native speaker
            </span>
          </div>
          <h3>Education</h3>
          <span>🎓</span>
          <span>Profissão: Desenvolvedor Full Stack Python - EBAC</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me <img src="./assets/email.svg" /></button>
        </div>
      </main>
    </>
  )
}

export default App
