import "./index.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_top'>
        <div className='footer_row'>
            <div className='footer_row_head'><h6>ABOUT US</h6></div>
            <div className='footer_row-content'>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</div>
        </div>

        <div className='footer_row'>
            <div className='footer_row_head'><h6>MENUS</h6></div>
            <div className='footer_row-content'>Home</div>
            <div className='footer_row-content'>Services</div>
            <div className='footer_row-content'>Products</div>
            <div className='footer_row-content'>Career</div>
        </div>

        <div className='footer_row'>
            <div className='footer_row_head'><h6>LEARN MORE</h6></div>
            <div className='footer_row-content'>About</div>
            <div className='footer_row-content'>Contact Us</div>
        </div>

        <div className='footer_row'>
            <div className='footer_row_head'><h6>ADDRESS</h6></div>
            <div className='footer_row-content'>Novel Tech Park,1st Floor,<br/>
                Hosur Rd, Kudlu gate,<br/>
                Bengaluru, Karnataka 560068<br/>
                Phone: 0804-717-8999<br/>
                Email: hi@rubixe.com</div>
            <div>SOCIAL MEDIA</div>
        </div>
        </div>
        
        <div className='footer_bottom'>
            <div className='footer_bottom-row'>© Copyright 2017 - 2022 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. |  All  Rights Reserved</div>
        </div>
    </div>
  )
}

export default Footer