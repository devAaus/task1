import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const AuthorForm = ({ handleSubmit, fullName, email, setEmail, setFullName }) => {
    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

            <Input
                type="text"
                placeholder="Full Name"
                name='fullName'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
            />

            <Input
                type="email"
                placeholder="Email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <Button
                type="submit"
                variant="default"
                size="lg"
            >
                Submit
            </Button>

        </form>
    );
}

export default AuthorForm;
