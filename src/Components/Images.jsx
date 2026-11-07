import img1 from '/t3.jpg'
import img2 from '/bed.jpg'
import img3 from '/bed2.jpg'
import img4 from '/camera.jpg'
import img5 from '/cheese.jpg'
import img6 from '/cofee.jpog.webp'
import img7 from '/chillipower.jpg'
import img8 from '/dinnertable1.jpg'
import img9 from '/t10.jpg'
import img10 from '/curd.jpg'
import img11 from '/watch4.jpg'
import img12 from '/t6.jpg'
import img13 from '/sofatv.jpg'
import img14 from '/ricebag.jpg'
import img15 from '/sofatv2.jpg'
import img16 from '/salt.jpg'
import { useState } from 'react'

const images=[
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11
    ,img12,img13,img14,img15,img16
]

export default function Images({row,col,grid}){
    const[select,setSelect]=useState(null)
    function HandleImage(index){
        setSelect(index)
    }
    function Clear(){
        setSelect(null)
    }
    return(
        <div className='images'>
            {grid&&
            (Array.from({length:row}).map((_,rowIndex)=>{
                return(
                    <div style={{display:'flex', gap:'30px'}}>
                        {Array.from({length:col}).map((_,colIndex)=>{
                            const Imageindex=rowIndex*col+colIndex
                            return(
                                <div key={colIndex}>
                                   <img src={images[Imageindex]} onClick={()=>HandleImage(Imageindex)}/> 
                                </div>
                            )
                        })}
                    </div>
                )
            })
        )}
        {select!==null&&(
            <div className='selectedImage'>
            <img src={images[select]}/>
            <button onClick={Clear}>X</button>
            </div>
        )}

        </div>
    )

}