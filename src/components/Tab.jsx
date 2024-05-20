import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const tabs = [
    {
        id: 1,
        name: 'Blogs',
        path: '/dashboard'
    },
    {
        id: 2,
        name: 'Authors',
        path: '/dashboard/authors'
    },
    {
        id: 3,
        name: 'Comments',
        path: '/dashboard/comments'
    }
]

const Tab = () => {

    const pathName = useLocation()

    return (
        <div role="tablist" className="tabs tabs-lifted">
            {tabs.map((t) => (
                <Link
                    key={t.id}
                    to={t.path}
                    className={`tab ${pathName.pathname === t.path ? 'tab-active' : ''}`}
                >
                    {t.name}
                </Link>
            ))}
        </div>
    )
}

export default Tab