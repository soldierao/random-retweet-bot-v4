import './Main.css';

function WhiteBox(){
	return(
	<div className='white-box'>
	</div>	
	)
}

function BlankHeader(){
	return(
		<></>	
	)
}

function Footer(){
	return(
		<div className='footer'>
		</div>
	)
}


export default function Main() {
  return (
	<div className='main'>
	  	<BlankHeader/>
	    	<WhiteBox/>
	  	<Footer/>
        </div> 
);
}

