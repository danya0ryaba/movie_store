import React from 'react'
import style from './selectcustom.module.scss'
import { Option } from './Option'
import { ReactComponent as ArrowDown } from '../../assets/img/arrow_up.svg';

type SelectCustomType = {
    option: string[],
    title: string
}

export const SelectCustom: React.FC<SelectCustomType> = ({ option, title }) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [isName, setIsName] = React.useState(title)
    const arrayFiltered = option.filter(l => l !== isName)
    const onClickOption = (name: string) => {
        setIsName(name)
        setIsOpen(false)
    }
    let styleArrow = isOpen ? '0deg' : '180deg'


    return <div className={style.select}>

        <svg className={style.world} width="21" height="21" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7_17)">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0509 2.61665C14.6767 2.61665 18.4264 6.36639 18.4264 10.9922C18.4264 14.5937 16.1533 17.6642 12.9639 18.8468C12.9099 18.8764 12.8529 18.9 12.7938 18.9172L12.7143 18.9356C11.8557 19.2228 10.9562 19.3688 10.0509 19.3678C5.42503 19.3678 1.67529 15.618 1.67529 10.9922C1.67529 6.36639 5.42503 2.61665 10.0509 2.61665ZM12.4881 4.74907L12.3407 5.48696C12.2457 5.96187 12.0155 6.3992 11.6777 6.74631C11.34 7.09343 10.9091 7.33553 10.437 7.44349L10.1011 7.52054C9.89278 7.56804 9.71048 7.69336 9.59153 7.87086C9.47257 8.04836 9.42595 8.26461 9.46121 8.47536L9.60778 9.35312C9.65448 9.63447 9.62857 9.92309 9.5325 10.1916C9.43644 10.4602 9.2734 10.6997 9.05884 10.8876C8.84427 11.0755 8.58529 11.2055 8.30642 11.2653C8.02756 11.3251 7.73805 11.3127 7.46532 11.2292L6.38487 10.8992C5.87023 10.7419 5.4197 10.4235 5.0996 9.99095C4.77949 9.55837 4.60673 9.03444 4.60674 8.4963V7.08501C3.81381 8.18906 3.37543 9.50817 3.34978 10.8672C3.32413 12.2263 3.71243 13.561 4.46313 14.6941C5.21383 15.8273 6.29142 16.7054 7.55286 17.2118C8.8143 17.7182 10.1999 17.8289 11.5258 17.5293L11.04 15.8274C11.0007 15.6906 10.9272 15.5661 10.8264 15.4656L9.78953 14.4279C9.66456 14.303 9.56734 14.1531 9.50422 13.9881C9.4411 13.823 9.4135 13.6466 9.42322 13.4701C9.43294 13.2937 9.47977 13.1213 9.56064 12.9642C9.64151 12.8071 9.75461 12.6689 9.89255 12.5584L11.2033 11.5107C11.4532 11.3108 11.7551 11.1866 12.0734 11.1529C12.3916 11.1192 12.7128 11.1774 12.999 11.3205L14.2303 11.9361C14.6002 12.1211 14.9187 12.3946 15.1576 12.7323C15.3965 13.0699 15.5483 13.4613 15.5997 13.8717L15.6918 14.6096C16.227 13.7746 16.5703 12.8313 16.6968 11.8476C16.8234 10.8639 16.73 9.86442 16.4236 8.92116C16.1171 7.9779 15.6052 7.11441 14.9246 6.39294C14.2441 5.67148 13.4119 5.11003 12.4881 4.74907ZM12.2494 12.8189L11.3047 13.5744L12.0116 14.2805C12.2696 14.5389 12.4683 14.8504 12.5937 15.1934L12.6506 15.3676L13.1054 16.9573C13.3986 16.8065 13.68 16.6348 13.9463 16.4447L14.2085 16.247L13.9379 14.0794C13.923 13.9601 13.8825 13.8453 13.8192 13.743C13.7559 13.6406 13.6713 13.5531 13.5711 13.4865L13.4806 13.4345L12.2494 12.8189ZM10.0509 4.29177C8.70424 4.28966 7.38854 4.69523 6.27682 5.45513C6.28018 5.48528 6.28185 5.51627 6.28185 5.5481V8.4963C6.28169 8.6757 6.33914 8.85042 6.44575 8.99472C6.55235 9.13902 6.70247 9.24527 6.874 9.29784L7.95529 9.62783L7.80871 8.75008C7.70337 8.11822 7.84333 7.46998 8.19999 6.93788C8.55665 6.40577 9.10307 6.02998 9.72756 5.88731L10.0634 5.81109C10.221 5.77507 10.3648 5.69423 10.4774 5.5783C10.5901 5.46238 10.6668 5.31634 10.6983 5.1578L10.8624 4.34034C10.5931 4.3079 10.3221 4.29168 10.0509 4.29177Z" fill="#CCFF00" />
            </g>
            <defs>
                <clipPath id="clip0_7_17">
                    <rect width="20.1013" height="20.1013" fill="white" transform="translate(0 0.941528)" />
                </clipPath>
            </defs>
        </svg>

        <span className={style.language} onClick={() => setIsOpen(!isOpen)}>
            {isName}
            <span className={style.arrow}>
                <ArrowDown className={style.arrow__item} style={{ transform: `rotate(${styleArrow})`, margin: '0 3px', transition: ' 0.3s all' }} />
            </span>
        </span>

        <div className={style.forOptionPosition}>

            {isOpen && arrayFiltered.map(lang => (<Option onClickOption={onClickOption}
                key={lang}>
                {lang}
            </Option>)
            )}

        </div>

    </div>
}






