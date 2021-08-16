import './styles/index.scss'
import logo from '../public/logo.svg'

function App() {
  const text =
    'Webpack 5 boilerplate with React 17 using Babel, HMR, Sass and PostCSS with a hot dev server and an optimized production build.'
  const reminder =
    'Remember to add .env.development and .env.production to your .gitignore!'
  return (
    <>
      <section className='webpack'>
        <p className='info'>{text}</p>
        <img src={logo} alt='webpackLogo' />
        <p className='reminder'>{reminder}</p>
      </section>
    </>
  )
}

export default App
