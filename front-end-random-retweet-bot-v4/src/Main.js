import './Main.css';
import{useState,useEffect}from'react'
const eth=window.ethereum;

function WhiteBox({props}){
	return(
	<div className='white-box'>
		{props.isMetaMaskInstalled?<button>Connect to MetaMask</button>:<button>Install MetaMask</button>}
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
	const[isMetaMaskInstalled,setIsMetaMaskInstalled]=useState(false)
	useEffect(()=>{
		setIsMetaMaskInstalled(eth.isMetaMask)	
	},[isMetaMaskInstalled])
  return (
	<div className='main'>
		<div></div>
		<WhiteBox props={{isMetaMaskInstalled}}/>
	  	<Footer/>
    </div> 
);
}

