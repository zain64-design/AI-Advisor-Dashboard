import React from 'react'
import { Link } from 'react-router';
import '../../assets/scss/component/setting/settingsLinks.scss'

const SettingsLinks = () => {

    const settingLinks = [
        {
            title: 'Edit Profile',
            path: '/settings/edit-profile',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.3528 2.97099C9.91538 2.96531 8.54046 3.53772 7.5249 4.55754C6.50934 5.57879 5.93835 6.96649 5.93835 8.40816C5.93267 10.6111 7.24793 12.6025 9.27195 13.4519C11.2917 14.2956 13.6225 13.8354 15.175 12.2758C16.7232 10.7219 17.1891 8.37549 16.3525 6.33868C15.5145 4.3033 13.5387 2.97099 11.3528 2.97099ZM8.47225 1.37304C11.2959 0.196973 14.5528 0.851762 16.7104 3.03203C18.875 5.20661 19.5184 8.48624 18.3424 11.327C17.172 14.1734 14.408 16.027 11.3513 16.0213C7.17971 16.0099 3.80066 12.6081 3.80066 8.40812L3.81202 8.08143C3.93417 5.13133 5.74798 2.51075 8.47225 1.37304ZM8.35638 18.9286C10.3974 18.7567 12.4513 18.7567 14.4924 18.9286C15.6074 19.0067 16.7167 19.1672 17.8047 19.4172C20.1625 19.8944 21.705 20.8319 22.3484 22.2068C22.864 23.3445 22.8484 24.6598 22.3101 25.7918C21.6553 27.1681 20.1128 28.1056 17.7152 28.5942C16.6343 28.8371 15.5292 28.9933 14.4142 29.0658C13.1885 29.2035 12.1459 29.2035 11.1744 29.2035H10.7923C10.2426 29.1425 9.82646 28.6766 9.82646 28.1226C9.82646 27.5673 10.2426 27.1014 10.7923 27.0403H11.6403C12.4896 27.0289 13.349 26.9906 14.204 26.9182C15.2139 26.8514 16.2181 26.7065 17.211 26.4906C18.9083 26.1185 19.9792 25.5802 20.313 24.8657C20.573 24.3217 20.573 23.6882 20.313 23.1457C19.9792 22.4184 18.9083 21.8574 17.2436 21.5193C16.2394 21.2921 15.2196 21.1415 14.1927 21.0805C12.2738 20.9029 10.3421 20.9029 8.42314 21.0805C7.40757 21.1472 6.39769 21.2864 5.40485 21.5023C3.70041 21.8801 2.6465 22.4184 2.30277 23.1286C2.17494 23.3999 2.11386 23.6939 2.11386 23.9936C2.11386 24.2933 2.17494 24.593 2.30277 24.8657C2.8908 25.681 3.7899 26.208 4.78273 26.3301L4.92761 26.3685C5.2543 26.4793 5.50996 26.7463 5.60939 27.09C5.72586 27.4721 5.61507 27.894 5.32673 28.178C5.0384 28.4607 4.61655 28.5544 4.23873 28.4266C2.63514 28.1667 1.23181 27.2065 0.399478 25.8032C-0.133159 24.6711 -0.133159 23.3502 0.399478 22.2182C1.05995 20.8035 2.59679 19.8944 4.97164 19.4058C6.08663 19.1615 7.21866 19.0067 8.35638 18.9286Z" fill="#020617" />
            </svg>
        },
        {
            title: 'Change Password',
            path: '/settings/change-password',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.1852 22.9795C21.998 22.9781 21.8176 22.9032 21.6845 22.7715L19.6509 20.7325C19.3945 20.4524 19.4041 20.0209 19.6718 19.7518C19.9395 19.4826 20.3724 19.473 20.6526 19.7283L22.1852 21.2652L25.3213 18.1233C25.4975 17.9291 25.7652 17.8488 26.0191 17.9138C26.273 17.9777 26.4697 18.1762 26.5336 18.4287C26.5975 18.6822 26.5169 18.9514 26.3227 19.1261L22.6873 22.7715C22.5541 22.9046 22.3737 22.9795 22.1852 22.9795ZM17.2804 23.0602C16.666 23.3556 16.0226 23.5843 15.3593 23.7423C15.2471 23.7703 15.1306 23.7703 15.0198 23.7423C10.8791 22.7342 8.27839 19.6019 7.05935 14.1686C6.97449 13.7872 7.21595 13.4087 7.59696 13.3253C7.97869 13.2408 8.35757 13.4822 8.44031 13.8639C9.99278 20.7812 13.7365 21.9601 15.1871 22.3219C15.741 22.1902 16.2776 22.0002 16.791 21.7534C16.9018 22.2069 17.0669 22.6454 17.2804 23.0602ZM27.04 15.284C26.0052 14.4272 24.7248 13.919 23.3836 13.8349C23.5974 12.8342 23.754 11.8222 23.8509 10.8027C23.8747 10.6081 23.8122 10.4139 23.6805 10.2701C23.5555 10.1199 23.3726 10.0297 23.1769 10.0212C20.1238 9.8937 17.4148 8.62175 15.742 6.52741C15.6035 6.36514 15.4022 6.2721 15.1888 6.2721C14.9764 6.2721 14.774 6.36514 14.6366 6.52741C12.9641 8.62175 10.2562 9.8937 7.20057 10.0212C6.80819 10.0364 6.50281 10.3667 6.5195 10.7594C6.53477 11.1518 6.86501 11.4568 7.25739 11.4415C10.4117 11.3141 13.2538 10.0851 15.1888 8.04757C17.1016 9.98531 19.648 11.1699 22.3613 11.3847C22.2587 12.2323 22.1131 13.0743 21.9231 13.9066C18.8519 14.4336 16.6077 17.0971 16.6063 20.2124C16.6063 20.7311 16.6674 21.2485 16.7909 21.7535C16.9031 22.2069 17.0668 22.6455 17.2803 23.0602C17.8921 24.2931 18.8867 25.2948 20.1157 25.9148C18.5969 26.8245 16.928 27.4545 15.1888 27.7762C6.43499 26.0575 2.13907 18.4369 2.43025 5.12124C2.43451 5.04739 2.48032 4.98205 2.54708 4.95293C2.61348 4.92239 2.69266 4.9334 2.74948 4.97921C3.91738 5.75651 5.29479 6.15847 6.69705 6.12935C9.34214 6.12935 11.5029 4.89327 12.212 2.98323C12.3494 2.5454 12.7457 2.23824 13.2052 2.21623H17.1819C17.6382 2.24108 18.0309 2.54682 18.1669 2.98323C18.5511 3.964 19.2723 4.77396 20.2016 5.27074C21.2669 5.85345 22.4667 6.14853 23.6805 6.12935C25.0841 6.15847 26.4615 5.75651 27.6294 4.97921C27.6628 4.95151 27.7058 4.93624 27.7502 4.93624C27.8556 4.9334 27.943 5.01543 27.9483 5.12124C28.0747 8.53298 27.7697 11.9479 27.04 15.284ZM23.4402 25.156C23.289 25.1755 23.1381 25.1851 22.9854 25.1837C22.4776 25.1866 21.9726 25.1074 21.4901 24.9494C20.1766 24.5374 19.096 23.5915 18.5133 22.343C18.2956 21.9062 18.1515 21.4357 18.0876 20.9517C18.0446 20.7078 18.0222 20.4606 18.0236 20.2124C18.0251 18.0417 19.433 16.1217 21.5025 15.4687H21.511C21.9865 15.3174 22.4847 15.2411 22.9839 15.2411H23.0493C24.4086 15.2592 25.6997 15.8377 26.6208 16.839C27.0508 17.2967 27.3853 17.8351 27.6058 18.4231C27.8317 18.993 27.9471 19.5992 27.9471 20.2124C27.9471 22.7772 25.9941 24.9202 23.4402 25.156ZM29.3666 5.08471C29.3485 4.20799 28.6273 3.5081 27.7491 3.51591C27.4121 3.51733 27.0819 3.62422 26.8074 3.82129C25.8778 4.42495 24.7891 4.73388 23.6822 4.70903C22.1301 4.70192 20.1022 4.12632 19.5003 2.4936C19.163 1.49543 18.2365 0.815784 17.1822 0.795898H13.2056C12.1502 0.815784 11.2206 1.49366 10.8808 2.4936C10.2775 4.12632 8.25094 4.70903 6.69883 4.70903C5.59201 4.73246 4.50293 4.42318 3.57366 3.82129C3.29917 3.62422 2.96893 3.51733 2.63195 3.51591C1.7538 3.5081 1.03261 4.20799 1.0145 5.08471C0.702372 19.2678 5.43115 27.3782 15.0645 29.1966C15.106 29.2019 15.149 29.2048 15.192 29.2034C15.2363 29.2048 15.2821 29.2019 15.3265 29.1966C17.6705 28.79 19.8955 27.8679 21.84 26.4972C22.2189 26.5693 22.6031 26.6041 22.9887 26.6041C26.5134 26.5959 29.3666 23.7371 29.368 20.2124C29.3705 18.8946 28.9614 17.6089 28.1987 16.534C29.0765 13.3087 29.4649 9.4932 29.3666 5.08471Z" fill="#020617" />
                <path d="M21.6845 22.7715L21.461 22.9944L21.4625 22.9959L21.6845 22.7715ZM19.6509 20.7325L19.4178 20.9458L19.4274 20.9554L19.6509 20.7325ZM20.6526 19.7283L20.8761 19.5054L20.8708 19.5001L20.8652 19.495L20.6526 19.7283ZM22.1852 21.2652L21.9617 21.488L22.185 21.7121L22.4086 21.4882L22.1852 21.2652ZM25.3213 18.1233L25.5447 18.3463L25.5501 18.3409L25.5552 18.3353L25.3213 18.1233ZM26.0191 17.9138L25.9408 18.2196L25.942 18.2199L26.0191 17.9138ZM26.5336 18.4287L26.8397 18.3515L26.8396 18.3512L26.5336 18.4287ZM26.3227 19.1261L26.1116 18.8914L26.1053 18.8971L26.0992 18.9032L26.3227 19.1261ZM22.6873 22.7715L22.9105 22.9947L22.9108 22.9944L22.6873 22.7715ZM15.3593 23.7423L15.2862 23.4352L15.2827 23.4361L15.3593 23.7423ZM15.0198 23.7423L15.0973 23.4363L15.0945 23.4356L15.0198 23.7423ZM7.05935 14.1686L6.75125 14.2372L6.75137 14.2377L7.05935 14.1686ZM7.59696 13.3253L7.66449 13.6336L7.66519 13.6334L7.59696 13.3253ZM8.44031 13.8639L8.13182 13.9308L8.13233 13.9331L8.44031 13.8639ZM15.1871 22.3219L15.1107 22.6282L15.1853 22.6468L15.2601 22.629L15.1871 22.3219ZM16.791 21.7534L17.0977 21.6785L17.0052 21.3002L16.6543 21.4689L16.791 21.7534ZM23.3836 13.8349L23.0749 13.7689L22.9984 14.127L23.3638 14.1499L23.3836 13.8349ZM23.8509 10.8027L23.5375 10.7644L23.5367 10.7729L23.8509 10.8027ZM23.6805 10.2701L23.4378 10.472L23.4426 10.4778L23.4477 10.4833L23.6805 10.2701ZM23.1769 10.0212L23.1907 9.70583L23.1901 9.70581L23.1769 10.0212ZM15.742 6.52741L15.9887 6.33032L15.9821 6.32252L15.742 6.52741ZM14.6366 6.52741L14.3956 6.32335L14.3899 6.33045L14.6366 6.52741ZM7.20057 10.0212L7.21285 10.3366L7.21373 10.3365L7.20057 10.0212ZM6.5195 10.7594L6.83491 10.7471L6.83486 10.746L6.5195 10.7594ZM7.25739 11.4415L7.26966 11.757L7.27013 11.7569L7.25739 11.4415ZM15.1888 8.04757L15.4134 7.82582L15.1844 7.59382L14.9599 7.83021L15.1888 8.04757ZM22.3613 11.3847L22.6746 11.4227L22.7142 11.096L22.3862 11.0701L22.3613 11.3847ZM21.9231 13.9066L21.9765 14.2177L22.184 14.1821L22.2308 13.9768L21.9231 13.9066ZM16.6063 20.2124L16.2906 20.2122V20.2124H16.6063ZM16.7909 21.7535L16.4843 21.8285L16.4845 21.8293L16.7909 21.7535ZM17.2803 23.0602L17.563 22.9199L17.5609 22.9158L17.2803 23.0602ZM20.1157 25.9148L20.2779 26.1856L20.7695 25.8911L20.2578 25.633L20.1157 25.9148ZM15.1888 27.7762L15.1279 28.0859L15.187 28.0975L15.2462 28.0866L15.1888 27.7762ZM2.43025 5.12124L2.11493 5.10305L2.11468 5.11434L2.43025 5.12124ZM2.54708 4.95293L2.67329 5.24231L2.67896 5.2397L2.54708 4.95293ZM2.74948 4.97921L2.55136 5.22493L2.56259 5.23398L2.5746 5.24197L2.74948 4.97921ZM6.69705 6.12935V5.81364L6.6905 5.81378L6.69705 6.12935ZM12.212 2.98323L12.5079 3.09309L12.5107 3.08549L12.5132 3.07775L12.212 2.98323ZM13.2052 2.21623V1.90058H13.1976L13.1901 1.90095L13.2052 2.21623ZM17.1819 2.21623L17.1991 1.90105L17.1905 1.90058H17.1819V2.21623ZM18.1669 2.98323L17.8656 3.07714L17.8689 3.08788L17.873 3.09836L18.1669 2.98323ZM20.2016 5.27074L20.3531 4.99381L20.3504 4.99238L20.2016 5.27074ZM23.6805 6.12935L23.687 5.81357L23.6755 5.81375L23.6805 6.12935ZM27.6294 4.97921L27.8043 5.24197L27.8182 5.23275L27.831 5.22211L27.6294 4.97921ZM27.7502 4.93624V5.252L27.7587 5.25177L27.7502 4.93624ZM27.9483 5.12124L28.2638 5.10956L28.2636 5.10538L27.9483 5.12124ZM22.9854 25.1837L22.9883 24.868L22.9836 24.8681L22.9854 25.1837ZM21.4901 24.9494L21.5883 24.6494L21.5845 24.6482L21.4901 24.9494ZM18.5133 22.343L18.7994 22.2094L18.7958 22.2022L18.5133 22.343ZM18.0876 20.9517L18.4008 20.9103L18.3984 20.897L18.0876 20.9517ZM18.0236 20.2124L18.3393 20.2142L18.3393 20.2126L18.0236 20.2124ZM21.5025 15.4687V15.1531H21.4539L21.4075 15.1677L21.5025 15.4687ZM21.511 15.4687V15.7844H21.56L21.6067 15.7695L21.511 15.4687ZM23.0493 15.2411L23.0535 14.9255H23.0493V15.2411ZM26.6208 16.839L26.3885 17.0527L26.3908 17.0551L26.6208 16.839ZM27.6058 18.4231L27.3102 18.5339L27.3124 18.5394L27.6058 18.4231ZM27.7491 3.51591L27.7504 3.83156L27.7519 3.83154L27.7491 3.51591ZM26.8074 3.82129L26.9793 4.08602L26.9855 4.082L26.9915 4.07769L26.8074 3.82129ZM23.6822 4.70903L23.6893 4.39341L23.6837 4.39339L23.6822 4.70903ZM19.5003 2.4936L19.2012 2.5947L19.2041 2.60278L19.5003 2.4936ZM17.1822 0.795898L17.1882 0.480256H17.1822V0.795898ZM13.2056 0.795898V0.4802L13.1996 0.480312L13.2056 0.795898ZM10.8808 2.4936L11.1769 2.60304L11.1796 2.59516L10.8808 2.4936ZM6.69883 4.70903V4.39331L6.69215 4.39345L6.69883 4.70903ZM3.57366 3.82129L3.38957 4.07769L3.39571 4.08211L3.40207 4.08622L3.57366 3.82129ZM2.63195 3.51591L2.62914 3.83155L2.63062 3.83155L2.63195 3.51591ZM1.0145 5.08471L1.33007 5.09166L1.33007 5.09123L1.0145 5.08471ZM15.0645 29.1966L15.0059 29.5068L15.0151 29.5085L15.0243 29.5097L15.0645 29.1966ZM15.192 29.2034L15.202 28.8879L15.1918 28.8875L15.1815 28.8879L15.192 29.2034ZM15.3265 29.1966L15.3641 29.51L15.3723 29.509L15.3805 29.5076L15.3265 29.1966ZM21.84 26.4972L21.899 26.1871L21.7675 26.1621L21.6582 26.2392L21.84 26.4972ZM22.9887 26.6041V26.9197H22.9895L22.9887 26.6041ZM29.368 20.2124L29.0523 20.2118V20.2123L29.368 20.2124ZM28.1987 16.534L27.8941 16.4511L27.8549 16.595L27.9412 16.7167L28.1987 16.534ZM22.1876 22.6639C22.0827 22.6631 21.9811 22.6209 21.9065 22.5471L21.4625 22.9959C21.6541 23.1855 21.9133 23.2931 22.1828 23.2952L22.1876 22.6639ZM21.908 22.5486L19.8743 20.5096L19.4274 20.9554L21.461 22.9944L21.908 22.5486ZM19.8837 20.5194C19.7414 20.364 19.7464 20.1243 19.8956 19.9744L19.448 19.5292C19.0617 19.9175 19.0475 20.5407 19.418 20.9456L19.8837 20.5194ZM19.8956 19.9744C20.0437 19.8255 20.2842 19.8197 20.44 19.9616L20.8652 19.495C20.4606 19.1264 19.8354 19.1397 19.448 19.5292L19.8956 19.9744ZM20.4291 19.9512L21.9617 21.488L22.4087 21.0423L20.8761 19.5054L20.4291 19.9512ZM22.4086 21.4882L25.5447 18.3463L25.0979 17.9003L21.9618 21.0422L22.4086 21.4882ZM25.5552 18.3353C25.6526 18.2279 25.8002 18.1836 25.9408 18.2196L26.0974 17.608C25.7302 17.514 25.3423 17.6302 25.0875 17.9113L25.5552 18.3353ZM25.942 18.2199C26.0824 18.2552 26.1919 18.3651 26.2276 18.5061L26.8396 18.3512C26.7475 17.9873 26.4636 17.7002 26.0962 17.6077L25.942 18.2199ZM26.2276 18.5058C26.2632 18.6472 26.2178 18.7959 26.1116 18.8914L26.5338 19.3608C26.8161 19.1069 26.9319 18.7173 26.8397 18.3515L26.2276 18.5058ZM26.0992 18.9032L22.4638 22.5486L22.9108 22.9944L26.5462 19.349L26.0992 18.9032ZM22.4641 22.5483C22.39 22.6224 22.2898 22.6639 22.1852 22.6639V23.2952C22.4576 23.2952 22.7182 23.1869 22.9105 22.9947L22.4641 22.5483ZM17.1436 22.7757C16.5495 23.0614 15.9274 23.2825 15.2862 23.4352L15.4324 24.0493C16.1178 23.8861 16.7826 23.6498 17.4172 23.3446L17.1436 22.7757ZM15.2827 23.4361C15.2205 23.4516 15.1569 23.4514 15.0973 23.4363L14.9424 24.0483C15.1043 24.0893 15.2737 24.089 15.4359 24.0485L15.2827 23.4361ZM15.0945 23.4356C13.0873 22.9469 11.4618 21.9472 10.1867 20.4131C8.90786 18.8746 7.96965 16.784 7.36734 14.0995L6.75137 14.2377C7.36809 16.9865 8.33975 19.1787 9.70122 20.8167C11.0664 22.4591 12.8117 23.5295 14.9452 24.049L15.0945 23.4356ZM7.36746 14.1001C7.32048 13.889 7.45446 13.6796 7.66449 13.6336L7.52944 13.0169C6.97744 13.1378 6.62849 13.6855 6.75125 14.2372L7.36746 14.1001ZM7.66519 13.6334C7.87714 13.5865 8.08634 13.7209 8.13183 13.9308L8.74879 13.7971C8.6288 13.2435 8.08024 12.895 7.52873 13.0171L7.66519 13.6334ZM8.13233 13.9331C8.92001 17.4427 10.2715 19.528 11.6384 20.7836C13.005 22.0391 14.3616 22.4413 15.1107 22.6282L15.2635 22.0157C14.562 21.8407 13.3214 21.4725 12.0654 20.3187C10.8097 19.1652 9.51308 17.2024 8.74829 13.7948L8.13233 13.9331ZM15.2601 22.629C15.8359 22.492 16.3939 22.2945 16.9278 22.0379L16.6543 21.4689C16.1613 21.7059 15.6461 21.8883 15.1141 22.0148L15.2601 22.629ZM16.4844 21.8283C16.6012 22.3064 16.7752 22.7683 16.9997 23.2046L17.561 22.9157C17.3587 22.5225 17.2024 22.1073 17.0977 21.6785L16.4844 21.8283ZM27.2413 15.0409C26.1553 14.1416 24.8113 13.6082 23.4034 13.5199L23.3638 14.1499C24.6383 14.2299 25.8552 14.7128 26.8387 15.5271L27.2413 15.0409ZM23.6923 13.9008C23.9085 12.8884 24.067 11.8644 24.1651 10.8326L23.5367 10.7729C23.4409 11.78 23.2862 12.78 23.0749 13.7689L23.6923 13.9008ZM24.1642 10.841C24.1992 10.5548 24.1072 10.2687 23.9132 10.0569L23.4477 10.4833C23.5172 10.5591 23.5502 10.6615 23.5376 10.7644L24.1642 10.841ZM23.9231 10.0682C23.7408 9.84917 23.4746 9.7182 23.1907 9.70583L23.1632 10.3365C23.2706 10.3412 23.3701 10.3906 23.4378 10.472L23.9231 10.0682ZM23.1901 9.70581C20.2139 9.58154 17.596 8.34287 15.9886 6.33042L15.4954 6.72441C17.2336 8.90064 20.0337 10.2059 23.1638 10.3365L23.1901 9.70581ZM15.9821 6.32252C15.7837 6.09008 15.4947 5.95646 15.1888 5.95646V6.58774C15.3096 6.58774 15.4233 6.64019 15.5019 6.73231L15.9821 6.32252ZM15.1888 5.95646C14.8843 5.95646 14.5936 6.08978 14.3957 6.32343L14.8775 6.7314C14.9544 6.6405 15.0685 6.58774 15.1888 6.58774V5.95646ZM14.3899 6.33045C12.7829 8.34286 10.1661 9.58154 7.18742 9.70581L7.21373 10.3365C10.3462 10.2059 13.1453 8.90064 14.8832 6.72438L14.3899 6.33045ZM7.1883 9.70577C6.62176 9.72782 6.18002 10.205 6.20415 10.7728L6.83486 10.746C6.82561 10.5284 6.99463 10.3451 7.21285 10.3366L7.1883 9.70577ZM6.2041 10.7717C6.22616 11.3385 6.70337 11.779 7.26966 11.757L7.24511 11.1261C7.02664 11.1346 6.84339 10.965 6.83491 10.7471L6.2041 10.7717ZM7.27013 11.7569C10.497 11.6265 13.4199 10.3686 15.4176 8.26492L14.9599 7.83021C13.0878 9.80162 10.3264 11.0016 7.24464 11.1262L7.27013 11.7569ZM14.9641 8.26932C16.9303 10.261 19.5475 11.4786 22.3364 11.6994L22.3862 11.0701C19.7485 10.8612 17.273 9.70963 15.4134 7.82582L14.9641 8.26932ZM22.0479 11.3468C21.9466 12.1838 21.8029 13.0149 21.6154 13.8364L22.2308 13.9768C22.4233 13.1336 22.5707 12.2809 22.6746 11.4227L22.0479 11.3468ZM21.8697 13.5955C18.6469 14.1485 16.2921 16.9434 16.2906 20.2122L16.9219 20.2125C16.9233 17.2508 19.0569 14.7186 21.9765 14.2177L21.8697 13.5955ZM16.2906 20.2124C16.2906 20.7559 16.3546 21.2985 16.4843 21.8285L17.0975 21.6784C16.9801 21.1985 16.9219 20.7064 16.9219 20.2124H16.2906ZM16.4845 21.8293C16.6025 22.3062 16.7748 22.7678 16.9996 23.2046L17.5609 22.9158C17.3589 22.5231 17.2037 22.1077 17.0973 21.6776L16.4845 21.8293ZM16.9975 23.2005C17.6396 24.4945 18.6836 25.5459 19.9735 26.1966L20.2578 25.633C19.0898 25.0437 18.1445 24.0917 17.563 22.9199L16.9975 23.2005ZM19.9535 25.644C18.4671 26.5344 16.8336 27.1509 15.1313 27.4658L15.2462 28.0866C17.0224 27.758 18.7268 27.1147 20.2779 26.1856L19.9535 25.644ZM15.2496 27.4665C10.9608 26.6244 7.77793 24.3445 5.69266 20.6427C3.59959 16.927 2.60087 11.7569 2.74582 5.12815L2.11468 5.11434C1.96846 11.8013 2.9721 17.0993 5.14264 20.9525C7.32098 24.8196 10.6629 27.2093 15.1279 28.0859L15.2496 27.4665ZM2.74537 5.13942C2.74279 5.18408 2.71577 5.22371 2.67327 5.24225L2.42088 4.66361C2.24486 4.74039 2.12623 4.91069 2.11513 5.10306L2.74537 5.13942ZM2.67896 5.2397C2.63296 5.26086 2.58477 5.25187 2.55136 5.22493L2.94759 4.73348C2.80055 4.61493 2.594 4.58393 2.41519 4.66616L2.67896 5.2397ZM2.5746 5.24197C3.79602 6.0549 5.23672 6.47539 6.7036 6.44493L6.6905 5.81378C5.35286 5.84156 4.03874 5.45812 2.92436 4.71644L2.5746 5.24197ZM6.69705 6.445C9.42567 6.445 11.738 5.16677 12.5079 3.09309L11.9161 2.87337C11.2677 4.61978 9.25861 5.81371 6.69705 5.81371V6.445ZM12.5132 3.07775C12.6111 2.7658 12.8934 2.54717 13.2203 2.53151L13.1901 1.90095C12.598 1.92932 12.0878 2.325 11.9108 2.8887L12.5132 3.07775ZM13.2052 2.53187H17.1819V1.90058H13.2052V2.53187ZM17.1647 2.5314C17.4894 2.54909 17.7688 2.76659 17.8656 3.07714L18.4683 2.88932C18.293 2.32704 17.787 1.93308 17.1991 1.90105L17.1647 2.5314ZM17.873 3.09836C18.2847 4.14927 19.0575 5.01702 20.0528 5.5491L20.3504 4.99238C19.4872 4.53091 18.8175 3.77872 18.4608 2.8681L17.873 3.09836ZM20.0501 5.54766C21.1636 6.15671 22.4174 6.46499 23.6854 6.44496L23.6755 5.81375C22.5161 5.83207 21.3702 5.55018 20.3531 4.99382L20.0501 5.54766ZM23.6739 6.44493C25.1422 6.47539 26.5829 6.05491 27.8043 5.24197L27.4546 4.71644C26.3402 5.4581 25.0261 5.84156 23.687 5.81378L23.6739 6.44493ZM27.831 5.22211C27.8062 5.24271 27.7774 5.25188 27.7502 5.25188V4.6206C27.6342 4.6206 27.5195 4.66031 27.4279 4.7363L27.831 5.22211ZM27.7587 5.25177C27.6897 5.25363 27.6362 5.19947 27.6331 5.13711L28.2636 5.10538C28.2498 4.83139 28.0216 4.61317 27.7417 4.62071L27.7587 5.25177ZM27.6329 5.13293C27.7583 8.51811 27.4557 11.9065 26.7316 15.2166L27.3483 15.3515C28.0837 11.9894 28.3911 8.54785 28.2637 5.10956L27.6329 5.13293ZM23.3998 24.843C23.2621 24.8608 23.1257 24.8694 22.9883 24.8681L22.9824 25.4993C23.1504 25.5009 23.3158 25.4903 23.4807 25.4691L23.3998 24.843ZM22.9836 24.8681C22.5098 24.8707 22.0386 24.7968 21.5883 24.6494L21.3918 25.2493C21.9067 25.4179 22.4454 25.5024 22.9871 25.4993L22.9836 24.8681ZM21.5845 24.6482C20.3556 24.2628 19.3446 23.3777 18.7993 22.2095L18.2273 22.4765C18.8475 23.8052 19.9975 24.8121 21.3956 25.2505L21.5845 24.6482ZM18.7958 22.2022C18.5937 21.7966 18.4598 21.3597 18.4005 20.9104L17.7746 20.993C17.8431 21.5117 17.9976 22.0158 18.2308 22.4838L18.7958 22.2022ZM18.3984 20.897C18.3585 20.6704 18.338 20.4422 18.3393 20.2142L17.708 20.2106C17.7065 20.479 17.7307 20.7451 17.7767 21.0065L18.3984 20.897ZM18.3393 20.2126C18.3406 18.1795 19.6593 16.3813 21.5975 15.7697L21.4075 15.1677C19.2067 15.8622 17.7095 17.9039 17.708 20.2122L18.3393 20.2126ZM21.5025 15.7844H21.511V15.1531H21.5025V15.7844ZM21.6067 15.7695C22.0508 15.6282 22.5167 15.5567 22.9839 15.5567V14.9255C22.4526 14.9255 21.9221 15.0067 21.4153 15.1679L21.6067 15.7695ZM22.9839 15.5567H23.0493V14.9255H22.9839V15.5567ZM23.0451 15.5567C24.3173 15.5737 25.526 16.115 26.3885 17.0527L26.8531 16.6253C25.8734 15.5603 24.4999 14.9448 23.0535 14.9255L23.0451 15.5567ZM26.3908 17.0551C26.7921 17.4824 27.1044 17.9849 27.3103 18.5339L27.9014 18.3123C27.6662 17.6852 27.3095 17.1111 26.8508 16.6229L26.3908 17.0551ZM27.3124 18.5394C27.5235 19.0722 27.6314 19.6389 27.6314 20.2124H28.2627C28.2627 19.5595 28.1398 18.9139 27.8993 18.3068L27.3124 18.5394ZM27.6314 20.2124C27.6314 22.6143 25.8025 24.6209 23.4112 24.8417L23.4693 25.4703C26.1856 25.2195 28.2627 22.9402 28.2627 20.2124H27.6314ZM29.6821 5.0782C29.6605 4.02839 28.7971 3.19093 27.7463 3.20028L27.7519 3.83154C28.4574 3.82527 29.0365 4.38759 29.051 5.09123L29.6821 5.0782ZM27.7478 3.20027C27.3452 3.20197 26.9511 3.32955 26.6233 3.56489L26.9915 4.07769C27.2127 3.91888 27.479 3.8327 27.7504 3.83155L27.7478 3.20027ZM26.6355 3.55657C25.7591 4.12567 24.7327 4.4169 23.6893 4.39346L23.6751 5.02459C24.8454 5.05087 25.9965 4.72423 26.9793 4.08602L26.6355 3.55657ZM23.6837 4.39339C22.9412 4.38999 22.0917 4.24994 21.3643 3.92302C20.6382 3.59668 20.0592 3.09704 19.7965 2.38442L19.2041 2.60278C19.5433 3.52287 20.2791 4.1274 21.1055 4.49882C21.9306 4.86965 22.8711 5.02096 23.6808 5.02467L23.6837 4.39339ZM19.7993 2.39254C19.4194 1.26843 18.3759 0.502714 17.1882 0.480312L17.1763 1.11148C18.0971 1.12885 18.9065 1.72244 19.2013 2.59466L19.7993 2.39254ZM17.1822 0.480256H13.2056V1.11154H17.1822V0.480256ZM13.1996 0.480312C12.0115 0.502698 10.9646 1.26594 10.5819 2.39204L11.1796 2.59516C11.4766 1.72138 12.2889 1.12887 13.2115 1.11148L13.1996 0.480312ZM10.5847 2.3842C10.3212 3.09731 9.74166 3.59872 9.01591 3.92582C8.28886 4.25349 7.4402 4.39338 6.69883 4.39338V5.02467C7.50958 5.02467 8.45023 4.87321 9.2753 4.50135C10.1017 4.12891 10.837 3.52261 11.1768 2.603L10.5847 2.3842ZM6.69215 4.39345C5.64846 4.41555 4.62149 4.1239 3.74525 3.55637L3.40207 4.08622C4.38438 4.72245 5.53555 5.04937 6.70551 5.0246L6.69215 4.39345ZM3.75775 3.56489C3.42997 3.32955 3.03585 3.20197 2.63328 3.20027L2.63062 3.83155C2.90201 3.8327 3.16837 3.91888 3.38957 4.07769L3.75775 3.56489ZM2.63476 3.20028C1.58398 3.19093 0.720609 4.02839 0.698924 5.0782L1.33007 5.09123C1.34461 4.38759 1.92362 3.82527 2.62914 3.83154L2.63476 3.20028ZM0.698933 5.07777C0.542201 12.1997 1.64918 17.8387 4.03723 21.9364C6.43313 26.0474 10.1043 28.5815 15.0059 29.5068L15.123 28.8864C10.3914 27.9933 6.88144 25.563 4.58265 21.6185C2.27602 17.6606 1.17467 12.1529 1.33007 5.09166L0.698933 5.07777ZM15.0243 29.5097C15.0787 29.5167 15.139 29.5209 15.2024 29.5188L15.1815 28.8879C15.159 28.8886 15.1333 28.8872 15.1046 28.8835L15.0243 29.5097ZM15.1819 29.5188C15.2459 29.5209 15.3081 29.5167 15.3641 29.51L15.2889 28.8832C15.2562 28.8871 15.2268 28.8887 15.202 28.8879L15.1819 29.5188ZM15.3805 29.5076C17.7705 29.093 20.0392 28.1528 22.0219 26.7552L21.6582 26.2392C19.7518 27.5829 17.5705 28.487 15.2726 28.8856L15.3805 29.5076ZM21.781 26.8073C22.1801 26.8832 22.5841 26.9197 22.9887 26.9197V26.2884C22.6221 26.2884 22.2577 26.2554 21.899 26.1871L21.781 26.8073ZM22.9895 26.9197C26.6881 26.9111 29.6821 23.9112 29.6836 20.2125L29.0523 20.2123C29.051 23.563 26.3387 26.2807 22.988 26.2884L22.9895 26.9197ZM29.6836 20.213C29.6862 18.8295 29.2568 17.4797 28.4561 16.3513L27.9412 16.7167C28.666 17.7381 29.0547 18.9598 29.0523 20.2118L29.6836 20.213ZM28.5032 16.6169C29.3911 13.3546 29.781 9.50737 29.6821 5.07767L29.051 5.09176C29.1489 9.47902 28.7618 13.2628 27.8941 16.4511L28.5032 16.6169Z" fill="#020617" />
            </svg>
        },
        {
            title: 'Investment Questionnaire',
            path: '/investment-questionnaire',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 30" fill="none">
                <g clipPath="url(#clip0_714_1731)">
                    <path d="M22.5231 4.51785H19.9531V3.36811C19.9531 2.99613 19.5473 2.82707 19.1753 2.82707H17.1802C16.7068 1.47441 15.5232 0.798088 14.1705 0.798088C12.8328 0.747796 11.616 1.56807 11.1609 2.82707H9.19956C8.82757 2.82707 8.45559 2.99613 8.45559 3.36811V4.51785H5.8855C4.36249 4.53409 3.11651 5.73554 3.04492 7.25694V26.6336C3.04492 28.1215 4.39757 29.2036 5.8855 29.2036H22.5231C24.011 29.2036 25.3637 28.1215 25.3637 26.6336V7.257C25.2921 5.73554 24.0461 4.53409 22.5231 4.51785ZM9.80818 4.17972H11.6681C11.9928 4.1401 12.2535 3.89311 12.3106 3.57103C12.5109 2.69891 13.276 2.07287 14.1705 2.04931C15.0568 2.07617 15.8104 2.70415 15.9966 3.57103C16.0573 3.90424 16.3353 4.15441 16.6729 4.17972H18.6005V6.88502H9.80818V4.17972ZM24.011 26.6337C24.011 27.3776 23.2671 27.8511 22.5231 27.8511H5.8855C5.14154 27.8511 4.39757 27.3776 4.39757 26.6337V7.257C4.46657 6.48262 5.10814 5.88474 5.8855 5.87056H8.45553V7.5952C8.49126 7.97411 8.81942 8.25754 9.19949 8.23774H19.1752C19.5623 8.2589 19.9008 7.97935 19.953 7.5952V5.8705H22.523C23.3003 5.88474 23.942 6.48255 24.011 7.25694V26.6337H24.011Z" fill="black" stroke="black" strokeWidth="0.315642" />
                    <path d="M11.6006 15.914C11.347 15.6466 10.9258 15.6315 10.6537 15.8802L8.48948 17.943L7.57645 16.9961C7.32279 16.7287 6.90168 16.7137 6.62957 16.9623C6.36762 17.2367 6.36762 17.6685 6.62957 17.943L8.016 19.3632C8.13601 19.4976 8.30934 19.5719 8.48941 19.5662C8.6678 19.5636 8.83797 19.4907 8.96282 19.3632L11.6005 16.8609C11.862 16.621 11.8795 16.2145 11.6395 15.9531C11.6272 15.9394 11.6142 15.9264 11.6006 15.914Z" fill="black" stroke="black" strokeWidth="0.315642" />
                    <path d="M21.3056 17.3682H13.5279C13.1544 17.3682 12.8516 17.671 12.8516 18.0445C12.8516 18.418 13.1544 18.7208 13.5279 18.7208H21.3056C21.6791 18.7208 21.9819 18.418 21.9819 18.0445C21.9819 17.671 21.6791 17.3682 21.3056 17.3682Z" fill="black" stroke="black" strokeWidth="0.315642" />
                    <path d="M11.6006 10.5033C11.347 10.2359 10.9258 10.2209 10.6537 10.4695L8.48948 12.5323L7.57645 11.5854C7.32279 11.318 6.90168 11.303 6.62957 11.5516C6.36762 11.8261 6.36762 12.2579 6.62957 12.5323L8.016 13.9526C8.13601 14.087 8.30934 14.1613 8.48941 14.1555C8.6678 14.153 8.83797 14.08 8.96282 13.9526L11.6005 11.4502C11.862 11.2103 11.8795 10.8039 11.6395 10.5424C11.6272 10.5288 11.6142 10.5158 11.6006 10.5033Z" fill="black" stroke="black" strokeWidth="0.315642" />
                    <path d="M21.3056 11.9575H13.5279C13.1544 11.9575 12.8516 12.2603 12.8516 12.6338C12.8516 13.0074 13.1544 13.3102 13.5279 13.3102H21.3056C21.6791 13.3102 21.9819 13.0074 21.9819 12.6338C21.9819 12.2603 21.6791 11.9575 21.3056 11.9575Z" fill="black" stroke="black" strokeWidth="0.315642" />
                    <path d="M11.6006 21.3246C11.347 21.0572 10.9258 21.0422 10.6537 21.2908L8.48948 23.3536L7.57645 22.4067C7.32279 22.1393 6.90168 22.1243 6.62957 22.3729C6.36762 22.6473 6.36762 23.0791 6.62957 23.3536L8.016 24.7739C8.13601 24.9082 8.30934 24.9825 8.48941 24.9768C8.6678 24.9743 8.83797 24.9013 8.96282 24.7739L11.6005 22.2715C11.862 22.0316 11.8795 21.6251 11.6395 21.3637C11.6272 21.3501 11.6142 21.3371 11.6006 21.3246Z" fill="black" stroke="black" strokeWidth="0.315642" />
                    <path d="M21.3056 22.7788H13.5279C13.1544 22.7788 12.8516 23.0816 12.8516 23.4551C12.8516 23.8287 13.1544 24.1315 13.5279 24.1315H21.3056C21.6791 24.1315 21.9819 23.8287 21.9819 23.4551C21.9819 23.0816 21.6791 22.7788 21.3056 22.7788Z" fill="black" stroke="black" strokeWidth="0.315642" />
                </g>
                <defs>
                    <clipPath id="clip0_714_1731">
                        <rect width="28.4078" height="28.4078" fill="white" transform="translate(0 0.795898)" />
                    </clipPath>
                </defs>
            </svg>
        },
        {
            title: 'Privacy Policy',
            path: '/settings/privacy-policy',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 30" fill="none">
                <path d="M11.0482 15.2109C9.98119 15.2109 9.11621 16.0759 9.11621 17.1429C9.11621 18.2099 9.98119 19.0748 11.0482 19.0748C12.1151 19.0748 12.9801 18.2099 12.9801 17.1429C12.9801 16.0759 12.1151 15.2109 11.0482 15.2109ZM8.40874 17.1429C8.40874 15.6852 9.59051 14.5035 11.0482 14.5035C12.5058 14.5035 13.6876 15.6852 13.6876 17.1429C13.6876 18.6005 12.5058 19.7823 11.0482 19.7823C9.59051 19.7823 8.40874 18.6005 8.40874 17.1429Z" fill="#020617" stroke="#020617" strokeWidth="1.57821" />
                <path d="M7.07027 22.5941L6.69842 23.6461H7.81427H14.2812H15.3971L15.0252 22.594C14.4465 20.957 12.8854 19.7822 11.0477 19.7822C9.21003 19.7822 7.64889 20.957 7.07027 22.5941ZM6.1226 23.9999C6.1226 21.2798 8.32764 19.0748 11.0477 19.0748C13.7678 19.0748 15.9728 21.2797 15.9728 23.9999C15.9728 24.1952 15.8144 24.3536 15.6191 24.3536H6.47634C6.28099 24.3536 6.1226 24.1952 6.1226 23.9999Z" fill="#020617" stroke="#020617" strokeWidth="1.57821" />
                <path d="M0.789106 12.5716C0.789106 11.1139 1.97082 9.93217 3.42853 9.93217H18.6664C20.1241 9.93217 21.3059 11.1139 21.3059 12.5716V14.8573C21.3059 15.0526 21.1475 15.211 20.9521 15.211C20.7568 15.211 20.5984 15.0526 20.5984 14.8573V12.5716C20.5984 11.5046 19.7334 10.6396 18.6664 10.6396H3.42853C2.36154 10.6396 1.49658 11.5046 1.49658 12.5716V26.2857C1.49658 27.3527 2.36154 28.2177 3.42853 28.2177H18.6664C19.7334 28.2177 20.5984 27.3527 20.5984 26.2857V20.9524C20.5984 20.7571 20.7568 20.5987 20.9521 20.5987C21.1475 20.5987 21.3059 20.7571 21.3059 20.9524V26.2857C21.3059 27.7434 20.1241 28.9251 18.6664 28.9251H3.42853C1.97083 28.9251 0.789106 27.7434 0.789106 26.2857V12.5716Z" fill="#020617" stroke="#020617" strokeWidth="1.57821" />
                <path d="M4.59916 6.47611C4.59916 3.33527 7.14532 0.789106 10.2862 0.789106H11.81C14.9508 0.789106 17.497 3.33527 17.497 6.47611V10.2856C17.497 10.4809 17.3386 10.6393 17.1432 10.6393C16.9479 10.6393 16.7895 10.4809 16.7895 10.2856V6.47611C16.7895 3.726 14.5601 1.49658 11.81 1.49658H10.2862C7.53606 1.49658 5.30664 3.726 5.30664 6.47611V10.2856C5.30664 10.4809 5.14826 10.6393 4.9529 10.6393C4.75754 10.6393 4.59916 10.4809 4.59916 10.2856V6.47611Z" fill="#020617" stroke="#020617" strokeWidth="1.57821" />
            </svg>
        },
        {
            title: 'FAQs',
            path: '/settings/faq',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.3848 28.1212C10.8922 28.0245 10.5771 27.5461 10.6739 27.057C10.7706 26.5644 11.249 26.2492 11.7372 26.346C18.0935 27.5869 24.3379 23.7391 26.0891 17.5044C27.8369 11.2662 24.5012 4.73426 18.4228 2.49125C12.3488 0.250897 5.57006 3.04956 2.84862 8.92648C0.12274 14.8034 2.37285 21.7863 8.01101 24.9693C8.43706 25.2161 8.58352 25.7602 8.34031 26.1862C8.09444 26.6132 7.54944 26.7587 7.12339 26.5155C0.708568 22.823 -1.79895 14.8247 1.36452 8.13206C4.52977 1.44386 12.3 -1.69743 19.2243 0.920161C26.1477 3.5342 29.9032 11.0319 27.8502 18.1426C25.798 25.2542 18.6278 29.5947 11.3742 28.1212H11.3848Z" fill="#020617" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.2235 5.32725C9.32114 5.32725 5.34727 9.30112 5.34727 14.2034C5.34727 19.1058 9.32114 23.0796 14.2235 23.0796C19.1258 23.0796 23.0996 19.1058 23.0996 14.2034C23.0996 9.30112 19.1258 5.32725 14.2235 5.32725ZM14.2242 24.8551C8.34015 24.8551 3.57275 20.0877 3.57275 14.2037C3.57275 8.31965 8.34015 3.55225 14.2242 3.55225C20.1082 3.55225 24.8756 8.31965 24.8756 14.2037C24.8756 20.0877 20.1082 24.8551 14.2242 24.8551Z" fill="#020617" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.2238 21.3049C13.7347 21.3049 13.3362 20.9063 13.3362 20.4172C13.3362 19.9282 13.7347 19.5296 14.2238 19.5296C14.7129 19.5296 15.1114 19.9282 15.1114 20.4172C15.1114 20.9063 14.7129 21.3049 14.2238 21.3049ZM14.2242 17.7543C13.7351 17.7543 13.3366 17.3557 13.3366 16.8667C13.3366 15.6151 14.0893 14.4843 15.2432 13.9996C16.5746 13.4724 17.251 11.9847 16.7726 10.6356C16.2941 9.28373 14.834 8.55588 13.468 8.98193C12.1019 9.41243 11.319 10.8442 11.6927 12.2244C11.8179 12.6993 11.5303 13.1848 11.0554 13.3055C10.5805 13.4307 10.095 13.1431 9.97341 12.6682C9.38048 10.3728 10.6977 8.01798 12.962 7.3212C15.2263 6.62087 17.6398 7.82359 18.444 10.0533C19.2481 12.283 18.1599 14.7515 15.9719 15.6604C15.4651 15.8477 15.1225 16.3261 15.1118 16.8667C15.1118 17.3557 14.7133 17.7543 14.2242 17.7543Z" fill="#020617" />
            </svg>
        },
        {
            title: 'Terms & Conditions',
            path: '/settings/terms-conditions',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.4651 13.3352C14.4567 13.8965 14.163 14.4204 13.6671 14.7296V17.414C13.6671 17.9595 13.2024 18.3987 12.6253 18.3987C12.0481 18.3987 11.5835 17.9595 11.5835 17.414V14.7296C11.0876 14.4204 10.7938 13.8965 10.7855 13.3352C10.7855 12.3741 11.6085 11.5961 12.6253 11.5961C13.6421 11.5961 14.4651 12.3741 14.4651 13.3352ZM22.8409 17.0517C22.1971 21.2289 17.2236 24.9138 14.3253 26.7455C13.2918 27.3993 11.9584 27.3993 10.9249 26.7455C8.02663 24.9138 3.05312 21.2289 2.41971 17.1679L2.08426 7.46815C2.06967 7.02699 2.36137 6.63506 2.80934 6.4972C6.02431 5.61093 9.12468 4.41151 12.0709 2.91077C12.4126 2.70397 12.8376 2.70397 13.1793 2.91077C16.1255 4.41151 19.2342 5.61093 22.4492 6.4972C22.8888 6.63506 23.1826 7.02699 23.1659 7.46815L22.8409 17.0517ZM23.0686 4.61817C20.0162 3.78114 17.07 2.64278 14.2613 1.2346C13.2612 0.649664 11.9902 0.649664 10.9901 1.2346C8.18142 2.64278 5.23523 3.78114 2.18278 4.61817C0.84929 5.01995 -0.0383156 6.21148 0.00127243 7.53498L0.34298 17.3371C1.11807 22.2687 6.57914 26.377 9.77744 28.3839C11.5026 29.477 13.7487 29.477 15.474 28.3839C18.6743 26.377 24.1354 22.2687 24.9167 17.2288L25.2501 7.53498C25.2897 6.21148 24.4042 5.01995 23.0686 4.61817Z" fill="#020617" />
            </svg>
        },
    ]

    return (
        <>
            <ul className='settings-ul'>
                {settingLinks?.map(({title,path,icon}) => (
                    <li key={path}>
                        <Link to={path}>
                        <span className='icon'>{icon}</span>
                        {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SettingsLinks