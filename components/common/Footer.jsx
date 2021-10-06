const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
            <div className="w-5/6 my-2 lg:grid grid-cols-2">
                <div className="text-center lg:text-left">Copyright © 2021 10 Bed ICU - All Rights Reserved.</div>
                <div className="text-center flex space-x-2 lg:text-left">
                    <div>facebook</div>
                    <div>twitter</div>
                    <div>youtube</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;