/* IMPORTANT LINK : { shorturl.at/agklI } */
window.addEventListener('load', () => {
    hide = () => {
        GPAelement = document.querySelector("#myForm > div.data_in_2.right_dash > ul > li:nth-child(4)");
           GPAelement.style.setProperty('display', 'none');
           requestAnimationFrame(hide);
   };
   
   hide();
});