import React from 'react';
import './header.styles.scss';


const Header = () => {
    return (
        <div className='header'>
            <nav>
                <button><svg className='hamburger' width='29' height='18' viewBox='0 0 29 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g filter='url(#filter0_d)'>
                        <rect x='2' y='2' width='25' height='3' fill='black' />
                    </g>
                    <g filter='url(#filter1_d)'>
                        <rect x='14' y='12' width='13' height='3' fill='black' />
                    </g>
                    <g filter='url(#filter2_d)'>
                        <rect x='9' y='7' width='18' height='3' fill='black' />
                    </g>
                    <defs>
                        <filter id='filter0_d' x='0' y='0.3' width='29' height='7' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                            <feFlood flood-opacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
                            <feOffset dy='0.3' />
                            <feGaussianBlur stdDeviation='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0.822917 0 0 0 0 0.839375 0 0 0 0 0.9875 0 0 0 1 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
                        </filter>
                        <filter id='filter1_d' x='12' y='10.3' width='17' height='7' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                            <feFlood flood-opacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
                            <feOffset dy='0.3' />
                            <feGaussianBlur stdDeviation='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0.822917 0 0 0 0 0.839375 0 0 0 0 0.9875 0 0 0 1 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
                        </filter>
                        <filter id='filter2_d' x='7' y='5.3' width='22' height='7' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                            <feFlood flood-opacity='0' result='BackgroundImageFix' />
                            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
                            <feOffset dy='0.3' />
                            <feGaussianBlur stdDeviation='1' />
                            <feColorMatrix type='matrix' values='0 0 0 0 0.822917 0 0 0 0 0.839375 0 0 0 0 0.9875 0 0 0 1 0' />
                            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
                        </filter>
                    </defs>
                </svg>

</button>
            </nav>
        </div>
    )
};


export default Header;