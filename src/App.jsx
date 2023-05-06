import logo from '../public/logo.svg'

function App() {
  const text =
    'Webpack 5 boilerplate with React 18 using Babel 7, HMR, Sass and PostCSS with a hot dev server and an optimized production build.'
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
