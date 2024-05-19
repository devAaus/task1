import React from 'react'

const AuthorTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className='hover'>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AuthorTable