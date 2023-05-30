import React, { useState } from 'react';

const RegistrationForm = () => {
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === 'fullName') {
            setFullName(value)
        } else if (name === 'phoneNumber') {
            setPhoneNumber(value)
        } else if (name === 'email') {
            setEmail(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (fullName.trim() === '' || phoneNumber.trim() === '' || email.trim() === '') {
            alert('ПОЖАЛУЙСТА ЗАПОЛНИТЕ ФОРМУ!!!')
            return
        }

        alert(`Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail: ${email}`)

        setFullName('')
        setPhoneNumber('')
        setEmail('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>ФОРМА РЕГИСТРАЦИИ</h1>
            <div>
                <label htmlFor="fullName">ФИО:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">НОМЕР:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">НАЖАТЬ</button>
        </form>
    )
}

export default RegistrationForm;