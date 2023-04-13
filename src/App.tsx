import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './common/GlobalStyle'
import Main from './pages/Main/Main'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Career from './components/Career/Career'
import Portfolio from './components/Portfolio/Portfolio'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'

const App = () => {
  document.cookie = 'safeCookie1=foo; SameSite=Lax'
  document.cookie = 'safeCookie2=foo'
  document.cookie = 'crossCookie=bar; SameSite=None; Secure'

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          {/* <Main /> */}
          {/* <About /> */}
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
