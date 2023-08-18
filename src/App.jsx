import Cards from './components/Cards'
import iconOnline from './assets/images/icon-online.svg'
import iconBudgeting from './assets/images/icon-budgeting.svg'
import iconOnboarding from './assets/images/icon-onboarding.svg'
import iconApi from './assets/images/icon-api.svg'
import Articles from './components/Articles'
import currencyImg from './assets/images/image-currency.jpg'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Button from './components/Button'

function App () {
  return (
    <div>
      <Nav />
      <section className='lg:flex lg:justify-between lg:w-full lg:h-[500px] lg:bg-patternBg lg:bg-[position:45rem_-16rem] lg:bg-no-repeat lg:bg-auto'>
        <div className='lg:space-y-5 lg:w-[530px] lg:p-10 text-DarkBlue'>
          <h1 className='lg:font-thin lg:text-6xl'>Next generation digital banking</h1>
          <p className='text-GrayishBlue'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
          <Button />
        </div>
        <div className='relative w-auto h-auto'>
          <img src='./src/assets/images/image-mockups.png' alt='mockups image' className='relative top-[-100px] w-[900px] right-[-130px]' />
        </div>
      </section>
      {/* Cards Container */}
      <div className='flex mt-44 items-center justify-center gap-8 '>
        <Cards title='Online Banking' text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' src={iconOnline} />
        <Cards title='Simple Budgeting' text="See exactly where your money goes each month. Receive notification when you're close to hitting your limits " src={iconBudgeting} />
        <Cards title='Fast Onboarding' text="We don't do branches. Open your account in minutes online and start taking control of your finances right away" src={iconOnboarding} />
        <Cards title='Open API' text='Manage your savings, investments, pension, and much more from one account. Traching yout monety has never been easier.' src={iconApi} />
      </div>
      {/* Articles Container */}
      <div className='flex mt-44 items-center justify-center gap-8 '>
        <Articles src={currencyImg} author='Claire Robinson' title='Receive money in any currency with no fees' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
        <Articles src={currencyImg} author='Wilson Hutton' title='Treat yourself without worrying about money' text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...' />
        <Articles src={currencyImg} author='Wilson Hutton' title='Take your Easybank card wherever you go' text="We want you enjoy your travels. This is why we don't charge any feels on purchases while you're abroad. We'll even show you..." />
        <Articles src={currencyImg} author='Claire Robinson' title='Our invite-only Beta accounts are now live!' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
      </div>
      <Footer />
    </div>
  )
}

export default App
