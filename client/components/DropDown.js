import React from 'react'
import products from '../pages/index'
import types from '../pages/index'

class DropDownCategory extends React.Component {
    render() {
        return (
            <div>
                <select>
                    <option selected disabled="true">Select Category</option>
                    {
                        types.Component.map((result) => (<option text={result._id}>{result.name}</option>))
                    }

                </select>
            </div>
        )
    }
}

export default DropDownCategory