import React from 'react'
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

export default function PostFilter({setFilter, filter}) {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e.target.value})}
                defaultValue="Сортировка по"
                options={[
                    {
                        value: 'title',
                        name: 'По заголовку'
                    },
                    {
                        value: 'body',
                        name: 'По содержимому'
                    }
                ]}

            />
        </div>
    )
}
