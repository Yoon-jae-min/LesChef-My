import React, { useEffect } from "react";

const CategoryText = (props) => {
    const {menuModal} = props;

    useEffect(() => {
        const textPs = document.querySelectorAll('.menuText');

        if(!menuModal){
            textPs.forEach((textP) => {
                textP.classList.add('noneShow');
            })
        }else{
            textPs.forEach((textP) => {
                textP.classList.remove('noneShow');
            })
        }
    }, [menuModal]);

    return(
        <div className="mainCategoryText">
                <div><p className="menuText">Korean</p></div>
                <div><p className="menuText">Western</p></div>
                <div><p className="menuText">Japanese</p></div>
                <div><p className="menuText">Chinese</p></div>
                <div><p className="menuText">Share Recipe</p></div>
                <div><p className="menuText">Community</p></div>
        </div>
    )
}

export default CategoryText;