import React from 'react'
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, DateTime, Logarithmic, Crosshair, HiloSeries, Tooltip, Zoom } from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const date1 = new Date('2017, 1, 1');

function filterValue(value){
  if(value.x >= date1){
    return value.x, value.high, value.low;
  }  
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Financial' title='APPLE Historical'/>
      <div className='w-full'>
        <ChartComponent id='charts' height='420px' primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis} chartArea={{ border: {width: 0} }} background={ currentMode==='Dark' ? '#33373E':'#fff'} tooltip={{ enable: true }} crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}>
          <Inject services={[HiloSeries, DateTime, Tooltip, Logarithmic, Crosshair, Zoom]}/>
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={returnValue} xName='x' yName='low' name='Apple Inc' type='Hilo' low='low' high='high'/>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial