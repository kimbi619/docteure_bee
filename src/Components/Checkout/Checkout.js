import React, { useState, useEffect ,useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

import './Checkout.css'
import { useTranslation } from 'react-i18next';
import { ReactComponent as Master } from "../../img/master.svg";
import { ReactComponent as Paypal } from "../../img/paypal.svg";
import PayPal from './PayPal';
import MasterCard from './MasterCard';
import { CartContext } from '../Main/CartContext';


const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preferedPay, setPreferedPay] = useState('payPal')
  const [cart, setCart] = useContext(CartContext);
  const [isPayed, setIsPayed] = useState(false)
  const [sdkReady, setSdkReady] = useState(false)

  useEffect(() => {
    const addPayPalScript = async() =>{
      const clientId = 'access_token$sandbox$fw7wqb98cmvrn3f3$b1f3bedf6869207b697be03fb2d8b1ce'
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = ()=>{
        setSdkReady(true)
      }
      // document.appendChild(script)
    }
    addPayPalScript()
    
  }, [])
  
  const checkAndValidate = (e) => {
    console.log(e.target)
  }
  const successPaymentHandler = (paymentResult) =>{
     if(paymentResult.status === "COMPLETED"){
       setIsPayed(true);
     }
  }

  const { t } = useTranslation();
  console.log(cart)
  return (
    <div className='checkout'>
      {
        
        !isPayed ? (
          <>
          <h2 className='descTitle'> { t("checkout.title")} </h2>
        <div className="sendMessage">
          <form className='checkName' onSubmit={checkAndValidate}>
            <input className='formItem' id='firstName' type="text" placeholder={ t("checkout.firstName") } onChange={e=>{setFirstName(e.target.value)}} value={firstName} />
            <input className='formItem' id='lastName' type="text" placeholder={ t("checkout.lastName") } onChange={e=>{setLastName(e.target.value)}} value={lastName} />
          </form>
              <PayPalButton amount={122} onSuccess = {successPaymentHandler} />
              <>
                  {/* <div className="togglePaymentMethod">
                    <div className="svgWrapper">
                      <Paypal onClick={(e)=>{setPreferedPay('payPal')}} className={`${preferedPay === "payPal" ? "activePay": "nonActivePay"} payWith`} />
                    </div>
                    <div className="svgWrapper">
                      <Master onClick={(e)=>{setPreferedPay('master')}} className={`${preferedPay === "master" ? "activePay": "nonActivePay"} payWith`} />
                    </div>
                  </div> */}
                  {/* {
                    preferedPay === 'payPal' ? <PayPal />: <MasterCard />
                  } */}
              
              </>
        </div>
        </>
        ) : (
          <>
            <h1 className='descTitle success'>Thank you for ordering our product 😃</h1>
            {
              cart.map(item =>(
                <div className='payedProduct' key={item.product.sys.id}>
                  <div className="imgWrapper">
                    <img src={item.product.fields.productImage[0].fields.file.url} alt={item.product.fields.name} />
                  </div>{console.log(item.product.fields)}
                  <div className="itemName">{item.product.fields.name}</div>
                  <div className="itemAmount">${item.product.fields.count * item.product.fields.price} for it </div>
                </div>
              ))
            }
          </>
        )
      }
        
    </div>
  )
}

export default Checkout 