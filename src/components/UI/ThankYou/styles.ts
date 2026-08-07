'use client'

import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
from{
opacity:0;
transform:translateY(40px);
}

to{
opacity:1;
transform:translateY(0);
}
`

const rotate = keyframes`
from{
transform:rotate(0deg);
}

to{
transform:rotate(360deg);
}
`

const pop = keyframes`
0%{
transform:scale(.5);
opacity:0;
}

70%{
transform:scale(1.12);
}

100%{
transform:scale(1);
opacity:1;
}
`

const fill = keyframes`
from{
width:0%;
}

to{
width:100%;
}
`

export const Wrapper = styled.section`
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:20px;

background:linear-gradient(
135deg,
#eefcf3,
#dff7e6,
#c8edd5
);
`

export const Card = styled.div`

width:100%;
max-width:680px;

background:#fff;

padding:60px 45px;

border-radius:24px;

text-align:center;

box-shadow:
0 20px 60px rgba(0,0,0,.12),
0 8px 25px rgba(0,0,0,.08);

animation:${fadeUp} .7s ease;

.checkmark{

width:100px;
height:100px;

margin:auto auto 30px;

border-radius:50%;

display:flex;
justify-content:center;
align-items:center;

background:linear-gradient(
135deg,
#22c55e,
#16a34a
);

color:#fff;

font-size:55px;

font-weight:bold;

box-shadow:0 15px 40px rgba(34,197,94,.35);

animation:${pop} .7s ease;

}

h1{

margin:0;

font-size:42px;

font-weight:800;

color:#15803d;

}

h3{

margin-top:18px;

font-size:28px;

font-weight:700;

line-height:1.4;

color:#222;

}

p{

margin-top:18px;

font-size:18px;

line-height:1.8;

color:#666;

}

.small{

font-size:15px;

margin-top:15px;

color:#888;

}

span{

display:block;

margin-top:20px;

font-size:17px;

font-weight:700;

color:#16a34a;

}

button{

margin-top:30px;

padding:15px 35px;

border:none;

border-radius:50px;

background:linear-gradient(
135deg,
#25D366,
#1ebe57
);

color:#fff;

font-size:16px;

font-weight:600;

cursor:pointer;

transition:.3s;

box-shadow:0 10px 30px rgba(37,211,102,.35);

}

button:hover{

transform:translateY(-3px);

box-shadow:0 15px 35px rgba(37,211,102,.45);

}

button:active{

transform:scale(.98);

}

@media(max-width:768px){

padding:40px 25px;

.checkmark{

width:80px;
height:80px;

font-size:42px;

}

h1{

font-size:34px;

}

h3{

font-size:22px;

}

p{

font-size:16px;

}

span{

font-size:15px;

}

button{

width:100%;

}

}

@media(max-width:480px){

padding:35px 20px;

.checkmark{

width:70px;
height:70px;

font-size:36px;

}

h1{

font-size:30px;

}

h3{

font-size:20px;

}

p{

font-size:15px;

}

}
`

export const Loader = styled.div`

width:60px;
height:60px;

margin:35px auto;

border-radius:50%;

border:6px solid #d1fae5;

border-top-color:#16a34a;

animation:${rotate} 1s linear infinite;

`

export const ProgressBar = styled.div`

width:100%;

height:10px;

margin:30px 0;

background:#e5e7eb;

border-radius:50px;

overflow:hidden;

div{

height:100%;

background:linear-gradient(
90deg,
#25D366,
#16a34a
);

animation:${fill} 3s linear forwards;

}

`