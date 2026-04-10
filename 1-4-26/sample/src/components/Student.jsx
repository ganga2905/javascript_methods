import PropTypes from 'prop-types'

const Student=({name,age,isMarried})=>{

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <td>{name}</td>
                </tr>
                 <tr>
                    <th>age</th>
                    <td>{age}</td>
                </tr>
                 <tr>
                    <th>married</th>
                    <td>{isMarried?"yes":"no"}</td>
                </tr>
                </thead>
            </table>

        </div>
    )
}
export default Student;
 Student.PropTypes={
    name:PropTypes.string,
    age:PropTypes.number
 }