import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/header';
import Footer from '../components/footer';
import CaptchaComponent from '../components/form'; // Import your CAPTCHA component
import { Link } from 'react-router-dom';
import 'select2/dist/css/select2.css';
import 'select2';
import $ from 'jquery';

const DigitalMarketing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    service: ' Branding',
    message: '',
    countryCode: '+91', // Default country code (India)
    selectedCountry: 'India', // Default selected country
    captcha: '',
  });

  const [errors, setErrors] = useState({
   name: false,
   email: false,
   subject: false,
   countryCode: false,
   phone: false,
   service: false,
   message: false,
   captcha: false,
 });

 const [formSubmitTriggered, setFormSubmitTriggered] = useState(false);
 const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

 const countries = [
   { code: '+93', name: 'Afghanistan', flag: 'AF' },
   { code: '+355', name: 'Albania', flag: 'AL' },
   { code: '+213', name: 'Algeria', flag: 'DZ' },
   { code: '+1684', name: 'American Samoa', flag: 'AS' },
   { code: '+376', name: 'Andorra', flag: 'AD' },
   { code: '+244', name: 'Angola', flag: 'AO' },
   { code: '+1264', name: 'Anguilla', flag: 'AI' },
   { code: '+672', name: 'Antarctica', flag: 'AQ' },
   { code: '+1268', name: 'Antigua and Barbuda', flag: 'AG' },
   { code: '+54', name: 'Argentina', flag: 'AR' },
   { code: '+374', name: 'Armenia', flag: 'AM' },
   { code: '+297', name: 'Aruba', flag: 'AW' },
   { code: '+61', name: 'Australia', flag: 'AU' },
   { code: '+43', name: 'Austria', flag: 'AT' },
   { code: '+994', name: 'Azerbaijan', flag: 'AZ' },
   { code: '+1242', name: 'Bahamas', flag: 'BS' },
   { code: '+973', name: 'Bahrain', flag: 'BH' },
   { code: '+880', name: 'Bangladesh', flag: 'BD' },
   { code: '+1246', name: 'Barbados', flag: 'BB' },
   { code: '+375', name: 'Belarus', flag: 'BY' },
   { code: '+32', name: 'Belgium', flag: 'BE' },
   { code: '+501', name: 'Belize', flag: 'BZ' },
   { code: '+229', name: 'Benin', flag: 'BJ' },
   { code: '+1441', name: 'Bermuda', flag: 'BM' },
   { code: '+975', name: 'Bhutan', flag: 'BT' },
   { code: '+591', name: 'Bolivia', flag: 'BO' },
   { code: '+387', name: 'Bosnia and Herzegovina', flag: 'BA' },
   { code: '+267', name: 'Botswana', flag: 'BW' },
   { code: '+55', name: 'Brazil', flag: 'BR' },
   { code: '+673', name: 'Brunei', flag: 'BN' },
   { code: '+359', name: 'Bulgaria', flag: 'BG' },
   { code: '+226', name: 'Burkina Faso', flag: 'BF' },
   { code: '+257', name: 'Burundi', flag: 'BI' },
   { code: '+855', name: 'Cambodia', flag: 'KH' },
   { code: '+237', name: 'Cameroon', flag: 'CM' },
   { code: '+1', name: 'Canada', flag: 'CA' },
   { code: '+238', name: 'Cape Verde', flag: 'CV' },
   { code: '+345', name: 'Cayman Islands', flag: 'KY' },
   { code: '+236', name: 'Central African Republic', flag: 'CF' },
   { code: '+56', name: 'Chile', flag: 'CL' },
   { code: '+86', name: 'China', flag: 'CN' },
   { code: '+61', name: 'Christmas Island', flag: 'CX' },
   { code: '+61', name: 'Cocos Islands', flag: 'CC' },
   { code: '+57', name: 'Colombia', flag: 'CO' },
   { code: '+269', name: 'Comoros', flag: 'KM' },
   { code: '+242', name: 'Congo (Congo-Brazzaville)', flag: 'CG' },
   { code: '+243', name: 'Congo (Democratic Republic of the Congo)', flag: 'CD' },
   { code: '+682', name: 'Cook Islands', flag: 'CK' },
   { code: '+506', name: 'Costa Rica', flag: 'CR' },
   { code: '+225', name: 'Ivory Coast', flag: 'CI' },
   { code: '+385', name: 'Croatia', flag: 'HR' },
   { code: '+53', name: 'Cuba', flag: 'CU' },
   { code: '+357', name: 'Cyprus', flag: 'CY' },
   { code: '+420', name: 'Czech Republic', flag: 'CZ' },
   { code: '+45', name: 'Denmark', flag: 'DK' },
   { code: '+253', name: 'Djibouti', flag: 'DJ' },
   { code: '+1', name: 'Dominica', flag: 'DM' },
   { code: '+1809', name: 'Dominican Republic', flag: 'DO' },
   { code: '+670', name: 'East Timor', flag: 'TL' },
   { code: '+593', name: 'Ecuador', flag: 'EC' },
   { code: '+20', name: 'Egypt', flag: 'EG' },
   { code: '+503', name: 'El Salvador', flag: 'SV' },
   { code: '+240', name: 'Equatorial Guinea', flag: 'GQ' },
   { code: '+291', name: 'Eritrea', flag: 'ER' },
   { code: '+372', name: 'Estonia', flag: 'EE' },
   { code: '+251', name: 'Ethiopia', flag: 'ET' },
   { code: '+500', name: 'Falkland Islands', flag: 'FK' },
   { code: '+298', name: 'Faroe Islands', flag: 'FO' },
   { code: '+679', name: 'Fiji', flag: 'FJ' },
   { code: '+358', name: 'Finland', flag: 'FI' },
   { code: '+33', name: 'France', flag: 'FR' },
   { code: '+594', name: 'French Guiana', flag: 'GF' },
   { code: '+689', name: 'French Polynesia', flag: 'PF' },
   { code: '+241', name: 'Gabon', flag: 'GA' },
   { code: '+220', name: 'Gambia', flag: 'GM' },
   { code: '+995', name: 'Georgia', flag: 'GE' },
   { code: '+49', name: 'Germany', flag: 'DE' },
   { code: '+233', name: 'Ghana', flag: 'GH' },
   { code: '+350', name: 'Gibraltar', flag: 'GI' },
   { code: '+30', name: 'Greece', flag: 'GR' },
   { code: '+299', name: 'Greenland', flag: 'GL' },
   { code: '+1', name: 'Grenada', flag: 'GD' },
   { code: '+590', name: 'Guadeloupe', flag: 'GP' },
   { code: '+502', name: 'Guatemala', flag: 'GT' },
   { code: '+224', name: 'Guinea', flag: 'GN' },
   { code: '+245', name: 'Guinea-Bissau', flag: 'GW' },
   { code: '+595', name: 'Guyana', flag: 'GY' },
   { code: '+509', name: 'Haiti', flag: 'HT' },
   { code: '+504', name: 'Honduras', flag: 'HN' },
   { code: '+852', name: 'Hong Kong', flag: 'HK' },
   { code: '+36', name: 'Hungary', flag: 'HU' },
   { code: '+354', name: 'Iceland', flag: 'IS' },
   { code: '+91', name: 'India', flag: 'IN' },
   { code: '+62', name: 'Indonesia', flag: 'ID' },
   { code: '+98', name: 'Iran', flag: 'IR' },
   { code: '+964', name: 'Iraq', flag: 'IQ' },
   { code: '+353', name: 'Ireland', flag: 'IE' },
   { code: '+972', name: 'Israel', flag: 'IL' },
   { code: '+39', name: 'Italy', flag: 'IT' },
   { code: '+1', name: 'Jamaica', flag: 'JM' },
   { code: '+81', name: 'Japan', flag: 'JP' },
   { code: '+962', name: 'Jordan', flag: 'JO' },
   { code: '+7', name: 'Kazakhstan', flag: 'KZ' },
   { code: '+254', name: 'Kenya', flag: 'KE' },
   { code: '+686', name: 'Kiribati', flag: 'KI' },
   { code: '+850', name: 'North Korea', flag: 'KP' },
   { code: '+82', name: 'South Korea', flag: 'KR' },
   { code: '+965', name: 'Kuwait', flag: 'KW' },
   { code: '+996', name: 'Kyrgyzstan', flag: 'KG' },
   { code: '+856', name: 'Laos', flag: 'LA' },
   { code: '+371', name: 'Latvia', flag: 'LV' },
   { code: '+961', name: 'Lebanon', flag: 'LB' },
   { code: '+266', name: 'Lesotho', flag: 'LS' },
   { code: '+231', name: 'Liberia', flag: 'LR' },
   { code: '+218', name: 'Libya', flag: 'LY' },
   { code: '+423', name: 'Liechtenstein', flag: 'LI' },
   { code: '+370', name: 'Lithuania', flag: 'LT' },
   { code: '+352', name: 'Luxembourg', flag: 'LU' },
   { code: '+853', name: 'Macau', flag: 'MO' },
   { code: '+389', name: 'Macedonia', flag: 'MK' },
   { code: '+261', name: 'Madagascar', flag: 'MG' },
   { code: '+265', name: 'Malawi', flag: 'MW' },
   { code: '+60', name: 'Malaysia', flag: 'MY' },
   { code: '+960', name: 'Maldives', flag: 'MV' },
   { code: '+223', name: 'Mali', flag: 'ML' },
   { code: '+356', name: 'Malta', flag: 'MT' },
   { code: '+692', name: 'Marshall Islands', flag: 'MH' },
   { code: '+596', name: 'Martinique', flag: 'MQ' },
   { code: '+222', name: 'Mauritania', flag: 'MR' },
   { code: '+230', name: 'Mauritius', flag: 'MU' },
   { code: '+262', name: 'Mayotte', flag: 'YT' },
   { code: '+52', name: 'Mexico', flag: 'MX' },
   { code: '+691', name: 'Micronesia', flag: 'FM' },
   { code: '+373', name: 'Moldova', flag: 'MD' },
   { code: '+377', name: 'Monaco', flag: 'MC' },
   { code: '+976', name: 'Mongolia', flag: 'MN' },
   { code: '+382', name: 'Montenegro', flag: 'ME' },
   { code: '+1664', name: 'Montserrat', flag: 'MS' },
   { code: '+212', name: 'Morocco', flag: 'MA' },
   { code: '+258', name: 'Mozambique', flag: 'MZ' },
   { code: '+95', name: 'Myanmar', flag: 'MM' },
   { code: '+264', name: 'Namibia', flag: 'NA' },
   { code: '+674', name: 'Nauru', flag: 'NR' },
   { code: '+977', name: 'Nepal', flag: 'NP' },
   { code: '+31', name: 'Netherlands', flag: 'NL' },
   { code: '+599', name: 'Netherlands Antilles', flag: 'AN' },
   { code: '+687', name: 'New Caledonia', flag: 'NC' },
   { code: '+64', name: 'New Zealand', flag: 'NZ' },
   { code: '+505', name: 'Nicaragua', flag: 'NI' },
   { code: '+227', name: 'Niger', flag: 'NE' },
   { code: '+234', name: 'Nigeria', flag: 'NG' },
   { code: '+683', name: 'Niue', flag: 'NU' },
   { code: '+672', name: 'Norfolk Island', flag: 'NF' },
   { code: '+1', name: 'North Macedonia', flag: 'MK' },
   { code: '+47', name: 'Norway', flag: 'NO' },
   { code: '+968', name: 'Oman', flag: 'OM' },
   { code: '+92', name: 'Pakistan', flag: 'PK' },
   { code: '+680', name: 'Palau', flag: 'PW' },
   { code: '+970', name: 'Palestinian Territories', flag: 'PS' },
   { code: '+507', name: 'Panama', flag: 'PA' },
   { code: '+675', name: 'Papua New Guinea', flag: 'PG' },
   { code: '+595', name: 'Paraguay', flag: 'PY' },
   { code: '+51', name: 'Peru', flag: 'PE' },
   { code: '+63', name: 'Philippines', flag: 'PH' },
   { code: '+48', name: 'Poland', flag: 'PL' },
   { code: '+351', name: 'Portugal', flag: 'PT' },
   { code: '+1', name: 'Puerto Rico', flag: 'PR' },
   { code: '+974', name: 'Qatar', flag: 'QA' },
   { code: '+262', name: 'Réunion', flag: 'RE' },
   { code: '+40', name: 'Romania', flag: 'RO' },
   { code: '+7', name: 'Russia', flag: 'RU' },
   { code: '+250', name: 'Rwanda', flag: 'RW' },
   { code: '+290', name: 'Saint Helena', flag: 'SH' },
   { code: '+1', name: 'Saint Kitts and Nevis', flag: 'KN' },
   { code: '+1', name: 'Saint Lucia', flag: 'LC' },
   { code: '+1', name: 'Saint Vincent and the Grenadines', flag: 'VC' },
   { code: '+685', name: 'Samoa', flag: 'WS' },
   { code: '+378', name: 'San Marino', flag: 'SM' },
   { code: '+239', name: 'São Tomé and Príncipe', flag: 'ST' },
   { code: '+966', name: 'Saudi Arabia', flag: 'SA' },
   { code: '+221', name: 'Senegal', flag: 'SN' },
   { code: '+381', name: 'Serbia', flag: 'RS' },
   { code: '+248', name: 'Seychelles', flag: 'SC' },
   { code: '+232', name: 'Sierra Leone', flag: 'SL' },
   { code: '+65', name: 'Singapore', flag: 'SG' },
   { code: '+1', name: 'Sint Maarten', flag: 'SX' },
   { code: '+421', name: 'Slovakia', flag: 'SK' },
   { code: '+386', name: 'Slovenia', flag: 'SI' },
   { code: '+677', name: 'Solomon Islands', flag: 'SB' },
   { code: '+252', name: 'Somalia', flag: 'SO' },
   { code: '+27', name: 'South Africa', flag: 'ZA' },
   { code: '+82', name: 'South Korea', flag: 'KR' },
   { code: '+34', name: 'Spain', flag: 'ES' },
   { code: '+94', name: 'Sri Lanka', flag: 'LK' },
   { code: '+249', name: 'Sudan', flag: 'SD' },
   { code: '+597', name: 'Suriname', flag: 'SR' },
   { code: '+268', name: 'Swaziland', flag: 'SZ' },
   { code: '+46', name: 'Sweden', flag: 'SE' },
   { code: '+41', name: 'Switzerland', flag: 'CH' },
   { code: '+963', name: 'Syria', flag: 'SY' },
   { code: '+886', name: 'Taiwan', flag: 'TW' },
   { code: '+992', name: 'Tajikistan', flag: 'TJ' },
   { code: '+255', name: 'Tanzania', flag: 'TZ' },
   { code: '+66', name: 'Thailand', flag: 'TH' },
   { code: '+228', name: 'Togo', flag: 'TG' },
   { code: '+690', name: 'Tokelau', flag: 'TK' },
   { code: '+676', name: 'Tonga', flag: 'TO' },
   { code: '+1', name: 'Trinidad and Tobago', flag: 'TT' },
   { code: '+216', name: 'Tunisia', flag: 'TN' },
   { code: '+90', name: 'Turkey', flag: 'TR' },
   { code: '+993', name: 'Turkmenistan', flag: 'TM' },
   { code: '+1', name: 'Turks and Caicos Islands', flag: 'TC' },
   { code: '+688', name: 'Tuvalu', flag: 'TV' },
   { code: '+256', name: 'Uganda', flag: 'UG' },
   { code: '+380', name: 'Ukraine', flag: 'UA' },
   { code: '+971', name: 'United Arab Emirates', flag: 'AE' },
   { code: '+44', name: 'United Kingdom', flag: 'GB' },
   { code: '+1', name: 'United States', flag: 'US' },
   { code: '+598', name: 'Uruguay', flag: 'UY' },
   { code: '+998', name: 'Uzbekistan', flag: 'UZ' },
   { code: '+678', name: 'Vanuatu', flag: 'VU' },
   { code: '+379', name: 'Vatican City', flag: 'VA' },
   { code: '+58', name: 'Venezuela', flag: 'VE' },
   { code: '+84', name: 'Vietnam', flag: 'VN' },
   { code: '+1', name: 'Virgin Islands', flag: 'VI' },
   { code: '+967', name: 'Yemen', flag: 'YE' },
   { code: '+260', name: 'Zambia', flag: 'ZM' },
   { code: '+263', name: 'Zimbabwe', flag: 'ZW' }
 ];

 const captchaRef = useRef(null);
 const selectRef = useRef(null); // Ref for the select dropdown

 // Handle form input changes for all fields
 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
 };

 // Handle CAPTCHA value changes
 const handleCaptchaChange = (captchaValue) => {
   setFormData((prevData) => ({
     ...prevData,
     captcha: captchaValue,
   }));
 };

 // Handle form submission
 const handleSubmit = (e) => {
   e.preventDefault();

   // Validate the form fields
   const newErrors = {
     name: !formData.name,
     email: !formData.email,
     subject: !formData.subject,
     phone: !formData.phone,
     countryCode: !formData.countryCode,
     message: !formData.message,
     captcha: !formData.captcha,
   };

   setErrors(newErrors);

   const hasErrors = Object.values(newErrors).includes(true);
   if (hasErrors) return;

   // Log the form data before sending to debug
   console.log("Form Data on submit:", formData);

   // Send email via emailjs
   emailjs
     .send(
       'service_diuxxx3', // Your service ID
       'template_bqh23hf', // Your template ID
       {
         to_name: 'Support Team',
         name: formData.name,
         email: formData.email,
         subject: formData.subject,
         phone: `${formData.countryCode} ${formData.phone}`, // Ensure correct phone with country code
         service: formData.service,
         message: formData.message,
         captcha: formData.captcha,
       },
       'o-FXwyFkn6Hts1g5y' // Your user ID
     )
     .then(
       (response) => {
         console.log('Email sent successfully:', response);
         setModalVisible(true); // Show the modal on success
       },
       (error) => {
         console.error('Error sending email:', error);
         alert('Failed to send message.');
       }
     );

   // Reset the form after successful submission
   setFormData({
     name: '',
     email: '',
     subject: '',
     phone: '',
     service: '',
     message: '',
     countryCode: '+91', // Default to country code
     selectedCountry: 'India', // Default country
     captcha: '',
   });

   // Reset CAPTCHA after submission
   if (captchaRef.current) {
     captchaRef.current.reset();
   }

   // Reset formSubmitTriggered flag after form submission
   setFormSubmitTriggered(false);
 };

 // Handle country selection change
 const handleCountrySelect = (e) => {
   const selectedCountryCode = e.target.value;
   const selectedCountry = countries.find(
     (country) => country.code === selectedCountryCode
   );

   setFormData((prevState) => ({
     ...prevState, // Spread the previous form data to keep other fields intact
     countryCode: selectedCountry.code,
     selectedCountry: selectedCountry.name,
   }));

   console.log("Selected Country Code:", selectedCountry.code);  // Debugging line
 };

 // Initialize select2 for the country dropdown
 useEffect(() => {
   const $select = $(selectRef.current);
   $select.select2({
     placeholder: 'Select Country',
     width: '100%',
   });

   // Listen for change on select2 to update the country code
   $select.on('change', function () {
     const selectedValue = $(this).val();
     handleCountrySelect({ target: { value: selectedValue } });
   });

   // Cleanup function to destroy the select2 instance when the component unmounts
   return () => {
     $select.select2('destroy');
   };
 }, []);  // Only run once on mount

 // Reset the form
 const handleReset = () => {
   setFormData({
     name: '',
     email: '',
     subject: '',
     phone: '',
     service: '',
     message: '',
     countryCode: '+91', // Default to country code
     selectedCountry: 'India', // Default country
     captcha: '',
   });

   setErrors({
     name: false,
     email: false,
     subject: false,
     service: false,
     countryCode: false,
     phone: false,
     message: false,
     captcha: false,
   });

   setFormSubmitTriggered(false);

   // Reset the CAPTCHA component
   if (captchaRef.current) {
     captchaRef.current.reset();
   }

   // Reset the select dropdown using select2
   $(selectRef.current).val('+91').trigger('change');
 };

 // Modal component for success message
 const Modal = ({ message, onClose }) => (
   <div
     className="modal fade show"
     style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
     tabIndex="-1"
     role="dialog"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
   >
     <div className="modal-dialog" role="document">
       <div className="modal-content">
         <div className="modal-header">
           <h5 className="modal-title" id="exampleModalLabel">
             Success
           </h5>
           <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div className="modal-body">{message}</div>
         <div className="modal-footer">
           <button type="button" className="btn btn-secondary" onClick={onClose}>
             Close
           </button>
         </div>
       </div>
     </div>
   </div>
 );


  return (
    <div>
      <Header />
      <section className="page-title wow fadeIn" style={{ backgroundImage: 'url(images/background/digital-marketing.jpg)' }}>
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">Digital Marketing Services</h1>
            <ul className="page-breadcrumb">
              <li><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></li>
              <li>Services</li>
              <li>Digital Marketing </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="testimonial-section-two wow fadeInUp">
        <div className="bg bg-pattern-11"></div>
        <div className="auto-container">
          <div className="row">
            <div className="image-column col-lg-6 col-md-12">
              <div className="inner-column">
                <div className="image-box">
                  <div className="bg-shape"></div>
                  <figure className="image image-4"><img src="images/resource/thumb-24.jpg" alt="Digital Marketing Strategy" /></figure>
                  <figure className="image image-3"><img src="images/resource/thumb-23.jpg" alt="SEO Optimization" /></figure>
                  <figure className="image image-2"><img src="images/resource/thumb-22.jpg" alt="Online Marketing Campaign" /></figure>
                  <figure className="image image-1"><img src="images/resource/thumb-21.jpg" alt="Brand Marketing Services" /></figure>
                </div>
              </div>
            </div>
            <div className="testimonial-column col-lg-6 col-md-12 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Make your Business Visible to the Global Audience</h2>
                </div>
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="text">Ignoring Online Marketing is like opening a business but not telling anyone.</div>
                      <div className="text" align="justify">
                        We are living in a decade of Innovations and Changes. Can you imagine a person without a Digital Device or Social Media? It is complicated right? That’s why everything is emerging in the digital medium.
                        <br />
                        Technology has created a huge impact, opening the door to a new era of Business Digital Advertising. Digital Marketing is a modern, advanced, and effective strategy to promote products, services, and brands via one or more online channels.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section wow fadeInUp">
        <div className="bg bg-pattern-1"></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-6 col-md-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>We Elevate Your Brand’s Online Presence with Cutting-Edge SEO, PPC, and Social Media Solutions.</h2>
                </div>
                <div className="feature-block">
                  <p align="justify">
                    Digital Marketing is the process of marketing a product or service via the Internet (www) using organic SEO, Display Advertising, Mobile Phones, Social Media, and other Digital Channels. It plays an important role in Brand Promotion, Customer Experience, and Sales Conversions.
                  </p>
                  <p align="justify">
                    Viraj understands our customer's needs and provides services that increase brand visibility on Social Media, Email, and Search Results. Our team offers a comprehensive solution that includes Content Optimization, Targeted keyword inclusion, PPC promotion, Social Marketing, and ROI Analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-6 col-md-12 wow fadeInRight">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image">
                    <img src="images/resource/image-2.jpg" alt=" " />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section pt-0 pb-0 wow fadeInUp">
        <div className="auto-container">
          <div className="row">
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column mt-5">
                <div className="contact-form wow fadeInLeft">
                  <div className="sec-title">
                    <span>Contact Now</span>
                    <h2>Get in Touch With Us</h2>
                  </div>
                  <form
                      id="enquiry_form"
                      name="enquiry_form"
                      onSubmit={handleSubmit}
                      
                    >
                      <div className="row">
                      {/* name */}
                        <div className="col-sm-6 form-group">
                          <input
                            name="name"
                            className="form-control"
                            type="text"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={(e) => {
                              const regex = /^[A-Za-z ]*$/; // Regex to allow only alphabetic characters
                              if (regex.test(e.target.value) || e.target.value === "") {
                                handleChange(e); // Call the original handler if the value is valid
                              }
                            }}
                          />
                          {/* Display error message or apply red border */}
                          {errors.name && (
                            <div className="Note text-danger mt-1">Name is required</div>
                          )}
                        </div>

                      {/* email */}
                        <div className="col-sm-6 form-group">
                          <input
                            name="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            type="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={(e) => {
                              const email = e.target.value;
                              setFormData({ ...formData, email });

                              // Email validation to ensure it contains a dot after @
                              const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                              if (!emailRegex.test(email)) {
                                setErrors({ ...errors, email: true });
                              } else {
                                setErrors({ ...errors, email: false });
                              }
                            }}
                          />
                          {/* Display error message if email is invalid */}
                          {errors.email && (
                            <div className="Note text-danger mt-1">Please enter a valid email.</div>
                          )}
                        </div>
                      </div>

                      <div className="row">

                         {/* subject */}
                        <div className="col-sm-6 form-group" style={{ width: window.innerWidth <= 767 ? '100%' : '50%', marginTop: window.innerWidth <= 767 ? '1rem' : '0' }}
                        >
                          <input
                            name="subject"
                            className="form-control"
                            type="text"
                            placeholder="Enter Subject"
                            value={formData.subject}
                            onChange={(e) => {
                              const regex = /^[A-Za-z]*$/; // Regex to allow only alphabetic characters
                              if (regex.test(e.target.value) || e.target.value === "") {
                                handleChange(e); // Call the original handler if the value is valid
                              }
                            }}
                          />
                          {/* Display error message or apply red border */}
                          {errors.subject && (
                            <div className="Note text-danger mt-1">  subject is required</div>
                          )}
                        </div>




                       {/* Country + Phone */}
                        <div className="col-sm-6 form-group">
                          <div className="input-group">
                            <div className="input-group-prepend" style={{ width: '100px' }}>
                              <select
                                ref={selectRef}
                                className="form-control"
                                name="countryCode"
                                onChange={handleCountrySelect}
                                value={formData.countryCode} // This will reflect the current selected country code
                              >
                                {countries.map((country) => (
                                  <option key={country.code} value={country.code}>
                                    {country.code} - {country.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <input
                              name="phone"
                              className="form-control ms-2" style={{width:'12px'}}
                              type="text"
                              placeholder="Enter Phone"
                              value={formData.phone}

                              onChange={(e) => {
                                const input = e.target.value;

                                // Remove non-digit characters
                                const numericValue = input.replace(/\D/g, '');

                                // If numeric value is <= 10 digits, update the state
                                if (numericValue.length <= 10) {
                                  handleChange({
                                    target: {
                                      name: e.target.name,
                                      value: numericValue
                                    }
                                  });
                                }

                                // Validate to show error if length is not 10 digits
                                if (numericValue.length === 10) {
                                  setErrors({ ...errors, phone: false }); // Valid phone number
                                } else {
                                  setErrors({ ...errors, phone: true }); // Invalid phone number
                                }
                              }}
                              maxLength={10} // Limit the input to 10 digits

                            />
                          </div>
                          {/* Display error message if the phone number is invalid */}
                          {errors.phone && (
                            <div className="Note text-danger mt-1">Phone number must be  10 digits</div>
                          )}
                        </div>
                      </div>

                    <div className="row">
                      <div className="col-sm-12 form-group" style={{ width: window.innerWidth <= 767 ? '100%' : '50%', marginTop: window.innerWidth <= 767 ? '1rem' : '0' }}
                      >
                        <select
                          name="service"
                          className="form-control"
                          value={formData.service} // Always set to "Digital Marketing Services"
                          onChange={handleChange}
                          disabled // Disable the dropdown as no other service is available
                        >
                          <option value="Digital Marketing Services">Digital Marketing Services </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                        <textarea
                          name="message"
                          className={`form-control mt-3 `}
                          rows={7}
                          placeholder="Enter Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {/* Display error message or apply red border */}
                        {errors.message && (
                          <div className="Note text-danger mt-1">  Message is required</div>
                        )}
                      </div>
                      

                      <div className="mb-3">
                        <CaptchaComponent
                          ref={captchaRef}
                          onCaptchaChange={handleCaptchaChange}
                        />
                        {/* Display error message or apply red border */}
                        {errors.captcha && (
                          <div className="Note text-danger mt-1">Captcha is required</div>
                        )}
                      </div>

                      <div className="mb-3 text-center">
                        <input name="form_botcheck" className="form-control" type="hidden" />
                        <button type="submit" className="theme-btn btn-style-one" onClick={() => setFormSubmitTriggered(true)}>
                          <span className="btn-title">Send Message</span>
                        </button>
                        <button type="button" className="theme-btn btn-style-one ms-2 mt-2" onClick={handleReset}>
                          <span className="btn-title">Reset</span>
                        </button>
                      </div>
                    </form>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12">
              <div className="inner-column">
                <figure className="image"><img src="images/resource/contact.jpg" alt="Contact Us" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modalVisible && (
        <Modal
          message="Your enquiry has been submitted successfully!"
          onClose={() => setModalVisible(false)} // Close the modal when user clicks Close
        />
      )}
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
