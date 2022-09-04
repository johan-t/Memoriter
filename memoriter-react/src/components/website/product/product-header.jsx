import memoriterLogo from '../../../images/memoriter-logo.svg';
import languageIcon from '../../../images/icons/language-icon.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductHeader = ({ currentPage }) => {

    const [onHover, setOnHover] = useState('brightness(1)'); //variable for the hover effect for the register button
    const [onHoverAlt, setOnHoverAlt] = useState('brightness(1)'); //hover effect for alternative mobile register button

    const [mobileSidebar, setMobileSidebar] = useState('-280px'); //variable if the mobile nav sidebar is open or not
    function toggleMobileSidebar() { //function for opening and closing the mobile nav sidebar
        if (mobileSidebar === '-280px') { //if else condition is for opening and closing correctly
            setMobileSidebar('0');
        } else {
            setMobileSidebar('-280px');
        }
    };

    const [scrollProgress, setScrollProgress] = useState(0); //value for the scroll progress
    const onScroll = () => { //getting the scroll data
        const scroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (scroll / height) * 100;

        setScrollProgress(scrolled);
    };

    useEffect(() => { //the useEffect is important for getting the value if it is scrolling
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className='product-header'>

            {/*If you click the logo, you will be redirected to the product page.*/}
            <Link to='/product'><img className='product-header-logo' src={memoriterLogo} alt='memoriter-logo'/></Link>

            {/*button for expanding side bar for small screens*/}
            <button className='product-header-mobile-sidebar-button' onClick={toggleMobileSidebar}>
                <div className='product-header-mobile-sidebar-icon'>|||</div>
            </button>

            {/*quicklinks (navigation bar)*/}
            <nav className='product-header-quicklink-box' style={{right: mobileSidebar}}> {/*expandable mobile nav sidebar, displays when button is clicked (changes className)*/}
                <Link className='product-header-quicklink' to='/product'>
                    {currentPage === 'product' ? <span className='product-header-text-gradient'>Product</span> : <span>Product</span>}
                </Link>
                <Link className='product-header-quicklink' to='/about'>
                    {currentPage === 'about' ? <span className='product-header-text-gradient'>About</span> : <span>About</span>}
                </Link>
                <Link className='product-header-quicklink' to='/blog'>
                    {currentPage === 'blog' ? <span className='product-header-text-gradient'>Blog</span> : <span>Blog</span>}
                </Link>
                <Link className='product-header-quicklink' to='/download'>
                    {currentPage === 'download' ? <span className='product-header-text-gradient'>Download</span> : <span>Download</span>}
                </Link>
                <Link className='product-header-quicklink' to='/donate'>
                    {currentPage === 'donate' ? <span className='product-header-text-gradient'>Donate</span> : <span>Donate</span>}
                </Link>
                {/*the if else conditions changes the color of the links depending on the current open page*/}

                {/*light and dark mode button*/}
                <button className='product-header-visual-mode-button'>
                    <div className='product-header-visual-mode-icon'/>
                </button>

                {/*change language button*/}
                <button className='product-header-language-button'>
                    <img src={languageIcon} alt='language-icon' className='product-header-language-icon'/>
                </button>
            
                {/*sign in and register buttons*/}
                <Link className='product-header-sign-in' to='/signin'>
                    <span className='product-header-text-gradient'>Sign in</span>
                </Link>
                <Link className='product-header-register' to='/register'
                    onMouseEnter={() => setOnHover('brightness(0.75)')} onMouseLeave={() => setOnHover('brightness(1)')}>
                    {/*the onMouseEnter and -Leave is for the fade effect on hover which was not possible in css*/}
                    <div className='product-header-register-background' style={{filter: onHover}}/>
                    <span className='product-header-register-text'>Register</span>
                </Link>
                
                <div className='product-header-quicklink-box-space'/> {/*space at the end for scrolling at the nav sidebar*/}
            </nav>

            {/*alternative sign in and register button for mobile nav sidebar, staying at the default position*/}
            <Link className='product-header-sign-in-alt' to='/login'>
                <span className='product-header-text-gradient'>Sign in</span>
            </Link>
            <Link className='product-header-register-alt' to='/register'
                onMouseEnter={() => setOnHoverAlt('brightness(0.75)')} onMouseLeave={() => setOnHoverAlt('brightness(1)')}>
                <div className='product-header-register-background' style={{filter: onHoverAlt}}/>
                <span className='product-header-register-text'>Register</span>
            </Link>

            {/*scroll indicator*/}
            <div className='product-header-scroll-indicator' style={{width: `${scrollProgress}%`}}/>
            {/*the width is calculated by the scrollProgress variable and defines the width of the bar*/}

        </header>
    );
};

export default ProductHeader;