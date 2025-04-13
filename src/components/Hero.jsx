import heroimg from '../assets/homebg.png'
function Hero(){
    return(<div className="w-full mx-auto">
        <img src={heroimg} alt="Responsive Image" className="w-full h-auto rounded-lg "/>
      </div>
      );
};
export default Hero;