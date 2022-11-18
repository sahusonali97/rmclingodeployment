import React from 'react';
import "./AdmissionStyle.css";
import PureCounter from '@srexi/purecounterjs';
import { Backpack } from '@mui/icons-material';

const Admission = () => {
    return (
        <div class="container" data-aos="fade-up" id="back" >
            <div className="row no-gutters">
                <div className=" col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                    <img src='https://bootstrapmade.com/demo/templates/Gp/assets/img/counts-img.jpg' className='feed-img' />
                </div>
                <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                    <div className="content d-flex flex-column justify-content-center">
                        <div className='card' id='feed-card' data-aos="fade-right">
                            <h3 data-aos="fade-in" id='title-feed'>Face-to-face learning</h3>
                            <p data-aos="fade-in">Our virtual classes are real-time live streaming with native teachers who have years of experience teaching foreign languages. You will learn and practice foreign language at your convenience without stepping out from your home or office.</p>
                            <div className="row">
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"> <i className="bi bi-emoji-smile" id='feed'>
                                    </i> <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="0" className="purecounter">65</span>
                                        <p><strong>Happy Clients</strong>Interactive online whiteboard.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"> <i className="bi bi-journal-richtext" id='feed'></i> <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="0" className="purecounter">85</span><p><strong>Interactive</strong> Classroom interaction features like hand raising and virtual ticks.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-clock" id='feed'></i>
                                        <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="0" className="purecounter">35</span><p><strong>Years of experience</strong> Almost three thousand Russian translators are needed in the United States alone, and the demand for them is growing steadily</p>
                                    </div
                                    ></div>
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box"> <i class="bi bi-award" id='feed'></i>
                                        <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" class="purecounter">20</span><p><strong>Awards</strong> As a result, the translation industry is expected to grow at an average rate of 22% per year. It is also estimated that the language translation market will grow to $57 billion by 2023.
</p>
                                    </div>
                                </div>
                            </div> </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Admission;