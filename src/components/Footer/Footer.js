import React from 'react'
import HeaderCSS from '../Header/Header.module.css'
import FooterCSS from '../Footer/Footer.module.css'

const Footer = () => {
  return (
    <div>
<div className={`flex  ${FooterCSS.blockResponsive}`}>
<div className="flex-1">
<img className={`ml-24 ${FooterCSS.imgResponsive}  h-screen max-width`} src={require('../../assets/heykel.png')} alt="heykel" />
</div>
<div className="flex-1 "> 
<div className={`${HeaderCSS.title} ${FooterCSS.titleResponsive} mt-24 text-7xl`}>Story</div>
<div className='text-white mt-8 mx-4'>I am among those who see Software Enginneering as hobby. I have 
improved myself so far and I continue to improve myself, I enjoy using 
new technologies I think teamwork is important for execution projects.
If I were to summarize lessons and courses I took to improve myself:I 
bought course from SADIK TURAN on Udemy the title of this course is
"Full Practical Web Development" in this course include the Frontend and
Backend Technologies but I finished Html, Css, Bootstrap, Javascript for 
now. I attended bootcamp from Kodluyoruz in this bootcamp include the 
Frontend Web Development technologies.There was many tasks for 
improve myself and I successed on these tasks. In this bootcamp
include Git, Html, Css, Javascript , React lessons .</div>

<div className={`${HeaderCSS.title} ${FooterCSS.brandResponsiveone} mt-16   text-7xl `}>FRONTEND </div>
<div className={`${HeaderCSS.title} ${FooterCSS.brandResponsivetwo} mt-4   text-7xl `}>DEVELOPER </div>



</div>
</div>

    </div>
  )
}

export default Footer