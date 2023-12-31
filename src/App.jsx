import Cards from './components/Cards'
import iconOnline from './assets/images/icon-online.svg'
import iconBudgeting from './assets/images/icon-budgeting.svg'
import iconOnboarding from './assets/images/icon-onboarding.svg'
import iconApi from './assets/images/icon-api.svg'
import Articles from './components/Articles'
import currencyImg from './assets/images/image-currency.jpg'
import planeImg from './assets/images/image-plane.jpg'
import restaurantImg from './assets/images/image-restaurant.jpg'
import confettiImg from './assets/images/image-confetti.jpg'
import mockupsImg from './assets/images/image-mockups.png'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Button from './components/Button'

function App () {
  return (
    <div className='bg-VeryLightGrayish'>
      <Nav />
      <section className='flex flex-col -space-y-20 text-center mb-16 md:flex md:flex-row md:justify-between md:items-center w-full md:h-[500px] md:mb-56 bg-mobilePatternBg bg-no-repeat bg-[-30px_-90px] md:bg-patternBg md:bg-no-repeat md:bg-[750px] md:text-left'>
        <div className='px-6 space-y-6 md:space-y-9 md:w-[990px] md:p-10 md:px-64 order-2 md:order-1'>
          <h1 className='text-4xl text-DarkBlue md:font-thin md:text-6xl'>Next generation digital banking</h1>
          <p className='text-xs text-GrayishBlue md:text-lg'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
          <Button />
        </div>
        <div className='order-1 md:order-2'>
          <img src={mockupsImg} alt='mockups image' className='relative md:top-[140px] md:right-[-80px] md:scale-[1.2] -top-[30px] px-2' />
        </div>
      </section>
      {/* Cards Container */}
      <section className='space-y-10 px-6 py-14 bg-LightGrayish md:px-64 md:py-28 md:space-y-16'>
        <div className='text-center space-y-5 md:space-y-5 md:w-[700px] md:text-left'>
          <h2 className='text-DarkBlue text-4xl '>Why choose Easybank?</h2>
          <p className='text-GrayishBlue md:text-lg md:whitespace-break-spaces'>
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.
          </p>
        </div>
        <div className='space-y-10 md:flex md:mt-40 md:items-center md:justify-center md:gap-8 md:space-y-0'>
          <Cards title='Online Banking' text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' src={iconOnline} />
          <Cards title='Simple Budgeting' text="See exactly where your money goes each month. Receive notification when you're close to hitting your limits " src={iconBudgeting} />
          <Cards title='Fast Onboarding' text="We don't do branches. Open your account in minutes online and start taking control of your finances right away" src={iconOnboarding} />
          <Cards title='Open API' text='Manage your savings, investments, pension, and much more from one account. Traching yout monety has never been easier.' src={iconApi} />
        </div>
      </section>
      {/* Articles Container */}
      <div className='mb-10 px-6 flex flex-col gap-6 md:px-64 md:py-28 md:gap-12'>
        <h2 className='text-DarkBlue text-4xl text-center md:text-left'>Latest Articles</h2>
        <div className=' md:flex md:items-center md:justify-between md:gap-4'>
          <Articles src={currencyImg} author='Claire Robinson' title='Receive money in any currency with no fees' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
          <Articles src={restaurantImg} author='Wilson Hutton' title='Treat yourself without worrying about money' text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...' />
          <Articles src={planeImg} author='Wilson Hutton' title='Take your Easybank card wherever you go' text="We want you enjoy your travels. This is why we don't charge any feels on purchases while you're abroad. We'll even show you..." />
          <Articles src={confettiImg} author='Claire Robinson' title='Our invite-only Beta accounts are now live!' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
