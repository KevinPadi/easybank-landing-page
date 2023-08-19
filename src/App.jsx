import Cards from './components/Cards'
import iconOnline from './assets/images/icon-online.svg'
import iconBudgeting from './assets/images/icon-budgeting.svg'
import iconOnboarding from './assets/images/icon-onboarding.svg'
import iconApi from './assets/images/icon-api.svg'
import Articles from './components/Articles'
import currencyImg from './assets/images/image-currency.jpg'
// import pattern from './assets/images/bg-intro-desktop.svg'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Button from './components/Button'

function App () {
  return (
    <div className='bg-VeryLightGrayish'>
      <Nav />
      <section className='lg:flex lg:justify-between lg:items-center lg:w-full lg:h-[500px] lg:mb-56 lg:bg-patternBg lg:bg-no-repeat bg-[750px]'>
        <div className='lg:space-y-9 lg:w-[990px] lg:p-10 lg:px-64 '>
          <h1 className='text-DarkBlue lg:font-thin lg:text-6xl'>Next generation digital banking</h1>
          <p className='text-GrayishBlue lg:text-lg'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
          <Button />
        </div>
        <div className=''>
          {/* <img src={pattern} alt='pattern desing' className='scale-[1.5] relative top-[25px] right-[-140px]' /> */}
          <img src='./src/assets/images/image-mockups.png' alt='mockups image' className='relative top-[140px] right-[-80px] scale-[1.2] ' />
        </div>
      </section>
      {/* Cards Container */}
      <section className='bg-LightGrayish lg:px-64 lg:py-28'>
        <div className='lg:space-y-5'>
          <h2 className='text-DarkBlue lg:text-4xl'>Why choose Easybank?</h2>
          <p className='text-GrayishBlue lg:text-lg'>
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.
          </p>
        </div>
        <div className='lg:flex lg:mt-44 lg:items-center lg:justify-center lg:gap-8'>
          <Cards title='Online Banking' text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' src={iconOnline} />
          <Cards title='Simple Budgeting' text="See exactly where your money goes each month. Receive notification when you're close to hitting your limits " src={iconBudgeting} />
          <Cards title='Fast Onboarding' text="We don't do branches. Open your account in minutes online and start taking control of your finances right away" src={iconOnboarding} />
          <Cards title='Open API' text='Manage your savings, investments, pension, and much more from one account. Traching yout monety has never been easier.' src={iconApi} />
        </div>
      </section>
      {/* Articles Container */}
      <div className='lg:flex lg:flex-col lg:px-64 lg:py-28 lg:gap-12'>
        <h2 className='text-DarkBlue lg:text-4xl'>Latest Articles</h2>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <Articles src={currencyImg} author='Claire Robinson' title='Receive money in any currency with no fees' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
          <Articles src={currencyImg} author='Wilson Hutton' title='Treat yourself without worrying about money' text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...' />
          <Articles src={currencyImg} author='Wilson Hutton' title='Take your Easybank card wherever you go' text="We want you enjoy your travels. This is why we don't charge any feels on purchases while you're abroad. We'll even show you..." />
          <Articles src={currencyImg} author='Claire Robinson' title='Our invite-only Beta accounts are now live!' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
