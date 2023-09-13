import React from 'react'
import '../styles/programDetailsPricing.css'

export default function ProgramDetailsPricing() {
  return (
    <div className='pricing-section'>
      <h1>Pricing</h1>
      <div className='pricing-cards'>
        <div className='card1'>
            <p className='payment-amount'><span className='big-amount-text' style={{fontSize : '30px' , fontWeight : '700'}}>1,50,000</span>/ Full Payment</p>
            <p className='white-card-text'>Company</p>
            <p className='small-card-text'>Unleash the power of automation.</p>
            <ul>
                <li>Multi-steps Zaps</li>
                <li>3 Premium Apps</li>
                <li>2 Users team</li>
            </ul>
            <button>Choose Plan</button>
        </div>
        <div className='card2'>
            <p className='payment-amount'><span className='big-amount-text' style={{fontSize : '30px' , fontWeight : '700'}}>50,000</span> / 3 months</p>
            <p className='white-card-text'>Professional</p>
            <p className='small-card-text'>Advanced tools to take your work to the next level.</p>
            <ul>
                <li>Multi-steps Zaps</li>
                <li>Unlimited Premium Apps</li>
                <li>50 Users team</li>
                <li>Shared Workspace</li>
            </ul>
            <button>Choose Plan</button>
        </div>
        <div className='card3'>
            <p className='payment-amount'><span style={{fontSize : '30px' , fontWeight : '700'}}>25,000</span> / 7 months</p>
            <p className='white-card-text'>Starter</p>
            <p className='small-card-text'>Automation plus enterprise-grade features.</p>
            <p className='most-popular-text'>MOST POPULAR</p>
            <ul>
                <li>Multi-steps Zaps</li>
                <li>Unlimited Premium Apps</li>
                <li>Unlimited Users team</li>
                <li>Advanced Admin</li>
                <li>Custom Data Retention</li>
            </ul>
            <button>Choose Plan</button>
        </div>
      </div>
    </div>
  )
}
