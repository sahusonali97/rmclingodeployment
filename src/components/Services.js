import '../components/Services.css';
import practice from "../assets/chers.jpg"

const Services = () => {
   return (
      <div className='box-bg'><div className="container-fluid" id="services">
         <h3 className="section-title mx-auto" data-aos="fade-left">Our Services <img src="images/title-border.png" alt="" />
        </h3>  
         <div className="row ">
            <div className="col-xs-12 col-sm-3 col-md-6 col-lg-4 ">
               <div className="box" data-aos="fade-in" data-aos-duration="2400" >
                  <img src={practice} alt="" />
                  <h5>Website Designing</h5>
                  <p className="service-text"></p>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 " >
               <div className="box" data-aos="fade-in" data-aos-duration="2500">
                  <img src={practice} alt="" />
                  <h5>Web Development</h5>
                  <p className="service-text">A Website That Effectively Communicates Your Business Value Proposition</p>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 " >
               <div className="box" data-aos="fade-in" data-aos-duration="2600">
                  <img src={practice} alt="" />
                  <h5>CMS Development</h5>
                  <p className="service-text">A Website That Effectively Communicates Your Business Value Proposition</p>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 " >
               <div className="box" data-aos="fade-in" data-aos-duration="2700">
                  <img src={practice} alt="" />
                  <h5>E-commerce Website </h5>
                  <p className="service-text">A Website That Effectively Communicates Your Business Value Proposition</p>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 " >
               <div className="box" data-aos="fade-in" data-aos-duration="2800">
                  <img src={practice} alt="" />
                  <h5>Online Marketing</h5>
                  <p className="service-text">A Website That Effectively Communicates Your Business Value Proposition</p>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 " >
               <div className="box" data-aos="fade-in" data-aos-duration="2900">
                  <img src={practice} alt="" />
                  <h5>Logo Designing</h5>
                  <p className="service-text">A Website That Effectively Communicates Your Business Value Proposition</p>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
               <div className="box" data-aos="fade-in" data-aos-duration="3000">
                  <img src={practice} alt="" />
                  <h5>Digital Marketing</h5>
                  <p className="service-text">A Website That Effectively Communicates Your Business Value Proposition</p>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 " >
               <div className="box" data-aos="fade-in" data-aos-duration="3100">
                  <img src={practice} alt="" />
                  <h5>Email template design</h5>
                  <p className="service-text">A Website That Effectively Communicates Your Business Value Proposition</p>
               </div>
            </div>
         </div>
      </div>
    </div>

   );
};

export default Services;