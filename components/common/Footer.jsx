const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full border-t">
            <div className="w-5/6 my-4 lg:grid grid-cols-2">
                <div className="text-center lg:text-left">Copyright © 2021 10 Bed ICU - All Rights Reserved.</div>
                <div className="flex justify-center space-x-2 pt-2 lg:justify-start lg:pt-0">
                    <div>facebook</div>
                    <div>twitter</div>
                    <div>youtube</div>
                </div>
            </div>

            <div className="my-2 mb-6">
                <ul className="flex justify-center space-x-2">
                    <li><a href="https://10bedicu.org/">Home</a></li>
                    <li><a href="https://10bedicu.org/tech-platform">Tech Platform</a></li>
                    <li><a href="https://10bedicu.org/media">Media</a></li>
                    <li><a href="https://10bedicu.org/donate-now">Donate Now</a></li>
                    <li><a href="https://10bedicu.org/deployment">Deployment</a></li>
                    <li><a href="https://10bedicu.org/our-team">Our Team</a></li>    
                </ul>
            </div>
        </footer>
    );
}

export default Footer;