import React from 'react'
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Area' title='Inflation Rate in Percentage'/>
      <div className='w-full'>
        <ChartComponent id='area-chart' height='420px' primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{ border: {width: 0} }} tooltip={{ enable: true }} background={ currentMode==='Dark' ? '#33373E':'#fff'}>
        <Inject services={[ColumnSeries, Tooltip, Legend, Category, DataLabel]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item,index)=>(<SeriesDirective key={index} {...item}/>))}
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </div>
  )
}

export default Bar