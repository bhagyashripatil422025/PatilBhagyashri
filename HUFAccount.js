
import React, { useState, useEffect } from "react";
import { FaUser, FaInfoCircle, FaUniversity, FaIdCard, FaFileAlt } from "react-icons/fa";
import "./HUFAccount.css";

const HUFAccountForm = () => {
  const sections = [
    { name: "Account Information", icon: <FaInfoCircle /> },
    { name: "Personal Information", icon: <FaUser /> },
    { name: "Bank Details", icon: <FaUniversity /> },
    { name: "KYC Details", icon: <FaIdCard /> },
    { name: "Other Documents URL", icon: <FaFileAlt /> },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState(() => JSON.parse(localStorage.getItem("hufFormData")) || {});

  useEffect(() => {
    localStorage.setItem("hufFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    if (currentSection > 0) setCurrentSection(currentSection - 1);
  };

  const handleTabClick = (index) => {
    setCurrentSection(index);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <div className="two-col">
            <div className="column">
              <label>
                HUF Name 
                <input
                  type="text"
                  name="hufName"
                  placeholder="HUF Name"
                  value={formData.hufName || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Type Of Organization 
                <input
                  type="text"
                  name="orgType"
                  placeholder="Type Of Organization"
                  value={formData.orgType || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                PAN Number of the HUF
                <input
                  type="text"
                  name="panNumber"
                  placeholder="PAN Number"
                  value={formData.panNumber || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Number of Years in Business
                <input
                  type="text"
                  name="panNumber"
                  placeholder="Number of Years"
                  value={formData.panNumber || ""}
                  onChange={handleChange}
                />
              </label>
              
            </div>
            <div className="column">
              <label>
                Registered Address 
                <input
                  type="text"
                  name="address"
                  placeholder="Registered Address"
                  value={formData.address || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Date of Formation 
                <input
                  type="date"
                  name="formationDate"
                  value={formData.formationDate || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Source of Funds
                <input
                  type="text"
                  name="sourceOfFunds"
                  placeholder="source of funds"
                  value={formData.sourceOfFunds || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                GST Number 
                <input
                  type="text"
                  name="gstNumber"
                  placeholder="GST Number"
                  value={formData.gstNumber || ""}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="two-col">
            <div className="column">
              <label>
                First Name 
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Last Name 
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Middle Name 
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Occupation 
                <input
                  type="text"
                  name="occupation"
                  placeholder="occupation"
                  value={formData.occupation || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                If Self Employed 
                <input
                  type="checkbox"
                  name="selfEmployed"
                  placeholder="selfEmployed"
                  value={formData.selfEmployed || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                 Email ID 
                <input
                  type="text"
                  name="emailID"
                  placeholder="Email ID "
                  value={formData.emailID || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Passport Number 
                <input
                  type="text"
                  name="passportNumber"
                  placeholder=" Passport Number"
                  value={formData.passportNumber || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Adhar Card Number 
                <input
                  type="text"
                  name="adharNumber"
                  placeholder="Adhar Card Number"
                  value={formData.adharNumber || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                NREGA Job Card Number 
                <input
                  type="text"
                  name="nregaNumber"
                  placeholder="NREGA Job Card Number"
                  value={formData.nregaNumber || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Passport Expiry Date 
                <input
                  type="date"
                  name="expiryDate"
                  placeholder="Passport Expiry Date "
                  value={formData.expiryDate || ""}
                  onChange={handleChange}
                />
              </label>
              
            </div>
            <div className="column">
              <label>
                Date of Birth 
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={formData.dob || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Gender 
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={formData.gender || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                 Nationality
                <input
                  type="text"
                  name="nationality"
                  placeholder="nationality "
                  value={formData.nationality || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                If salaried
                <input
                  type="checkbox"
                  name="salaried"
                  placeholder="salaried"
                  value={formData.salaried || false}
                  onChange={handleChange}
                />
              </label>
              <label>
                Mobile Number 
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
            Alternate Phone Number
            <input
                type="text"
                name="alternatePhoneNumber"
                placeholder="Alternate Phone Number"
                value={formData.alternatePhoneNumber || ""}
                onChange={handleChange}
            />
            </label>

            <label>
            PAN Card Number
            <input
                type="text"
                name="panCardNumber"
                placeholder="PAN Card Number"
                value={formData.panCardNumber || ""}
                onChange={handleChange}
            />
            </label>

<label>
  Driving License Number
  <input
    type="text"
    name="drivingLicenseNumber"
    placeholder="Driving License Number"
    value={formData.drivingLicenseNumber || ""}
    onChange={handleChange}
  />
</label>

<label>
  NPR Letter Number
  <input
    type="text"
    name="nprLetterNumber"
    placeholder="NPR Letter Number"
    value={formData.nprLetterNumber || ""}
    onChange={handleChange}
  />
</label>

<label>
  Voter ID
  <input
    type="text"
    name="voterId"
    placeholder="Voter ID"
    value={formData.voterId || ""}
    onChange={handleChange}
  />
</label>

            </div>
          </div>
        );
      case 2:
        return (
          <div className="two-col">
            <div className="column">
              <label>
                Branch Name 
                <input
                  type="text"
                  name="branchName"
                  placeholder="Branch Name"
                  value={formData.branchName || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Account Number 
                <input
                  type="text"
                  name="accountNumber"
                  placeholder="A/C No"
                  value={formData.accountNumber || ""}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="column">
            <label>
  IFSC Code
  <input
    type="text"
    name="ifscCode"
    placeholder="IFSC Code"
    value={formData.ifscCode || ""}
    onChange={handleChange}
  />
</label>

<label>
  Last KYC Date
  <input
    type="date"
    name="lastKycDate"
    placeholder="Last KYC Date"
    value={formData.lastKycDate || ""}
    onChange={handleChange}
  />
</label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="two-col">
            <div className="column">
            <label>
  KYC Risk Level
  <input
    type="text"
    name="kycRiskLevel"
    placeholder="KYC Risk Level"
    value={formData.kycRiskLevel || ""}
    onChange={handleChange}
  />
</label>

<label>
  KYC Expiry Date
  <input
    type="date"
    name="kycExpiryDate"
    placeholder="KYC Expiry Date"
    value={formData.kycExpiryDate || ""}
    onChange={handleChange}
  />
</label>

<label>
  Re-KYC Required
  <input
    type="checkbox"
    name="reKycRequired"
    checked={formData.reKycRequired || false}
    onChange={(e) =>
      setFormData({ ...formData, reKycRequired: e.target.checked })
    }
  />
</label>

<label>
  Overdue Flag
  <input
    type="text"
    name="overdueFlag"
    placeholder="Overdue Flag"
    value={formData.overdueFlag || ""}
    onChange={handleChange}
  />
</label>
            </div>
            <div className="column">
            <label>
  Re-KYC Last Completed Date
  <input
    type="date"
    name="reKycLastCompletedDate"
    placeholder="Re-KYC Last Completed Date"
    value={formData.reKycLastCompletedDate || ""}
    onChange={handleChange}
  />
</label>

<label>
  Re-KYC Due Date
  <input
    type="date"
    name="reKycDueDate"
    placeholder="Re-KYC Due Date"
    value={formData.reKycDueDate || ""}
    onChange={handleChange}
  />
</label>

<label>
  Re-KYC Status
  <input
    type="text"
    name="reKycStatus"
    placeholder="Re-KYC Status"
    value={formData.reKycStatus || ""}
    onChange={handleChange}
  />
</label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="two-col">
            <div className="column">
            <label>
  PAN Card URL
  <input
    type="url"
    name="panCardUrl"
    placeholder="PAN Card URL"
    value={formData.panCardUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  Adhar Card URL
  <input
    type="url"
    name="adharCardUrl"
    placeholder="Adhar Card URL"
    value={formData.adharCardUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  Passport URL
  <input
    type="url"
    name="passportUrl"
    placeholder="Passport URL"
    value={formData.passportUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  NREGA Job Card URL
  <input
    type="url"
    name="nregaJobCardUrl"
    placeholder="NREGA Job Card URL"
    value={formData.nregaJobCardUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  GST Registration Certificate URL
  <input
    type="url"
    name="gstRegCertUrl"
    placeholder="GST Registration Certificate URL"
    value={formData.gstRegCertUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  PAN Card of the firm URL
  <input
    type="url"
    name="panCardFirmUrl"
    placeholder="PAN Card of the firm URL"
    value={formData.panCardFirmUrl || ""}
    onChange={handleChange}
  />
</label>
<label>
  Decleration of HUF URL
  <input
    type="url"
    name="hufUrl"
    placeholder=" Decleration of HUF URL"
    value={formData.hufUrl || ""}
    onChange={handleChange}
  />
</label>
            </div>
            <div className="column">
            <label>
  Voter Card URL
  <input
    type="url"
    name="voterCardUrl"
    placeholder="Voter Card URL"
    value={formData.voterCardUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  Driving License URL
  <input
    type="url"
    name="drivingLicenseUrl"
    placeholder="Driving License URL"
    value={formData.drivingLicenseUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  NPR Letter URL
  <input
    type="url"
    name="nprLetterUrl"
    placeholder="NPR Letter URL"
    value={formData.nprLetterUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  Certificate of Incorporation
  <input
    type="url"
    name="certificateOfIncorporationUrl"
    placeholder="Certificate of Incorporation"
    value={formData.certificateOfIncorporationUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  Utility Bill URL
  <input
    type="url"
    name="utilityBillUrl"
    placeholder="Utility Bill URL"
    value={formData.utilityBillUrl || ""}
    onChange={handleChange}
  />
</label>

<label>
  Utility Bill Firm URL
  <input
    type="url"
    name="utilityBillFirmUrl"
    placeholder="Utility Bill Firm URL"
    value={formData.utilityBillFirmUrl || ""}
    onChange={handleChange}
  />
</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const profilePercent = Math.round(((currentSection + 1) / sections.length) * 100);

  return (
    <div className="container">
      {/* Profile Completion Bar */}
      <div className="profile-completion-container">
        <div className="profile-header">
          <span className="profile-text">Profile Completeness</span>
          <span className="profile-percent">{profilePercent}%</span>
        </div>
        <div className="progress-line">
          <div className="progress-fill" style={{ width: `${profilePercent}%` }}></div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`tab-item ${index === currentSection ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <div className="tab-icon">{section.icon}</div>
            <div className="tab-text">{section.name}</div>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="form-content">
        <h2>{sections[currentSection].name}</h2>
        {renderSection()}
      </div>

      {/* Navigation Buttons */}
      <div className="btn-container">
        {currentSection > 0 && <button className="btn" onClick={handlePrevious}>Previous</button>}
        {currentSection < sections.length - 1 ? (
          <button className="btn" onClick={handleNext}>Save & Next</button>
        ) : (
          <button className="btn">Submit</button>
        )}
      </div>
    </div>
  );
};

export default HUFAccountForm;
