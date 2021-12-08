import Script from 'next/script';
import dynamic from 'next/dynamic';
import CardsComponent from '../components/CardsComponent';
import GeneralCtxProvider from '../context/GeneralCtx';
import DatePickerComponent from '../components/DatePickerComponent';

const TopNavBarWithNoSSR = dynamic(import('./../components/AppHeader'), {
  ssr: false
});

export default function Home() {
  return (
    <GeneralCtxProvider>
      <div>
        <Script src="./rolldate.js" />
        <TopNavBarWithNoSSR />
        <div>
          <div>
            <DatePickerComponent handleSelectedDate={() => { }} />
          </div>
          <CardsComponent />
        </div>
      </div>
    </GeneralCtxProvider>
  )
}
