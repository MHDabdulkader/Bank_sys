import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCount from './AnimatedCount'
import DoughnutChart from './DoughnutChart'


function TotalBalanceBox({accounts=[], totalBanks, totalCurrentBalance}:TotlaBalanceBoxProps) {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        {/* Doughnut chart */}
        <DoughnutChart accounts={accounts}/>
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank accounts: {totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total Current Balance </p>
          <div className='total-balance-amount flex-center'>
            <AnimatedCount amount={totalCurrentBalance}/>
          </div>
        </div>
      </div>


    </section>
  )
}

export default TotalBalanceBox