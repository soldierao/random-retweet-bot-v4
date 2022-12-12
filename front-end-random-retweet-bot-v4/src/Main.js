import './Main.css';

function WhiteBox(){
	return(
	<div className='white-box'>
	</div>	
	)
}

function Footer(){
	return(
		<div className='footer'>
			<h1>by J.D. Diamari 🕊️</h1>
		</div>
	)
}


export default function Main() {
  return (
	<div className='main'>
		<div></div>
		<WhiteBox/>
	  	<Footer/>
    </div> 
);
}

