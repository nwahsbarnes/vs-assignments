import React from "react";
import "./BadgeForm.css";
import Badge from "./Badge";

export default function BadgeForm() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phoneNumber: "",
        favoriteFood: "",
        about: ""
    });
    const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
    const [badges, setBadges] = React.useState([]);

    function submitForm(event) {
        event.preventDefault();
        // Check for valid phone number
        if (!validatePhoneNumer(formData.phoneNumber)) {
            return;
        }
        setBadges(prevBadges => {
            return (
                [
                    prevBadges,
                    <Badge key={Math.random()} badge={formData} />
                ]
            );
        });
       
        clearFormInput();
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    React.useEffect(() => {
        setIsSubmitDisabled(getSubmitDisabled());
    }, [formData]);

    function validatePhoneNumer(phoneNumber) {
        if (typeof phoneNumber !== "string") {
            return false;
        }
        return phoneNumber.replaceAll("-", "").match(/[0-9]{10}/);
    }

    function clearFormInput() {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phoneNumber: "",
            favoriteFood: "",
            about: ""
        });
    }

    function getSubmitDisabled() {
        if (formData.firstName === "" || formData.firstName.length < 3
        || formData.lastName === "" || formData.lastName.length < 3
        || formData.email === "" || formData.email.length < 3
        || formData.birthPlace === "" || formData.birthPlace.length < 3
        || formData.favoriteFood === "" || formData.favoriteFood.length < 3
        || formData.about === "" || formData.about.length < 3) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <section className="form-container">
                <form className="form">
                    <div className="inputs">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange}
                            value={formData.firstName}
                            minLength="3"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleChange}
                            value={formData.lastName}
                            minLength="3"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                            minLength="3"
                        />
                        <input
                            type="text"
                            name="birthPlace"
                            placeholder="Place of Birth"
                            onChange={handleChange}
                            value={formData.birthPlace}
                            minLength="3"
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            onChange={handleChange}
                            value={formData.phoneNumber}
                            minLength="3"
                        />
                        <input
                            type="text"
                            name="favoriteFood"
                            placeholder="Favorite Food"
                            onChange={handleChange}
                            value={formData.favoriteFood}
                            minLength="3"
                        />
                    </div>
                    <textarea
                        name="about"
                        placeholder="Tell us about yourself"
                        onChange={handleChange}
                        value={formData.about}
                        minLength="3"
                    />
                    <button onClick={submitForm} disabled={isSubmitDisabled}>Submit</button>
                </form>
            </section>

            <section className="badges-container">
                <ul className="badges-list">
                    {badges}
                </ul>
            </section>
        </div>
    );
}