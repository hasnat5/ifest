import { FAQ } from '@/models/interface'
import React from 'react'

const FAQ: React.FC<FAQ> = (props) => {
    return (
        <div className="collapse collapse-plus bg-quaternary text-white faqborder" >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title">
                <h3>
                    {props.title}
                </h3>
            </div>
            <div className="collapse-content">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default FAQ