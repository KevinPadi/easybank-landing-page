import Cards from './components/Cards'
import iconOnline from './assets/images/icon-online.svg'
import iconBudgeting from './assets/images/icon-budgeting.svg'
import iconOnboarding from './assets/images/icon-onboarding.svg'
import iconApi from './assets/images/icon-api.svg'
import Articles from './components/Articles'
import currencyImg from './assets/images/image-currency.jpg'
import restaurantImg from './assets/images/image-restaurant.jpg'
import planeImg from './assets/images/image-plane.jpg'
import confetiImg from './assets/images/image-confetti.jpg'
// import pattern from './assets/images/bg-intro-desktop.svg'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Button from './components/Button'

function App () {
  return (
    <div className='bg-VeryLightGrayish'>
      <Nav />
      <section className='md:flex md:justify-between md:items-center md:w-full md:h-[500px] md:mb-56 md:bg-patternBg md:bg-no-repeat bg-[750px]'>
        <div className='md:space-y-9 md:w-[990px] md:p-10 md:px-64 '>
          <h1 className='text-DarkBlue md:font-thin md:text-6xl'>Next generation digital banking</h1>
          <p className='text-GrayishBlue md:text-lg'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
          <Button />
        </div>
        <div className=''>
          {/* <img src={pattern} alt='pattern desing' className='scale-[1.5] relative top-[25px] right-[-140px]' /> */}
          <img src='./src/assets/images/image-mockups.png' alt='mockups image' className='md:relative md:top-[140px] md:right-[-80px] md:scale-[1.2] ' />
        </div>
      </section>
      {/* Cards Container */}
      <section className='bg-LightGrayish md:px-64 md:py-28'>
        <div className='md:space-y-5'>
          <h2 className='text-DarkBlue md:text-4xl'>Why choose Easybank?</h2>
          <p className='text-GrayishBlue md:text-lg'>
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.
          </p>
        </div>
        <div className='md:flex md:mt-44 md:items-center md:justify-center md:gap-8'>
          <Cards title='Online Banking' text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' src={iconOnline} />
          <Cards title='Simple Budgeting' text="See exactly where your money goes each month. Receive notification when you're close to hitting your limits " src={iconBudgeting} />
          <Cards title='Fast Onboarding' text="We don't do branches. Open your account in minutes online and start taking control of your finances right away" src={iconOnboarding} />
          <Cards title='Open API' text='Manage your savings, investments, pension, and much more from one account. Traching yout monety has never been easier.' src={iconApi} />
        </div>
      </section>
      {/* Articles Container */}
      <div className='mb-10 px-6 flex flex-col gap-6 md:px-64 md:py-28 md:gap-12'>
        <h2 className='text-DarkBlue text-4xl text-center md:text-left'>Latest Articles</h2>
        <div className='space-y-6 md:flex md:items-center md:justify-between'>
          <Articles src='currencyImg' author='Claire Robinson' title='Receive money in any currency with no fees' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
          <Articles src='restaurantImg' author='Wilson Hutton' title='Treat yourself without worrying about money' text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...' />
          <Articles src='planeImg' author='Wilson Hutton' title='Take your Easybank card wherever you go' text="We want you enjoy your travels. This is why we don't charge any feels on purchases while you're abroad. We'll even show you..." />
          <Articles src='confettiImg' author='Claire Robinson' title='Our invite-only Beta accounts are now live!' text="The world is getting smaller and wer'e becoming more mobile. So why should you be forced to only receive money in a single ..." />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
