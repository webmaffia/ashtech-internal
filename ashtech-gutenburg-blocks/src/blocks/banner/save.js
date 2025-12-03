import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    return (
        <section className="landing-banner">
            <div className="landing-banner__overlay"></div>
            <div className="landing-banner__content">
                <RichText.Content
                    tagName="h1"
                    className="landing-banner__title"
                    value={attributes.title}
                />
                <RichText.Content
                    tagName="p"
                    className="landing-banner__scroll"
                    value={attributes.scrollText}
                />
            </div>

            {/* Desktop SVG */}
            <svg id="banner-svg-animation" className="landing-banner__svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1920 800">
                <defs>
                    <style>
                        {`.st0, .st1, .st2 {
                            fill: none;
                        }
                        .st1 {
                            stroke-linejoin: round;
                        }
                        .st1, .st2 {
                            stroke: #fff;
                            stroke-linecap: round;
                        }
                        .st2 {
                            stroke-miterlimit: 10;
                        }
                        .st3 {
                            clip-path: url(#clippath);
                        }`}
                    </style>
                    
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    
                    <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="2" result="blur1"/>
                        <feGaussianBlur stdDeviation="6" result="blur2"/>
                        <feGaussianBlur stdDeviation="12" result="blur3"/>
                        <feMerge>
                            <feMergeNode in="blur3"/>
                            <feMergeNode in="blur2"/>
                            <feMergeNode in="blur1"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    
                    <clipPath id="clippath">
                        <rect className="st0" width="1920" height="800"/>
                    </clipPath>
                </defs>
                <g className="st3">
                    <g>
                        <path className="st2" d="M600.57,797.54V184.23s1-21.66-26.78-24.47c-27.78-2.81-71.91-8.22-71.91-8.22,0,0-6.02-.6-10.93,2.11"/>
                        <path className="st2" d="M587.53,797.54v-432.87c0-1.91-.5-6.02-7.02-6.02h-72.51s-3.91,0-6.52,1.2"/>
                        <path className="st2" d="M587.53,466.06c0-1.91-.5-6.02-7.02-6.02h-72.51s-3.91,0-6.52,1.2"/>
                        <path className="st2" d="M622.04,797.54V188.44s0-24.87,26.78-22.87l72.81,1.6s8.22.5,14.34,6.12"/>
                        <path className="st1" d="M635.07,797.54v-392.76c0-1.91.5-6.02,7.02-6.02h77.53s4.21-.3,5.92,2.51l5.52,8.22"/>
                        <path className="st2" d="M635.07,506.18c0-1.91.5-6.02,7.02-6.02h77.53s3.51-.3,6.12,2.41l4.91,5.01"/>
                        <path className="st2" d="M731.06,194.76s4.01-.4,7.02,2.81,11.53,12.64,11.53,12.64"/>
                        <path className="st2" d="M944.12,794.68V198.87s2.01-23.17-26.78-24.47l-69.71-2.91c-2.91-.2-7.92.6-10.93,3.81"/>
                        <path className="st2" d="M934.09,794.68v-328.72c0-1.91-.5-6.02-7.02-6.02h-72.51s-6.02-.3-8.63.9"/>
                        <path className="st2" d="M934.09,567.36c0-1.91-.5-6.02-7.02-6.02h-80.54"/>
                        <path className="st2" d="M970.59,794.68V199.48s-.6-24.47,26.98-25.27l68-3.11s9.33,0,13.54,4.11"/>
                        <path className="st1" d="M981.63,794.68v-328.72c0-1.91.5-6.02,7.02-6.02h77.53s2.31,0,3.01,1"/>
                        <path className="st2" d="M981.63,567.36c0-1.91.5-6.02,7.02-6.02h77.53s1.4,0,3.01.4"/>
                        <path className="st2" d="M1312.43,794.48V185.22s-1-20.46,26.78-23.27c27.78-2.81,94.88-9.23,94.88-9.23,0,0,6.02-.6,10.93,2.11"/>
                        <path className="st2" d="M1323.57,794.48v-428.73c0-1.91.5-6.02,7.02-6.02h97.59s3.91,0,6.52,1.2"/>
                        <path className="st2" d="M1323.57,467.15c0-1.91.5-6.02,7.02-6.02h97.59s3.91,0,6.52,1.2"/>
                        <path className="st2" d="M1296.08,794.48V189.53s0-24.87-26.78-22.87l-82.94,2.31s-8.22.5-14.34,6.12"/>
                        <path className="st1" d="M1284.05,794.48v-388.61c0-1.91-.5-6.02-7.02-6.02h-88.56s-4.21-.3-5.92,2.51l-5.52,8.22"/>
                        <path className="st2" d="M1284.05,507.27c0-1.91-.5-6.02-7.02-6.02h-88.56s-3.51-.3-6.12,2.41l-4.91,5.01"/>
                        <path className="st2" d="M1188.37,204.28s-16.45-1.4-23.17,5.32c-6.72,6.72-9.23,10.23-9.23,10.23"/>
                        <line className="st2" x1="1269" y1="794.48" x2="1350.75" y2="794.48"/>
                        <line className="st2" x1="920.55" y1="794.48" x2="1009.31" y2="794.48"/>
                        <line className="st2" x1="574.3" y1="798.34" x2="663.06" y2="798.34"/>
                    </g>
                </g>
            </svg>

            {/* Mobile SVG */}
            <svg id="banner-svg-animation-mobile" className="landing-banner__svg mobile-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 414 665">
                <defs>
                    <style>
                        {`.st0, .st1, .st2 {
                            fill: none;
                        }
                        .st1 {
                            stroke-linejoin: round;
                        }
                        .st1, .st2 {
                            stroke: #fff;
                            stroke-linecap: round;
                        }
                        .st2 {
                            stroke-miterlimit: 10;
                        }
                        .st3 {
                            clip-path: url(#clippath-mobile);
                        }`}
                    </style>
                    
                    <filter id="glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    
                    <filter id="strongGlow-mobile" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="2" result="blur1"/>
                        <feGaussianBlur stdDeviation="6" result="blur2"/>
                        <feGaussianBlur stdDeviation="12" result="blur3"/>
                        <feMerge>
                            <feMergeNode in="blur3"/>
                            <feMergeNode in="blur2"/>
                            <feMergeNode in="blur1"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    
                    <clipPath id="clippath-mobile">
                        <rect className="st0" width="414" height="665"/>
                    </clipPath>
                </defs>
                <g className="st3">
                    <g>
                        <path className="st2" d="M-91.6,664.39V154.26s.83-18.02-22.27-20.35c-23.11-2.34-59.81-6.84-59.81-6.84,0,0-5.01-.5-9.09,1.76"/>
                        <path className="st2" d="M-102.45,664.39v-360.05c0-1.59-.42-5.01-5.84-5.01h-60.31s-3.25,0-5.42,1"/>
                        <path className="st2" d="M-102.45,388.68c0-1.59-.42-5.01-5.84-5.01h-60.31s-3.25,0-5.42,1"/>
                        <path className="st2" d="M-73.75,664.39V157.76s0-20.69,22.27-19.02l60.56,1.33s6.84.42,11.93,5.09"/>
                        <path className="st1" d="M-62.91,664.39v-326.68c0-1.59.42-5.01,5.84-5.01H7.42s3.5-.25,4.92,2.09l4.59,6.84"/>
                        <path className="st2" d="M-62.91,422.05c0-1.59.42-5.01,5.84-5.01H7.42s2.92-.25,5.09,2l4.08,4.17"/>
                        <path className="st2" d="M16.93,163.02s3.34-.33,5.84,2.34,9.59,10.51,9.59,10.51"/>
                        <path className="st2" d="M194.15,662.01V166.44s1.67-19.27-22.27-20.35l-57.98-2.42c-2.42-.17-6.59.5-9.09,3.17"/>
                        <path className="st2" d="M185.81,662.01v-273.42c0-1.59-.42-7.01-5.84-7.01h-60.31s-5.01-.25-7.18.75"/>
                        <path className="st2" d="M185.81,472.93c0-1.59-.42-7.01-5.84-7.01h-66.99"/>
                        <path className="st2" d="M216.16,662.01V166.94s-.5-20.35,22.44-21.02l56.56-2.59s7.76,0,11.26,3.42"/>
                        <path className="st1" d="M225.35,662.01v-274.42c0-1.59.42-5.01,5.84-5.01h64.49s1.92,0,2.5.83"/>
                        <path className="st2" d="M225.35,472.93c0-1.59.42-7.01,5.84-7.01h64.49s1.16,0,2.5.33"/>
                        <path className="st2" d="M500.49,661.84V155.08s-.83-17.02,22.27-19.36c23.11-2.34,78.92-7.68,78.92-7.68,0,0,5.01-.5,9.09,1.76"/>
                        <path className="st2" d="M509.76,661.84v-356.6c0-1.59.42-5.01,5.84-5.01h81.17s3.25,0,5.42,1"/>
                        <path className="st2" d="M509.76,389.58c0-1.59.42-5.01,5.84-5.01h81.17s3.25,0,5.42,1"/>
                        <path className="st2" d="M486.9,661.84V158.67s0-20.69-22.27-19.02l-68.99,1.92s-6.84.42-11.93,5.09"/>
                        <path className="st1" d="M476.89,661.84v-323.23c0-1.59-.42-5.01-5.84-5.01h-73.66s-3.5-.25-4.92,2.09l-4.59,6.84"/>
                        <path className="st2" d="M476.89,422.95c0-1.59-.42-5.01-5.84-5.01h-73.66s-2.92-.25-5.09,2l-4.08,4.17"/>
                        <path className="st2" d="M397.31,170.94s-13.68-1.16-19.27,4.42c-5.59,5.59-7.68,8.51-7.68,8.51"/>
                        <line className="st2" x1="464.37" y1="661.84" x2="532.37" y2="661.84"/>
                        <line className="st2" x1="174.54" y1="661.84" x2="248.37" y2="661.84"/>
                        <line className="st2" x1="-113.45" y1="665.05" x2="-39.63" y2="665.05"/>
                    </g>
                </g>
            </svg>
        </section>
    );
}

