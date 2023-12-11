import { useState, useEffect, ReactNode } from 'react';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import formatPrice from '@/components/FormatPrice';
import FormSubmit from '@/components/FormSubmit'

interface CartItem {
    name: ReactNode;
    _id: any;
    // Define the structure of your cart item
    price: number;
    // other properties if any
}

export default function Checkout() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        // Check if running in the browser before accessing localStorage
        if (typeof window !== 'undefined') {
            const cartItemsString = localStorage.getItem('cartItems');
            const parsedCartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
            setCartItems(parsedCartItems);
        }
    }, []);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const [cardNumber, setCardNumber] = useState('');

    const handleCardNumberChange = (event: { target: { value: string; }; }) => {
        let formattedInput = event.target.value.replace(/[^\d]/g, ''); // Remove non-digit characters

        // Add a space after every fourth character
        formattedInput = formattedInput.replace(/(\d{4})(?=\d)/g, '$1 ');

        setCardNumber(formattedInput);
    };

    const d = new Date();
    const year = d.getFullYear();
    const yearFinalDigits = year % 100;

    return (
        <>
            <Layout headingTitle='Checkout'>
                <form action="" className='max-w-md w-full text-xl'>
                    <fieldset className='rounded p-3 border-gray-600 border-2 w-full my-2'>
                        <h3>Your Cart:</h3>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    <div className='flex gap-6 justify-between'>
                                        {/* Display cart item details */}
                                        <p className='p-1'>{item.name}</p>
                                        <p className='p-1'>{formatPrice(item.price)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className='mt-6 text-right text-2xl'>Total Price: {formatPrice(calculateTotalPrice())}</p>
                    </fieldset>
                    <fieldset className='rounded p-3 border-gray-600 border-2 w-full my-2'>
                        <h3>Contact Information</h3>
                        <label htmlFor="customerPhone" className='my-2 block'>Phone: <input required type="tel" name="customerPhone" id="customerPhone" className='py-1 px-2 w-full' placeholder='(000) 000-0000' /></label>
                        <label htmlFor="customerEmail" className='my-2 block'>Email: <input required type="email" name="customerEmail" id="customerEmail" className='py-1 px-2 w-full' placeholder='johndoe@something.com' /></label>
                    </fieldset>
                    <fieldset className='rounded p-3 border-gray-600 border-2 w-full my-2'>
                        <h3>Billing Information</h3>
                        <label htmlFor="customerFName" className='my-2 block'>First Name: <input required type="text" name="customerFName" id="customerFName" className='py-1 px-2 w-full' /></label>
                        <label htmlFor="customerLName" className='my-2 block'>Last Name: <input required type="text" name="customerLName" id="customerLName" className='py-1 px-2 w-full' /></label>
                        <label htmlFor="Country" className='my-2 block'>Country / Region: <select id="country" name="country" className='py-1 px-2 w-full' >
                            <option disabled selected> -- select an option -- </option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AG">Antigua & Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia & Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="CD">Democratic Republic of the Congo</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="CI">Ivory Coast</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="XK">Kosovo</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="KP">North Korea</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestine</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn Islands</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="RW">Rwanda</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome & Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="KR">South Korea</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SH">St. Helena</option>
                            <option value="KN">St. Kitts & Nevis</option>
                            <option value="LC">St. Lucia</option>
                            <option value="PM">St. Pierre & Miquelon</option>
                            <option value="VC">St. Vincent & Grenadines</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad & Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks & Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VA">Vatican City</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="WF">Wallis & Futuna</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select></label>
                        <label htmlFor="StreetAddress" className='my-2 block'>Street Address: <input required type="text" name="StreetAddress" id="StreetAddress" className='py-1 px-2 w-full' /></label>
                        <label htmlFor="StreetAddress2" className='my-2 block'>Apartment, Suite, Unit (Optional): <input type="text" name="StreetAddress2" id="StreetAddress2" className='py-1 px-2 w-full' /></label>
                        <label htmlFor="City" className='my-2 block'>Town / City: <input required type="text" name="City" id="City" className='py-1 px-2 w-full' /></label>
                        <label htmlFor="State" className='my-2 block'>State / Province: <input required type="text" name="State" id="State" className='py-1 px-2 w-full' /></label>
                        <label htmlFor="Zip" className='my-2 block'>Zip / Postal Code: <input required type="text" name="Zip" id="Zip" className='py-1 px-2 w-full' /></label>

                    </fieldset>
                    <fieldset className='rounded p-3 border-gray-600 border-2 w-full my-2'>
                        <h3>Payment Information</h3>
                        <label htmlFor="CardNum" className='my-2 block'>
                            Card Number:{' '}
                            <input
                                required
                                type="text"
                                name="CardNum"
                                id="CardNum"
                                className='py-1 px-2 w-full'
                                pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="1234 1234 1234 1234"
                                title="1234 1234 1234 1234"
                                maxLength={19}
                            />
                        </label>
                        <div className='flex gap-2'>
                            <div className='flex flex-col'><label htmlFor="Expiration" className='my-2 block'>Expiration: <input required type="text" name="Expiration" id="Expiration" className='py-1 px-2 w-full' pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
                                title="Enter a date in this format MM/YY" placeholder={`12/${yearFinalDigits}`} /></label></div>
                            <div className='flex flex-col'><label htmlFor="CVC" className='my-2 block'>CVC: <input required type="num]" maxLength={3} name="CVC" id="CVC" className='py-1 px-2 w-full' pattern="[0-9]{3}" title="Enter a date in this format 123" placeholder='123' /></label></div>
                        </div>
                    </fieldset>
                    <FormSubmit linkTitle={'Submit Order'} center></FormSubmit>
                </form>
                <span className='w-96 h-px bg-slate-800 my-2 block mx-auto'></span>
                <Button linkTitle="Shop for More" href='/shop' />
            </Layout >
        </>
    );
}