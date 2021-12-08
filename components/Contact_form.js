import styles from "./components.module.css";
import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function Contact_form() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    const form_options = [
        { value: '0', label: 'Web Development' },
        { value: '1', label: 'Wordpress Website' },
        { value: '2', label: 'Shopify' },
        { value: '3', label: 'App Development' },
        { value: '4', label: 'Flutter App' },
        { value: '5', label: 'Graphic Designs' },
        { value: '6', label: 'Neon Designs' },
        { value: '7', label: 'Vector Designs' },
        { value: '8', label: 'ReactJS App' },
        { value: '9', label: 'NextJS App' },
        { value: '10', label: 'MERN Stack App' },
        { value: '11', label: 'Node JS - Rest API' },
        { value: '12', label: 'User Interface Design' }
    ]

    return (
        <div className={styles.form}>
            <form className={styles.form__data}>
                <div className={styles.form__data__div}>
                    <div className={styles.form__info}>
                        <div>
                            <Select options={form_options} defaultValue={form_options[0]} />
                        </div>
                        <div className={styles.form__info_name}>
                            <input
                                type="text"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            type="number"
                            placeholder="Number"
                        />
                        <input
                            type="text"
                            placeholder="Company Name"
                        />
                    </div>
                    <div className={styles.contact_desc}>
                        <Select
                            options={options}
                            value={value}
                            onChange={changeHandler}
                            className={styles.selectCountry}
                        />
                        <textarea
                            placeholder="Project Description"
                        ></textarea>
                    </div>
                </div>
                <button className={styles.formBtn}>Let&apos;s Talk about your Project</button>
            </form>
        </div>
    )
}