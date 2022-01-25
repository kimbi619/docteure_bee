import React from 'react';
import beegirl from '../img/beegirl.png'

const About = () => {
  return (
  <div className='about-page'>
    <div className="container">
        <div className="aboutFlexContainer">
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={beegirl} alt="Honey" />
                </div>
            </div>
            <div className="aboutTextSection">
                <div className="descTitle titleLeft">ABOUT ME</div>
                <div className="descText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, aliquam quibusdam. Excepturi animi atque, corporis debitis sequi deleniti natus consequuntur molestias facilis quasi quo blanditiis architecto totam aliquid! Dolorum totam accusantium voluptatum. Cumque nemo quidem hic saepe expedita minima neque rerum perferendis sequi, similique quod reprehenderit. Nobis ut neque id.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, aliquam quibusdam. Excepturi animi atque, corporis debitis sequi deleniti natus consequuntur molestias facilis quasi quo blanditiis architecto totam aliquid! Dolorum totam accusantium voluptatum. Cumque nemo quidem hic saepe expedita minima neque rerum perferendis sequi, similique quod reprehenderit. Nobis ut neque id.
                </div>
            </div>
        </div>


        <div className="aboutFlexContainer">
            <div className="aboutTextSection">
                <div className="descText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, aliquam quibusdam. Excepturi animi atque, corporis debitis sequi deleniti natus consequuntur molestias facilis quasi quo blanditiis architecto totam aliquid! Dolorum totam accusantium voluptatum. Cumque nemo quidem hic saepe expedita minima neque rerum perferendis sequi, similique quod reprehenderit. Nobis ut neque id.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, aliquam quibusdam. Excepturi animi atque, corporis debitis sequi deleniti natus consequuntur molestias facilis quasi quo blanditiis architecto totam aliquid! Dolorum totam accusantium voluptatum. Cumque nemo quidem hic saepe expedita minima neque rerum perferendis sequi, similique quod reprehenderit. Nobis ut neque id.
                </div>
            </div>
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={beegirl} alt="Honey" />
                </div>
            </div>
        </div>
        </div>
  </div>
  )
};

export default About;
