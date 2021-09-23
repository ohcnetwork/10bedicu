const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
            <a
                className="flex items-center justify-center"
                href="http://coronasafe.network/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>Powered by</span>
                <img
                    src="/logo-csn.png"
                    alt="Coronasafe Network"
                    className="h-8 ml-2"
                />
            </a>
        </footer>
    );
}

export default Footer;