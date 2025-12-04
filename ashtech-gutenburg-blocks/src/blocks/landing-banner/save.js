import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, scrollText } = attributes;

    return (
        <section className="landing-banner">
            <div className="landing-banner__overlay"></div>
            <div className="landing-banner__content">
                <RichText.Content
                    tagName="h1"
                    className="landing-banner__title"
                    value={title}
                />
                <RichText.Content
                    tagName="p"
                    className="landing-banner__scroll"
                    value={scrollText}
                />
            </div>

            <svg id="banner-svg-animation" className="landing-banner__svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1920 800">
                <defs>
                    <style>{`
                        .st0, .st1, .st2 { fill: none; }
                        .st1 { stroke-linejoin: round; }
                        .st1, .st2 { stroke: #fff; stroke-linecap: round; }
                        .st2 { stroke-miterlimit: 10; }
                        .st3 { clip-path: url(#clippath); }
                    `}</style>
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

            <svg id="banner-svg-animation-mobile" className="landing-banner__svg mobile-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 414 665">
                <defs>
                    <style>{`
                        .st0, .st1, .st2 { fill: none; }
                        .st1 { stroke-linejoin: round; }
                        .st1, .st2 { stroke: #fff; stroke-linecap: round; }
                        .st2 { stroke-miterlimit: 10; }
                        .st3 { clip-path: url(#clippath-mobile); }
                    `}</style>
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
                        <path className="st2" d="M-71.66,664.39V157.27s0-20.69,22.27-19.02l60.56,1.33s6.84.42,11.93,5.09"/>
                        <path className="st1" d="M-82.42,664.39v-326.68c0-1.59.42-5.01,5.84-5.01h64.48s3.5-.25,4.92,2.09l4.59,6.84"/>
                        <path className="st2" d="M-82.42,421.73c0-1.59.42-5.01,5.84-5.01h64.48s2.92-.25,5.09,2.01l4.09,4.17"/>
                        <path className="st2" d="M7.11,162.6s3.34-.33,5.84,2.34,9.59,10.52,9.59,10.52"/>
                        <path className="st2" d="M194.19,661.88V165.44s1.67-19.27-22.27-20.35l-57.98-2.42c-2.42-.17-6.59.5-9.09,3.17"/>
                        <path className="st2" d="M185.85,661.88v-273.56c0-1.59-.42-5.01-5.84-5.01h-60.31s-5.01-.25-7.18.75"/>
                        <path className="st2" d="M185.85,472.27c0-1.59-.42-5.01-5.84-5.01h-66.98"/>
                        <path className="st2" d="M216.21,661.88V166.02s-.5-20.35,22.44-21.02l56.56-2.59s7.76,0,11.27,3.42"/>
                        <path className="st1" d="M225.38,661.88v-273.56c0-1.59.42-5.01,5.84-5.01h64.48s1.92,0,2.5.83"/>
                        <path className="st2" d="M225.38,472.27c0-1.59.42-5.01,5.84-5.01h64.48s1.17,0,2.5.33"/>
                        <path className="st2" d="M516.93,661.72V154.09s-.83-17.02,22.27-19.35c23.11-2.34,78.89-7.68,78.89-7.68,0,0,5.01-.5,9.09,1.76"/>
                        <path className="st2" d="M507.17,661.72v-356.56c0-1.59.42-5.01,5.84-5.01h81.14s3.25,0,5.42,1"/>
                        <path className="st2" d="M507.17,388.59c0-1.59.42-5.01,5.84-5.01h81.14s3.25,0,5.42,1"/>
                        <path className="st2" d="M482.34,661.72V157.68s0-20.69-22.27-19.02l-68.98,1.92s-6.84.42-11.93,5.09"/>
                        <path className="st1" d="M472.25,661.72v-323.18c0-1.59-.42-5.01-5.84-5.01h-73.64s-3.5-.25-4.92,2.09l-4.59,6.84"/>
                        <path className="st2" d="M472.25,422.14c0-1.59-.42-5.01-5.84-5.01h-73.64s-2.92-.25-5.09,2.01l-4.09,4.17"/>
                        <path className="st2" d="M394.28,170.02s-13.68-1.17-19.27,4.42c-5.59,5.59-7.68,8.51-7.68,8.51"/>
                        <line className="st2" x1="505.33" y1="661.72" x2="552.76" y2="661.72"/>
                        <line className="st2" x1="180.93" y1="661.72" x2="246.14" y2="661.72"/>
                        <line className="st2" x1="-88.01" y1="664.91" x2="-21.23" y2="664.91"/>
                    </g>
                </g>
            </svg>
        </section>
    );
}
