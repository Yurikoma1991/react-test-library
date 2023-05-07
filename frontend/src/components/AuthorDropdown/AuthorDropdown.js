import React, { useState, useEffect } from 'react';
import DropdownList from 'react-widgets/lib/DropdownList'

import { listAuthors } from '../../services/authors';

function AuthorDropdown({ value, onChange }) {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            const authorArr = [
                {id:-1, name:'No Author'},
                ...data.map(item => {
                    return {id: item.id, name:`${item.firstName} ${item.lastName}`}})
            ];
            setAuthors(authorArr);
        };

        fetchAuthors();
    }, []);

    return (
        <div className="AuthorDropdown">
            <DropdownList
                value={ value }
                data={ authors }
                textField="name"
                valueField="id"
                onChange={ onChange }
                allowCreate={ false }
            />
        </div>
    );
}

export default AuthorDropdown;
