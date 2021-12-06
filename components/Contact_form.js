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

    return (
        <div className={styles.form}>
            <form className={styles.form__data}>
                <div className={styles.form__data__div}>
                    <div className={styles.form__info}>
                        <select className={styles.form__options}>
                            <option value="0">I&apos;am Intersted In:</option>
                            <option value="1">Web Development</option>
                            <option value="2">App Development</option>
                            <option value="3">Graphic Designing</option>
                            <option value="4">ReactJS App</option>
                            <option value="5">NextJS App</option>
                            <option value="6">MERN Stack App</option>
                            <option value="7">Node JS - Rest API</option>
                            <option value="8">API Integration</option>
                            <option value="9">Flutter App</option>
                            <option value="10">Neon Design</option>
                            <option value="11">Poster Design</option>
                            <option value="12">User Interface Design</option>
                        </select>
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