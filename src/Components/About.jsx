import React from 'react';

const About = (props) => {
return (
    <>
        <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>

            <h1 className='text-center'>About Us</h1>
            <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates in? Temporibus maxime facere amet cumque fugiat sint placeat enim delectus et sapiente, possimus optio ut reprehenderit neque nostrum animi.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum veritatis aliquam, saepe voluptate asperiores rem nostrum doloremque, beatae dolores cumque velit vitae, perspiciatis numquam dolorem laudantium. Quae at sit aperiam.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatiblity</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, velit. Delectus consectetur quia placeat voluptates atque perspiciatis, distinctio at recusandae quibusdam! Alias esse aliquid optio ad recusandae, id doloribus. Optio.
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </>
)
}

export default About;