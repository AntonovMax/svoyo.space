import style from './GameField.module.css'

function TextBlock(props) {
  return (
    <svg style={{ marginTop: '10px' }} className={style.text_block} width="401" height="62" viewBox="0 0 401 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.60156 21V6.68359H3.49609V12.5625H10.9375V6.68359H12.832V21H10.9375V14.252H3.49609V21H1.60156Z" fill="#FF0000" />
        <path d="M13.9238 21L19.4219 6.68359H21.4629L27.3223 21H25.1641L23.4941 16.6641H17.5078L15.9355 21H13.9238ZM18.0547 15.1211H22.9082L21.4141 11.1562C20.9583 9.95182 20.6198 8.96224 20.3984 8.1875C20.2161 9.10547 19.959 10.0169 19.627 10.9219L18.0547 15.1211Z" fill="#FF0000" />
        <path d="M36.9883 21H35.0938V15.2285C33.3945 15.86 31.9069 16.1758 30.6309 16.1758C29.6348 16.1758 28.7559 15.9447 27.9941 15.4824C27.2324 15.0137 26.7214 14.4212 26.4609 13.7051C26.207 12.9889 26.0801 12.0514 26.0801 10.8926V6.68359H27.9746V10.7168C27.9746 12.2793 28.2578 13.3079 28.8242 13.8027C29.3971 14.291 30.084 14.5352 30.8848 14.5352C32.2194 14.5352 33.6224 14.2389 35.0938 13.6465V6.68359H36.9883V21Z" fill="#FF0000" />
        <path d="M39.6719 21V6.68359H41.5664V12.5625H49.0078V6.68359H50.9023V21H49.0078V14.252H41.5664V21H39.6719Z" fill="#FF0000" />
        <path d="M53.5957 6.68359H55.3145V18.0215L62.9316 6.68359H64.8359V21H63.1172V9.69141L55.4902 21H53.5957V6.68359Z" fill="#FF0000" />
        <path d="M1.57227 26.6836H3.29102V38.0215L10.9082 26.6836H12.8125V41H11.0938V29.6914L3.4668 41H1.57227V26.6836Z" fill="#FF0000" />
        <path d="M15.4473 26.6836H24.7051V28.373H17.3418V41H15.4473V26.6836Z" fill="#FF0000" />
        <path d="M25.7578 41V26.6836H31.1582C32.1087 26.6836 32.8346 26.7292 33.3359 26.8203C34.0391 26.9375 34.6283 27.1621 35.1035 27.4941C35.5788 27.8197 35.9596 28.2786 36.2461 28.8711C36.5391 29.4635 36.6855 30.1146 36.6855 30.8242C36.6855 32.0417 36.2982 33.0736 35.5234 33.9199C34.7487 34.7598 33.349 35.1797 31.3242 35.1797H27.6523V41H25.7578ZM27.6523 33.4902H31.3535C32.5775 33.4902 33.4466 33.2624 33.9609 32.8066C34.4753 32.3509 34.7324 31.7096 34.7324 30.8828C34.7324 30.2839 34.5794 29.7728 34.2734 29.3496C33.974 28.9199 33.5768 28.6367 33.082 28.5C32.763 28.4154 32.1738 28.373 31.3145 28.373H27.6523V33.4902Z" fill="#FF0000" />
        <path d="M36.7031 26.6836H38.6172L43.2852 35.4531L47.3672 26.6836H49.252L43.8809 37.8164C43.2103 39.2096 42.6602 40.1211 42.2305 40.5508C41.8008 40.9805 41.1855 41.1953 40.3848 41.1953C39.8965 41.1953 39.2975 41.0814 38.5879 40.8535V39.2324C39.0957 39.5254 39.6328 39.6719 40.1992 39.6719C40.6615 39.6719 41.0586 39.5254 41.3906 39.2324C41.7292 38.9329 42.1003 38.2559 42.5039 37.2012L36.7031 26.6836Z" fill="#FF0000" />
        <path d="M0.761719 56.957L2.56836 56.4883C2.70508 57.1849 3.06966 57.8815 3.66211 58.5781C4.26107 59.2747 5.05208 59.623 6.03516 59.623C7.03776 59.623 7.82878 59.3659 8.4082 58.8516C8.98763 58.3372 9.27734 57.7155 9.27734 56.9863C9.27734 56.1986 8.97135 55.5736 8.35938 55.1113C7.7474 54.6426 6.91406 54.4082 5.85938 54.4082H4.95117V52.7578C5.82357 52.7578 6.49089 52.709 6.95312 52.6113C7.41536 52.5072 7.82227 52.25 8.17383 51.8398C8.5319 51.4232 8.71094 50.9512 8.71094 50.4238C8.71094 49.7988 8.4668 49.2552 7.97852 48.793C7.49674 48.3307 6.84245 48.0996 6.01562 48.0996C5.29297 48.0996 4.67448 48.2819 4.16016 48.6465C3.65234 49.0046 3.30078 49.4831 3.10547 50.082C2.91016 50.6745 2.8125 51.1172 2.8125 51.4102L0.996094 51C1.44531 47.9596 3.125 46.4395 6.03516 46.4395C7.4349 46.4395 8.54492 46.8301 9.36523 47.6113C10.1855 48.3861 10.5957 49.2943 10.5957 50.3359C10.5957 51.6706 9.96419 52.7057 8.70117 53.4414C9.43034 53.6432 10.0391 54.0566 10.5273 54.6816C11.0221 55.3001 11.2695 56.0423 11.2695 56.9082C11.2695 58.1387 10.791 59.1706 9.83398 60.0039C8.88346 60.8307 7.62044 61.2441 6.04492 61.2441C3.33659 61.2441 1.57552 59.8151 0.761719 56.957Z" fill="#FF0000" />
        <path d="M11.5605 61L17.0586 46.6836H19.0996L24.959 61H22.8008L21.1309 56.6641H15.1445L13.5723 61H11.5605ZM15.6914 55.1211H20.5449L19.0508 51.1562C18.5951 49.9518 18.2565 48.9622 18.0352 48.1875C17.8529 49.1055 17.5957 50.0169 17.2637 50.9219L15.6914 55.1211Z" fill="#FF0000" />
        <path d="M26.0312 61V46.6836H27.9258V52.5625H35.3672V46.6836H37.2617V61H35.3672V54.252H27.9258V61H26.0312Z" fill="#FF0000" />
        <path d="M39.3496 54.0273C39.3496 51.651 39.9876 49.7923 41.2637 48.4512C42.5397 47.1035 44.1868 46.4297 46.2051 46.4297C47.5267 46.4297 48.7181 46.7454 49.7793 47.377C50.8405 48.0085 51.6478 48.8906 52.2012 50.0234C52.7611 51.1497 53.041 52.429 53.041 53.8613C53.041 55.3132 52.748 56.612 52.1621 57.7578C51.5762 58.9036 50.7461 59.7728 49.6719 60.3652C48.5977 60.9512 47.4388 61.2441 46.1953 61.2441C44.8477 61.2441 43.6432 60.9186 42.582 60.2676C41.5208 59.6165 40.7168 58.7279 40.1699 57.6016C39.623 56.4753 39.3496 55.2839 39.3496 54.0273ZM41.3027 54.0566C41.3027 55.7819 41.765 57.1426 42.6895 58.1387C43.6204 59.1283 44.7858 59.623 46.1855 59.623C47.6113 59.623 48.7832 59.1217 49.7012 58.1191C50.6257 57.1165 51.0879 55.694 51.0879 53.8516C51.0879 52.6862 50.8893 51.6706 50.4922 50.8047C50.1016 49.9323 49.5254 49.2585 48.7637 48.7832C48.0085 48.3014 47.1589 48.0605 46.2148 48.0605C44.8737 48.0605 43.7181 48.5228 42.748 49.4473C41.7845 50.3652 41.3027 51.9017 41.3027 54.0566Z" fill="#FF0000" />
        <path d="M54.9141 61V46.6836H60.2852C61.3789 46.6836 62.2546 46.8301 62.9121 47.123C63.5762 47.4095 64.0938 47.8555 64.4648 48.4609C64.8424 49.0599 65.0312 49.6882 65.0312 50.3457C65.0312 50.9577 64.8652 51.5339 64.5332 52.0742C64.2012 52.6146 63.6999 53.0508 63.0293 53.3828C63.8952 53.6367 64.5592 54.0697 65.0215 54.6816C65.4902 55.2936 65.7246 56.0163 65.7246 56.8496C65.7246 57.5202 65.5814 58.1452 65.2949 58.7246C65.015 59.2975 64.6667 59.7402 64.25 60.0527C63.8333 60.3652 63.3092 60.6029 62.6777 60.7656C62.0527 60.9219 61.2845 61 60.373 61H54.9141ZM56.8086 52.6992H59.9043C60.7441 52.6992 61.3464 52.6439 61.7109 52.5332C62.1927 52.39 62.554 52.1523 62.7949 51.8203C63.0423 51.4883 63.166 51.0716 63.166 50.5703C63.166 50.0951 63.0521 49.6784 62.8242 49.3203C62.5964 48.9557 62.2708 48.7083 61.8477 48.5781C61.4245 48.4414 60.6986 48.373 59.6699 48.373H56.8086V52.6992ZM56.8086 59.3105H60.373C60.985 59.3105 61.4147 59.2878 61.6621 59.2422C62.0983 59.1641 62.4629 59.0339 62.7559 58.8516C63.0488 58.6693 63.2897 58.4056 63.4785 58.0605C63.6673 57.709 63.7617 57.3053 63.7617 56.8496C63.7617 56.3158 63.625 55.8535 63.3516 55.4629C63.0781 55.0658 62.6973 54.7891 62.209 54.6328C61.7272 54.4701 61.0306 54.3887 60.1191 54.3887H56.8086V59.3105Z" fill="#FF0000" />
        <path d="M66.5918 54.0273C66.5918 51.651 67.2298 49.7923 68.5059 48.4512C69.7819 47.1035 71.429 46.4297 73.4473 46.4297C74.7689 46.4297 75.9603 46.7454 77.0215 47.377C78.0827 48.0085 78.89 48.8906 79.4434 50.0234C80.0033 51.1497 80.2832 52.429 80.2832 53.8613C80.2832 55.3132 79.9902 56.612 79.4043 57.7578C78.8184 58.9036 77.9883 59.7728 76.9141 60.3652C75.8398 60.9512 74.681 61.2441 73.4375 61.2441C72.0898 61.2441 70.8854 60.9186 69.8242 60.2676C68.763 59.6165 67.959 58.7279 67.4121 57.6016C66.8652 56.4753 66.5918 55.2839 66.5918 54.0273ZM68.5449 54.0566C68.5449 55.7819 69.0072 57.1426 69.9316 58.1387C70.8626 59.1283 72.028 59.623 73.4277 59.623C74.8535 59.623 76.0254 59.1217 76.9434 58.1191C77.8678 57.1165 78.3301 55.694 78.3301 53.8516C78.3301 52.6862 78.1315 51.6706 77.7344 50.8047C77.3438 49.9323 76.7676 49.2585 76.0059 48.7832C75.2507 48.3014 74.401 48.0605 73.457 48.0605C72.1159 48.0605 70.9603 48.5228 69.9902 49.4473C69.0267 50.3652 68.5449 51.9017 68.5449 54.0566Z" fill="#FF0000" />
        <path d="M107.098 3.68359H109.012L113.68 12.4531L117.762 3.68359H119.646L114.275 14.8164C113.605 16.2096 113.055 17.1211 112.625 17.5508C112.195 17.9805 111.58 18.1953 110.779 18.1953C110.291 18.1953 109.692 18.0814 108.982 17.8535V16.2324C109.49 16.5254 110.027 16.6719 110.594 16.6719C111.056 16.6719 111.453 16.5254 111.785 16.2324C112.124 15.9329 112.495 15.2559 112.898 14.2012L107.098 3.68359Z" fill="#FF0000" />
        <path d="M121.277 3.68359H132.537V18H130.633V5.37305H123.172V18H121.277V3.68359Z" fill="#FF0000" />
        <path d="M135.633 18V3.68359H141.033C141.984 3.68359 142.71 3.72917 143.211 3.82031C143.914 3.9375 144.503 4.16211 144.979 4.49414C145.454 4.81966 145.835 5.27865 146.121 5.87109C146.414 6.46354 146.561 7.11458 146.561 7.82422C146.561 9.04167 146.173 10.0736 145.398 10.9199C144.624 11.7598 143.224 12.1797 141.199 12.1797H137.527V18H135.633ZM137.527 10.4902H141.229C142.452 10.4902 143.322 10.2624 143.836 9.80664C144.35 9.35091 144.607 8.70964 144.607 7.88281C144.607 7.28385 144.454 6.77279 144.148 6.34961C143.849 5.91992 143.452 5.63672 142.957 5.5C142.638 5.41536 142.049 5.37305 141.189 5.37305H137.527V10.4902Z" fill="#FF0000" />
        <path d="M146.053 18L151.551 3.68359H153.592L159.451 18H157.293L155.623 13.6641H149.637L148.064 18H146.053ZM150.184 12.1211H155.037L153.543 8.15625C153.087 6.95182 152.749 5.96224 152.527 5.1875C152.345 6.10547 152.088 7.01693 151.756 7.92188L150.184 12.1211Z" fill="#FF0000" />
        <path d="M160.887 18V3.68359H166.258C167.352 3.68359 168.227 3.83008 168.885 4.12305C169.549 4.40951 170.066 4.85547 170.438 5.46094C170.815 6.0599 171.004 6.68815 171.004 7.3457C171.004 7.95768 170.838 8.53385 170.506 9.07422C170.174 9.61458 169.673 10.0508 169.002 10.3828C169.868 10.6367 170.532 11.0697 170.994 11.6816C171.463 12.2936 171.697 13.0163 171.697 13.8496C171.697 14.5202 171.554 15.1452 171.268 15.7246C170.988 16.2975 170.639 16.7402 170.223 17.0527C169.806 17.3652 169.282 17.6029 168.65 17.7656C168.025 17.9219 167.257 18 166.346 18H160.887ZM162.781 9.69922H165.877C166.717 9.69922 167.319 9.64388 167.684 9.5332C168.165 9.38997 168.527 9.15234 168.768 8.82031C169.015 8.48828 169.139 8.07161 169.139 7.57031C169.139 7.09505 169.025 6.67839 168.797 6.32031C168.569 5.95573 168.243 5.70833 167.82 5.57812C167.397 5.44141 166.671 5.37305 165.643 5.37305H162.781V9.69922ZM162.781 16.3105H166.346C166.958 16.3105 167.387 16.2878 167.635 16.2422C168.071 16.1641 168.436 16.0339 168.729 15.8516C169.021 15.6693 169.262 15.4056 169.451 15.0605C169.64 14.709 169.734 14.3053 169.734 13.8496C169.734 13.3158 169.598 12.8535 169.324 12.4629C169.051 12.0658 168.67 11.7891 168.182 11.6328C167.7 11.4701 167.003 11.3887 166.092 11.3887H162.781V16.3105Z" fill="#FF0000" />
        <path d="M175.115 3.68359H184.08V18H182.186V5.37305H177.01V12.7461C177.01 14.2435 176.938 15.3405 176.795 16.0371C176.658 16.7337 176.365 17.2773 175.916 17.668C175.467 18.0521 174.897 18.2441 174.207 18.2441C173.79 18.2441 173.289 18.166 172.703 18.0098L173.025 16.3301C173.338 16.4603 173.605 16.5254 173.826 16.5254C174.256 16.5254 174.578 16.3659 174.793 16.0469C175.008 15.7214 175.115 14.9596 175.115 13.7617V3.68359Z" fill="#FF0000" />
        <path d="M198.523 18V3.68359H192.176C190.9 3.68359 189.93 3.8138 189.266 4.07422C188.602 4.32812 188.071 4.7806 187.674 5.43164C187.277 6.08268 187.078 6.80208 187.078 7.58984C187.078 8.60547 187.407 9.46159 188.064 10.1582C188.722 10.8548 189.738 11.2975 191.111 11.4863C190.61 11.7272 190.229 11.9648 189.969 12.1992C189.415 12.707 188.891 13.3418 188.396 14.1035L185.906 18H188.289L190.184 15.0215C190.737 14.1621 191.193 13.5046 191.551 13.0488C191.909 12.5931 192.228 12.2741 192.508 12.0918C192.794 11.9095 193.084 11.7826 193.377 11.7109C193.592 11.6654 193.943 11.6426 194.432 11.6426H196.629V18H198.523ZM196.629 10.002H192.557C191.691 10.002 191.014 9.91406 190.525 9.73828C190.037 9.55599 189.666 9.26953 189.412 8.87891C189.158 8.48177 189.031 8.05208 189.031 7.58984C189.031 6.91276 189.275 6.35612 189.764 5.91992C190.258 5.48372 191.036 5.26562 192.098 5.26562H196.629V10.002Z" fill="#FF0000" />
        <path d="M201.678 3.68359H203.396V15.0215L211.014 3.68359H212.918V18H211.199V6.69141L203.572 18H201.678V3.68359ZM208.797 0.275391H209.998C209.9 1.08919 209.601 1.71419 209.1 2.15039C208.605 2.58659 207.944 2.80469 207.117 2.80469C206.284 2.80469 205.617 2.58984 205.115 2.16016C204.62 1.72396 204.324 1.0957 204.227 0.275391H205.428C205.519 0.718099 205.698 1.05013 205.965 1.27148C206.238 1.48633 206.603 1.59375 207.059 1.59375C207.586 1.59375 207.983 1.48958 208.25 1.28125C208.523 1.06641 208.706 0.73112 208.797 0.275391Z" fill="#FF0000" />
        <path d="M221.609 3.68359H232.869V18H230.965V5.37305H223.504V18H221.609V3.68359Z" fill="#FF0000" />
        <path d="M234.393 18L239.891 3.68359H241.932L247.791 18H245.633L243.963 13.6641H237.977L236.404 18H234.393ZM238.523 12.1211H243.377L241.883 8.15625C241.427 6.95182 241.089 5.96224 240.867 5.1875C240.685 6.10547 240.428 7.01693 240.096 7.92188L238.523 12.1211Z" fill="#FF0000" />
        <path d="M251.268 3.68359H259.979V16.3105H261.268V21.3398H259.578V18H250.115V21.3398H248.426V16.3105H249.539C250.691 14.5723 251.268 11.0599 251.268 5.77344V3.68359ZM258.084 5.37305H253.094V6.10547C253.094 7.32292 252.983 8.98958 252.762 11.1055C252.547 13.2148 252.12 14.9499 251.482 16.3105H258.084V5.37305Z" fill="#FF0000" />
        <path d="M261.951 18L267.449 3.68359H269.49L275.35 18H273.191L271.521 13.6641H265.535L263.963 18H261.951ZM266.082 12.1211H270.936L269.441 8.15625C268.986 6.95182 268.647 5.96224 268.426 5.1875C268.243 6.10547 267.986 7.01693 267.654 7.92188L266.082 12.1211Z" fill="#FF0000" />
        <path d="M276.922 3.68359H278.816V10.1094H281.57C281.707 8.07812 282.374 6.46029 283.572 5.25586C284.77 4.04492 286.255 3.43945 288.025 3.43945C289.894 3.43945 291.44 4.09701 292.664 5.41211C293.895 6.72721 294.51 8.51107 294.51 10.7637C294.51 13.1074 293.898 14.9401 292.674 16.2617C291.45 17.5833 289.884 18.2441 287.977 18.2441C286.245 18.2441 284.799 17.6745 283.641 16.5352C282.488 15.3893 281.811 13.8073 281.609 11.7891H278.816V18H276.922V3.68359ZM283.475 10.9102C283.475 12.7201 283.891 14.1263 284.725 15.1289C285.558 16.125 286.652 16.623 288.006 16.623C289.393 16.623 290.499 16.1217 291.326 15.1191C292.153 14.1165 292.566 12.6745 292.566 10.793C292.566 9.00911 292.16 7.60612 291.346 6.58398C290.532 5.55534 289.432 5.04102 288.045 5.04102C286.632 5.04102 285.516 5.56185 284.695 6.60352C283.882 7.63867 283.475 9.07422 283.475 10.9102Z" fill="#FF0000" />
        <path d="M297.107 3.68359H299.002V16.3105H303.758V3.68359H305.652V16.3105H310.408V3.68359H312.303V16.3105H313.602V21.9746H311.912V18H297.107V3.68359Z" fill="#FF0000" />
        <path d="M315.867 18V3.68359H326.219V5.37305H317.762V9.75781H325.682V11.4375H317.762V16.3105H326.551V18H315.867Z" fill="#FF0000" />
        <path d="M329.197 3.68359H330.916V15.0215L338.533 3.68359H340.438V18H338.719V6.69141L331.092 18H329.197V3.68359ZM336.316 0.275391H337.518C337.42 1.08919 337.12 1.71419 336.619 2.15039C336.124 2.58659 335.464 2.80469 334.637 2.80469C333.803 2.80469 333.136 2.58984 332.635 2.16016C332.14 1.72396 331.844 1.0957 331.746 0.275391H332.947C333.038 0.718099 333.217 1.05013 333.484 1.27148C333.758 1.48633 334.122 1.59375 334.578 1.59375C335.105 1.59375 335.503 1.48958 335.77 1.28125C336.043 1.06641 336.225 0.73112 336.316 0.275391Z" fill="#FF0000" />
        <path d="M113.719 25.4023V23.5664H115.496V25.4023C117.319 25.5 118.758 26.0501 119.812 27.0527C120.867 28.0488 121.395 29.2891 121.395 30.7734C121.395 32.2253 120.883 33.459 119.861 34.4746C118.839 35.4902 117.384 36.0501 115.496 36.1543V38H113.719V36.1543C112.026 36.0892 110.617 35.5749 109.49 34.6113C108.364 33.6413 107.801 32.362 107.801 30.7734C107.801 29.1784 108.361 27.9023 109.48 26.9453C110.607 25.9883 112.02 25.474 113.719 25.4023ZM115.496 27.0234V34.5234C116.72 34.4648 117.684 34.11 118.387 33.459C119.09 32.8079 119.441 31.9128 119.441 30.7734C119.441 29.6536 119.096 28.7682 118.406 28.1172C117.716 27.4596 116.746 27.0951 115.496 27.0234ZM113.719 27.0332C112.54 27.0853 111.587 27.4336 110.857 28.0781C110.128 28.7227 109.764 29.6211 109.764 30.7734C109.764 31.9128 110.122 32.8079 110.838 33.459C111.561 34.11 112.521 34.4616 113.719 34.5137V27.0332Z" fill="#FF0000" />
        <path d="M123.787 23.6836H125.506V35.0215L133.123 23.6836H135.027V38H133.309V26.6914L125.682 38H123.787V23.6836Z" fill="#FF0000" />
        <path d="M138.162 23.6836H147.42V25.373H140.057V38H138.162V23.6836Z" fill="#FF0000" />
        <path d="M147.527 23.6836H149.441L154.109 32.4531L158.191 23.6836H160.076L154.705 34.8164C154.035 36.2096 153.484 37.1211 153.055 37.5508C152.625 37.9805 152.01 38.1953 151.209 38.1953C150.721 38.1953 150.122 38.0814 149.412 37.8535V36.2324C149.92 36.5254 150.457 36.6719 151.023 36.6719C151.486 36.6719 151.883 36.5254 152.215 36.2324C152.553 35.9329 152.924 35.2559 153.328 34.2012L147.527 23.6836Z" fill="#FF0000" />
        <path d="M161.688 38V23.6836H167.088C168.038 23.6836 168.764 23.7292 169.266 23.8203C169.969 23.9375 170.558 24.1621 171.033 24.4941C171.508 24.8197 171.889 25.2786 172.176 25.8711C172.469 26.4635 172.615 27.1146 172.615 27.8242C172.615 29.0417 172.228 30.0736 171.453 30.9199C170.678 31.7598 169.279 32.1797 167.254 32.1797H163.582V38H161.688ZM163.582 30.4902H167.283C168.507 30.4902 169.376 30.2624 169.891 29.8066C170.405 29.3509 170.662 28.7096 170.662 27.8828C170.662 27.2839 170.509 26.7728 170.203 26.3496C169.904 25.9199 169.507 25.6367 169.012 25.5C168.693 25.4154 168.104 25.373 167.244 25.373H163.582V30.4902Z" fill="#FF0000" />
        <path d="M174.002 31.0273C174.002 28.651 174.64 26.7923 175.916 25.4512C177.192 24.1035 178.839 23.4297 180.857 23.4297C182.179 23.4297 183.37 23.7454 184.432 24.377C185.493 25.0085 186.3 25.8906 186.854 27.0234C187.413 28.1497 187.693 29.429 187.693 30.8613C187.693 32.3132 187.4 33.612 186.814 34.7578C186.229 35.9036 185.398 36.7728 184.324 37.3652C183.25 37.9512 182.091 38.2441 180.848 38.2441C179.5 38.2441 178.296 37.9186 177.234 37.2676C176.173 36.6165 175.369 35.7279 174.822 34.6016C174.275 33.4753 174.002 32.2839 174.002 31.0273ZM175.955 31.0566C175.955 32.7819 176.417 34.1426 177.342 35.1387C178.273 36.1283 179.438 36.623 180.838 36.623C182.264 36.623 183.436 36.1217 184.354 35.1191C185.278 34.1165 185.74 32.694 185.74 30.8516C185.74 29.6862 185.542 28.6706 185.145 27.8047C184.754 26.9323 184.178 26.2585 183.416 25.7832C182.661 25.3014 181.811 25.0605 180.867 25.0605C179.526 25.0605 178.37 25.5228 177.4 26.4473C176.437 27.3652 175.955 28.9017 175.955 31.0566Z" fill="#FF0000" />
        <path d="M190.174 23.6836H191.893V35.0215L199.51 23.6836H201.414V38H199.695V26.6914L192.068 38H190.174V23.6836ZM197.293 20.2754H198.494C198.396 21.0892 198.097 21.7142 197.596 22.1504C197.101 22.5866 196.44 22.8047 195.613 22.8047C194.78 22.8047 194.113 22.5898 193.611 22.1602C193.117 21.724 192.82 21.0957 192.723 20.2754H193.924C194.015 20.7181 194.194 21.0501 194.461 21.2715C194.734 21.4863 195.099 21.5938 195.555 21.5938C196.082 21.5938 196.479 21.4896 196.746 21.2812C197.02 21.0664 197.202 20.7311 197.293 20.2754Z" fill="#FF0000" />
        <path d="M205.232 34.4453L204.695 26.8574V23.6836H206.873V26.8574L206.365 34.4453H205.232ZM204.773 38V35.998H206.795V38H204.773Z" fill="#FF0000" />
        <path d="M225.867 32.9805L227.762 33.459C227.365 35.015 226.648 36.2031 225.613 37.0234C224.585 37.8372 223.325 38.2441 221.834 38.2441C220.291 38.2441 219.035 37.9316 218.064 37.3066C217.101 36.6751 216.365 35.7637 215.857 34.5723C215.356 33.3809 215.105 32.1016 215.105 30.7344C215.105 29.2435 215.389 27.9447 215.955 26.8379C216.528 25.7246 217.339 24.8815 218.387 24.3086C219.441 23.7292 220.6 23.4395 221.863 23.4395C223.296 23.4395 224.5 23.804 225.477 24.5332C226.453 25.2624 227.133 26.2878 227.518 27.6094L225.652 28.0488C225.32 27.0072 224.839 26.2487 224.207 25.7734C223.576 25.2982 222.781 25.0605 221.824 25.0605C220.724 25.0605 219.803 25.3242 219.061 25.8516C218.325 26.3789 217.807 27.0885 217.508 27.9805C217.208 28.8659 217.059 29.7806 217.059 30.7246C217.059 31.9421 217.234 33.0065 217.586 33.918C217.944 34.8229 218.497 35.5 219.246 35.9492C219.995 36.3984 220.805 36.623 221.678 36.623C222.739 36.623 223.637 36.3171 224.373 35.7051C225.109 35.0931 225.607 34.1849 225.867 32.9805Z" fill="#FF0000" />
        <path d="M233.084 38V25.373H228.367V23.6836H239.715V25.373H234.979V38H233.084Z" fill="#FF0000" />
        <path d="M239.432 38L244.93 23.6836H246.971L252.83 38H250.672L249.002 33.6641H243.016L241.443 38H239.432ZM243.562 32.1211H248.416L246.922 28.1562C246.466 26.9518 246.128 25.9622 245.906 25.1875C245.724 26.1055 245.467 27.0169 245.135 27.9219L243.562 32.1211Z" fill="#FF0000" />
        <path d="M254.402 38V23.6836H256.297V29.5625H263.738V23.6836H265.633V38H263.738V31.252H256.297V38H254.402Z" fill="#FF0000" />
        <path d="M268.865 23.6836H270.76V29.7969H274.178C275.773 29.7969 276.928 29.9824 277.645 30.3535C278.361 30.7246 278.875 31.2292 279.188 31.8672C279.5 32.5052 279.656 33.1628 279.656 33.8398C279.656 34.9466 279.279 35.9167 278.523 36.75C277.768 37.5833 276.362 38 274.305 38H268.865V23.6836ZM270.76 36.3887H274.227C275.633 36.3887 276.548 36.1413 276.971 35.6465C277.4 35.1452 277.615 34.543 277.615 33.8398C277.615 33.2669 277.459 32.7819 277.146 32.3848C276.84 31.9811 276.43 31.7207 275.916 31.6035C275.402 31.4863 274.529 31.4277 273.299 31.4277H270.76V36.3887Z" fill="#FF0000" />
        <path d="M286.033 38L291.57 30.5391L286.688 23.6836H288.943L291.541 27.3555C292.081 28.1172 292.465 28.7031 292.693 29.1133C293.012 28.5924 293.39 28.0488 293.826 27.4824L296.707 23.6836H298.768L293.738 30.4316L299.158 38H296.814L293.211 32.8926C293.009 32.5996 292.801 32.2806 292.586 31.9355C292.267 32.4564 292.039 32.8145 291.902 33.0098L288.309 38H286.033Z" fill="#FF0000" />
        <path d="M299.588 31.0273C299.588 28.651 300.226 26.7923 301.502 25.4512C302.778 24.1035 304.425 23.4297 306.443 23.4297C307.765 23.4297 308.956 23.7454 310.018 24.377C311.079 25.0085 311.886 25.8906 312.439 27.0234C312.999 28.1497 313.279 29.429 313.279 30.8613C313.279 32.3132 312.986 33.612 312.4 34.7578C311.814 35.9036 310.984 36.7728 309.91 37.3652C308.836 37.9512 307.677 38.2441 306.434 38.2441C305.086 38.2441 303.882 37.9186 302.82 37.2676C301.759 36.6165 300.955 35.7279 300.408 34.6016C299.861 33.4753 299.588 32.2839 299.588 31.0273ZM301.541 31.0566C301.541 32.7819 302.003 34.1426 302.928 35.1387C303.859 36.1283 305.024 36.623 306.424 36.623C307.85 36.623 309.021 36.1217 309.939 35.1191C310.864 34.1165 311.326 32.694 311.326 30.8516C311.326 29.6862 311.128 28.6706 310.73 27.8047C310.34 26.9323 309.764 26.2585 309.002 25.7832C308.247 25.3014 307.397 25.0605 306.453 25.0605C305.112 25.0605 303.956 25.5228 302.986 26.4473C302.023 27.3652 301.541 28.9017 301.541 31.0566Z" fill="#FF0000" />
        <path d="M314.949 33.957L316.756 33.4883C316.893 34.1849 317.257 34.8815 317.85 35.5781C318.449 36.2747 319.24 36.623 320.223 36.623C321.225 36.623 322.016 36.3659 322.596 35.8516C323.175 35.3372 323.465 34.7155 323.465 33.9863C323.465 33.1986 323.159 32.5736 322.547 32.1113C321.935 31.6426 321.102 31.4082 320.047 31.4082H319.139V29.7578C320.011 29.7578 320.678 29.709 321.141 29.6113C321.603 29.5072 322.01 29.25 322.361 28.8398C322.719 28.4232 322.898 27.9512 322.898 27.4238C322.898 26.7988 322.654 26.2552 322.166 25.793C321.684 25.3307 321.03 25.0996 320.203 25.0996C319.48 25.0996 318.862 25.2819 318.348 25.6465C317.84 26.0046 317.488 26.4831 317.293 27.082C317.098 27.6745 317 28.1172 317 28.4102L315.184 28C315.633 24.9596 317.312 23.4395 320.223 23.4395C321.622 23.4395 322.732 23.8301 323.553 24.6113C324.373 25.3861 324.783 26.2943 324.783 27.3359C324.783 28.6706 324.152 29.7057 322.889 30.4414C323.618 30.6432 324.227 31.0566 324.715 31.6816C325.21 32.3001 325.457 33.0423 325.457 33.9082C325.457 35.1387 324.979 36.1706 324.021 37.0039C323.071 37.8307 321.808 38.2441 320.232 38.2441C317.524 38.2441 315.763 36.8151 314.949 33.957Z" fill="#FF0000" />
        <path d="M338.914 38V23.6836H332.566C331.29 23.6836 330.32 23.8138 329.656 24.0742C328.992 24.3281 328.462 24.7806 328.064 25.4316C327.667 26.0827 327.469 26.8021 327.469 27.5898C327.469 28.6055 327.798 29.4616 328.455 30.1582C329.113 30.8548 330.128 31.2975 331.502 31.4863C331.001 31.7272 330.62 31.9648 330.359 32.1992C329.806 32.707 329.282 33.3418 328.787 34.1035L326.297 38H328.68L330.574 35.0215C331.128 34.1621 331.583 33.5046 331.941 33.0488C332.299 32.5931 332.618 32.2741 332.898 32.0918C333.185 31.9095 333.475 31.7826 333.768 31.7109C333.982 31.6654 334.334 31.6426 334.822 31.6426H337.02V38H338.914ZM337.02 30.002H332.947C332.081 30.002 331.404 29.9141 330.916 29.7383C330.428 29.556 330.057 29.2695 329.803 28.8789C329.549 28.4818 329.422 28.0521 329.422 27.5898C329.422 26.9128 329.666 26.3561 330.154 25.9199C330.649 25.4837 331.427 25.2656 332.488 25.2656H337.02V30.002Z" fill="#FF0000" />
        <path d="M342.068 23.6836H343.787V35.0215L351.404 23.6836H353.309V38H351.59V26.6914L343.963 38H342.068V23.6836Z" fill="#FF0000" />
        <path d="M356.473 38V23.6836H358.367V29.5625H365.809V23.6836H367.703V38H365.809V31.252H358.367V38H356.473Z" fill="#FF0000" />
        <path d="M370.291 31.0273C370.291 28.651 370.929 26.7923 372.205 25.4512C373.481 24.1035 375.128 23.4297 377.146 23.4297C378.468 23.4297 379.66 23.7454 380.721 24.377C381.782 25.0085 382.589 25.8906 383.143 27.0234C383.702 28.1497 383.982 29.429 383.982 30.8613C383.982 32.3132 383.689 33.612 383.104 34.7578C382.518 35.9036 381.688 36.7728 380.613 37.3652C379.539 37.9512 378.38 38.2441 377.137 38.2441C375.789 38.2441 374.585 37.9186 373.523 37.2676C372.462 36.6165 371.658 35.7279 371.111 34.6016C370.564 33.4753 370.291 32.2839 370.291 31.0273ZM372.244 31.0566C372.244 32.7819 372.706 34.1426 373.631 35.1387C374.562 36.1283 375.727 36.623 377.127 36.623C378.553 36.623 379.725 36.1217 380.643 35.1191C381.567 34.1165 382.029 32.694 382.029 30.8516C382.029 29.6862 381.831 28.6706 381.434 27.8047C381.043 26.9323 380.467 26.2585 379.705 25.7832C378.95 25.3014 378.1 25.0605 377.156 25.0605C375.815 25.0605 374.66 25.5228 373.689 26.4473C372.726 27.3652 372.244 28.9017 372.244 31.0566Z" fill="#FF0000" />
        <path d="M386.375 38V23.6836H389.227L392.615 33.8203C392.928 34.7643 393.156 35.4707 393.299 35.9395C393.462 35.4186 393.715 34.6536 394.061 33.6445L397.488 23.6836H400.037V38H398.211V26.0176L394.051 38H392.342L388.201 25.8125V38H386.375Z" fill="#FF0000" />
        <path d="M118.758 52.9805L120.652 53.459C120.255 55.015 119.539 56.2031 118.504 57.0234C117.475 57.8372 116.215 58.2441 114.725 58.2441C113.182 58.2441 111.925 57.9316 110.955 57.3066C109.992 56.6751 109.256 55.7637 108.748 54.5723C108.247 53.3809 107.996 52.1016 107.996 50.7344C107.996 49.2435 108.279 47.9447 108.846 46.8379C109.419 45.7246 110.229 44.8815 111.277 44.3086C112.332 43.7292 113.491 43.4395 114.754 43.4395C116.186 43.4395 117.391 43.804 118.367 44.5332C119.344 45.2624 120.024 46.2878 120.408 47.6094L118.543 48.0488C118.211 47.0072 117.729 46.2487 117.098 45.7734C116.466 45.2982 115.672 45.0605 114.715 45.0605C113.615 45.0605 112.693 45.3242 111.951 45.8516C111.215 46.3789 110.698 47.0885 110.398 47.9805C110.099 48.8659 109.949 49.7806 109.949 50.7246C109.949 51.9421 110.125 53.0065 110.477 53.918C110.835 54.8229 111.388 55.5 112.137 55.9492C112.885 56.3984 113.696 56.623 114.568 56.623C115.63 56.623 116.528 56.3171 117.264 55.7051C117.999 55.0931 118.497 54.1849 118.758 52.9805Z" fill="#FF0000" />
        <path d="M122.918 58V43.6836H128.289C129.383 43.6836 130.258 43.8301 130.916 44.123C131.58 44.4095 132.098 44.8555 132.469 45.4609C132.846 46.0599 133.035 46.6882 133.035 47.3457C133.035 47.9577 132.869 48.5339 132.537 49.0742C132.205 49.6146 131.704 50.0508 131.033 50.3828C131.899 50.6367 132.563 51.0697 133.025 51.6816C133.494 52.2936 133.729 53.0163 133.729 53.8496C133.729 54.5202 133.585 55.1452 133.299 55.7246C133.019 56.2975 132.671 56.7402 132.254 57.0527C131.837 57.3652 131.313 57.6029 130.682 57.7656C130.057 57.9219 129.288 58 128.377 58H122.918ZM124.812 49.6992H127.908C128.748 49.6992 129.35 49.6439 129.715 49.5332C130.197 49.39 130.558 49.1523 130.799 48.8203C131.046 48.4883 131.17 48.0716 131.17 47.5703C131.17 47.0951 131.056 46.6784 130.828 46.3203C130.6 45.9557 130.275 45.7083 129.852 45.5781C129.428 45.4414 128.702 45.373 127.674 45.373H124.812V49.6992ZM124.812 56.3105H128.377C128.989 56.3105 129.419 56.2878 129.666 56.2422C130.102 56.1641 130.467 56.0339 130.76 55.8516C131.053 55.6693 131.294 55.4056 131.482 55.0605C131.671 54.709 131.766 54.3053 131.766 53.8496C131.766 53.3158 131.629 52.8535 131.355 52.4629C131.082 52.0658 130.701 51.7891 130.213 51.6328C129.731 51.4701 129.035 51.3887 128.123 51.3887H124.812V56.3105Z" fill="#FF0000" />
        <path d="M135.096 51.0273C135.096 48.651 135.734 46.7923 137.01 45.4512C138.286 44.1035 139.933 43.4297 141.951 43.4297C143.273 43.4297 144.464 43.7454 145.525 44.377C146.587 45.0085 147.394 45.8906 147.947 47.0234C148.507 48.1497 148.787 49.429 148.787 50.8613C148.787 52.3132 148.494 53.612 147.908 54.7578C147.322 55.9036 146.492 56.7728 145.418 57.3652C144.344 57.9512 143.185 58.2441 141.941 58.2441C140.594 58.2441 139.389 57.9186 138.328 57.2676C137.267 56.6165 136.463 55.7279 135.916 54.6016C135.369 53.4753 135.096 52.2839 135.096 51.0273ZM137.049 51.0566C137.049 52.7819 137.511 54.1426 138.436 55.1387C139.367 56.1283 140.532 56.623 141.932 56.623C143.357 56.623 144.529 56.1217 145.447 55.1191C146.372 54.1165 146.834 52.694 146.834 50.8516C146.834 49.6862 146.635 48.6706 146.238 47.8047C145.848 46.9323 145.271 46.2585 144.51 45.7832C143.755 45.3014 142.905 45.0605 141.961 45.0605C140.62 45.0605 139.464 45.5228 138.494 46.4473C137.531 47.3652 137.049 48.9017 137.049 51.0566Z" fill="#FF0000" />
        <path d="M151.277 58V43.6836H161.629V45.373H153.172V49.7578H161.092V51.4375H153.172V56.3105H161.961V58H151.277Z" fill="#FF0000" />
        <path d="M164.607 43.6836H166.326V55.0215L173.943 43.6836H175.848V58H174.129V46.6914L166.502 58H164.607V43.6836ZM171.727 40.2754H172.928C172.83 41.0892 172.531 41.7142 172.029 42.1504C171.535 42.5866 170.874 42.8047 170.047 42.8047C169.214 42.8047 168.546 42.5898 168.045 42.1602C167.55 41.724 167.254 41.0957 167.156 40.2754H168.357C168.449 40.7181 168.628 41.0501 168.895 41.2715C169.168 41.4863 169.533 41.5938 169.988 41.5938C170.516 41.5938 170.913 41.4896 171.18 41.2812C171.453 41.0664 171.635 40.7311 171.727 40.2754Z" fill="#FF0000" />
        <path d="M193.182 43.6836V49.9531C194.113 49.9531 194.751 49.7839 195.096 49.4453C195.447 49.1003 195.893 48.2962 196.434 47.0332C196.831 46.0957 197.156 45.4349 197.41 45.0508C197.671 44.6602 198.038 44.3346 198.514 44.0742C198.989 43.8073 199.51 43.6738 200.076 43.6738C200.695 43.6738 201.079 43.6803 201.229 43.6934V45.334C201.17 45.334 201.046 45.3307 200.857 45.3242C200.649 45.3177 200.522 45.3145 200.477 45.3145C199.871 45.3145 199.422 45.4609 199.129 45.7539C198.829 46.0469 198.488 46.6719 198.104 47.6289C197.687 48.6641 197.326 49.3704 197.02 49.748C196.714 50.1191 196.271 50.4284 195.691 50.6758C196.629 50.9362 197.537 51.7891 198.416 53.2344L201.365 58H199.021L196.629 54.1133C195.991 53.0846 195.454 52.3587 195.018 51.9355C194.581 51.5124 193.969 51.3008 193.182 51.3008V58H191.238V51.3008C190.613 51.3008 190.06 51.4668 189.578 51.7988C189.103 52.1243 188.546 52.8307 187.908 53.918L187.791 54.1133L185.398 58H183.045L185.994 53.2344C186.893 51.7826 187.804 50.9297 188.729 50.6758C188.214 50.4674 187.794 50.1908 187.469 49.8457C187.143 49.4941 186.756 48.7552 186.307 47.6289C185.896 46.6068 185.545 45.9655 185.252 45.7051C184.959 45.4447 184.523 45.3145 183.943 45.3145L183.182 45.334V43.6934C183.253 43.6803 183.618 43.6738 184.275 43.6738C184.9 43.6738 185.441 43.804 185.896 44.0645C186.359 44.3184 186.72 44.6406 186.98 45.0312C187.241 45.4154 187.576 46.0827 187.986 47.0332C188.533 48.3158 188.976 49.1198 189.314 49.4453C189.66 49.7708 190.301 49.9401 191.238 49.9531V43.6836H193.182Z" fill="#FF0000" />
        <path d="M203.025 43.6836H204.744V55.0215L212.361 43.6836H214.266V58H212.547V46.6914L204.92 58H203.025V43.6836Z" fill="#FF0000" />
        <path d="M216.59 53.957L218.396 53.4883C218.533 54.1849 218.898 54.8815 219.49 55.5781C220.089 56.2747 220.88 56.623 221.863 56.623C222.866 56.623 223.657 56.3659 224.236 55.8516C224.816 55.3372 225.105 54.7155 225.105 53.9863C225.105 53.1986 224.799 52.5736 224.188 52.1113C223.576 51.6426 222.742 51.4082 221.688 51.4082H220.779V49.7578C221.652 49.7578 222.319 49.709 222.781 49.6113C223.243 49.5072 223.65 49.25 224.002 48.8398C224.36 48.4232 224.539 47.9512 224.539 47.4238C224.539 46.7988 224.295 46.2552 223.807 45.793C223.325 45.3307 222.671 45.0996 221.844 45.0996C221.121 45.0996 220.503 45.2819 219.988 45.6465C219.48 46.0046 219.129 46.4831 218.934 47.082C218.738 47.6745 218.641 48.1172 218.641 48.4102L216.824 48C217.273 44.9596 218.953 43.4395 221.863 43.4395C223.263 43.4395 224.373 43.8301 225.193 44.6113C226.014 45.3861 226.424 46.2943 226.424 47.3359C226.424 48.6706 225.792 49.7057 224.529 50.4414C225.258 50.6432 225.867 51.0566 226.355 51.6816C226.85 52.3001 227.098 53.0423 227.098 53.9082C227.098 55.1387 226.619 56.1706 225.662 57.0039C224.712 57.8307 223.449 58.2441 221.873 58.2441C219.165 58.2441 217.404 56.8151 216.59 53.957Z" fill="#FF0000" />
        <path d="M229.52 58V43.6836H231.414V49.5625H238.855V43.6836H240.75V58H238.855V51.252H231.414V58H229.52Z" fill="#FF0000" />
        <path d="M243.943 43.6836H245.662V55.0215L253.279 43.6836H255.184V58H253.465V46.6914L245.838 58H243.943V43.6836Z" fill="#FF0000" />
        <path d="M259.002 54.4453L258.465 46.8574V43.6836H260.643V46.8574L260.135 54.4453H259.002ZM258.543 58V55.998H260.564V58H258.543Z" fill="#FF0000" />
      </svg>
  );
}

export default TextBlock;
