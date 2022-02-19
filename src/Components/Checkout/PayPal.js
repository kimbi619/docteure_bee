import React from 'react'
import { useTranslation } from 'react-i18next'

const PayPal = () => {
    const { t } = useTranslation()
  return (
    <div className='paypal'>
         <button type='submit' className="callToAction honeyItemLink">{ t("checkout.paypal") }</button>
    </div>
  )
}

export default PayPal