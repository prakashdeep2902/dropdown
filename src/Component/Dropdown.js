import React, { useState } from 'react'
import '../assets/style.css'
import image from '../assets/images/down_word.png'
const Dropdown = ({ selected, setSelected }) => {

    const [ShowItem, SetShowItem] = useState(false);

    const options = ['Java', 'C and C++', 'C#', 'JavaScript', 'SQL', 'PHP']
  
    return (
        <>
            <div className='conatainer'>
                <div className='options'>
                    <p>choose your fav coding language</p>
                    <div className='dropimage'>
                        <img src={image} alt="" onClick={e => SetShowItem(!ShowItem)} />
                    </div>
                </div>
                {
                    ShowItem &&
                    (<div className='select-option'>
                        {
                            options.map((option, key) => (
                                <div onClick={(e) => {
                                    setSelected(option)
                                    SetShowItem(false)
                                    console.log(key)
                                }
                                }
                                    className="dropdown_item">

                                    {option }
                                  
                                   
                                </div>
                            ))
                        }

                    </div>)

                }


            </div>

        </>
    )
}

export default Dropdown
