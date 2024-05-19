import React from 'react'
import BlogsTable from '../components/BlogsTable'
import AuthorTable from '../components/AuthorTable'
import CommentsTable from '../components/CommentsTable'
import BlogForm from '../components/BlogForm'
import AuthorForm from '../components/AuthorForm'
import BlogsTab from '../components/BlogsTab'
import AuthorsTab from '../components/AuthorsTab'

const tabs = [
    {
        id: 1,
        name: 'Blogs'
    },
    {
        id: 2,
        name: 'Authors'
    },
    {
        id: 3,
        name: 'Comments'
    }
]

const Dashboard = () => {

    const [activeTab, setActiveTab] = React.useState('Authors')


    return (
        <div className='flex flex-col justify-center gap-4'>
            <h2 className='text-4xl text-title font-bold mb-6 text-center'>
                Admin Dashboard
            </h2>

            <div role="tablist" className="tabs tabs-lifted">
                {tabs.map((t) => (
                    <a
                        key={t.id}
                        role="tab"
                        className={`tab ${activeTab === `${t.name}` ? 'tab-active' : ''}`}
                        onClick={() => setActiveTab(`${t.name}`)}
                    >
                        {t.name}
                    </a>
                ))}
            </div>


            {activeTab === 'Blogs' &&
                <BlogsTab />
            }

            {activeTab === 'Authors' &&
                <AuthorsTab />
            }

            {activeTab === 'Comments' &&
                <CommentsTable />
            }

        </div>
    )
}

export default Dashboard